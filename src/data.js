// Curriculum content for the companion site.
// Placeholder copy — replace with real bootcamp material as it lands.

export const BOOTCAMP_DATA = {
  rules: [
    {
      id: 'plan',
      n: '١',
      title: 'خطّط قبل ما تكتب كود',
      body: 'استخدم /plan دائمًا. خطوة التخطيط هي اللي تفرّق بين مشروع شغّال ومشروع تايه.',
      accent: 'teal',
    },
    {
      id: 'context',
      n: '٢',
      title: 'راقب الـ Context',
      body: 'لمّا تشوف ٧٠٪ — شغّل /compact. خلّي ذاكرة Claude نظيفة.',
      accent: 'coral',
    },
    {
      id: 'small',
      n: '٣',
      title: 'خطوات صغيرة',
      body: 'مهمّة واحدة في كل /plan. لا تحاول تبني التطبيق كله بدفعة وحدة.',
      accent: 'violet',
    },
  ],

  days: [
    {
      n: 1,
      title: 'أساسيات Claude Code',
      bigIdea: 'اليوم تتعرّف على Claude Code وتشغّل أوّل مشروع. بنهاية اليوم، يكون عندك تطبيق ويب يفتح على المتصفّح.',
      concepts: [
        {
          title: 'وش هو Claude Code؟',
          summary: 'مساعد برمجي يشتغل في الـ terminal — تكتب له بالعربي أو الإنجليزي، يكتب الكود.',
          details: 'Claude Code أداة سطر أوامر تقدر تطلب منها أي شي يخصّ المشروع: تنشئ ملفات، تعدّل، تشغّل أوامر. مو لازم تعرف تكتب كود — تعرف وش تبي.',
        },
        {
          title: 'تركيب البيئة',
          summary: 'حمّل Node.js، ثبّت Claude Code، افتح المجلّد.',
          details: 'في المعسكر بنستخدم Node 20 وVite. بعد التحميل، اكتب claude في الـ terminal وابدأ.',
        },
        {
          title: 'أوّل /plan',
          summary: 'اكتب /plan ثم وصف لما تبيه. Claude يردّ بخطّة قبل ما يبدأ.',
          details: 'مثال: /plan ابغى تطبيق ويب يعرض قائمة مهام. Claude يكتب الخطوات، أنت توافق، ثم يبدأ.',
        },
      ],
      boss: [
        'ثبّت Node.js و Claude Code',
        'افتح مجلّد فارغ في الـ terminal',
        'اكتب أوّل /plan',
        'شغّل المشروع محليًا (npm run dev)',
        'افتح localhost في المتصفّح',
      ],
    },
    {
      n: 2,
      title: 'الـ Prompts الذكيّة',
      bigIdea: 'اليوم تتعلّم كيف تكتب طلب يفهمه Claude من أوّل مرة، وتجرّب البرومبتات الجاهزة.',
      concepts: [
        {
          title: 'البرومبت الواضح',
          summary: 'حدّد المخرج، السياق، والقيود.',
          details: 'بدل «اعمل لي تطبيق»، قول «اعمل صفحة HTML واحدة تعرض الوقت بالعربي، بدون مكتبات خارجيّة».',
        },
        {
          title: 'البرومبتات المكرّرة',
          summary: 'احفظ البرومبتات اللي تستخدمها كثير في مكتبة.',
          details: 'الـ Prompt Library عندك في القائمة. كل برومبت معه زرّ نسخ.',
        },
      ],
      boss: [
        'استخدم برومبت debugging على باق صغير',
        'اكتب برومبت PRD لميزة جديدة',
        'احفظ برومبت خاصّ فيك',
        'شغّل /security-review على ملف',
      ],
    },
    {
      n: 3,
      title: 'Boss Fights',
      bigIdea: 'اليوم تشتغل على ميزات أكبر مع التركيز على الـ context وإدارة الذاكرة.',
      concepts: [
        {
          title: 'إدارة الـ Context',
          summary: '/context يشوف اللي محمّل · /compact يقلّصه · /clear يبدأ من الصفر.',
          details: 'القاعدة: لمّا يوصل ٧٠٪، شغّل /compact. لو حسّيت Claude نسي، استخدم /clear وابدأ session جديد.',
        },
        {
          title: 'التراجع — /rewind',
          summary: 'لو Claude خرّب شي، /rewind يرجّعك للحالة السابقة.',
          details: 'محفوظات Claude Code قويّة. استخدم /rewind بدون خوف من الأخطاء.',
        },
        {
          title: 'البساطة — /simplify',
          summary: 'لو الكود معقّد، اطلب من Claude يبسّطه.',
          details: '/simplify يعيد كتابة الكود مع شرح بسيط لكل خطوة.',
        },
      ],
      boss: [
        'شغّل /context وراقب النسبة',
        'استخدم /compact عند ٧٠٪',
        'جرّب /rewind لإلغاء تغيير',
        'بسّط ملفًا واحدًا باستخدام /simplify',
        'أضف ميزة كاملة لتطبيقك',
      ],
    },
    {
      n: 4,
      title: 'النشر و المراجعة',
      bigIdea: 'اليوم تنشر تطبيقك على GitHub Pages، وتشغّل /security-review قبل لا تبثّه للعالم.',
      concepts: [
        {
          title: 'GitHub Pages',
          summary: 'مجاني، بدون سيرفر، يكفي npm run build.',
          details: 'Vite يبني نسخة جاهزة في مجلّد dist، وGitHub Pages ينشرها تلقائيًا.',
        },
        {
          title: 'المراجعة الأمنيّة',
          summary: '/security-review يفحص الكود قبل النشر.',
          details: 'يشوف لو في API keys مكشوفة، أو ثغرات معروفة. ضروري قبل أيّ نشر.',
        },
        {
          title: 'README جيّد',
          summary: 'استخدم برومبت README writing من المكتبة.',
          details: 'README الجيّد يفسّر: وش يسوي التطبيق، كيف تشغّله، كيف تساهم فيه.',
        },
      ],
      boss: [
        'اربط المشروع بـ GitHub',
        'شغّل /security-review',
        'اكتب README واضح',
        'انشر على GitHub Pages',
        'شارك الرابط مع زميل',
      ],
    },
  ],

  commandGroups: [
    {
      group: 'التخطيط والسياق',
      commands: [
        { name: '/plan', desc: 'خلّي Claude يكتب لك خطّة قبل ما يبدأ بالكود. أوّل أمر تستخدمه.' },
        { name: '/context', desc: 'يعرض الملفات والمحادثات اللي محمّلة حاليًا، مع نسبة الذاكرة.' },
        { name: '/compact', desc: 'يقلّص الـ context بدون ما يفقد المهم. شغّله عند ٧٠٪.', warn: true },
        { name: '/clear', desc: 'يبدأ session جديد من الصفر. استخدمه لو حسّيت Claude تايه.' },
      ],
    },
    {
      group: 'التعديل والمراجعة',
      commands: [
        { name: '/rewind', desc: 'يرجّعك خطوة للوراء — مفيد لو Claude خرّب شي.' },
        { name: '/simplify', desc: 'يعيد كتابة الكود ببساطة أكثر، مع شرح لكل سطر.' },
        { name: '/security-review', desc: 'يفحص الكود عن ثغرات أو API keys مكشوفة قبل النشر.' },
        { name: '/diff', desc: 'يعرض الفرق بين الكود قبل وبعد التعديل.' },
      ],
    },
  ],

  wisdom: [
    {
      day: 1,
      pose: 'surprised',
      headline: 'إذا قال Claude «شغّال»...',
      sub: 'جرّبه بنفسك. الفرق بين «المفروض يشتغل» و«فعلًا يشتغل» = ساعة من النوم.',
    },
    {
      day: 2,
      pose: 'sad',
      headline: 'البرومبت الواضح يوفّر ٣ محاولات.',
      sub: 'بدل «اعمل تطبيق»، اكتب «صفحة HTML واحدة تعرض الوقت بالعربي بدون مكتبات».',
    },
    {
      day: 3,
      pose: 'happy',
      headline: 'Context ٧٠٪؟ شغّل /compact.',
      sub: 'فكّر بالـ context كـ RAM في الجوّال — لمّا تمتلئ، الذاكرة تهنّق.',
    },
    {
      day: 4,
      pose: 'sleeping',
      headline: 'لا تنشر بدون /security-review.',
      sub: 'API keys في الـ commit = صداع لشهر. خمس ثواني فحص يوفّرونك.',
    },
  ],

  prompts: [
    {
      title: 'تصحيح الأخطاء',
      tag: 'debugging',
      body: 'في الكود التالي خطأ. لا تعدّل، فقط اشرح لي السطر الخاطئ والسبب، ثم اقترح الإصلاح خطوة بخطوة:\n\n<الصق الكود هنا>',
    },
    {
      title: 'مراجعة أمنية',
      tag: 'security',
      body: 'افحص الكود التالي عن أي ثغرات أمنية: مفاتيح API مكشوفة، XSS، أو منطق قابل للاختراق. اعرض كل ثغرة في سطر واحد مع الحل.\n\n<الصق الكود هنا>',
    },
    {
      title: 'كتابة PRD',
      tag: 'planning',
      body: 'ساعدني أكتب PRD مختصر لميزة: <اسم الميزة>. اعطني: ١) المشكلة، ٢) المستخدم، ٣) الحل، ٤) معايير النجاح، ٥) ما هو خارج النطاق.',
    },
    {
      title: 'تبسيط الكود',
      tag: 'refactor',
      body: 'بسّط الكود التالي بدون ما تغيّر سلوكه. احذف التكرار، استخدم أسماء واضحة، واترك تعليقًا قصيرًا عند الأقسام المهمة:\n\n<الصق الكود هنا>',
    },
    {
      title: 'كتابة README',
      tag: 'docs',
      body: 'اكتب README.md لمشروع: <وصف قصير>. أربعة أقسام: ما الذي يفعله، كيف تشغّله، كيف تنشره، الترخيص. باللغة العربية مع أكواد بـ Markdown.',
    },
  ],
};

export function readDayProgress(n) {
  try {
    const raw = localStorage.getItem(`bootcamp:progress:day-${n}`);
    if (!raw) return { done: 0, total: 0 };
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return { done: 0, total: 0 };
    return { done: arr.filter(Boolean).length, total: arr.length };
  } catch {
    return { done: 0, total: 0 };
  }
}
