// Curriculum content for the companion site.
// Day 1 content is sourced verbatim from AI Bootcamp Design System/bootcamp.md.

import PROMPT_CLAUDE_MD from './assets/prompt-claude-md.txt?raw';

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
      body: 'لمّا تشوف ٧٠٪، شغّل /compact. خلّي ذاكرة Claude نظيفة.',
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
      title: 'الأدوات والمودلز والاركتتشر والهوية',
      bigIdea:
        'اليوم تختار أداتك ومودلك، تفهم الأسعار والمصادر، تجهّز ريبو GitHub آمن، '
        + 'وتطلع بهويّة ومعمارية ومستند CLAUDE.md جاهز لباقي الرحلة.',
      concepts: [
        {
          title: 'خيارات الأدوات والمودلز',
          summary: 'أربع طرق تستخدم فيها الـ AI: شات، IDE، تيرمينال، تطبيق سطح مكتب، والشات تجنّبه.',
          details: [
            { type: 'p', text:
              'قبل ما نغوص في الشات أو غيره، اعرف إنك بتشوف ٤ طرق مختلفة كاملة. '
              + 'كل وحدة بنشرحها بالتفصيل عشان تختار الأنسب لك.' },

            { type: 'subsection', title: 'الخيار ١: الشات (الموقع)', blocks: [
              { type: 'p', text:
                'تفتح Claude.ai أو ChatGPT.com أو Gemini مباشرة في المتصفح، تكتب سؤالك، '
                + 'الـ AI يجاوبك، وأنت تنسخ الرد وتلصقه في الكود.' },
              { type: 'p', text:
                'الفايدة: مجاني في الغالب، ما يحتاج تنزّل شي، تقدر تستخدمه من أي جهاز. '
                + 'المشكلة: هذا الخيار جدًا جدًا سيء للبرمجة. الـ AI ما يشوف ملفاتك، '
                + 'ما يقدر يعدّل عليها مباشرة، وأنت اللي تنسخ وتلصق يدوي. كل مرة تبغى تغيّر '
                + 'شي تعيد كل العملية. تضيع وقت كثير وتغلط أكثر.' },
            ]},

            { type: 'subsection', title: 'الخيار ٢: الـ IDE مع AI', blocks: [
              { type: 'p', text:
                'محرر كود شبيه VS Code فيه الـ AI مدموج داخل المحرر نفسه. يقدر يقرأ ملفاتك '
                + 'ويعدل عليها مباشرة وينقل بين الملفات.' },
              { type: 'list', marker: 'bullet', items: [
                { text: 'Cursor',      sub: 'الأشهر والأكثر استخدامًا، مبني على VS Code' },
                { text: 'Trae',        sub: 'أداة ByteDance، رخيصة جدًا وفيها مودلز كويسة' },
                { text: 'Antigravity', sub: 'أداة قوقل المجانية الجديدة، مبنية على Gemini 3' },
                { text: 'Windsurf',    sub: 'بديل قوي للـ Cursor' },
              ]},
              { type: 'p', text:
                'تشوف الكود وتتفاعل مع الـ AI في نفس الواجهة. مناسب لو أنت معتاد على '
                + 'بيئة المحرر التقليدية.' },
            ]},

            { type: 'subsection', title: 'الخيار ٣: التيرمينال', blocks: [
              { type: 'p', text:
                'AI يشتغل من التيرمينال مباشرة، يقرأ ملفاتك، يكتب كود، يشغّل أوامر، '
                + 'ويختبر بنفسه. ما فيه واجهة بصرية، كل شي بأوامر.' },
              { type: 'list', marker: 'bullet', items: [
                { text: 'Claude Code', sub: 'أداة Anthropic، الأقوى في المشاريع الكبيرة' },
                { text: 'Codex CLI',   sub: 'أداة OpenAI، سريعة وممتازة للمهام اليومية' },
                { text: 'OpenCode',    sub: 'مفتوحة المصدر، تشتغل مع أي مودل' },
                { text: 'Gemini CLI',  sub: 'أداة قوقل للتيرمينال' },
              ]},
              { type: 'p', text:
                'الـ AI يشتغل لحاله ويسوي مهام معقدة (refactoring, migrations, tests كاملة). '
                + 'أقوى الخيارات للمشاريع الجدية.' },
            ]},

            { type: 'subsection', title: 'الخيار ٤: التطبيق (Desktop App)', blocks: [
              { type: 'p', text:
                'تطبيق سطح مكتب فيه الـ AI، فيه ميّزات إضافية زي الـ skills والـ plugins '
                + 'والذاكرة المستمرة بين الجلسات.' },
              { type: 'list', marker: 'bullet', items: [
                { text: 'Codex App',      sub: 'تطبيق OpenAI الجديد، فيه persistent memory و plugins و skills' },
                { text: 'Claude Desktop', sub: 'تطبيق Anthropic، يدعم MCP servers والملفات المحلية' },
                { text: 'ChatGPT Desktop',sub: 'النسخة المكتبية من ChatGPT' },
              ]},
              { type: 'p', text:
                'أوسع من الشات وأبسط من التيرمينال. مناسب لو تبغى ميّزات قوية بدون '
                + 'تعقيد سطر الأوامر.' },
            ]},

            { type: 'subsection', title: 'الخلاصة: تجنّب الشات', blocks: [
              { type: 'p', text:
                'القاعدة الذهبية: لازم نتجنّب الشات بالكامل. خيار النسخ واللصق يضيّع '
                + 'وقتك وما يبني لك مشروع محترم. اختار وحد من هذي:' },
              { type: 'list', marker: 'check', items: [
                'تطبيق سطح المكتب',
                'التيرمينال',
                'AI IDE',
              ]},
              { type: 'p', text:
                'في الغالب الأقوى هو التيرمينال (Claude Code أو Codex CLI). لو أنت مبتدئ '
                + 'ابدأ بالـ IDE (Cursor). والشات خله للأسئلة السريعة فقط، مو لبناء مشروع.' },
            ]},

            { type: 'subsection', title: 'كل أداة ولها مودلز', blocks: [
              { type: 'p', text:
                'كل أداة من اللي ذكرناها مربوطة بمودلز معيّنة. ما تقدر تخلط بسهولة:' },
              { type: 'list', marker: 'bullet', items: [
                { text: 'Claude Code',      sub: 'مودلز Anthropic فقط: Opus 4.7, Sonnet 4.6, Haiku 4.5' },
                { text: 'Codex (CLI أو App)', sub: 'مودلز OpenAI فقط: GPT-5.5, GPT-5.5-Codex, GPT-5.4' },
                { text: 'OpenCode',         sub: 'أي مودل (Claude, GPT, Gemini, DeepSeek, Kimi…). إعداده موضوع منفصل' },
                { text: 'Cursor',           sub: 'يدعم كل المودلز الرئيسية (Claude, GPT, Gemini)' },
              ]},
              { type: 'p', text:
                'ما يمديك تكتفي بمودل واحد. Claude Design مع Opus 4.7 الأفضل في التصميم '
                + 'والـ frontend. Opus 4.7 و Codex (GPT-5.5-Codex) ممتازين في الـ backend '
                + 'والـ logic المعقد. Codex الأفضل للديبقنق ويلاقي الـ bugs اللي تايه '
                + 'عليها ساعات. القاعدة: كل مودل في مكانه.' },
              { type: 'callout', tone: 'coral', title: 'ملاحظة مهمة',
                text:
                  'النتيجة مو نفسها لو استخدمت نفس المودل في أداة ثانية. Opus 4.7 من داخل '
                  + 'Claude Design غير Opus 4.7 من Cursor. الأداة نفسها تأثر، مو بس المودل.' },
            ]},
          ],
        },

        {
          title: 'الأسعار وايش تستخدم',
          summary: 'من $٠ لـ $٢٠٠، والتوصية للمبتدئين: Cursor + Codex App بـ ~$٤٠ شهريًا.',
          details: [
            { type: 'p', text: 'تدرّج الأسعار من المجاني للاحترافي:' },
            { type: 'list', marker: 'bullet', items: [
              { text: '$٠: Antigravity (قوقل)',
                sub: 'مستواه سيء حتى مع إنه يستخدم نفس المودلز. كل أداة عندها طريقتها في التفاهم مع المودل' },
              { text: '$١٠: Trae IDE',
                sub: 'خيار اقتصادي يدعم Claude و GPT و Gemini' },
              { text: '$٢٠: Cursor (Composer 2) أو Codex (ChatGPT Plus)' },
              { text: '$٤٠: Codex + Cursor مع بعض' },
              { text: '$١٠٠: Codex Pro أو Claude Max 5x' },
              { text: '$٢٠٠: Codex Pro أو Claude Max 20x' },
            ]},
            { type: 'p', text: 'القاعدة: اختار اللي يناسبك، وكل ما دفعت أكثر كل ما لقيت نتيجة أفضل.' },

            { type: 'subsection', title: 'لو أنت مبتدئ، ابدأ بهنا', blocks: [
              { type: 'p', text:
                'Cursor (مع مودل Composer) + Codex App. التكلفة معقولة (~$٤٠ شهري للاثنين)، '
                + 'الواجهة مألوفة شبيه VS Code، المودل سريع ومناسب للمبتدئ، '
                + 'والـ Codex App يعطيك قوة إضافية للمهام المعقدة. تتعلم بسرعة '
                + 'وما تتلخبط في كثرة الخيارات.' },
            ]},

            { type: 'subsection', title: 'بعد ما تتطور، انتقل لـ', blocks: [
              { type: 'p', text:
                'Claude Code، أقوى أداة في السوق للمشاريع الجدية والـ refactoring الكبير. '
                + 'لكن تحتاج تكون فاهم تيرمينال وعارف تعطي تعليمات دقيقة. هذي مرحلة المحترفين.' },
            ]},

            { type: 'p', text: 'ابدأ بالأسهل وتطور تدريجيًا. لا تقفز فوق قدراتك.' },
          ],
        },

        {
          title: 'مصادر التعلم',
          summary: 'أربع قنوات يوتيوب تساعدك تتعلم الأدوات وتطبيقها على مشاريع حقيقية.',
          details: [
            { type: 'p', text: 'احفظها وارجع لها كل ما تعلّقت في خطوة:' },
            { type: 'links', items: [
              { label: 'Designing Websites with AI',
                url: 'https://youtube.com/watch?v=djDZHAi75dk',
                note: 'فيديو واحد ممتاز، شرح عملي لتصميم وبناء مواقع بالـ AI' },
              { label: 'Riley Brown AI',
                url: 'https://youtube.com/@rileybrownai',
                note: 'يبني تطبيقات AI كاملة من الصفر في كل فيديو' },
              { label: 'AI Code King',
                url: 'https://youtube.com/@AICodeKing',
                note: 'يغطي الأدوات والمودلز ومقارنات benchmarks' },
              { label: 'Robin Ebers',
                url: 'https://youtube.com/@robinebers',
                note: 'شروحات تفصيلية لعدة أدوات AI مع مشاريع حقيقية' },
            ]},
          ],
        },

        {
          title: 'قتهب (GitHub) ورفع المشروع',
          summary: 'ليش ترفع كودك، وش هي الـ branches، وكيف تتفادى كارثة تسريب المفاتيح.',
          details: [
            { type: 'subsection', title: 'ليش قتهب؟', blocks: [
              { type: 'p', text:
                'لازم ترفع مشروعك على GitHub. هذا يحفظ لك نسخة آمنة، ويخليك تشوف كل تعديل '
                + 'سويته من أول يوم، وتقدر ترجع لأي حالة قديمة بسهولة.' },
            ]},

            { type: 'subsection', title: 'ايش هي الـ Branches؟', blocks: [
              { type: 'p', text:
                'الـ branch تخيّله مسار جانبي للكود. الـ main branch هو الكود الأساسي. '
                + 'لو بتجرب فكرة جديدة، تسوي branch جديد، تشتغل فيه، ولو طلعت كويسة '
                + 'تدمجها مع الـ main.' },
              { type: 'p', text:
                'بما إنك تشتغل لحالك، ما تحتاج تتعقّد بموضوع pull requests والـ reviews، '
                + 'هذا للفِرَق.' },
              { type: 'list', marker: 'bullet', items: [
                'تشوف سجل كل التعديلات (history)',
                'Stage و Unstage للتغييرات قبل ما تحفظها',
                'ترجع لأي نقطة قديمة لو شي خرب',
              ]},
            ]},

            { type: 'callout', tone: 'coral', title: 'تحذير: الأمان في قتهب',
              text:
                'في قتهب فيه شي اسمه public repos، وأي شخص يقدر يشوفها. لو رفعت بيانات '
                + 'حساسة فيها، الناس كلها تشوفها.' },

            { type: 'subsection', title: 'ما ترفع أبدًا', blocks: [
              { type: 'list', marker: 'cross', items: [
                'API Keys (مفاتيح OpenAI, Stripe, AWS، إلخ)',
                'كلمات السر و الـ database passwords',
                'ملفات .env الكاملة',
                'أي توكنز أو مفاتيح خاصة فيك',
              ]},
            ]},

            { type: 'subsection', title: 'الحل', blocks: [
              { type: 'list', marker: 'check', items: [
                'استخدم ملف .gitignore يخفي الملفات الحساسة من الرفع',
                'خلي ملف .env في .gitignore دايمًا',
                'لو غلط رفعت مفتاح، غيّره فورًا من المنصة، التاريخ يحفظه',
              ]},
            ]},

            { type: 'p', text:
              'قاعدة: قبل أول push، شيك على ملفاتك مرتين. خصوصًا .env و الـ config files.' },
          ],
        },

        {
          title: 'الهوية والفايب',
          summary: 'الـ AI يحدد لك الهوية كاملة من برومت واحد، ما عدا الشعار، له أدوات منفصلة.',
          details: [
            { type: 'p', text:
              'البرومت اللي في المفهوم الجاي بيساعدك تحدد هويتك كاملة (الاسم، الألوان، '
              + 'الخط، الفايب) مع اللغات والـ Stack في نفس الجلسة. ما تحتاج تجلس تفكر '
              + 'بكل عنصر لحاله. الـ AI بيسألك أسئلة ذكية ويطلع لك الهوية المناسبة لفكرتك.' },

            { type: 'subsection', title: 'الشيء الوحيد المنفصل: الشعار', blocks: [
              { type: 'p', text:
                'الـ AI ما يقدر يولد لك صورة شعار مباشرة من البرومت. تحتاج أداة تصميم منفصلة:' },
              { type: 'list', marker: 'bullet', items: [
                { text: 'Claude Design',                   sub: 'لشعارات بسيطة ونظيفة' },
                { text: 'Figma',                           sub: 'لو تبغى تصمم بنفسك' },
                { text: 'ChatGPT مع DALL-E أو Midjourney', sub: 'لشعارات أكثر إبداعًا' },
                { text: 'LogoMaker وأدوات مشابهة',          sub: 'لو تبغى شي سريع وجاهز' },
              ]},
            ]},

            { type: 'p', text:
              'بعد ما تحدد كل شي (هوية + stack)، الـ AI بيلملمه لك في ملف واحد. '
              + 'هذا الملف بيكون مرجعك في كل مرحلة.' },
          ],
        },

        {
          title: 'تحديد اللغات والـ Stack',
          summary: 'انسخ البرومت التالي والصقه في Claude/ChatGPT/Gemini، يطلع لك CLAUDE.md جاهز.',
          details: [
            { type: 'p', text:
              'انسخ هذا البرومت والصقه في Claude أو ChatGPT أو Gemini، وخله يسألك ويقترح '
              + 'عليك الـ stack الكامل بما فيه الاركتتشر. هو بالإنجليزي عمدًا لدقة المخرجات.' },
            { type: 'code', label: 'برومت توليد CLAUDE.md', body: PROMPT_CLAUDE_MD },
          ],
        },

        {
          title: 'مهمة اليوم الأول',
          summary: 'قبل ما تنام: أدوات منزّلة، ريبو آمن، ملف توثيق أساسي، وشعار مبدئي.',
          details: [
            { type: 'p', text: 'قبل ما تنام الليلة، لازم يكون عندك:' },

            { type: 'subsection', title: '١. الأدوات منزّلة على جهازك', blocks: [
              { type: 'list', marker: 'check', items: [
                { text: 'Git',                          sub: 'ضروري لكل شخص' },
                { text: 'الأداة اللي اخترتها',           sub: 'Cursor أو Claude Code أو غيرها' },
                { text: 'VS Code أو IDE من اختيارك',     sub: 'لو ما تستخدم Cursor' },
              ]},
            ]},

            { type: 'subsection', title: '٢. ريبو GitHub جاهز', blocks: [
              { type: 'list', marker: 'check', items: [
                'ريبو جديد، Private لو ما تبغى أحد يطلع عليه',
                'ملف .gitignore صحيح من البداية',
                'مافيه أي بيانات حساسة أبدًا',
              ]},
            ]},

            { type: 'subsection', title: '٣. ملف التوثيق الأساسي داخل الريبو', blocks: [
              { type: 'p', text:
                'بناءً على البرومت اللي شغّلته، الـ AI بيطلع لك ملف CLAUDE.md '
                + '(لو تستخدم Claude Code) أو AGENTS.md (لو تستخدم Codex أو أداة ثانية). '
                + 'داخل الملف بيكون فيه:' },
              { type: 'list', marker: 'bullet', items: [
                'الهوية الكاملة (الاسم، الألوان، الفايب)',
                'اللغات والـ Stack',
                'الاركتتشر',
                'محتوى README الأساسي',
                'أي قرارات تقنية ثانية مهمة',
              ]},
            ]},

            { type: 'subsection', title: '٤. الشعار', blocks: [
              { type: 'p', text: 'نسخة مبدئية على الأقل، تقدر تطوّرها بعدين.' },
            ]},

            { type: 'p', text: 'بكرة (اليوم الثاني) بنبدأ نبني فعليًا!' },
          ],
        },
      ],
      boss: [
        'الأدوات منزّلة (Git + أداة AI + IDE)',
        'ريبو GitHub Private جاهز مع .gitignore سليم',
        'ملف CLAUDE.md أو AGENTS.md داخل الريبو',
        'نسخة مبدئية من الشعار',
      ],
    },
    {
      n: 2,
      locked: true,
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
      locked: true,
      title: 'Boss Fights',
      bigIdea: 'اليوم تشتغل على ميزات أكبر مع التركيز على الـ context وإدارة الذاكرة.',
      concepts: [
        {
          title: 'إدارة الـ Context',
          summary: '/context يشوف اللي محمّل · /compact يقلّصه · /clear يبدأ من الصفر.',
          details: 'القاعدة: لمّا يوصل ٧٠٪، شغّل /compact. لو حسّيت Claude نسي، استخدم /clear وابدأ session جديد.',
        },
        {
          title: 'التراجع: /rewind',
          summary: 'لو Claude خرّب شي، /rewind يرجّعك للحالة السابقة.',
          details: 'محفوظات Claude Code قويّة. استخدم /rewind بدون خوف من الأخطاء.',
        },
        {
          title: 'البساطة: /simplify',
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
      locked: true,
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
        { name: '/rewind', desc: 'يرجّعك خطوة للوراء، مفيد لو Claude خرّب شي.' },
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
      headline: 'تجنّب الشات بالكامل.',
      sub: 'النسخ واللصق يضيّع وقتك. اختار IDE أو تيرمينال أو تطبيق سطح مكتب، وكمّل.',
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
      sub: 'فكّر بالـ context كـ RAM في الجوّال، لمّا تمتلئ، الذاكرة تهنّق.',
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
      title: 'تخطيط قبل الكود',
      tag: 'planning',
      body: 'You are about to help me build: <feature description>.\n\nDO NOT WRITE ANY CODE in this turn. Your only job is to produce a plan I can review and approve.\n\nPHASE 1 — Understand the territory\n1. Read this repo: top-level layout, package.json (or equivalent), the entry point, and any existing code related to the feature.\n2. List the files that will probably need to change. One-line "why" each.\n3. List files that MUST NOT change (public APIs, schemas, contracts).\n\nPHASE 2 — Surface assumptions\nFor every assumption you are making, state:\n- The assumption\n- Confidence: HIGH / MEDIUM / LOW\n- The question whose answer would settle it\nIf any assumption is LOW confidence, STOP and ask me before continuing.\n\nPHASE 3 — Plan\nProduce a numbered task list. Each task:\n- Verb-first title (one line)\n- Files touched (file:function)\n- What changes inside each file (1-3 lines)\n- How you will verify it (test command, manual step)\n- Risk: LOW / MEDIUM / HIGH\n\nOrdering rules:\n- Each task is independently mergeable — the test suite stays green after every task.\n- High-risk steps come after scaffolding is in place.\n- Task #1 is the smallest valuable slice that proves the design works.\n\nPHASE 4 — Risks\nTop 3 things that could go wrong, with the earliest warning signal for each.\n\nPHASE 5 — Out of scope\n3-5 things people might assume are included but are explicitly NOT.\n\nEnd with: "Approve, push back on a task, or tell me what is missing."\n\nHard rules:\n- No code this turn. Pseudocode sparingly if it clarifies a step.\n- If the work cannot fit in <=10 tasks, scope is too big — say so and propose a cut.\n- Do not slip in a refactor that the feature does not require.',
    },
    {
      title: 'كتابة PRD',
      tag: 'planning',
      body: 'Write a tight PRD for: <feature name>.\n\nRead first:\n- README and top-level repo structure (so the PRD aligns with what the product actually is)\n- Any /docs or /prds folder for style precedent\n\nUse this template, in order. Keep the whole doc under one page.\n\n# <Feature name>\n*Author: me · Status: DRAFT · Date: <today>*\n\n## Problem\n- Who is hurting (a specific persona, not "users")\n- What they do today (workaround / pain)\n- Evidence it is real (data, tickets, quotes) — flag anything inferred\n\n## Why now\nOne paragraph. Why this quarter, not next.\n\n## Goals\n- 1-3 user outcomes (verbs: "user can ___")\n- 1-3 business outcomes (metrics that should move)\n\n## Non-goals\n3-5 things people will assume are in scope but are NOT.\n\n## Proposed solution\nAt UI / behavior level. NOT implementation. 3-5 bullets max.\n\n## Success metrics\n- Primary: 1 number that proves it worked, with target\n- Guardrails: 1-2 numbers that must NOT regress\n- How / when we measure (timebox)\n\n## Risks and mitigations\nTop 3, ranked.\n\n## Open questions\nThings blocking sign-off. Tag each with the person who can answer.\n\nRules:\n- No marketing language. If a sentence could live on a landing page, delete it.\n- No implementation details. No tech stack. No file names. No time estimates.\n- Every claim about user behavior must be sourced or labeled "(assumption)".\n- If the feature lacks a measurable success metric, stop and say so — do not build it yet.',
    },
    {
      title: 'فهم الكود',
      tag: 'onboarding',
      body: 'I just opened this repo. Brief me like a senior engineer onboarding a new hire. Specific, no hand-waving.\n\nRead these in order, then synthesize. Do not summarize each one — weave them together.\n1. README.md and CONTRIBUTING.md\n2. package.json / pyproject.toml / Cargo.toml / go.mod — entry point, scripts, deps\n3. Top-level directory tree (1-2 levels deep)\n4. The actual entry-point file\n5. Any /docs folder\n6. The 10 most-recently-modified files: `git log --pretty=format: --name-only --since="30 days ago" | sort -u | head -10`\n\nDeliver, in this order:\n\n## What this repo does\n2-3 sentences. The product, not the tech.\n\n## How it is built\n- Language / framework / build tool / package manager / test runner\n- Hosting / deploy target (if inferable)\n- Anything unusual (custom CLI, codegen, monorepo tooling, ...)\n\n## Map of the territory\n| Folder / file | Purpose | Worth reading? |\n\n## The 5 files you must understand first\nRanked. For each: file path, what it does, and the function or class that is the keystone.\n\n## How an action flows through the code\nASCII diagram of the main control flow, from input to output. Mark where state is read and written.\n\n## Where the dragons live\n3-5 places that look risky, confusing, or surprising. For each, file:line and why you flagged it.\n\n## Active work\nFrom the recent git log: what is in-progress? Any open branches or unfinished features?\n\n## What I would ask the original author\n3 specific questions you cannot answer from the code alone.\n\nRules:\n- Cite file paths for every claim. No "there is probably a service somewhere."\n- If something looks like dead code, mark [DEAD?] — do not delete.\n- Be honest about what you did not have time to read.',
    },
    {
      title: 'تنفيذ TDD',
      tag: 'testing',
      body: 'Implement <feature description> using strict test-driven development.\n\nLoop ONCE per behavior. Never bundle behaviors.\n\nFor each behavior:\n\n1. RED — Write ONE failing test that describes the desired behavior.\n   - Use the test framework already in this repo.\n   - Name the test like a sentence: "<subject> <verb> <object> when <condition>".\n   - Run it. Confirm it fails for the RIGHT reason (assertion failure, not import error).\n\n2. GREEN — Write the smallest code that makes the test pass.\n   - Nothing the test does not require.\n   - No "I will need this later" code.\n   - Run the FULL test suite. Confirm everything is green.\n\n3. REFACTOR — Clean up only if the suite stays green.\n   - Better names, dedup, extract helpers: fine.\n   - New abstractions, new deps, behavior changes: not fine.\n   - Run the full suite again.\n\n4. CHECKPOINT — Stop. Show me:\n   - The new test\n   - The implementation diff\n   - Test runner output\n   Wait for "next" before the next behavior.\n\nRules:\n- If a test passes on the first run, it specifies no new behavior — delete it and try again.\n- If you need to mock something that does not exist yet, stop and ask whether to build it now or stub it.\n- End each behavior with: behavior name, test-count delta (+1), and a one-line confidence the implementation is minimal.',
    },
    {
      title: 'تحليل السبب الجذري',
      tag: 'debugging',
      body: 'You are a senior debugger. Find the root cause of this bug — do not patch the symptom.\n\nThe bug:\n- Expected: <what should happen>\n- Actual: <what is happening>\n- Reproduction: <test command or manual steps>\n- File / function of interest, if known: <path:function>\n\nFollow this protocol. Do NOT skip a phase.\n\nPHASE 1 — Investigate (no fix yet)\n1. Read the entry point and trace execution all the way to the failure.\n2. At each hop, list the assumption the code is making about its inputs and state.\n3. Run `git log -p -S "<a relevant token>"` to find when the suspected logic last changed.\n4. Identify the FIRST place state diverges from expectation. That is the root cause.\n\nPHASE 2 — Diagnose (<=6 sentences)\n- What is broken\n- Why it is broken (the actual mechanism, not "wrong output")\n- Why the symptom shows up where it does\n- What other call sites may be affected\n- Confidence: HIGH / MEDIUM / LOW. If LOW, name what you would need to verify.\n\nPHASE 3 — Propose (no edit yet)\n- The minimum-viable fix as a diff\n- One regression test that fails before the fix and passes after\n- Blast-radius scan: grep the repo for the same anti-pattern elsewhere\n\nPHASE 4 — Stop\nWait for my "go" before touching any file.\n\nHard rules:\n- Never guess. Ambiguity gets a question, not a guess.\n- Do not refactor anything off the failure path.\n- If you find more than one bug, list them and ask which to address first.',
    },
    {
      title: 'قراءة Stack Trace',
      tag: 'debugging',
      body: 'I hit this error in the running app:\n\n<paste the full error and stack trace from the terminal>\n\nAnalyze it. Do not modify any file yet.\n\n1. CLASSIFY the error type in one word: TypeError / null reference / network / permission / framework / build / other.\n\n2. WALK the stack from outermost frame to innermost. For each frame in MY code (skip framework internals unless they ARE the bug):\n   - file:line\n   - What that frame was trying to do\n   - Verdict: [TRIGGER] (this is where the bug is) or [TRANSIT] (just on the way)\n\n3. ROOT CAUSE — exactly one frame is [TRIGGER]. In <=4 sentences:\n   - What invariant was violated\n   - Why it failed NOW and not before — run `git blame` on that line and report the last change\n\n4. FIX — show the diff with a one-line justification per change.\n\n5. REGRESSION TEST — using the framework already in this repo, write a failing test that reproduces this exact failure.\n\n6. BLAST RADIUS — grep for the same anti-pattern across the codebase. List every other call site that could exhibit the same failure.\n\nIf a frame points into a dependency you cannot read, say so — never invent its behavior.',
    },
    {
      title: 'Refactor آمن',
      tag: 'refactor',
      body: 'Refactor <path/to/file> (or <directory>) for readability and to remove duplication.\n\nThis is a CONTRACT. Break one rule and the refactor is rejected.\n\nHard constraints (non-negotiable):\n1. Every existing test must still pass. Run the suite after every meaningful step.\n2. Public interfaces — exports, function signatures, class shape, return types, thrown errors — stay byte-identical.\n3. No new runtime dependencies. Dev-only deps require approval.\n4. No behavioral change. Same inputs → same outputs, same side effects, same error messages.\n\nProcess:\n1. Read the target AND every file that imports from it. Map the in-use surface.\n2. Identify the 3 highest-leverage cleanups. Rank by (impact ÷ risk).\n3. Propose them as a plan. STOP. Wait for me to pick which to apply.\n4. Apply one cleanup at a time, running tests between each.\n5. Emit a one-line "why this is better" per change. No filler.\n\nBanned moves:\n- "Improved naming" without a before/after table.\n- Splitting a function into pieces nothing else will reuse.\n- Adding abstractions for "future flexibility".\n- Renaming public exports.\n- Bundling unrelated cleanups together.\n\nEnd with: what changed, what you intentionally did NOT change (and why), and a confidence rating that public behavior is unchanged.',
    },
    {
      title: 'تقليل التعقيد',
      tag: 'refactor',
      body: 'Reduce the complexity of <function name> in <path/to/file> without changing observable behavior.\n\nSTEP 1 — Measure\nReport:\n- Lines of code\n- Max nesting depth\n- Branch count (if / else / switch / case / && / ||)\n- Number of early returns\n- Number of side effects\n\nSTEP 2 — Plan\nPick from these techniques, in this order of preference:\n1. Guard clauses + early returns (kills nesting cheap)\n2. Extract pure helpers (named after WHAT, not HOW)\n3. Replace nested conditionals with a lookup table or strategy map\n4. Inline trivial helpers that exist only for one call site\n5. Replace boolean flag parameters with separate functions\n\nSTEP 3 — Refactor\nApply the plan. Target: max nesting depth 2, main function <=30 lines (helpers excluded).\n\nSTEP 4 — Prove no regression\n- Run the existing tests\n- Diff observable behavior against pre-refactor on 3 inputs (1 happy, 2 edge)\n- Grep for callers of the function and confirm none broke\n\nOutput:\n- Before/after metrics (the 5 from STEP 1)\n- A one-paragraph summary of the structural change\n\nIf you cannot reduce nesting below 3 without a behavioral change, stop and say so. Never lie about the metrics.',
    },
    {
      title: 'اختبارات Edge Cases',
      tag: 'testing',
      body: 'Generate edge-case-only tests for <function name> in <path/to/file>.\n\nPHASE 1 — Map the surface\n- Read the function. List every input parameter, every external dependency, every return path.\n- Read existing tests for this function. List which edge cases are ALREADY covered — do not duplicate.\n\nPHASE 2 — Enumerate failure modes\nFor each parameter and side effect, check which categories apply:\n- NULL / UNDEFINED / MISSING\n- EMPTY (string, array, map, set)\n- BOUNDARY (0, 1, max-1, max, max+1, negative, off-by-one)\n- TYPE COERCION (wrong type, NaN, Infinity, very large, very small)\n- ENCODING (unicode, emoji, RTL text, control chars, very long strings)\n- TIME (DST, leap year, timezone, clock skew)\n- ORDER / DUPLICATES (unsorted, reversed, duplicates, single element)\n- EXTERNAL FAILURE (timeout, partial response, 5xx, retry, rate limit)\n- CONCURRENT (called twice in flight, called after dispose)\n- RESOURCE (disk full, OOM, EBADF) — only if relevant\n\nPHASE 3 — Write\nUse the framework already in this repo. One test per failure mode. Each test:\n- Descriptive name: "returns X when given Y"\n- Single assertion (avoid multi-assert tests)\n- Arrange / Act / Assert blocks visibly separated\n\nPHASE 4 — Run\nRun the new tests. If any fail, do NOT silence them — you found a bug. Report it instead of patching the test green.\n\nRules:\n- Skip the happy path entirely. Those already exist.\n- If no meaningful edge case exists for a category, write "N/A — <reason>" instead of inventing one.',
    },
    {
      title: 'مراجعة Senior',
      tag: 'review',
      body: 'You are a staff engineer reviewing my branch. Be honest, specific, and brief.\n\nProcess:\n1. `git fetch origin && git diff origin/main...HEAD --stat` — see what changed.\n2. `git diff origin/main...HEAD` — read the actual diff.\n3. For every non-trivial changed file, ALSO read its callers. Looks-fine-in-isolation often breaks callers.\n\nPriorities, in strict order. Earlier categories win:\n1. CORRECTNESS — does it do the thing? Edge cases handled?\n2. SECURITY — auth, injection, secrets, data exposure, SSRF, deserialization\n3. PERFORMANCE — N+1, hot-path allocations, blocking I/O, missing indexes\n4. RELIABILITY — error handling at boundaries, retries, idempotency, partial failure\n5. MAINTAINABILITY — clarity, naming, dead code, complexity\n6. TESTING — coverage of new behavior, brittle tests, missing edges\n\nIgnore: style nits, formatting, taste-only changes.\n\nOutput format (Markdown):\n\n## Summary\n<one paragraph: what the branch does and whether it is ready to merge>\n\n## Findings\nFor each issue:\n### [BLOCKING / IMPORTANT / NIT] <one-line title>\n**Where:** file:line\n**Why it matters:** <one sentence>\n**Suggestion:** <one sentence or a small diff>\n\n## Whats good\n<2-3 bullets — call out genuinely good work>\n\n## Open questions\n<things you need clarified before signing off>\n\nRules:\n- BLOCKING = "I will reject if this ships." Use sparingly. Each BLOCKING includes a concrete fix.\n- Do not invent issues to look thorough. If the branch is clean, say "no blocking issues."\n- If you do not understand WHY a change was made, ask. Do not guess.',
    },
    {
      title: 'فحص أمني (OWASP)',
      tag: 'security',
      body: 'Run a security audit on my current branch as if you were a red-team reviewer about to attack production.\n\nSTEP 1 — Recon\n- `git diff origin/main...HEAD --stat`\n- `git diff origin/main...HEAD`\n- Read every changed file.\n- Grep the repo for these tokens and flag any NEW hit in this branch:\n  password, secret, token, api_key, exec, eval, innerHTML, dangerouslySet, raw(, child_process, shell=True\n\nSTEP 2 — Threat model\nFor each changed function that crosses a trust boundary (HTTP, DB, FS, subprocess, network, deserialization, template render):\n- Which boundary is crossed\n- What data crosses it (user? service? config?)\n- What does the code ASSUME about that data?\n\nSTEP 3 — Check, at minimum:\n1. INJECTION — SQL, NoSQL, command, LDAP, XPath, header, log\n2. XSS — stored, reflected, DOM, mutation\n3. AUTHENTICATION — broken login, session fixation, weak tokens\n4. AUTHORIZATION — IDOR, missing role check, privilege escalation, mass assignment\n5. SECRETS — hardcoded keys, secrets in logs, secrets in errors\n6. CRYPTO — weak algorithm, hardcoded IV, ECB mode, custom crypto, missing TLS\n7. SSRF — user-controlled URLs, file://, internal hosts, metadata service\n8. DESERIALIZATION — pickle, YAML.load, eval, unsafe JSON consumers\n9. XXE / SSTI — XML parser config, template engines with user input\n10. DEPENDENCY — new lib added in this branch — known CVEs? unmaintained?\n11. LOGGING / PII — sensitive data in logs, missing redaction\n12. CORS / CSP / CSRF — for every new endpoint\n\nFor each finding:\n- **Severity:** CRITICAL / HIGH / MEDIUM / LOW (with CVSS-style reasoning)\n- **OWASP:** A0X:2021 category\n- **Where:** file:line\n- **Attack:** the actual exploit, not just a label\n- **Proof:** a curl, payload, or snippet showing how the attack works\n- **Fix:** concrete code change\n- **Defense in depth:** one additional mitigation\n\nIf you find no issues, list each boundary you examined and why each is safe. "Looks fine" is not a finding. Never invent a CVE number or CWE you are not sure of.',
    },
    {
      title: 'تحسين الأداء',
      tag: 'performance',
      body: 'Find the real bottlenecks in <path/to/file> (or the <endpoint> handler / <query name>). This is measurement-driven, not guess-and-check.\n\nPHASE 1 — Map the hot path\n- Trace the code from request entry to response (or function entry to return).\n- For each step, classify as COMPUTE / IO (disk) / NETWORK (DB, HTTP, RPC) / LOCK / ALLOC.\n- Estimate cost in big-O against input size N (and nested dimension M).\n\nPHASE 2 — Find the bottleneck class\nFor each candidate, check:\n1. N+1 queries — loops that issue DB calls. Show the loop and the call.\n2. Missing indexes — for each DB query, what does the WHERE/ORDER touch? Is there an index?\n3. Over-fetching — selecting fields you do not use, fetching rows you discard\n4. Sync work in async path — blocking I/O on the event loop, sync FS in a request handler\n5. Allocation in hot loops — string concat, new objects per iteration\n6. Repeated work — same expensive call inside a loop instead of hoisted\n7. Cache misses — data read 100x and written 1x with no cache\n8. Lock contention — wide locks, locks held across I/O, lock + log pattern\n9. Serialization — JSON parse on huge payloads, schema validation per item\n10. Network round-trips — chatty RPC, missing batching, no connection reuse\n\nPHASE 3 — Recommend\nFor each finding:\n- **Hotspot:** file:line\n- **Class:** one of the 10 above\n- **Cost today:** big-O plus a realistic concrete number ("at 1000 users, ~30s")\n- **Fix:** smallest change that addresses it\n- **Cost after:** estimate\n- **Trade-off:** what you give up (memory, complexity, eventual consistency, ...)\n- **Confidence:** HIGH if provable from code, MEDIUM if it depends on data shape, LOW if it needs benchmarks\n\nPHASE 4 — Order of operations\nRank fixes by ROI = (impact ÷ effort). Tell me which ONE to do first.\n\nRefused outputs:\n- "Add caching" without saying WHAT and WHERE invalidation happens\n- "Use a faster library" without numbers\n- Micro-optimizing cold paths\n- Rewriting in another language\n\nIf the code is fast enough for the actual workload, say so and stop. Premature optimization is a bug.',
    },
    {
      title: 'كتابة README',
      tag: 'docs',
      body: 'Generate a high-signal README.md for this repo. Use what is actually in the code. Never invent.\n\nInvestigate first:\n1. Read package.json / pyproject.toml / Cargo.toml / go.mod — real deps, real scripts.\n2. Read the entry point (main, index, app.tsx, ...) — what it actually does.\n3. Skim top-level directories.\n4. Check for .env.example — env var list.\n5. Check .github/workflows — CI and deploy story.\n6. Check LICENSE — actual license.\n\nThen write README.md with these sections, in order:\n\n# <Project name>\n> One sentence. What this project does, for whom. No buzzwords.\n\n## Demo / Screenshots\nSkip if no real media to link. Do not invent a link.\n\n## Quick start\n```bash\n<exact clone command>\n<exact install command from the package manager actually in use>\n<exact run-locally command>\n```\nMentally test that the commands work.\n\n## Tech stack\n- Frontend / Backend / Build / Testing / Hosting — only the categories that apply, from what you read.\n\n## Project structure\n```\n<top-level tree, 1 level deep, with a one-line comment per folder>\n```\n\n## Configuration\n| Variable | Required | Default | Description |\n| --- | --- | --- | --- |\nFrom .env.example. If none exists: "No env vars required."\n\n## Scripts\n| Command | What it does |\n| --- | --- |\nFrom package.json scripts. Only user-relevant ones.\n\n## Deployment\nHow this repo is actually deployed (read CI files). If unclear: "Deployment is not documented yet — TODO."\n\n## License\nFrom the LICENSE file. If no file: "No license specified — all rights reserved by default."\n\nRules:\n- Never invent a feature, command, env var, or deploy target not present in the code.\n- Every code block must run as written.\n- No badges unless the actual service is configured.\n- If a section has nothing real to say, omit it. Short and true beats long and wrong.',
    },
    {
      title: 'Pre-Deploy Check',
      tag: 'devops',
      body: 'I am about to deploy my current branch to production. Run a full pre-deploy audit.\n\nRead first:\n- `git fetch origin && git diff origin/main...HEAD --stat`\n- `git diff origin/main...HEAD`\n- `git log origin/main..HEAD --oneline`\n\nThen check every item. Output as a checklist. For each: PASS / FAIL / N/A, with file:line evidence and a one-line note.\n\n## 1. Cleanliness\n- [ ] No console.log / print / dbg! / dump / var_dump in non-test files\n- [ ] No TODO / FIXME / HACK added in this diff inside critical paths\n- [ ] No commented-out code blocks\n- [ ] No .only / .skip left on tests\n\n## 2. Secrets and config\n- [ ] No hardcoded API keys, tokens, passwords, JWT secrets, DB URIs\n- [ ] No real customer data in fixtures or tests\n- [ ] Every env var read by new code is in .env.example\n- [ ] No localhost / 127.0.0.1 / staging URLs in production paths\n\n## 3. Database\n- [ ] Migrations exist for every schema change\n- [ ] Each migration has both up and down\n- [ ] Schema changes are safe under load (no rewriting a 50M-row table, no NOT NULL on huge table without default)\n- [ ] No data migrations that could deadlock or run for hours without a kill switch\n\n## 4. Tests\n- [ ] The project test command runs green locally\n- [ ] New behavior is covered (cite the test name)\n- [ ] No tests deleted without justification\n- [ ] New tests are not flaky (run a new test 5x mentally — always green?)\n\n## 5. Backwards compatibility\n- [ ] No breaking API changes without versioning\n- [ ] No removed columns / fields still referenced by clients\n- [ ] No changed enum values that older clients may still send\n\n## 6. Error handling and observability\n- [ ] Every new external call has a timeout\n- [ ] Every new external call has error handling (no naked await)\n- [ ] New paths emit logs / metrics where existing paths do\n- [ ] No swallowed exceptions (catch (e) {} without a comment)\n\n## 7. Security\n- [ ] No user input flowing into SQL, shell, file paths, redirects, template rendering, or eval without validation\n- [ ] AuthN/AuthZ check present on every new endpoint\n- [ ] No new dependency from an unmaintained or unknown source\n\n## 8. Performance\n- [ ] No new N+1 added (cite query loops if present)\n- [ ] No new sync I/O on the request path\n- [ ] No new unbounded loops over user input\n\n## 9. Rollback\n- [ ] If something breaks in prod, can this branch be reverted by `git revert` cleanly? Y/N\n- [ ] If data has been migrated, what is the rollback plan? Write it.\n\n## 10. Communication\n- [ ] PR description tells the reader WHAT changed and WHY\n- [ ] Any breaking change is called out at the top of the PR\n- [ ] Anyone who needs to know (oncall, dependent teams) has been pinged\n\nEnd with: GREEN LIGHT / YELLOW LIGHT (fix items X, Y) / RED LIGHT (do not deploy). Never give GREEN LIGHT over a real FAIL — miss the deploy window rather than ship a regression.',
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
