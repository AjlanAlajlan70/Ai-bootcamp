import { useState } from 'react';
import mascotIdle from '../assets/mascot-idle.png';
import mascotHappy from '../assets/mascot-happy.png';
import mascotSurprised from '../assets/mascot-surprised.png';
import mascotSleeping from '../assets/mascot-sleeping.png';
import mascotSad from '../assets/mascot-sad.png';
import mascotLove from '../assets/mascot-love.png';

const ICONS = {
  home: 'M3 12l9-9 9 9 M5 10v10h14V10',
  calendar: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  terminal: 'M4 17l6-6-6-6 M12 19h8',
  bookmark: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z',
  check: 'M5 12l5 5L20 7',
  copy: 'M9 3h10a2 2 0 0 1 2 2v10 M15 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z',
  chevronDown: 'M6 9l6 6 6-6',
  chevronUp: 'M6 15l6-6 6 6',
  chevronLeft: 'M15 18l-6-6 6-6',
  chevronRight: 'M9 18l6-6-6-6',
  alert: 'M12 9v4 M12 17h.01 M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
  sparkles: 'M12 3v3 M12 18v3 M3 12h3 M18 12h3 M5.6 5.6l2.1 2.1 M16.3 16.3l2.1 2.1 M5.6 18.4l2.1-2.1 M16.3 7.7l2.1-2.1',
  arrowLeft: 'M19 12H5 M12 19l-7-7 7-7',
  arrowRight: 'M5 12h14 M12 5l7 7-7 7',
};

export function Icon({ name, size = 20, color = 'currentColor', style = {} }) {
  const d = ICONS[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
         style={style} aria-hidden="true">
      {d.split(' M').map((seg, i) => (
        <path key={i} d={(i === 0 ? '' : 'M') + seg} />
      ))}
    </svg>
  );
}

export function Button({ variant = 'primary', children, onClick, icon, iconEnd, full, ...rest }) {
  return (
    <button className={`btn btn--${variant} ${full ? 'btn--full' : ''}`} onClick={onClick} {...rest}>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {iconEnd && <Icon name={iconEnd} size={18} />}
    </button>
  );
}

export function Card({ state = 'default', accent, children, onClick }) {
  const cls = [
    'card',
    state === 'current' && 'card--current',
    state === 'done' && 'card--done',
    accent && `card--accent-${accent}`,
    onClick && 'card--clickable',
  ].filter(Boolean).join(' ');
  return <div className={cls} onClick={onClick}>{children}</div>;
}

export function Pill({ tone = 'teal', children }) {
  return <span className={`pill pill--${tone}`}>{children}</span>;
}

export function CopyButton({ text, label = 'نسخ', size = 'sm' }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button className={`copy-btn copy-btn--${size} ${copied ? 'copy-btn--done' : ''}`} onClick={onCopy}>
      <Icon name={copied ? 'check' : 'copy'} size={14} />
      <span>{copied ? 'تم النسخ' : label}</span>
    </button>
  );
}

const MASCOT_FILES = {
  idle: mascotIdle,
  happy: mascotHappy,
  surprised: mascotSurprised,
  sleeping: mascotSleeping,
  sad: mascotSad,
  love: mascotLove,
};

export function Mascot({ size = 96, pose = 'idle', float = false }) {
  return (
    <img
      src={MASCOT_FILES[pose] || MASCOT_FILES.idle}
      alt=""
      width={size}
      height={size}
      className={`mascot ${float ? 'mascot--float' : ''}`}
    />
  );
}

export function WisdomCard({ wisdom }) {
  return (
    <div className="wisdom">
      <Mascot size={64} pose={wisdom.pose} float />
      <div className="wisdom__body">
        <div className="wisdom__kicker">حكمة المعسكر</div>
        <div className="wisdom__head">{wisdom.headline}</div>
        <div className="wisdom__sub">{wisdom.sub}</div>
      </div>
    </div>
  );
}

export function SectionHead({ kicker, title, children }) {
  return (
    <div className="section-head">
      {kicker && <div className="section-head__kicker">{kicker}</div>}
      <h2 className="section-head__title">{title}</h2>
      {children && <div className="section-head__sub">{children}</div>}
    </div>
  );
}
