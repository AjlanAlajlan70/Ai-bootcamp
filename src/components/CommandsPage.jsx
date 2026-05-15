import { Card, CopyButton } from './primitives.jsx';
import { BOOTCAMP_DATA } from '../data.js';

function CommandCard({ cmd }) {
  return (
    <Card>
      <div className="cmd">
        <div className="cmd__top">
          <code className="cmd__name">{cmd.name}</code>
          <CopyButton text={cmd.name} />
        </div>
        <p className="cmd__desc">{cmd.desc}</p>
        {cmd.warn && (
          <div className="callout callout--coral">
            <div className="callout__bang">!</div>
            <div>
              <div className="callout__t">شغّله عند ٧٠٪ Context</div>
              <div className="callout__b">
                لمّا تشوف <code>/context</code> يقول ٧٠٪ أو أكثر، شغّل <code>/compact</code> قبل ما تكمّل.
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export function CommandsPage() {
  const data = BOOTCAMP_DATA;
  return (
    <div className="page page--commands">
      <header className="page-header">
        <div className="page-header__kicker">المرجع</div>
        <h1 className="page-header__title">أوامر Claude Code</h1>
        <p className="page-header__sub">كل أمر يبدأ بـ <code>/</code>. اضغط «نسخ» وألصقه في الـ terminal مباشرة.</p>
      </header>
      {data.commandGroups.map((g) => (
        <section key={g.group} className="cmd-group">
          <h2 className="cmd-group__title">{g.group}</h2>
          <div className="cmd-group__list">
            {g.commands.map((c) => <CommandCard key={c.name} cmd={c} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
