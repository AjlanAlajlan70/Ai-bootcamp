// PromptsPage — copyable prompts (debugging, security, PRD, simplify, README).

function PromptCard({ prompt }) {
  return (
    <Card>
      <div className="prompt">
        <div className="prompt__top">
          <div>
            <Pill tone="violet">{prompt.tag}</Pill>
            <h3 className="prompt__title">{prompt.title}</h3>
          </div>
          <CopyButton text={prompt.body} label="نسخ البرومبت" />
        </div>
        <pre className="prompt__body">{prompt.body}</pre>
      </div>
    </Card>
  );
}

function PromptsPage() {
  const data = window.BOOTCAMP_DATA;
  return (
    <div className="page page--prompts">
      <header className="page-header">
        <div className="page-header__kicker">المكتبة</div>
        <h1 className="page-header__title">مكتبة البرومبتات</h1>
        <p className="page-header__sub">برومبتات جاهزة. غيّر اللي بين <code>&lt; &gt;</code> حسب حاجتك.</p>
      </header>
      <div className="prompts">
        {data.prompts.map((p, i) => <PromptCard key={i} prompt={p} />)}
      </div>
      <div className="empty-tip">
        <Mascot size={72} pose="surprised" />
        <div className="empty-tip__body">
          <div className="empty-tip__h">عندك برومبت أحسن؟</div>
          <div className="empty-tip__s">احفظه في ملاحظاتك. كل برومبت تكتبه يعلّمك تطلب بدقّة أكثر.</div>
        </div>
      </div>
    </div>
  );
}

window.PromptsPage = PromptsPage;
