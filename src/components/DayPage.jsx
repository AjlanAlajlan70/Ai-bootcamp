import { useEffect, useState } from 'react';
import { Button, Card, Pill, Icon, Mascot, WisdomCard, SectionHead, CopyButton } from './primitives.jsx';
import { BOOTCAMP_DATA } from '../data.js';

const ARABIC_N = ['١', '٢', '٣', '٤'];
const CONCEPT_N = ['١', '٢', '٣', '٤', '٥', '٦', '٧'];
const MARKERS = { check: '✓', cross: '✗', bullet: '•' };

function DetailListItem({ item, marker }) {
  const obj = typeof item === 'string' ? { text: item } : item;
  return (
    <li className={`detail-list__item detail-list__item--${marker}`}>
      <span className="detail-list__marker" aria-hidden="true">{MARKERS[marker]}</span>
      <div className="detail-list__body">
        <span className="detail-list__text">{obj.text}</span>
        {obj.sub && <span className="detail-list__sub">{obj.sub}</span>}
      </div>
    </li>
  );
}

function DetailBlock({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="detail-p">{block.text}</p>;
    case 'list': {
      const m = block.marker || 'bullet';
      return (
        <ul className={`detail-list detail-list--${m}`}>
          {block.items.map((it, i) => <DetailListItem key={i} item={it} marker={m} />)}
        </ul>
      );
    }
    case 'subsection':
      return (
        <div className="detail-section">
          <div className="detail-section__title">{block.title}</div>
          {block.blocks.map((b, i) => <DetailBlock key={i} block={b} />)}
        </div>
      );
    case 'callout':
      return (
        <div className={`callout callout--${block.tone || 'coral'}`}>
          <div className="callout__bang">!</div>
          <div>
            {block.title && <div className="callout__t">{block.title}</div>}
            <div className="callout__b">{block.text}</div>
          </div>
        </div>
      );
    case 'code':
      return (
        <div className="detail-code">
          <div className="detail-code__head">
            {block.label && <span className="detail-code__label">{block.label}</span>}
            <CopyButton text={block.body} />
          </div>
          <pre className="prompt__body detail-code__body">{block.body}</pre>
        </div>
      );
    case 'links':
      return (
        <ul className="detail-links">
          {block.items.map((l, i) => (
            <li key={i} className="detail-links__row">
              <a className="detail-links__a" href={l.url} target="_blank" rel="noreferrer">
                <Icon name="arrowLeft" size={12} />
                <span>{l.label}</span>
              </a>
              {l.note && <span className="detail-links__note">{l.note}</span>}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

function ConceptDetails({ details }) {
  if (typeof details === 'string') return <p className="detail-p">{details}</p>;
  if (!Array.isArray(details)) return null;
  return (
    <div className="detail-stack">
      {details.map((b, i) => <DetailBlock key={i} block={b} />)}
    </div>
  );
}

function ConceptItem({ concept, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div className="concept">
        <div className="concept__top">
          <div>
            <div className="concept__num">المفهوم {CONCEPT_N[idx]}</div>
            <h3 className="concept__title">{concept.title}</h3>
          </div>
          <button className="ghost-toggle" onClick={() => setOpen(!open)}>
            {open ? 'إخفاء' : 'عرض التفاصيل'}
            <Icon name={open ? 'chevronUp' : 'chevronDown'} size={14} />
          </button>
        </div>
        <p className={`concept__summary ${open ? 'is-open' : ''}`}>{concept.summary}</p>
        {open && (
          <div className="concept__details">
            <ConceptDetails details={concept.details} />
          </div>
        )}
      </div>
    </Card>
  );
}

function BossFight({ day }) {
  const key = `bootcamp:progress:day-${day.n}`;
  const [checks, setChecks] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      const arr = raw ? JSON.parse(raw) : null;
      if (Array.isArray(arr) && arr.length === day.boss.length) return arr;
    } catch {}
    return day.boss.map(() => false);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(checks));
    window.dispatchEvent(new Event('bootcamp:progress'));
  }, [checks, key]);

  const done = checks.filter(Boolean).length;
  const total = checks.length;
  const pct = Math.round((done / total) * 100);
  const allDone = done === total;

  const toggle = (i) => setChecks(checks.map((c, j) => j === i ? !c : c));

  return (
    <Card state={allDone ? 'done' : 'default'}>
      <div className="boss">
        <div className="boss__head">
          <div className="boss__title">
            <Icon name="sparkles" size={18} color="#E8B14A" />
            Boss Fight اليوم
          </div>
          <Pill tone={allDone ? 'teal' : 'yellow'}>{done}/{total}</Pill>
        </div>
        <ul className="boss__list">
          {day.boss.map((item, i) => (
            <li key={i} className={`boss__item ${checks[i] ? 'is-done' : ''}`} onClick={() => toggle(i)}>
              <div className={`boss__box ${checks[i] ? 'is-checked' : ''}`}>
                {checks[i] && <Icon name="check" size={14} color="#1F1410" />}
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="boss__bar">
          <div className="progress-bar"><div style={{ width: `${pct}%` }} /></div>
          <span className="progress-bar__pct">{pct}%</span>
        </div>
        {allDone && (
          <div className="boss__celebrate">
            <Mascot size={56} pose="love" />
            <div>
              <div className="boss__celebrate-t">تماام! يوم {day.n} مكتمل.</div>
              <div className="boss__celebrate-s">شدّ حيلك لليوم اللي بعده، أنت رايح صح.</div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export function DayPage({ n, go }) {
  const data = BOOTCAMP_DATA;
  const day = data.days.find((d) => d.n === n);
  if (!day) return null;
  const wisdom = data.wisdom?.find((x) => x.day === n);

  return (
    <div className="page page--day">
      <div className="day-header">
        <button className="back-btn" onClick={() => go({ view: 'home' })}>
          <Icon name="arrowRight" size={18} /> الرئيسية
        </button>
        <div className="day-header__meta">
          <div className="day-header__kicker">اليوم {ARABIC_N[n - 1]} من ٤</div>
          <h1 className="day-header__title">{day.title}</h1>
        </div>
      </div>

      <Card accent="teal">
        <div className="big-idea">
          <div className="big-idea__label">الفكرة الكبرى</div>
          <p className="big-idea__text">{day.bigIdea}</p>
        </div>
      </Card>

      <SectionHead kicker="المفاهيم" title="اللي بتتعلّمه اليوم" />
      <div className="concepts">
        {day.concepts.map((c, i) => <ConceptItem key={i} concept={c} idx={i} />)}
      </div>

      <BossFight key={day.n} day={day} />

      {wisdom && <WisdomCard wisdom={wisdom} />}

      <div className="day-nav">
        {n > 1 && !data.days.find((d) => d.n === n - 1)?.locked && (
          <Button variant="ghost" icon="arrowRight" onClick={() => go({ view: 'day', n: n - 1 })}>
            اليوم {ARABIC_N[n - 2]}
          </Button>
        )}
        {n < 4 && !data.days.find((d) => d.n === n + 1)?.locked && (
          <Button variant="primary" iconEnd="arrowLeft" onClick={() => go({ view: 'day', n: n + 1 })}>
            اليوم {ARABIC_N[n]}
          </Button>
        )}
      </div>
    </div>
  );
}
