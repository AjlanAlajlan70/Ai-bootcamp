import { useEffect, useState } from 'react';
import { Card, Pill } from './primitives.jsx';
import { BOOTCAMP_DATA, readDayProgress } from '../data.js';
import lockIcon from '../assets/lock.svg';

const ARABIC_N = ['١', '٢', '٣', '٤'];

export function DaysIndexPage({ go }) {
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
    if (d.locked) continue;
    const p = readDayProgress(d.n);
    if (p.total === 0 || p.done < p.total) { currentN = d.n; break; }
    currentN = d.n + 1;
  }

  return (
    <div className="page page--days">
      <header className="page-header">
        <div className="page-header__kicker">الأيام</div>
        <h1 className="page-header__title">أربعة أيام</h1>
        <p className="page-header__sub">اختر اليوم اللي تبيه.</p>
      </header>
      <div className="days__grid">
        {data.days.map((d) => {
          if (d.locked) {
            return (
              <Card key={d.n}>
                <div className="day-card day-card--locked" aria-disabled="true">
                  <div className="day-card__top">
                    <div className="day-card__n">اليوم {ARABIC_N[d.n - 1]}</div>
                    <Pill tone="violet">مقفل</Pill>
                  </div>
                  <h3 className="day-card__title">{d.title}</h3>
                  <p className="day-card__idea">يفتح لاحقًا، تابع المعسكر.</p>
                  <div className="day-card__lock">
                    <img src={lockIcon} alt="" className="day-card__lock-icon" />
                  </div>
                </div>
              </Card>
            );
          }
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
    </div>
  );
}
