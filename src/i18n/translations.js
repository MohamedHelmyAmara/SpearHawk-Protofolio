/**
 * SpearHawk landing page translations.
 * English is the default language. Arabic uses natural, professional wording.
 * Structure is shared between languages; components read it through useI18n().
 */
export const translations = {
  en: {
    meta: {
      title: 'SpearHawk | Website, Web App & Mobile App Development',
      description:
        'SpearHawk is a digital agency specializing in professional website, web application, and mobile application design & development for businesses and startups.',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'Our Process',
      about: 'About',
      contact: 'Contact',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      skipToContent: 'Skip to main content',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      languageLabel: 'Language',
      primaryNav: 'Main navigation',
      brandTagline: 'Digital Agency',
    },
    hero: {
      badge: 'Digital Design & Development Studio',
      titleBefore: 'We Turn Your Ideas Into',
      titleAccent: 'Digital Products.',
      description:
        "From business websites to custom web platforms and mobile applications, we help startups and businesses turn ideas into reliable, user-friendly digital experiences.",
      ctaPrimary: "Let's Build Something",
      ctaSecondary: 'Explore Our Services',
      chipWeb: 'Websites',
      chipApps: 'Web Apps',
      chipMobile: 'Mobile Apps',
      illustration: {
        browserUrl: 'spearhawk.agency',
        chipCode: 'Clean Code',
        chipUi: 'UI Design',
      },
    },
    services: {
      eyebrow: 'Services',
      title: 'Digital Solutions Built Around Your Business.',
      lead: 'From a focused marketing site to a complete product platform, we design and build digital experiences around the way you work.',
      items: [
        {
          title: 'Website Design & Development',
          features: [
            'Business and corporate websites',
            'Landing pages',
            'Responsive interfaces',
            'Performance and maintainability',
          ],
        },
        {
          title: 'Web Applications',
          features: [
            'Custom business platforms',
            'Dashboards and administrative systems',
            'Booking and management systems',
            'Interactive products tailored to specific workflows',
          ],
        },
        {
          title: 'Mobile Application Development',
          features: [
            'Application planning and interface design',
            'User-friendly mobile experiences',
            'Frontend implementation and API integration',
            'Products designed around real user needs',
          ],
        },
      ],
    },
    showcase: {
      eyebrow: 'Conceptual Work',
      title: "Imagine What's Possible.",
      lead: 'Every great digital product starts with a clear problem and a thoughtful plan. Explore examples of the experiences we can help bring to life.',
      conceptualLabel: 'Conceptual Design',
      items: [
        {
          title: 'Business Website',
          description: 'A clear, trustworthy online presence that presents your services and invites customers to act.',
        },
        {
          title: 'Booking Dashboard',
          description: 'A management view for appointments and activity, designed so teams can work with confidence.',
        },
        {
          title: 'Mobile Booking App',
          description: 'A focused mobile experience that lets users browse, book, and manage everything on the go.',
        },
      ],
    },
    process: {
      eyebrow: 'How We Work',
      title: 'From First Idea to Final Product.',
      lead: 'A clear, structured path keeps projects predictable and outcomes reliable.',
      steps: [
        {
          title: 'Discover',
          description:
            'Understand the business, target audience, goals, and requirements.',
        },
        {
          title: 'Plan & Design',
          description:
            'Define the product structure, user experience, and visual direction.',
        },
        {
          title: 'Build',
          description:
            'Implement the product with attention to responsiveness, usability, and maintainability.',
        },
        {
          title: 'Test & Deliver',
          description:
            'Verify functionality, resolve issues, and prepare the product for launch.',
        },
      ],
    },
    why: {
      eyebrow: 'Why SpearHawk',
      title: 'A Better Way to Build Digital Products.',
      lead: 'We care about the same things you care about: a product that works, a process you can follow, and results you can build on.',
      principles: [
        {
          title: 'Purpose-Driven Design',
          description:
            "Every design decision starts from your goals and your users' real needs — not from templates or trends.",
        },
        {
          title: 'Clear Communication',
          description:
            'You always know what is being built, why it is being built, and what happens next. No jargon, no surprises.',
        },
        {
          title: 'Quality-Focused Development',
          description:
            'Clean, maintainable implementation and careful attention to detail, from the first component to final delivery.',
        },
        {
          title: 'Business-Minded Thinking',
          description:
            'We think beyond the screen: usability, maintainability, and long-term value guide the choices we make.',
        },
      ],
    },
    about: {
      eyebrow: 'About Us',
      title: 'Small Studio. Serious About Quality.',
      description:
        'At SpearHawk, we believe great digital products come from combining thoughtful design, practical engineering, and a clear understanding of business needs. Our focus is on helping businesses and startups build useful, reliable digital experiences without unnecessary complexity.',
      codeComment: '// an idea, engineered with care',
      codeLine1: 'const product = spearhawk.build({',
      codeLine2: '  idea: "yours",',
      codeLine3: '  design: "thoughtful",',
      codeLine4: '  engineering: "practical",',
      codeLine5: '});',
      codeResult: '// → a reliable, user-friendly product',
      chips: ['Design', 'Engineering', 'Business'],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Have an Idea? Let's Make It Real.",
      lead: "Tell us what you're planning to build. We'll discuss your goals, explore possible solutions, and help you identify the next steps.",
      ctaButton: 'Contact Us on Facebook',
      ctaNote: 'Opens our Facebook page in a new tab — the fastest way to reach us.',
    },
    footer: {
      description:
        'A digital agency specializing in professional website, web application, and mobile application design & development.',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Services',
      quickLinks: [
        { key: 'home', label: 'Home', href: '#home' },
        { key: 'services', label: 'Services', href: '#services' },
        { key: 'process', label: 'Our Process', href: '#process' },
        { key: 'about', label: 'About', href: '#about' },
        { key: 'contact', label: 'Contact', href: '#contact' },
      ],
      serviceLinks: [
        'Website Design & Development',
        'Web Applications',
        'Mobile Application Development',
      ],
      copyright: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },

  ar: {
    meta: {
      title: 'SpearHawk | تصميم وتطوير المواقع وتطبيقات الويب والجوال',
      description:
        'SpearHawk وكالة رقمية متخصصة في التصميم والتطوير الاحترافي للمواقع الإلكترونية وتطبيقات الويب وتطبيقات الجوال للشركات والشركات الناشئة.',
    },
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      process: 'منهجية العمل',
      about: 'من نحن',
      contact: 'تواصل معنا',
      openMenu: 'فتح قائمة التنقل',
      closeMenu: 'إغلاق قائمة التنقل',
      skipToContent: 'الانتقال إلى المحتوى الرئيسي',
      switchToLight: 'التبديل إلى الوضع الفاتح',
      switchToDark: 'التبديل إلى الوضع الداكن',
      languageLabel: 'اللغة',
      primaryNav: 'التنقل الرئيسي',
      brandTagline: 'وكالة رقمية',
    },
    hero: {
      badge: 'استوديو تصميم وتطوير رقمي',
      titleBefore: 'نحوّل أفكارك إلى',
      titleAccent: 'منتجات رقمية.',
      description:
        'من مواقع الأعمال إلى منصات الويب المخصصة وتطبيقات الجوال، نساعد الشركات الناشئة والأعمال على تحويل الأفكار إلى تجارب رقمية موثوقة وسهلة الاستخدام.',
      ctaPrimary: 'لنبنِ شيئًا معًا',
      ctaSecondary: 'اكتشف خدماتنا',
      chipWeb: 'المواقع',
      chipApps: 'تطبيقات الويب',
      chipMobile: 'تطبيقات الجوال',
      illustration: {
        browserUrl: 'spearhawk.agency',
        chipCode: 'كود نظيف',
        chipUi: 'تصميم واجهات',
      },
    },
    services: {
      eyebrow: 'خدماتنا',
      title: 'حلول رقمية مبنية حول عملك.',
      lead: 'من موقع تسويقي مركّز إلى منصة منتج متكاملة، نصمم ونبتني تجارب رقمية تناسب طريقة عملك.',
      items: [
        {
          title: 'تصميم وتطوير المواقع',
          features: [
            'مواقع الأعمال والشركات',
            'صفحات الهبوط',
            'واجهات متوافقة مع جميع الأجهزة',
            'الأداء وسهولة الصيانة',
          ],
        },
        {
          title: 'تطبيقات الويب',
          features: [
            'منصات أعمال مخصصة',
            'لوحات التحكم والأنظمة الإدارية',
            'أنظمة الحجز والإدارة',
            'منتجات تفاعلية مصممة لسير عملك',
          ],
        },
        {
          title: 'تطوير تطبيقات الجوال',
          features: [
            'تخطيط التطبيق وتصميم واجهاته',
            'تجارب جوال سهلة الاستخدام',
            'تنفيذ الواجهات وربط الواجهات البرمجية',
            'منتجات مصممة حول احتياجات المستخدمين الحقيقية',
          ],
        },
      ],
    },
    showcase: {
      eyebrow: 'أعمال مفاهيمية',
      title: 'تخيّل ما هو ممكن.',
      lead: 'كل منتج رقمي ناجح يبدأ بمشكلة واضحة وخطة مدروسة. استعرض أمثلة على التجارب التي يمكننا مساعدتك في بنائها.',
      conceptualLabel: 'تصميم مفاهيمي',
      items: [
        {
          title: 'موقع أعمال',
          description: 'حضور رقمي واضح وموثوق يعرض خدماتك ويدعو العملاء إلى التفاعل.',
        },
        {
          title: 'لوحة حجوزات',
          description: 'واجهة إدارة للمواعيد والنشاط اليومي، مصممة ليعمل الفريق بثقة ووضوح.',
        },
        {
          title: 'تطبيق حجز للجوال',
          description: 'تجربة جوال مركّزة تمكّن المستخدمين من التصفح والحجز والإدارة أينما كانوا.',
        },
      ],
    },
    process: {
      eyebrow: 'كيف نعمل',
      title: 'من الفكرة الأولى إلى المنتج النهائي.',
      lead: 'مسار واضح ومنظم يجعل المشاريع قابلة للتوقع ونتائجها موثوقة.',
      steps: [
        {
          title: 'الاكتشاف',
          description: 'فهم العمل والجمهور المستهدف والأهداف والمتطلبات.',
        },
        {
          title: 'التخطيط والتصميم',
          description: 'تحديد هيكل المنتج وتجربة المستخدم والتوجه البصري.',
        },
        {
          title: 'البناء',
          description: 'تنفيذ المنتج مع الاهتمام بالتوافق مع الأجهزة وسهولة الاستخدام وقابلية الصيانة.',
        },
        {
          title: 'الاختبار والتسليم',
          description: 'التحقق من الوظائف ومعالجة الملاحظات وتجهيز المنتج للإطلاق.',
        },
      ],
    },
    why: {
      eyebrow: 'لماذا SpearHawk',
      title: 'طريقة أفضل لبناء المنتجات الرقمية.',
      lead: 'نهتم بما تهتم به أنت أيضًا: منتج يعمل بشكل صحيح، وعملية واضحة تتابعها، ونتائج يمكن البناء عليها.',
      principles: [
        {
          title: 'تصميم مدفوع بالهدف',
          description: 'كل قرار تصميمي ينطلق من أهدافك ومن احتياجات مستخدميك الحقيقية، لا من قوالب جاهزة أو مواسم صيحات.',
        },
        {
          title: 'تواصل واضح',
          description: 'تعرف دائمًا ما الذي يُبنى، ولماذا، وما الخطوة التالية. بلا مصطلحات معقدة وبلا مفاجآت.',
        },
        {
          title: 'تطوير يركّز على الجودة',
          description: 'تنفيذ نظيف وقابل للصيانة مع اهتمام دقيق بالتفاصيل، من أول مكوّن حتى التسليم النهائي.',
        },
        {
          title: 'تفكير تجاري',
          description: 'نفكّر إلى ما هو أبعد من الشاشة: سهولة الاستخدام وقابلية الصيانة والقيمة على المدى الطويل توجّه قراراتنا.',
        },
      ],
    },
    about: {
      eyebrow: 'من نحن',
      title: 'استوديو صغير. جاد في الجودة.',
      description:
        'في SpearHawk نؤمن بأن المنتجات الرقمية العظيمة تنبع من الجمع بين تصميم مدروس وهندسة عملية وفهم واضح لاحتياجات العمل. تركيزنا هو مساعدة الشركات والشركات الناشئة على بناء تجارب رقمية مفيدة وموثوقة دون تعقيد غير ضروري.',
      codeComment: '// فكرة، تُبنى بعناية',
      codeLine1: 'const product = spearhawk.build({',
      codeLine2: '  idea: "yours",',
      codeLine3: '  design: "thoughtful",',
      codeLine4: '  engineering: "practical",',
      codeLine5: '});',
      codeResult: '// → منتج موثوق وسهل الاستخدام',
      chips: ['التصميم', 'الهندسة', 'الأعمال'],
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'لديك فكرة؟ لنحوّلها إلى واقع.',
      lead: 'أخبرنا بما تخطط لبنائه. سنناقش أهدافك ونستعرض الحلول الممكنة ونساعدك في تحديد الخطوات التالية.',
      ctaButton: 'تواصل معنا عبر فيسبوك',
      ctaNote: 'يفتح صفحتنا على فيسبوك في تبويب جديد — أسرع وسيلة للوصول إلينا.',
    },
    footer: {
      description:
        'وكالة رقمية متخصصة في التصميم والتطوير الاحترافي للمواقع الإلكترونية وتطبيقات الويب وتطبيقات الجوال.',
      quickLinksTitle: 'روابط سريعة',
      servicesTitle: 'خدماتنا',
      quickLinks: [
        { key: 'home', label: 'الرئيسية', href: '#home' },
        { key: 'services', label: 'خدماتنا', href: '#services' },
        { key: 'process', label: 'منهجية العمل', href: '#process' },
        { key: 'about', label: 'من نحن', href: '#about' },
        { key: 'contact', label: 'تواصل معنا', href: '#contact' },
      ],
      serviceLinks: [
        'تصميم وتطوير المواقع',
        'تطبيقات الويب',
        'تطوير تطبيقات الجوال',
      ],
      copyright: 'جميع الحقوق محفوظة.',
      backToTop: 'العودة إلى الأعلى',
    },
  },
}
