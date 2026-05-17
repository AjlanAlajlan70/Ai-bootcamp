import { useState } from 'react';
import { Icon, Mascot } from './components/primitives.jsx';
import { HomePage } from './components/HomePage.jsx';
import { DaysIndexPage } from './components/DaysIndexPage.jsx';
import { DayPage } from './components/DayPage.jsx';
import { CommandsPage } from './components/CommandsPage.jsx';
import { PromptsPage } from './components/PromptsPage.jsx';
import { BOOTCAMP_DATA } from './data.js';
import logo from './assets/AjlanLogo.jpg';

const TABS = [
  { id: 'home', icon: 'home', label: 'الرئيسية' },
  { id: 'days', icon: 'calendar', label: 'الأيام' },
  { id: 'commands', icon: 'terminal', label: 'الأوامر' },
  { id: 'prompts', icon: 'bookmark', label: 'البرومبتات' },
];

function OfficeBackdrop() {
  return (
    <div className="office" aria-hidden="true">
      <div className="office__grain"></div>
    </div>
  );
}

function BottomNav({ active, onSelect }) {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav__inner">
        {TABS.map((t) => (
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

function TopBar({ go, activeTab, onTab, onPowerOff }) {
  return (
    <header className="top-bar">
      <img
        src={logo}
        alt="معسكر التطبيقات"
        className="top-bar__logo"
        onClick={() => go({ view: 'home' })}
      />
      <nav className="top-bar__nav">
        {TABS.map((t) => (
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

function MonitorBootScreen({ onEnter }) {
  const stop = (e) => e.stopPropagation();
  return (
    <div className="boot-screen" onClick={onEnter}>
      <div className="boot-screen__titlebar" onClick={stop}>
        <button className="win-btn win-btn--close" type="button" title="إغلاق" aria-label="Close" onClick={stop}>
          <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M1 1 L9 9 M9 1 L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button className="win-btn win-btn--max" type="button" title="تكبير" aria-label="Maximize" onClick={stop}>
          <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true">
            <rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <button className="win-btn win-btn--min" type="button" title="تصغير" aria-label="Minimize" onClick={stop}>
          <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true">
            <rect x="1" y="7" width="8" height="2" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="boot-screen__bubble">
        <div className="boot-screen__bubble-text">اضغط هنا!</div>
        <div className="boot-screen__bubble-en">click me!</div>
      </div>
      <Mascot size={160} pose="idle" float />
      <div className="boot-screen__hint">معسكر بناء التطبيقات بالذكاء الاصطناعي</div>
      <div className="boot-screen__credit">Made by Ajlan</div>
      <div className="boot-screen__channel">CH 01 · KSU</div>
    </div>
  );
}

export function Shell() {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches;
  const [route, setRoute] = useState(isMobile ? { view: 'home' } : { view: 'office' });
  const [booting, setBooting] = useState(false);

  const go = (r) => {
    setRoute(r);
    const sc = document.querySelector('.phone__scroll');
    if (sc) sc.scrollTo({ top: 0, behavior: 'instant' });
  };

  const enter = () => {
    setBooting(true);
    setTimeout(() => {
      setBooting(false);
      go({ view: 'home' });
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

  let body = null;
  if (route.view === 'home') body = <HomePage go={go} />;
  else if (route.view === 'days') body = <DaysIndexPage go={go} />;
  else if (route.view === 'day') {
    const day = BOOTCAMP_DATA.days.find((d) => d.n === route.n);
    if (!day || day.locked) body = <HomePage go={go} />;
    else body = <DayPage n={route.n} go={go} />;
  }
  else if (route.view === 'commands') body = <CommandsPage />;
  else if (route.view === 'prompts') body = <PromptsPage />;

  return (
    <>
      <OfficeBackdrop />
      <div className={`monitor-wrap ${isOffice ? 'is-office' : ''} ${booting ? 'is-booting' : ''}`}>
        <div className="monitor">
          <div className="phone">
            {!isOffice && !booting && (
              <TopBar go={go} activeTab={activeTab} onTab={onTab} onPowerOff={powerOff} />
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
