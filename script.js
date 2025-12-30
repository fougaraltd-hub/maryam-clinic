(function () {
  const state = {
    lang: localStorage.getItem("lang") || "ar"
  };

  const I18N = {
    ar: {
      dir: "rtl",
      localeName: "العربية",
      nav: {home:"الرئيسية", about:"عن المعالجة", approach:"المنهج العلاجي", services:"الخدمات", book:"الكتاب", blog:"المدونة", activities:"الأنشطة", booking:"طلب موعد", contact:"اتصل"},
      hero: {
        eyebrow:"قسنطينة، الجزائر • حضوري + أونلاين",
        title:"مساحة آمنة للفهم والتغيير",
        subtitle:"أخصائية ومعالجة نفسية | كاتبة | باحثة | مُكوِّنة",
        desc:"مقاربة تكاملية تجمع بين الفهم الدينامي-النفسي، وأدوات العلاج المعرفي السلوكي (CBT)، وتدخلات مستنيرة بتقنية EMDR وتقنيات الاسترخاء—وفق احتياجك وإيقاعك.",
        cta1:"طلب موعد",
        cta2:"تعرف على المزيد",
        pills:["جلسات حضورية في قسنطينة","جلسات أونلاين","مواعيد يدوية (طلب وتفضيلات)"]
      },
      
      notice: "تنبيه: هذا الموقع ليس لخدمات الطوارئ. في حالات الخطر الفوري، اتصل بخدمات الطوارئ المحلية."
      
      sections:{
        howTitle:"نهج المرافقة النفسية",
        howSub:"نستخدم فهماً عميقاً للعلاقات والخبرة النفسية، مع أدوات عملية تساعدك على التغيير خطوة بخطوة.",
        aboutTitle:"عن المعالجة",
        aboutSub:"نبذة مهنية كما وردت في غلاف الكتاب، بصياغة مناسبة لموقع عيادة.",
        approachTitle:"المنهج العلاجي التكاملـي",
        approachSub:"دمج بين الدينامي-النفسي و CBT وتدخلات مستنيرة بـ EMDR، مع إطار علاجي واضح وآمن.",
        servicesTitle:"الخدمات",
        servicesSub:"جلسات فردية حضورية في قسنطينة أو عبر الإنترنت، بالإضافة إلى التكوين والورشات.",
        bookTitle:"الكتاب",
        bookSub:"النرجسية في الروابط الأسرية: دليلك للوعي، التمكين، والشفاء…",
        blogTitle:"المدونة",
        blogSub:"مقالات نفسية وتوعوية بلغة مبسطة وعميقة.",
        activitiesTitle:"الأنشطة",
        activitiesSub:"ندوات، ورشات، مؤتمرات، وتكوينات—ماضيًا وقادمًا.",
        bookingTitle:"طلب موعد",
        bookingSub:"هذا النموذج للجدولة فقط. يُرجى تجنّب مشاركة تفاصيل حساسة أو طبية مطوّلة هنا.",
        contactTitle:"التواصل",
        contactSub:"قسنطينة، الجزائر • جلسات حضورية + أونلاين",
        legalTitle:"الخصوصية والتنبيه",
      },
      cards:{
        psychodynamic:{t:"فهم دينامي-نفسي", p:"نستكشف أنماط العلاقات، الخبرات المبكرة، والمعاني التي تتكرر في حياتك، دون أحكام أو استعجال."},
        cbt:{t:"أدوات CBT عملية", p:"نبني مهارات واضحة: تنظيم الأفكار، إدارة القلق، الحدود، والتواصل—بخطوات قابلة للتطبيق."},
        emdr:{t:"تدخلات مستنيرة بـ EMDR", p:"عند الحاجة، نستخدم تدخلات مستنيرة بـ EMDR لمعالجة آثار الصدمات والذكريات المزعجة ضمن إطار آمن."},
      },
      about:{
        h:"مريم مسعي-أحمد",
        role:"أخصائية ومعالجة نفسية",
        body1:"مريم مسعي-أحمد، أخصائية ومعالجة نفسية، حاصلة على ليسانس وماستر في علم النفس العيادي. تهتم بمجال الصحة النفسية وتسعى لمواصلة مسارها الأكاديمي في دكتوراه علم نفس الصحة، إيماناً منها بأهمية الربط بين الفهم العيادي العميق والتدخل العلاجي المتكامل.",
        body2:"متكوّنة في العلاج المعرفي السلوكي (CBT) ومجموعة من التقنيات العلاجية الحديثة، من بينها: تقنية إزالة التحسس وإعادة المعالجة بحركة العين (EMDR)، وتقنيات الاسترخاء العضلي.",
        body3:"أستاذة مُكوِّنة قامت بتأطير وتدريب عدد معتبر من الطلبة والممارسين الميدانيين في مختلف موضوعات علم النفس، وراكمت خبرة تطبيقية من خلال سنوات من الممارسة الميدانية.",
        body4:"مشاركة في مبادرات وجمعيات تهتم برعاية ومرافقة الأطفال ذوي الاحتياجات الخاصة، وتكتب مقالات نفسية وتوعوية في الجرائد الوطنية سعياً لنقل الثقافة النفسية إلى الجمهور العام بلغة مبسطة وعميقة.",
        body5:"تهتم بشكل خاص بمرافقة الأفراد المتأثرين بأنماط العلاقات الأسرية المختلة، وتعمل على دعمهم في مسارات التشافي من آثار العنف النفسي داخل المنظومات العائلية.",
        listTitle:"مجالات الممارسة والمهارات",
        list:["الإرشاد الأسري","العلاج النسقي","العلاج المعرفي السلوكي (CBT)","تدخلات مستنيرة بتقنية EMDR","تقنيات الاسترخاء وإدارة التوتر"]
      },
      approach:{
        frameTitle:"الإطار العلاجي",
        frame:["جلسات 50 دقيقة عادةً (يمكن التكييف حسب الحاجة).","سرية واحترام، مع استثناءات السلامة في حالات الخطر الوشيك.","تحديد أهداف واقعية ومراجعتها بشكل دوري.","جلسات حضورية أو أونلاين وفق ما يناسبك."],
        expectTitle:"ماذا تتوقع في البداية",
        expect:["جلسة أولى لفهم سياقك وتوقعاتك واحتياجاتك.","توضيح الإطار: عدد الجلسات، الإيقاع، وحدود التواصل خارج الجلسات.","اقتراح خطة أولية (قد تتغير مع التقدم)."],
        note:"إن كان هناك خطر فوري على سلامتك أو سلامة غيرك، يُرجى التواصل مع خدمات الطوارئ المحلية فوراً. هذه المنصة ليست مخصصة للحالات الطارئة."
      },
      services:{
        s1:{t:"جلسات فردية (حضوري/أونلاين)", p:"مساحة علاجية للتعامل مع القلق، الإرهاق، الصدمات، صعوبات العلاقات، وأثر العنف النفسي ضمن العائلة.", m:["حضوري في قسنطينة","أونلاين للجزائر وخارجها","إطار تكاملي"]},
        s2:{t:"إرشاد أسري وعلاج نسقي", p:"فهم ديناميات الأسرة، الحدود، وأنماط التواصل—مع دعم عملي للتغيير.", m:["مناسب لصعوبات الروابط الأسرية","تركيز على أنماط العلاقة","أدوات تواصل"]},
        s3:{t:"تكوين وورشات", p:"تأطير وتدريب للطلبة والممارسين، وورشات توعوية للجمهور العام.", m:["ورشات/ندوات","تكوينات مهنية","مداخلات"]},
      },
      book:{
        title:"النرجسية في الروابط الأسرية",
        sub:"دليلك للوعي، التمكين، والشفاء…",
        desc:"كتاب وبرنامج معرفي سلوكي ودليل تطبيقي للنجاة والتعافي، يضيء ديناميات الروابط الأسرية المختلّة ويقدّم أدوات للفهم والتمكين.",
        tags:["الوعي","الحدود","العنف النفسي","التعافي","العلاقات الأسرية"],
        cta:"طلب معلومات عن الكتاب"
      },
      blog:{
        posts:[
          {t:"كيف نميّز بين الخلاف العابر والعنف النفسي؟", p:"إشارات تساعدك على فهم ما يحدث دون تهويل أو إنكار."},
          {t:"الحدود الصحية داخل الأسرة", p:"لماذا يشعر البعض بالذنب عند وضع الحدود؟ وكيف نبدأ بشكل واقعي؟"},
          {t:"عندما تتحول العلاقة إلى استنزاف", p:"من التعب الصامت إلى استعادة الصوت الداخلي—مسار تدريجي."}
        ]
      },
      activities:{
        items:[
          {t:"ندوة: الصحة النفسية والروابط الأسرية", p:"محاور توعوية حول أنماط العلاقة، الحدود، وطرق طلب الدعم.", meta:"قسنطينة • حضورياً"},
          {t:"ورشة: أدوات CBT لإدارة القلق", p:"تمارين عملية: أفكار/مشاعر/سلوك، وتنظيم اليوم وتخفيف الاجترار.", meta:"أونلاين"},
          {t:"مداخلة علمية في مؤتمر", p:"موضوعات مقترحة: العنف النفسي داخل الأسرة وأثره على التعلّق والهوية.", meta:"يُعلن لاحقاً"}
        ]
      },
      booking:{
        labels:{
          name:"الاسم الكامل",
          language:"لغة التواصل المفضلة",
          mode:"نوع الجلسة",
          contact:"وسيلة التواصل",
          when:"أيام/أوقات مفضلة",
          topic:"سبب مختصر للموعد (سطر واحد)",
          consent:"أوافق على استخدام بياناتي للتواصل بخصوص طلب الموعد فقط."
        },
        options:{
          lang:["العربية","Français","English (UK)"],
          mode:["حضوري (قسنطينة)","أونلاين"],
          contact:["هاتف","واتساب","بريد إلكتروني"]
        },
        submit:"إرسال الطلب",
        success:"تم استلام طلبك. سنقوم بالرد خلال 24–48 ساعة عمل. (يرجى عدم إرسال معلومات طارئة عبر هذا النموذج.)"
      },
      contact:{
        clinic:"العيادة: قسنطينة، الجزائر",
        online:"جلسات أونلاين متاحة",
        placeholders:"يمكنك تعديل وسائل التواصل في ملف script.js",
        details:["البريد الإلكتروني: example@clinic.dz","الهاتف/واتساب: +213 XX XX XX XX","ساعات العمل: حسب المواعيد"]
      },
      legal:{
        p1:"نلتزم بخصوصيتك. هذا الموقع يهدف للتعريف والخدمات والجدولة فقط.",
        p2:"يُرجى تجنّب مشاركة تفاصيل حساسة عبر النموذج. سيتم استخدام البيانات فقط للرد على طلب الموعد."
      }
    },
    fr: {
      dir: "ltr",
      localeName: "Français",
      nav: {home:"Accueil", about:"À propos", approach:"Approche", services:"Services", book:"Livre", blog:"Blog", activities:"Activités", booking:"Rendez-vous", contact:"Contact"},
      hero: {
        eyebrow:"Constantine, Algérie • Présentiel + En ligne",
        title:"Un espace sûr pour comprendre et avancer",
        subtitle:"Meriem Messaï-Ahmed • Psychothérapeute | Autrice | Chercheuse | Formatrice",
        desc:"Approche intégrative associant compréhension psychodynamique, outils TCC et interventions informées par l’EMDR, ainsi que des techniques de relaxation—adaptées à votre rythme et à vos besoins.",
        cta1:"Demander un rendez-vous",
        cta2:"En savoir plus",
        pills:["Séances à Constantine","Séances en ligne","Prise de rendez-vous"]
      },
  
      notice: "Avertissement : ce site ne fournit pas de services d’urgence. En cas de danger immédiat, veuillez contacter les services d’urgence locaux.",
  
      sections:{
        howTitle:"Ma démarche thérapeutique",
        howSub:"Une articulation entre compréhension profonde et outils concrets, pour avancer pas à pas.",
        aboutTitle:"À propos de la thérapeute",
        aboutSub:"Présentation professionnelle adaptée au site, fidèle aux éléments de la couverture.",
        approachTitle:"Approche intégrative",
        approachSub:"Psychodynamique + TCC + interventions informées par l’EMDR, dans un cadre clair et sécurisé.",
        servicesTitle:"Services",
        servicesSub:"Séances individuelles en présentiel à Constantine ou en ligne, plus formations et ateliers.",
        bookTitle:"Le livre",
        bookSub:"La narcissisme dans les liens familiaux : guide de conscience, empowerment et guérison…",
        blogTitle:"Blog",
        blogSub:"Articles psycho-éducatifs, accessibles et rigoureux.",
        activitiesTitle:"Activités",
        activitiesSub:"Séminaires, conférences, ateliers et formations—passés et à venir.",
        bookingTitle:"Demande de rendez-vous",
        bookingSub:"Ce formulaire sert uniquement à la planification. Merci d’éviter d’y partager des informations sensibles.",
        contactTitle:"Contact",
        contactSub:"Constantine, Algérie • Présentiel + En ligne",
        legalTitle:"Confidentialité & avertissement"
      },
      cards:{
        psychodynamic:{t:"Lecture psychodynamique", p:"Comprendre les schémas relationnels, l’histoire et ce qui se répète—sans jugement ni précipitation."},
        cbt:{t:"Outils TCC", p:"Des outils concrets : pensées/émotions/comportements, anxiété, limites, communication."},
        emdr:{t:"Interventions informées EMDR", p:"Quand c’est indiqué, interventions informées par l’EMDR pour les traces traumatiques, dans un cadre sécurisé."}
      },
      about:{
        h:"Meriem Messaï-Ahmed",
        role:"Psychothérapeute",
        body1:"Psychothérapeute, titulaire d’une licence et d’un master en psychologie clinique. Elle s’intéresse à la santé mentale et poursuit son parcours académique en psychologie de la santé, convaincue de l’importance de relier compréhension clinique et intervention intégrative.",
        body2:"Formée aux TCC (CBT) et à des techniques contemporaines, dont l’EMDR, ainsi que des techniques de relaxation.",
        body3:"Formatrice et enseignante, elle a encadré et formé de nombreux étudiants et praticiens de terrain, tout en développant une expérience clinique solide.",
        body4:"Engagée dans des initiatives et associations dédiées à l’accompagnement des enfants à besoins spécifiques. Elle publie également des articles de sensibilisation dans la presse nationale.",
        body5:"Elle accompagne particulièrement les personnes affectées par des dynamiques familiales dysfonctionnelles, et soutient les processus de reconstruction après des violences psychologiques au sein des systèmes familiaux.",
        listTitle:"Domaines de pratique",
        list:["Conseil familial","Thérapie systémique","TCC (CBT)","Interventions informées par l’EMDR","Relaxation & gestion du stress"]
      },
      approach:{
        frameTitle:"Le cadre",
        frame:["Séances généralement de 50 minutes (adaptable).","Confidentialité et respect, avec exceptions de sécurité en cas de danger imminent.","Objectifs réalistes et réévalués régulièrement.","Présentiel ou en ligne selon vos besoins."],
        expectTitle:"À quoi s’attendre au début",
        expect:["Première séance : comprendre votre situation et vos attentes.","Clarifier le cadre : rythme, modalités, limites hors séances.","Proposition d’un plan initial (évolutif)."],
        note:"En cas de danger immédiat, contactez les services d’urgence locaux. Ce site n’est pas un service d’urgence."
      },
      services:{
        s1:{t:"Thérapie individuelle (présentiel/en ligne)", p:"Pour l’anxiété, l’épuisement, les traumatismes, les difficultés relationnelles et l’impact des violences psychologiques.", m:["Présentiel à Constantine","En ligne (Algérie & international)","Approche intégrative"]},
        s2:{t:"Conseil familial & approche systémique", p:"Comprendre les dynamiques, les limites et la communication, avec un soutien pratique au changement.", m:["Liens familiaux","Schémas relationnels","Outils de communication"]},
        s3:{t:"Formations & ateliers", p:"Encadrement d’étudiants/praticiens et ateliers de sensibilisation pour le grand public.", m:["Ateliers/séminaires","Formations","Interventions"]},
      },
      book:{
        title:"النرجسية في الروابط الأسرية",
        sub:"دليلك للوعي، التمكين، والشفاء…",
        desc:"Un guide pratique, inspiré des TCC, pour comprendre certaines dynamiques familiales et retrouver des ressources de protection et de reconstruction.",
        tags:["Conscience","Limites","Violences psychologiques","Guérison","Famille"],
        cta:"Demander des infos sur le livre"
      },
      blog:{
        posts:[
          {t:"Conflit ou violence psychologique ?", p:"Repères pour comprendre sans minimiser ni dramatiser."},
          {t:"Les limites saines en famille", p:"Pourquoi la culpabilité apparaît, et comment commencer."},
          {t:"Quand la relation épuise", p:"De l’usure silencieuse à une reprise progressive de soi."}
        ]
      },
      activities:{
        items:[
          {t:"Séminaire : santé mentale & liens familiaux", p:"Psychoéducation : schémas relationnels, limites, demande d’aide.", meta:"Constantine • Présentiel"},
          {t:"Atelier : outils TCC contre l’anxiété", p:"Exercices : pensées/émotions/comportements, rumination, organisation.", meta:"En ligne"},
          {t:"Communication en conférence", p:"Thèmes possibles : violence psychologique familiale et effets sur l’attachement.", meta:"À annoncer"}
        ]
      },
      booking:{
        labels:{
          name:"Nom complet",
          language:"Langue préférée",
          mode:"Type de séance",
          contact:"Moyen de contact",
          when:"Jours/heures préférés",
          topic:"Motif bref (une ligne)",
          consent:"J’accepte l’utilisation de mes données uniquement pour être recontacté au sujet du rendez-vous."
        },
        options:{
          lang:["العربية","Français","English (UK)"],
          mode:["Présentiel (Constantine)","En ligne"],
          contact:["Téléphone","WhatsApp","E-mail"]
        },
        submit:"Envoyer la demande",
        success:"Votre demande a bien été reçue. Réponse sous 24–48h ouvrées. (Merci de ne pas envoyer d’informations urgentes via ce formulaire.)"
      },
      contact:{
        clinic:"Cabinet : Constantine, Algérie",
        online:"Séances en ligne disponibles",
        placeholders:"Modifiez les coordonnées dans script.js",
        details:["E-mail : example@clinic.dz","Téléphone/WhatsApp : +213 XX XX XX XX","Horaires : sur rendez-vous"]
      },
      legal:{
        p1:"Nous respectons votre confidentialité. Ce site sert à l’information et à la planification.",
        p2:"Merci d’éviter toute information sensible dans le formulaire. Les données sont utilisées uniquement pour répondre à votre demande."
      }
    },
    "en-gb": {
      dir: "ltr",
      localeName: "English (UK)",
      nav: {home:"Home", about:"About", approach:"Approach", services:"Services", book:"Book", blog:"Blog", activities:"Activities", booking:"Booking", contact:"Contact"},
      hero: {
        eyebrow:"Constantine, Algeria • In-person + Online",
        title:"A safe space to understand and move forward",
        subtitle:"Mariam Messai-Ahmed • Psychotherapist | Writer | Researcher | Trainer",
        desc:"An integrative approach combining psychodynamic understanding, practical CBT tools, EMDR-informed interventions, and relaxation techniques—tailored to your pace and needs.",
        cta1:"Request an appointment",
        cta2:"Learn more",
        pills:["In-person in Constantine","Online sessions","Booking requests"]
      },

      notice: "Notice: this website does not provide emergency services. If you are in immediate danger, please contact local emergency services.",
      
      sections:{
        howTitle:"How I Support You",
        howSub:"Deep understanding paired with practical tools, so progress is steady and realistic.",
        aboutTitle:"About the therapist",
        aboutSub:"Professional profile adapted for a clinic website, based on the book cover description.",
        approachTitle:"Integrative approach",
        approachSub:"Psychodynamic + CBT + EMDR-informed work, within a clear and safe therapeutic frame.",
        servicesTitle:"Services",
        servicesSub:"Individual therapy in Constantine or online, plus training and workshops.",
        bookTitle:"The book",
        bookSub:"Narcissism in family bonds: a guide to awareness, empowerment and healing…",
        blogTitle:"Blog",
        blogSub:"Psycho-educational articles, written in accessible language.",
        activitiesTitle:"Activities",
        activitiesSub:"Seminars, workshops, conferences and trainings—past and upcoming.",
        bookingTitle:"Booking request",
        bookingSub:"This form is for scheduling only. Please avoid sharing sensitive clinical details here.",
        contactTitle:"Contact",
        contactSub:"Constantine, Algeria • In-person + Online",
        legalTitle:"Privacy & notice"
      },
      cards:{
        psychodynamic:{t:"Psychodynamic understanding", p:"Exploring relational patterns, early experiences, and meanings that repeat—without judgement or rush."},
        cbt:{t:"Practical CBT tools", p:"Clear skills: thoughts/emotions/behaviours, anxiety management, boundaries, and communication."},
        emdr:{t:"EMDR-informed interventions", p:"Where appropriate, EMDR-informed work for distressing memories and trauma impacts, within a safe frame."}
      },
      about:{
        h:"Mariam Messai-Ahmed",
        role:"Psychotherapist",
        body1:"Mariam Msai-Ahmed is a psychotherapist with a Bachelor’s and Master’s degree in Clinical Psychology. She is dedicated to mental health and is pursuing further academic work in Health Psychology, with a strong belief in connecting deep clinical understanding with integrative therapeutic intervention.",
        body2:"She is trained in CBT and contemporary therapeutic techniques, including EMDR-informed work and relaxation approaches.",
        body3:"As an educator and trainer, she has supervised and trained many students and field practitioners across multiple areas of psychology, supported by several years of applied clinical experience.",
        body4:"She has contributed to initiatives and associations supporting children with special needs, and writes psycho-educational articles for national media to make psychological knowledge accessible and meaningful.",
        body5:"Her work particularly supports individuals affected by dysfunctional family dynamics, including recovery processes following psychological and emotional abuse within family systems.",
        listTitle:"Areas of practice",
        list:["Family counselling","Systemic therapy","CBT","EMDR-informed interventions","Stress management & relaxation"]
      },
      approach:{
        frameTitle:"The therapeutic frame",
        frame:["Sessions are typically 50 minutes (adaptable).","Confidentiality and respect, with safety exceptions in cases of imminent risk.","Realistic goals, reviewed periodically.","In-person or online depending on your needs."],
        expectTitle:"What to expect at the start",
        expect:["An initial session to understand your context and expectations.","Clear boundaries: frequency, format, and contact outside sessions.","An initial plan (which can evolve as the work progresses)."],
        note:"If you are at immediate risk, contact local emergency services. This website is not an emergency service."
      },
      services:{
        s1:{t:"Individual therapy (in-person/online)", p:"Support with anxiety, burnout, trauma impacts, relationship difficulties, and the effects of psychological abuse in family contexts.", m:["In-person in Constantine","Online for Algeria & abroad","Integrative frame"]},
        s2:{t:"Family counselling & systemic work", p:"Understanding family dynamics, boundaries, and communication, with practical support for change.", m:["Family bonds","Relational patterns","Communication tools"]},
        s3:{t:"Training & workshops", p:"Training for students and practitioners, plus psycho-educational workshops for the public.", m:["Workshops/seminars","Professional training","Talks"]},
      },
      book:{
        title:"النرجسية في الروابط الأسرية",
        sub:"دليلك للوعي، التمكين، والشفاء…",
        desc:"A practical guide, CBT-informed, to understand certain family dynamics and build awareness, boundaries, and a path towards recovery.",
        tags:["Awareness","Boundaries","Psychological abuse","Recovery","Family dynamics"],
        cta:"Enquire about the book"
      },
      blog:{
        posts:[
          {t:"Conflict or psychological abuse?", p:"Clues to help you understand what is happening without minimising or catastrophising."},
          {t:"Healthy boundaries in families", p:"Why guilt shows up, and how to begin in a realistic way."},
          {t:"When a relationship becomes draining", p:"From silent depletion to gradually rebuilding your inner voice."}
        ]
      },
      activities:{
        items:[
          {t:"Seminar: mental health & family bonds", p:"Psychoeducation on relational patterns, boundaries, and seeking support.", meta:"Constantine • In-person"},
          {t:"Workshop: CBT tools for anxiety", p:"Practical exercises: thoughts/emotions/behaviours, rumination, daily structure.", meta:"Online"},
          {t:"Conference contribution", p:"Suggested themes: family psychological abuse and impacts on attachment and identity.", meta:"To be announced"}
        ]
      },
      booking:{
        labels:{
          name:"Full name",
          language:"Preferred language",
          mode:"Session type",
          contact:"Preferred contact method",
          when:"Preferred days/times",
          topic:"Brief reason (one line)",
          consent:"I consent to my details being used solely to respond to this booking request."
        },
        options:{
          lang:["العربية","Français","English (UK)"],
          mode:["In-person (Constantine)","Online"],
          contact:["Phone","WhatsApp","Email"]
        },
        submit:"Send request",
        success:"Your request has been received. We will respond within 24–48 working hours. (Please do not send urgent information via this form.)"
      },
      contact:{
        clinic:"Clinic: Constantine, Algeria",
        online:"Online sessions available",
        placeholders:"Edit contact details in script.js",
        details:["Email: example@clinic.dz","Phone/WhatsApp: +213 XX XX XX XX","Hours: by appointment"]
      },
      legal:{
        p1:"We respect your privacy. This website is for information and scheduling only.",
        p2:"Please avoid sharing sensitive details via the form. Data is used only to respond to your booking request."
      }
    }
  };

  const els = {
    body: document.body,
    html: document.documentElement,
    title: document.querySelector("title"),
    navLinks: document.querySelectorAll("[data-nav]"),
    langButtons: document.querySelectorAll("[data-lang-btn]"),
    t: (id) => document.querySelector(`[data-i18n="${id}"]`),
    tAll: (id) => document.querySelectorAll(`[data-i18n="${id}"]`)
  };

  function setDir(lang){
    const dir = I18N[lang].dir;
    els.html.setAttribute("lang", lang === "en-gb" ? "en-GB" : lang);
    els.html.setAttribute("dir", dir);
    els.body.classList.toggle("rtl", dir === "rtl");
    els.body.classList.toggle("ltr", dir !== "rtl");
  }

  function applyText(lang){
    const L = I18N[lang];

    // Update nav
    const navMap = L.nav;
    document.querySelectorAll("[data-nav]").forEach(a=>{
      const key = a.getAttribute("data-nav");
      a.textContent = navMap[key] || a.textContent;
    });

    // Hero & sections
    document.querySelectorAll("[data-i18n]").forEach(node=>{
      const key = node.getAttribute("data-i18n");
      const parts = key.split(".");
      let val = L;
      for (const p of parts){
        if (val && Object.prototype.hasOwnProperty.call(val, p)) val = val[p];
        else { val = null; break; }
      }
      if (typeof val === "string") node.textContent = val;
    });

    // Pills
    const pillWrap = document.querySelector("[data-pills]");
    if (pillWrap){
      pillWrap.innerHTML = "";
      (L.hero.pills || []).forEach(txt=>{
        const s = document.createElement("span");
        s.className = "pill";
        s.textContent = txt;
        pillWrap.appendChild(s);
      });
    }

    // About list
    const aboutList = document.querySelector("[data-about-list]");
    if (aboutList){
      aboutList.innerHTML = "";
      (L.about.list || []).forEach(txt=>{
        const li = document.createElement("li");
        li.textContent = txt;
        aboutList.appendChild(li);
      });
    }

    // Frame & expect lists
    const frameList = document.querySelector("[data-frame-list]");
    if (frameList){
      frameList.innerHTML = "";
      (L.approach.frame || []).forEach(txt=>{
        const li = document.createElement("li");
        li.textContent = txt;
        frameList.appendChild(li);
      });
    }
    const expectList = document.querySelector("[data-expect-list]");
    if (expectList){
      expectList.innerHTML = "";
      (L.approach.expect || []).forEach(txt=>{
        const li = document.createElement("li");
        li.textContent = txt;
        expectList.appendChild(li);
      });
    }

    // Services meta
    ["s1","s2","s3"].forEach(s=>{
      const ul = document.querySelector(`[data-service-meta="${s}"]`);
      if (!ul) return;
      ul.innerHTML = "";
      (L.services[s].m || []).forEach(txt=>{
        const li = document.createElement("li");
        li.textContent = txt;
        ul.appendChild(li);
      });
    });

    // Book tags
    const tags = document.querySelector("[data-book-tags]");
    if (tags){
      tags.innerHTML = "";
      (L.book.tags || []).forEach(txt=>{
        const span = document.createElement("span");
        span.className="tag";
        span.textContent = txt;
        tags.appendChild(span);
      });
    }

    // Blog posts
    const blog = document.querySelector("[data-blog]");
    if (blog){
      blog.innerHTML = "";
      (L.blog.posts || []).forEach(p=>{
        const d = document.createElement("div");
        d.className="card item";
        d.innerHTML = `<h3>${p.t}</h3><p>${p.p}</p>`;
        blog.appendChild(d);
      });
    }

    // Activities
    const act = document.querySelector("[data-activities]");
    if (act){
      act.innerHTML = "";
      (L.activities.items || []).forEach(x=>{
        const d = document.createElement("div");
        d.className="card item";
        d.innerHTML = `<h3>${x.t}</h3><p>${x.p}</p><div class="meta"><span>•</span><span>${x.meta}</span></div>`;
        act.appendChild(d);
      });
    }

    // Booking labels/options
    const setLabel = (id, txt) => {
      const n = document.querySelector(`[data-label="${id}"]`);
      if (n) n.textContent = txt;
    };
    const labels = L.booking.labels;
    Object.keys(labels).forEach(k=>setLabel(k, labels[k]));

    const setSelect = (id, opts) => {
      const s = document.querySelector(`#${id}`);
      if (!s) return;
      s.innerHTML = "";
      opts.forEach(o=>{
        const op = document.createElement("option");
        op.value = o;
        op.textContent = o;
        s.appendChild(op);
      });
    };
    setSelect("prefLang", L.booking.options.lang);
    setSelect("mode", L.booking.options.mode);
    setSelect("contactMethod", L.booking.options.contact);

    const submitBtn = document.querySelector("[data-submit]");
    if (submitBtn) submitBtn.textContent = L.booking.submit;

    // Contact details
    const details = document.querySelector("[data-contact-details]");
    if (details){
      details.innerHTML = "";
      (L.contact.details || []).forEach(t=>{
        const li = document.createElement("li");
        li.textContent = t;
        details.appendChild(li);
      });
    }

    // Title
    document.title = (lang === "ar")
      ? "مريم مسعي-أحمد | عيادة نفسية في قسنطينة"
      : (lang === "fr")
        ? "Meriem Messaï-Ahmed | Cabinet à Constantine"
        : "Mariam Msai-Ahmed | Therapy in Constantine & Online";
  }

  function setActiveButton(lang){
    document.querySelectorAll("[data-lang-btn]").forEach(b=>{
      b.classList.toggle("active", b.getAttribute("data-lang-btn") === lang);
    });
  }

  function setLang(lang){
    if (!I18N[lang]) lang = "ar";
    state.lang = lang;
    localStorage.setItem("lang", lang);
    setDir(lang);
    applyText(lang);
    setActiveButton(lang);
  }

  // Booking form - local test: generates mailto and stores local copy
  const CONFIG = {
    clinicEmail: "example@clinic.dz",   // CHANGE ME
    clinicPhone: "+213 XX XX XX XX",     // CHANGE ME
    clinicWhatsApp: "+213 XX XX XX XX"   // CHANGE ME
  };

  function setupForm(){
    const form = document.querySelector("#bookingForm");
    const ok = document.querySelector("#successBox");
    if (!form) return;
    form.addEventListener("submit", (e)=>{
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.consent) return;

      // Store locally for testing
      const key = "bookingRequests";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));

      // Build a minimal mailto (no sensitive detail)
      const subject = encodeURIComponent("Booking request - " + (data.name || ""));
      const bodyLines = [
        "Booking request",
        "Name: " + (data.name || ""),
        "Preferred language: " + (data.prefLang || ""),
        "Session type: " + (data.mode || ""),
        "Contact method: " + (data.contactMethod || ""),
        "Preferred times: " + (data.when || ""),
        "Brief reason: " + (data.topic || "")
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = `mailto:${CONFIG.clinicEmail}?subject=${subject}&body=${body}`;

      ok.style.display = "block";
      ok.scrollIntoView({behavior:"smooth", block:"center"});
      form.reset();
    });
  }

  // Init language buttons
  document.addEventListener("click", (e)=>{
    const btn = e.target.closest("[data-lang-btn]");
    if (btn){
      setLang(btn.getAttribute("data-lang-btn"));
    }
  });

  // Smooth close on mobile: no-op; keep simple.

  // Run
  setLang(state.lang);
  setupForm();
})();
