// DaysIndexPage — list of all 4 days (entered from the bottom-nav "Days" tab).

function DaysIndexPage({ go }) {
  const data = window.BOOTCAMP_DATA;
  const arabicN = ['١','٢','٣','٤'];

  let currentN = 1;
  for (const d of data.days) {
    const p = window.readDayProgress(d.n);
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
          const p = window.readDayProgress(d.n);
          const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
          const state = p.total && p.done === p.total ? 'done'
                      : d.n === currentN ? 'current'
                      : 'default';
          return (
            <Card key={d.n} state={state} onClick={() => go({ view: 'day', n: d.n })}>
              <div className="day-card">
                <div className="day-card__top">
                  <div className="day-card__n">اليوم {arabicN[d.n-1]}</div>
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

window.DaysIndexPage = DaysIndexPage;
