import { useEffect, useState } from 'react';
import { Button, Card, Pill, Mascot, SectionHead } from './primitives.jsx';
import { BOOTCAMP_DATA, readDayProgress } from '../data.js';

const ARABIC_N = ['١', '٢', '٣', '٤'];

export function HomePage({ go }) {
  const data = BOOTCAMP_DATA;
  const [, setTick] = useState(0);

  useEffect(() => {
    const f = () => setTick((t) => t + 1);
    window.addEventListener('focus', f);
    window.addEventListener('bootcamp:progress', f);
    return () => {
      window.removeEventListener('focus', f);
      window.removeEventListener('bootcamp:progress', f);
    };
  }, []);

  let currentN = 1;
  for (const d of data.days) {
    const p = readDayProgress(d.n);
    if (p.total === 0 || p.done < p.total) { currentN = d.n; break; }
    currentN = d.n + 1;
  }

  return (
    <div className="page page--home">
      <header className="hero">
        <div className="hero__copy">
          <div className="hero__kicker">معسكر · 4 أيام · KSU</div>
          <h1 className="hero__title">أربعة أيام. مشروع واحد. تطبيق تبنيه بنفسك.</h1>
          <p className="hero__sub">حتى لو ما كتبت سطر كود من قبل — اتبع الخطوات وبتطلع بتطبيق شغّال.</p>
        </div>
        <div className="hero__mascot-row">
          <Button variant="primary" iconEnd="arrowLeft" onClick={() => go({ view: 'day', n: currentN })}>
            ابدأ من اليوم {ARABIC_N[currentN - 1] || '١'}
          </Button>
          <div className="tv">
            <div className="tv__antenna"><span></span><span></span></div>
            <div className="tv__body">
              <div className="tv__screen">
                <Mascot size={72} pose="idle" float />
              </div>
              <div className="tv__led"></div>
              <div className="tv__label">CH 01</div>
              <div className="tv__knobs">
                <div className="tv__knob"></div>
                <div className="tv__knob"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="rules">
        <SectionHead kicker="القواعد" title="ثلاث قواعد فقط">
          احفظهم. كرّرهم. هم سرّ المعسكر.
        </SectionHead>
        <div className="rules__grid">
          {data.rules.map((r) => (
            <Card key={r.id} accent={r.accent}>
              <div className="rule">
                <div className={`rule__num rule__num--${r.accent}`}>{r.n}</div>
                <div className="rule__body">
                  <h3 className="rule__title">{r.title}</h3>
                  <p className="rule__text">{r.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="days">
        <SectionHead kicker="الأيام" title="خطّة المعسكر">
          اضغط على اليوم عشان تدخل التفاصيل والـ Boss Fight.
        </SectionHead>
        <div className="days__grid">
          {data.days.map((d) => {
            const p = readDayProgress(d.n);
            const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
            const state = p.total && p.done === p.total ? 'done'
                        : d.n === currentN ? 'current'
                        : 'default';
            return (
              <Card key={d.n} state={state} onClick={() => go({ view: 'day', n: d.n })}>
                <div className="day-card">
                  <div className="day-card__top">
                    <div className="day-card__n">اليوم {ARABIC_N[d.n - 1]}</div>
                    {state === 'current' && <Pill tone="yellow">الحالي</Pill>}
                    {state === 'done' && <Pill tone="teal">مكتمل ✓</Pill>}
                  </div>
                  <h3 className="day-card__title">{d.title}</h3>
                  <p className="day-card__idea">{d.bigIdea}</p>
                  <div className="day-card__progress">
                    <div className="progress-bar"><div style={{ width: `${pct}%` }} /></div>
                    <span className="progress-bar__pct">{p.done}/{p.total || d.boss.length}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
