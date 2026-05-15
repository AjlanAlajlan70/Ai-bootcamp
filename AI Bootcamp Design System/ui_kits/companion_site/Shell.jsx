// Shell — pixel-office backdrop + CRT monitor in the middle.
// Office mode: shows mascot + "Click me!" speech bubble. Click → enter site.
// App mode:    shows the real site inside the monitor. Power button → return.
const { useState: useStateShell } = React;

// --- Office scene: PNG backdrop as background-image on .office ---
function OfficeBackdrop() {
  return (
    <div className="office" aria-hidden="true">
      <div className="office__grain"></div>
    </div>
  );
}

function BottomNav({ active, onSelect }) {
  const tabs = [
    { id: 'home', icon: 'home', label: 'الرئيسية' },
    { id: 'days', icon: 'calendar', label: 'الأيام' },
    { id: 'commands', icon: 'terminal', label: 'الأوامر' },
    { id: 'prompts', icon: 'bookmark', label: 'البرومبتات' },
  ];
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav__inner">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${active === t.id ? 'is-active' : ''}`}
            onClick={() => onSelect(t.id)}
          >
            <Icon name={t.icon} size={20} />
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function TopBar({ route, go, activeTab, onTab, onPowerOff }) {
  const tabs = [
    { id: 'home', icon: 'home', label: 'الرئيسية' },
    { id: 'days', icon: 'calendar', label: 'الأيام' },
    { id: 'commands', icon: 'terminal', label: 'الأوامر' },
    { id: 'prompts', icon: 'bookmark', label: 'البرومبتات' },
  ];
  return (
    <header className="top-bar">
      <img
        src="../../assets/logo.svg"
        alt="معسكر التطبيقات"
        className="top-bar__logo"
        onClick={() => go({ view: 'home' })}
      />
      <nav className="top-bar__nav">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${activeTab === t.id ? 'is-active' : ''}`}
            onClick={() => onTab(t.id)}
          >
            <Icon name={t.icon} size={16} />
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
      <button className="top-bar__power" title="ارجع للمكتب" onClick={onPowerOff}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
          <line x1="12" y1="2" x2="12" y2="12"></line>
        </svg>
        <span>OFF</span>
      </button>
    </header>
  );
}

// --- Office mode content: shown INSIDE the monitor when not entered yet ---
function MonitorBootScreen({ onEnter }) {
  return (
    <div className="boot-screen" onClick={onEnter}>
      <div className="boot-screen__bubble">
        <div className="boot-screen__bubble-text">!اضغط هنا</div>
        <div className="boot-screen__bubble-en">click me!</div>
      </div>
      <Mascot size={160} pose="idle" float />
      <div className="boot-screen__hint">معسكر بناء التطبيقات بالذكاء الاصطناعي</div>
      <div className="boot-screen__credit">Made by Ajlan</div>
      <div className="boot-screen__channel">CH 01 · KSU</div>
    </div>
  );
}

function Shell() {
  // 'office' is the landing state (boot screen). All other views = app entered.
  const [route, setRoute] = useStateShell({ view: 'office' });
  const [booting, setBooting] = useStateShell(false);

  const go = (r) => {
    setRoute(r);
    const sc = document.querySelector('.phone__scroll');
    if (sc) sc.scrollTo({ top: 0, behavior: 'instant' });
  };

  const enter = () => {
    setBooting(true);
    setTimeout(() => {
      go({ view: 'home' });
      setTimeout(() => setBooting(false), 600);
    }, 800);
  };
  const powerOff = () => go({ view: 'office' });

  const isOffice = route.view === 'office';

  const activeTab = route.view === 'day' ? 'days'
                  : route.view === 'home' ? 'home'
                  : route.view;

  const onTab = (id) => {
    if (id === 'home') go({ view: 'home' });
    else if (id === 'days') go({ view: 'days' });
    else if (id === 'commands') go({ view: 'commands' });
    else if (id === 'prompts') go({ view: 'prompts' });
  };

  let body;
  if (isOffice) body = null;
  else if (route.view === 'home') body = <HomePage go={go} />;
  else if (route.view === 'days') body = <DaysIndexPage go={go} />;
  else if (route.view === 'day') body = <DayPage n={route.n} go={go} />;
  else if (route.view === 'commands') body = <CommandsPage />;
  else if (route.view === 'prompts') body = <PromptsPage />;

  return (
    <>
      <OfficeBackdrop />
      <div className={`monitor-wrap ${isOffice ? 'is-office' : ''} ${booting ? 'is-booting' : ''}`}>
        <div className="monitor">
          <div className="phone">
            {!isOffice && !booting && (
              <TopBar route={route} go={go} activeTab={activeTab} onTab={onTab} onPowerOff={powerOff} />
            )}
            <main className="phone__scroll">
              {isOffice ? <MonitorBootScreen onEnter={enter} /> : (
                <>
                  {body}
                  <BottomNav active={activeTab} onSelect={onTab} />
                  <div className="phone__bottom-spacer" />
                </>
              )}
            </main>
            {booting && (
              <div className="boot-flash">
                <div className="boot-flash__line"></div>
                <div className="boot-flash__text">BOOTING…</div>
              </div>
            )}
          </div>
          <div className="monitor__label">BOOTCAMP ━ CRT 2026</div>
          <div className="monitor__led"></div>
        </div>
      </div>
    </>
  );
}

window.Shell = Shell;
