// قاعدة بيانات الأدوية النفسية الشاملة
const drugsDatabase = {
    antidepressants: [
        {
            name: "Fluoxetine",
            arabicName: "فلوكسيتين",
            tradeName: "Prozac",
            classification: "SSRI",
            arabicClassification: "مثبط انتقائي لإعادة امتصاص السيروتونين",
            uses: [
                "اكتئاب شديد",
                "اضطراب الوسواس القهري",
                "اضطراب القلق الاجتماعي",
                "الشره المرضي العصبي"
            ],
            mechanism: "يزيد من مستوى السيروتونين في المشبك العصبي عن طريق تثبيط إعادة امتصاصه",
            dosage: {
                initial: "20 مجم مرة يومياً صباحاً",
                range: "20-80 مجم/يوم",
                max: "80 مجم/يوم"
            },
            sideEffects: [
                "غثيان وقيء",
                "أرق أو نعاس",
                "صداع ودوار",
                "جفاف الفم",
                "انخفاض الرغبة الجنسية",
                "زيادة التعرق"
            ],
            warnings: [
                "متلازمة السيروتونين عند الدمج مع أدوية أخرى",
                "زيادة الأفكار الانتحارية في بداية العلاج"
            ]
        },
        {
            name: "Sertraline",
            arabicName: "سيرترالين",
            tradeName: "Zoloft",
            classification: "SSRI",
            arabicClassification: "مثبط انتقائي لإعادة امتصاص السيروتونين",
            uses: [
                "اكتئاب شديد",
                "اضطراب الهلع",
                "اضطراب الوسواس القهري",
                "اضطراب ما بعد الصدمة",
                "اضطراب القلق الاجتماعي"
            ],
            mechanism: "يثبط إعادة امتصاص السيروتونين في الخلايا العصبية",
            dosage: {
                initial: "50 مجم مرة يومياً",
                range: "50-200 مجم/يوم",
                max: "200 مجم/يوم"
            },
            sideEffects: [
                "إسهال",
                "غثيان",
                "دوار",
                "أرق",
                "جفاف الفم",
                "تعب وإرهاق"
            ],
            warnings: [
                "تجنب الاستخدام مع مثبطات MAO"
            ]
        },
        {
            name: "Escitalopram",
            arabicName: "إسيتالوبرام",
            tradeName: "Lexapro",
            classification: "SSRI",
            arabicClassification: "مثبط انتقائي لإعادة امتصاص السيروتونين",
            uses: [
                "اكتئاب شديد",
                "اضطراب القلق العام"
            ],
            mechanism: "يزيد مستوى السيروتونين بتثبيط إعادة امتصاصه",
            dosage: {
                initial: "10 مجم مرة يومياً",
                range: "10-20 مجم/يوم",
                max: "20 مجم/يوم"
            },
            sideEffects: [
                "غثيان",
                "أرق",
                "تعب",
                "زيادة التعرق",
                "ضعف جنسي"
            ],
            warnings: [
                "مراقبة إطالة QT في تخطيط القلب"
            ]
        },
        {
            name: "Venlafaxine",
            arabicName: "فينلافاكسين",
            tradeName: "Effexor XR",
            classification: "SNRI",
            arabicClassification: "مثبط إعادة امتصاص السيروتونين والنورأدرينالين",
            uses: [
                "اكتئاب شديد",
                "اضطراب القلق العام",
                "اضطراب القلق الاجتماعي",
                "اضطراب الهلع"
            ],
            mechanism: "يثبط إعادة امتصاص السيروتونين والنورأدرينالين",
            dosage: {
                initial: "75 مجم مرة يومياً",
                range: "75-225 مجم/يوم",
                max: "225 مجم/يوم"
            },
            sideEffects: [
                "ارتفاع ضغط الدم",
                "غثيان",
                "دوار",
                "جفاف الفم",
                "أرق",
                "تعرق زائد"
            ],
            warnings: [
                "مراقبة ضغط الدم بانتظام",
                "أعراض انسحاب شديدة عند التوقف المفاجئ"
            ]
        },
        {
            name: "Amitriptyline",
            arabicName: "أميتريبتيلين",
            tradeName: "Elavil",
            classification: "TCA",
            arabicClassification: "مضاد اكتئاب ثلاثي الحلقات",
            uses: [
                "اكتئاب شديد",
                "ألم الأعصاب المزمن",
                "الصداع النصفي (وقائي)",
                "الأرق"
            ],
            mechanism: "يثبط إعادة امتصاص النورأدرينالين والسيروتونين",
            dosage: {
                initial: "25-50 مجم ليلاً",
                range: "75-150 مجم/يوم",
                max: "300 مجم/يوم"
            },
            sideEffects: [
                "جفاف الفم الشديد",
                "إمساك",
                "عدم وضوح الرؤية",
                "احتباس البول",
                "دوار",
                "زيادة الوزن",
                "نعاس شديد"
            ],
            warnings: [
                "سمية قلبية محتملة",
                "خطر في كبار السن",
                "تجنب القيادة"
            ]
        },
        {
            name: "Bupropion",
            arabicName: "بوبروبيون",
            tradeName: "Wellbutrin",
            classification: "Atypical",
            arabicClassification: "مضاد اكتئاب غير نمطي",
            uses: [
                "اكتئاب شديد",
                "الإقلاع عن التدخين",
                "اضطراب القلق الموسمي"
            ],
            mechanism: "يثبط إعادة امتصاص الدوبامين والنورأدرينالين",
            dosage: {
                initial: "150 مجم مرة يومياً",
                range: "150-300 مجم/يوم",
                max: "450 مجم/يوم"
            },
            sideEffects: [
                "أرق",
                "جفاف الفم",
                "صداع",
                "غثيان",
                "رعشة"
            ],
            warnings: [
                "خطر النوبات التشنجية (خاصة بجرعات عالية)",
                "موانع: تاريخ من الصرع أو اضطرابات الأكل"
            ]
        },
        {
            name: "Mirtazapine",
            arabicName: "ميرتازابين",
            tradeName: "Remeron",
            classification: "Atypical",
            arabicClassification: "مضاد اكتئاب غير نمطي",
            uses: [
                "اكتئاب شديد",
                "الأرق المرافق للاكتئاب"
            ],
            mechanism: "يزيد إفراز النورأدرينالين والسيروتونين عبر آليات مختلفة",
            dosage: {
                initial: "15 مجم ليلاً",
                range: "15-45 مجم/يوم",
                max: "45 مجم/يوم"
            },
            sideEffects: [
                "نعاس شديد",
                "زيادة كبيرة في الوزن",
                "زيادة الشهية",
                "جفاف الفم"
            ],
            warnings: [
                "مفيد للمرضى الذين يعانون من فقدان الشهية والأرق"
            ]
        }
    ],
    moodStabilizers: [
        {
            name: "Lithium Carbonate",
            arabicName: "ليثيوم كربونات",
            tradeName: "Lithium",
            classification: "Mood Stabilizer",
            arabicClassification: "مثبت مزاج",
            uses: [
                "اضطراب ثنائي القطب (نوبات الهوس والاكتئاب)",
                "الوقاية من تكرار النوبات",
                "السلوك العدواني"
            ],
            mechanism: "آلية العمل غير واضحة تماماً، يؤثر على توازن الصوديوم والناقلات العصبية",
            dosage: {
                initial: "300 مجم مرتين يومياً",
                range: "900-1800 مجم/يوم",
                therapeutic: "المستوى العلاجي في الدم: 0.6-1.2 mEq/L"
            },
            sideEffects: [
                "رعشة خفيفة في اليدين",
                "كثرة التبول والعطش",
                "غثيان وإسهال",
                "زيادة الوزن",
                "قصور الغدة الدرقية"
            ],
            warnings: [
                "مراقبة دورية لمستوى الليثيوم في الدم (كل 3-6 أشهر)",
                "مراقبة وظائف الكلى والغدة الدرقية",
                "نافذة علاجية ضيقة (السمية تبدأ عند >1.5 mEq/L)",
                "تجنب الجفاف وقلة الملح"
            ]
        },
        {
            name: "Valproate",
            arabicName: "فالبروات",
            tradeName: "Depakote",
            classification: "Mood Stabilizer",
            arabicClassification: "مثبت مزاج ومضاد صرع",
            uses: [
                "نوبات الهوس الحاد",
                "اضطراب ثنائي القطب (وقائي)",
                "الصرع",
                "الصداع النصفي (وقائي)"
            ],
            mechanism: "يزيد من مستوى GABA في الدماغ، مما يقلل الإثارة العصبية",
            dosage: {
                initial: "250 مجم مرتين يومياً",
                range: "750-2000 مجم/يوم",
                therapeutic: "المستوى العلاجي: 50-125 mcg/mL"
            },
            sideEffects: [
                "غثيان وقيء",
                "زيادة الوزن",
                "تساقط الشعر (عابر)",
                "رعشة",
                "دوار ونعاس"
            ],
            warnings: [
                "سمية كبدية محتملة - مراقبة وظائف الكبد",
                "تشوهات جنينية (موانع في الحمل)",
                "مراقبة تعداد الدم"
            ]
        },
        {
            name: "Carbamazepine",
            arabicName: "كاربامازيبين",
            tradeName: "Tegretol",
            classification: "Mood Stabilizer",
            arabicClassification: "مثبت مزاج ومضاد صرع",
            uses: [
                "نوبات الهوس الحاد",
                "اضطراب ثنائي القطب",
                "الصرع",
                "ألم العصب ثلاثي التوائم"
            ],
            mechanism: "يثبط قنوات الصوديوم في الأعصاب، مما يقلل الإثارة",
            dosage: {
                initial: "200 مجم مرتين يومياً",
                range: "400-1600 مجم/يوم",
                therapeutic: "المستوى العلاجي: 4-12 mcg/mL"
            },
            sideEffects: [
                "دوار ورنح (عدم التوازن)",
                "غثيان",
                "نعاس",
                "عدم وضوح الرؤية المزدوجة"
            ],
            warnings: [
                "تداخلات دوائية كثيرة (يسرع استقلاب أدوية أخرى)",
                "مراقبة تعداد الدم - خطر نقص الكريات البيض",
                "متلازمة ستيفنز جونسون (نادر لكن خطير)"
            ]
        },
        {
            name: "Lamotrigine",
            arabicName: "لاموتريجين",
            tradeName: "Lamictal",
            classification: "Mood Stabilizer",
            arabicClassification: "مثبت مزاج ومضاد صرع",
            uses: [
                "اضطراب ثنائي القطب (خاصة الاكتئاب)",
                "الصرع",
                "الوقاية من نوبات الاكتئاب في ثنائي القطب"
            ],
            mechanism: "يثبط قنوات الصوديوم ويقلل إفراز الجلوتامات",
            dosage: {
                initial: "25 مجم مرة يومياً لمدة أسبوعين",
                range: "100-400 مجم/يوم",
                note: "يجب زيادة الجرعة تدريجياً جداً"
            },
            sideEffects: [
                "صداع",
                "دوار",
                "غثيان",
                "طفح جلدي (شائع وخفيف)"
            ],
            warnings: [
                "طفح جلدي خطير (متلازمة ستيفنز جونسون) - نادر",
                "يجب زيادة الجرعة ببطء شديد لتقليل خطر الطفح",
                "إيقاف الدواء فوراً عند ظهور طفح جلدي"
            ]
        }
    ],
    anxiolytics: [
        {
            name: "Alprazolam",
            arabicName: "ألبرازولام",
            tradeName: "Xanax",
            classification: "Benzodiazepine",
            arabicClassification: "بنزوديازيبين",
            uses: [
                "اضطراب القلق العام",
                "اضطراب الهلع",
                "القلق قصير المدى"
            ],
            mechanism: "يعزز تأثير GABA (ناقل عصبي مثبط)، مما يقلل نشاط الدماغ",
            dosage: {
                initial: "0.25-0.5 مجم 3 مرات يومياً",
                range: "0.5-4 مجم/يوم",
                max: "4 مجم/يوم"
            },
            sideEffects: [
                "نعاس ودوار",
                "ضعف التركيز والذاكرة",
                "تعب",
                "صعوبة التنسيق الحركي"
            ],
            warnings: [
                "خطر الاعتماد والإدمان",
                "أعراض انسحاب خطيرة (نوبات تشنجية)",
                "تجنب القيادة والأنشطة الخطرة",
                "تجنب الكحول تماماً"
            ]
        },
        {
            name: "Lorazepam",
            arabicName: "لورازيبام",
            tradeName: "Ativan",
            classification: "Benzodiazepine",
            arabicClassification: "بنزوديازيبين",
            uses: [
                "اضطراب القلق",
                "القلق الحاد",
                "الأرق قصير المدى",
                "نوبات الصرع الحادة"
            ],
            mechanism: "يعزز نشاط GABA المثبط في الجهاز العصبي المركزي",
            dosage: {
                initial: "0.5-1 مجم 2-3 مرات يومياً",
                range: "1-6 مجم/يوم",
                max: "10 مجم/يوم"
            },
            sideEffects: [
                "نعاس",
                "دوار",
                "ضعف",
                "عدم الاتزان"
            ],
            warnings: [
                "استخدام قصير المدى فقط (2-4 أسابيع)",
                "خطر الإدمان",
                "يجب تخفيض الجرعة تدريجياً"
            ]
        },
        {
            name: "Diazepam",
            arabicName: "ديازيبام",
            tradeName: "Valium",
            classification: "Benzodiazepine",
            arabicClassification: "بنزوديازيبين",
            uses: [
                "اضطراب القلق",
                "تشنجات العضلات",
                "أعراض انسحاب الكحول",
                "نوبات الصرع"
            ],
            mechanism: "يزيد من نشاط GABA المثبط",
            dosage: {
                initial: "2-10 مجم 2-4 مرات يومياً",
                range: "4-40 مجم/يوم",
                note: "مفعول طويل المدى"
            },
            sideEffects: [
                "نعاس شديد",
                "دوار",
                "ارتخاء العضلات",
                "تعب"
            ],
            warnings: [
                "نصف عمر طويل - يتراكم في الجسم",
                "خطر الإدمان",
                "تجنب في كبار السن"
            ]
        },
        {
            name: "Buspirone",
            arabicName: "بوسبيرون",
            tradeName: "BuSpar",
            classification: "Non-benzodiazepine",
            arabicClassification: "مضاد قلق غير بنزوديازيبين",
            uses: [
                "اضطراب القلق العام",
                "القلق المزمن"
            ],
            mechanism: "ناهض جزئي لمستقبلات السيروتونين 5-HT1A",
            dosage: {
                initial: "7.5 مجم مرتين يومياً",
                range: "15-60 مجم/يوم",
                max: "60 مجم/يوم"
            },
            sideEffects: [
                "دوار",
                "غثيان",
                "صداع",
                "عصبية"
            ],
            warnings: [
                "لا يسبب إدمان",
                "يستغرق 2-4 أسابيع ليبدأ المفعول",
                "غير فعال للقلق الحاد"
            ]
        },
        {
            name: "Propranolol",
            arabicName: "بروبرانولول",
            tradeName: "Inderal",
            classification: "Beta-blocker",
            arabicClassification: "حاصر بيتا",
            uses: [
                "القلق الاجتماعي (خاصة الأعراض الجسدية)",
                "الأعراض الجسدية للقلق (رعشة، خفقان)",
                "الصداع النصفي",
                "ارتفاع ضغط الدم"
            ],
            mechanism: "يحجب مستقبلات بيتا الأدرينالية، مما يقلل الأعراض الجسدية للقلق",
            dosage: {
                initial: "10-40 مجم قبل الموقف المثير للقلق",
                range: "20-80 مجم/يوم",
                note: "للاستخدام المستمر أو حسب الحاجة"
            },
            sideEffects: [
                "انخفاض ضغط الدم",
                "بطء القلب",
                "تعب",
                "برودة الأطراف"
            ],
            warnings: [
                "موانع: الربو، بطء القلب الشديد",
                "يخفي أعراض نقص السكر في الدم",
                "يجب التوقف تدريجياً"
            ]
        }
    ]
};

// حالات سريرية لصيدلي الطوارئ
const clinicalCases = [
    {
        case: "مريضة 35 سنة تعاني من اكتئاب شديد مع فقدان الشهية والأرق المزمن. ما الدواء الأنسب؟",
        correct: "Mirtazapine",
        correctArabic: "ميرتازابين",
        options: ["Mirtazapine", "Bupropion", "Fluoxetine", "Sertraline"],
        explanation: "ميرتازابين مفيد جداً للمرضى الذين يعانون من فقدان الشهية والأرق لأنه يزيد الشهية ويسبب نعاساً"
    },
    {
        case: "مريض 28 سنة يعاني من اضطراب ثنائي القطب مع نوبات هوس متكررة. ما أفضل علاج وقائي طويل المدى؟",
        correct: "Lithium Carbonate",
        correctArabic: "ليثيوم",
        options: ["Lithium Carbonate", "Alprazolam", "Fluoxetine", "Propranolol"],
        explanation: "الليثيوم هو المعيار الذهبي للوقاية من نوبات الهوس في اضطراب ثنائي القطب"
    },
    {
        case: "طالبة جامعية 22 سنة تعاني من قلق شديد قبل الامتحانات مع خفقان القلب ورعشة اليدين. ما الدواء الأنسب للاستخدام عند الحاجة؟",
        correct: "Propranolol",
        correctArabic: "بروبرانولول",
        options: ["Propranolol", "Lithium Carbonate", "Mirtazapine", "Carbamazepine"],
        explanation: "بروبرانولول فعال للأعراض الجسدية للقلق (خفقان، رعشة) ويمكن استخدامه عند الحاجة"
    },
    {
        case: "مريض 45 سنة يعاني من اكتئاب شديد ويرغب في الإقلاع عن التدخين. ما الدواء الذي يعالج الحالتين؟",
        correct: "Bupropion",
        correctArabic: "بوبروبيون",
        options: ["Bupropion", "Amitriptyline", "Lorazepam", "Valproate"],
        explanation: "بوبروبيون يُستخدم لعلاج الاكتئاب والمساعدة في الإقلاع عن التدخين"
    },
    {
        case: "مريضة حامل في الشهر الثاني تعاني من اضطراب ثنائي القطب. أي دواء يجب تجنبه تماماً؟",
        correct: "Valproate",
        correctArabic: "فالبروات",
        options: ["Valproate", "Buspirone", "Escitalopram", "Propranolol"],
        explanation: "فالبروات يسبب تشوهات جنينية خطيرة ويُمنع استخدامه في الحمل"
    },
    {
        case: "مريض 60 سنة يعاني من اكتئاب وألم أعصاب مزمن في القدمين. ما الدواء الذي يعالج الحالتين؟",
        correct: "Amitriptyline",
        correctArabic: "أميتريبتيلين",
        options: ["Amitriptyline", "Alprazolam", "Lithium Carbonate", "Buspirone"],
        explanation: "أميتريبتيلين فعال لعلاج الاكتئاب وألم الأعصاب المزمن"
    },
    {
        case: "مريض يعاني من اضطراب القلق العام ولا يريد دواء يسبب الإدمان. ما الخيار الأفضل؟",
        correct: "Buspirone",
        correctArabic: "بوسبيرون",
        options: ["Buspirone", "Alprazolam", "Lorazepam", "Diazepam"],
        explanation: "بوسبيرون لا يسبب إدماناً على عكس البنزوديازيبينات"
    },
    {
        case: "مريض 50 سنة يعاني من اضطراب ثنائي القطب ويتناول عدة أدوية أخرى. أي دواء له تداخلات دوائية كثيرة يجب الحذر منه؟",
        correct: "Carbamazepine",
        correctArabic: "كاربامازيبين",
        options: ["Carbamazepine", "Escitalopram", "Lorazepam", "Mirtazapine"],
        explanation: "كاربامازيبين له تداخلات دوائية كثيرة لأنه يسرع استقلاب أدوية أخرى"
    },
    {
        case: "مريض 32 سنة يعاني من اكتئاب ويعمل سائق شاحنة. أي دواء يجب تجنبه بسبب النعاس الشديد؟",
        correct: "Amitriptyline",
        correctArabic: "أميتريبتيلين",
        options: ["Fluoxetine", "Bupropion", "Sertraline", "Amitriptyline"],
        explanation: "أميتريبتيلين يسبب نعاساً شديداً ويجب تجنب القيادة عند تناوله"
    },
    {
        case: "مريضة 40 سنة تعاني من اكتئاب واضطراب الوسواس القهري معاً. ما الدواء الذي يعالج الحالتين؟",
        correct: "Fluoxetine",
        correctArabic: "فلوكسيتين",
        options: ["Fluoxetine", "Bupropion", "Lithium Carbonate", "Propranolol"],
        explanation: "فلوكسيتين (SSRI) فعال لعلاج الاكتئاب واضطراب الوسواس القهري"
    }
];

// أسئلة الآثار الجانبية
const sideEffectsQuestions = [
    {
        question: "أي دواء يسبب زيادة كبيرة في الوزن والشهية كأثر جانبي شائع؟",
        correct: "Mirtazapine",
        correctArabic: "ميرتازابين",
        options: ["Mirtazapine", "Bupropion", "Fluoxetine", "Propranolol"]
    },
    {
        question: "أي دواء يتطلب مراقبة دورية لمستواه في الدم بسبب نافذته العلاجية الضيقة؟",
        correct: "Lithium Carbonate",
        correctArabic: "ليثيوم",
        options: ["Lithium Carbonate", "Sertraline", "Buspirone", "Alprazolam"]
    },
    {
        question: "أي دواء يمكن أن يسبب طفح جلدي خطير (متلازمة ستيفنز جونسون)؟",
        correct: "Lamotrigine",
        correctArabic: "لاموتريجين",
        options: ["Lamotrigine", "Escitalopram", "Lorazepam", "Buspirone"]
    },
    {
        question: "أي دواء يسبب جفاف الفم الشديد والإمساك وعدم وضوح الرؤية؟",
        correct: "Amitriptyline",
        correctArabic: "أميتريبتيلين",
        options: ["Amitriptyline", "Sertraline", "Venlafaxine", "Propranolol"]
    },
    {
        question: "أي دواء يتطلب مراقبة ضغط الدم بانتظام بسبب خطر ارتفاعه؟",
        correct: "Venlafaxine",
        correctArabic: "فينلافاكسين",
        options: ["Venlafaxine", "Fluoxetine", "Buspirone", "Lorazepam"]
    },
    {
        question: "أي دواء له خطر النوبات التشنجية خاصة بجرعات عالية؟",
        correct: "Bupropion",
        correctArabic: "بوبروبيون",
        options: ["Bupropion", "Sertraline", "Mirtazapine", "Buspirone"]
    },
    {
        question: "أي دواء يسبب نعاساً شديداً ويجب تجنب القيادة عند تناوله؟",
        correct: "Diazepam",
        correctArabic: "ديازيبام",
        options: ["Diazepam", "Bupropion", "Fluoxetine", "Propranolol"]
    },
    {
        question: "أي دواء يمكن أن يسبب قصور الغدة الدرقية مع الاستخدام الطويل؟",
        correct: "Lithium Carbonate",
        correctArabic: "ليثيوم",
        options: ["Lithium Carbonate", "Alprazolam", "Escitalopram", "Buspirone"]
    },
    {
        question: "أي دواء له خطر الاعتماد والإدمان مع أعراض انسحاب خطيرة؟",
        correct: "Alprazolam",
        correctArabic: "ألبرازولام",
        options: ["Alprazolam", "Buspirone", "Fluoxetine", "Mirtazapine"]
    },
    {
        question: "أي دواء يتطلب مراقبة وظائف الكبد بسبب خطر السمية الكبدية؟",
        correct: "Valproate",
        correctArabic: "فالبروات",
        options: ["Valproate", "Sertraline", "Lorazepam", "Propranolol"]
    }
];

// أسئلة الجرعات
const dosageQuestions = [
    {
        question: "ما الجرعة الأولية المعتادة لدواء Fluoxetine (فلوكسيتين)؟",
        correct: "20 مجم مرة يومياً صباحاً",
        options: ["20 مجم مرة يومياً صباحاً", "50 مجم مرتين يومياً", "10 مجم 3 مرات يومياً", "100 مجم ليلاً"],
        drug: "Fluoxetine"
    },
    {
        question: "ما المستوى العلاجي المطلوب للليثيوم في الدم؟",
        correct: "0.6-1.2 mEq/L",
        options: ["0.6-1.2 mEq/L", "4-12 mcg/mL", "50-125 mcg/mL", "10-20 mg/L"],
        drug: "Lithium Carbonate"
    },
    {
        question: "ما الجرعة القصوى اليومية لدواء Sertraline (سيرترالين)؟",
        correct: "200 مجم/يوم",
        options: ["200 مجم/يوم", "80 مجم/يوم", "450 مجم/يوم", "60 مجم/يوم"],
        drug: "Sertraline"
    },
    {
        question: "كيف يجب البدء بدواء Lamotrigine (لاموتريجين)؟",
        correct: "25 مجم مرة يومياً لمدة أسبوعين مع زيادة تدريجية بطيئة",
        options: ["25 مجم مرة يومياً لمدة أسبوعين مع زيادة تدريجية بطيئة", "100 مجم مرة واحدة", "300 مجم 3 مرات يومياً", "50 مجم كل 4 ساعات"],
        drug: "Lamotrigine"
    },
    {
        question: "ما الجرعة الأولية لدواء Mirtazapine (ميرتازابين)؟",
        correct: "15 مجم ليلاً",
        options: ["15 مجم ليلاً", "50 مجم صباحاً", "100 مجم مرتين يومياً", "5 مجم 3 مرات يومياً"],
        drug: "Mirtazapine"
    },
    {
        question: "ما الجرعة القصوى اليومية لدواء Bupropion (بوبروبيون)؟",
        correct: "450 مجم/يوم",
        options: ["450 مجم/يوم", "200 مجم/يوم", "80 مجم/يوم", "60 مجم/يوم"],
        drug: "Bupropion"
    },
    {
        question: "متى يُعطى دواء Propranolol للقلق الاجتماعي؟",
        correct: "10-40 مجم قبل الموقف المثير للقلق",
        options: ["10-40 مجم قبل الموقف المثير للقلق", "100 مجم 4 مرات يومياً", "300 مجم ليلاً", "5 مجم كل ساعة"],
        drug: "Propranolol"
    },
    {
        question: "ما الجرعة الأولية لدواء Venlafaxine (فينلافاكسين)؟",
        correct: "75 مجم مرة يومياً",
        options: ["75 مجم مرة يومياً", "20 مجم صباحاً", "300 مجم ليلاً", "10 مجم 3 مرات يومياً"],
        drug: "Venlafaxine"
    },
    {
        question: "ما النطاق العلاجي لدواء Valproate (فالبروات)؟",
        correct: "50-125 mcg/mL",
        options: ["50-125 mcg/mL", "0.6-1.2 mEq/L", "4-12 mcg/mL", "100-200 mg/L"],
        drug: "Valproate"
    },
    {
        question: "ما الجرعة القصوى لدواء Alprazolam (ألبرازولام) يومياً؟",
        correct: "4 مجم/يوم",
        options: ["4 مجم/يوم", "80 مجم/يوم", "450 مجم/يوم", "20 مجم/يوم"],
        drug: "Alprazolam"
    }
];

// أزواج الذاكرة للعبة Memory Match
const memoryPairs = [
    { id: 1, text: "Fluoxetine", pair: "اكتئاب ووسواس قهري" },
    { id: 2, text: "Lithium", pair: "ثنائي القطب" },
    { id: 3, text: "Alprazolam", pair: "اضطراب الهلع" },
    { id: 4, text: "Propranolol", pair: "القلق الاجتماعي" },
    { id: 5, text: "Mirtazapine", pair: "اكتئاب + أرق" },
    { id: 6, text: "Bupropion", pair: "اكتئاب + إقلاع تدخين" },
    { id: 7, text: "Valproate", pair: "نوبات هوس حاد" },
    { id: 8, text: "Buspirone", pair: "قلق مزمن بدون إدمان" }
];

// أدوية لتصنيف
const drugsForClassification = [
    { name: "Fluoxetine", category: "SSRI" },
    { name: "Sertraline", category: "SSRI" },
    { name: "Escitalopram", category: "SSRI" },
    { name: "Venlafaxine", category: "SNRI" },
    { name: "Amitriptyline", category: "TCA" },
    { name: "Bupropion", category: "Atypical" },
    { name: "Mirtazapine", category: "Atypical" },
    { name: "Lithium", category: "Mood Stabilizer" },
    { name: "Valproate", category: "Mood Stabilizer" },
    { name: "Lamotrigine", category: "Mood Stabilizer" },
    { name: "Alprazolam", category: "Benzodiazepine" },
    { name: "Lorazepam", category: "Benzodiazepine" }
];

// أسئلة الاختبار الشامل
const comprehensiveQuiz = [
    {
        question: "أي دواء يُعتبر المعيار الذهبي لعلاج اضطراب ثنائي القطب؟",
        correct: "Lithium Carbonate",
        options: ["Lithium Carbonate", "Fluoxetine", "Alprazolam", "Propranolol"],
        category: "classification"
    },
    {
        question: "ما آلية عمل أدوية SSRI مثل Fluoxetine؟",
        correct: "تثبيط إعادة امتصاص السيروتونين",
        options: ["تثبيط إعادة امتصاص السيروتونين", "تحفيز مستقبلات GABA", "حجب مستقبلات بيتا", "تثبيط قنوات الصوديوم"],
        category: "mechanism"
    },
    {
        question: "أي دواء يستخدم للإقلاع عن التدخين بالإضافة لعلاج الاكتئاب؟",
        correct: "Bupropion",
        options: ["Bupropion", "Sertraline", "Lithium", "Lorazepam"],
        category: "uses"
    },
    {
        question: "ما الأثر الجانبي الخطير لدواء Lamotrigine الذي يتطلب إيقاف الدواء فوراً؟",
        correct: "طفح جلدي شديد",
        options: ["طفح جلدي شديد", "صداع خفيف", "غثيان", "زيادة الوزن"],
        category: "sideEffects"
    },
    {
        question: "أي دواء لا يسبب الإدمان ويُستخدم لعلاج القلق المزمن؟",
        correct: "Buspirone",
        options: ["Buspirone", "Alprazolam", "Diazepam", "Lorazepam"],
        category: "classification"
    },
    {
        question: "ما المراقبة المطلوبة لمريض يتناول Lithium؟",
        correct: "مستوى الليثيوم في الدم ووظائف الكلى والغدة الدرقية",
        options: ["مستوى الليثيوم في الدم ووظائف الكلى والغدة الدرقية", "ضغط الدم فقط", "وزن المريض فقط", "نبضات القلب فقط"],
        category: "monitoring"
    },
    {
        question: "أي دواء يُمنع استخدامه أثناء الحمل بسبب التشوهات الجنينية؟",
        correct: "Valproate",
        options: ["Valproate", "Buspirone", "Propranolol", "Escitalopram"],
        category: "warnings"
    },
    {
        question: "ما الدواء المناسب لمريض يعاني من اكتئاب وألم أعصاب مزمن؟",
        correct: "Amitriptyline",
        options: ["Amitriptyline", "Alprazolam", "Lithium", "Buspirone"],
        category: "uses"
    },
    {
        question: "أي دواء يعمل عن طريق تعزيز تأثير GABA؟",
        correct: "Alprazolam",
        options: ["Alprazolam", "Fluoxetine", "Bupropion", "Propranolol"],
        category: "mechanism"
    },
    {
        question: "ما الدواء الذي يحتاج 2-4 أسابيع ليبدأ مفعوله؟",
        correct: "Buspirone",
        options: ["Buspirone", "Alprazolam", "Propranolol", "Diazepam"],
        category: "onset"
    },
    {
        question: "أي دواء يسبب نعاساً شديداً وزيادة الوزن؟",
        correct: "Mirtazapine",
        options: ["Mirtazapine", "Bupropion", "Fluoxetine", "Sertraline"],
        category: "sideEffects"
    },
    {
        question: "ما تصنيف دواء Venlafaxine؟",
        correct: "SNRI",
        options: ["SNRI", "SSRI", "TCA", "Benzodiazepine"],
        category: "classification"
    },
    {
        question: "أي دواء يتطلب مراقبة وظائف الكبد بانتظام؟",
        correct: "Valproate",
        options: ["Valproate", "Alprazolam", "Buspirone", "Propranolol"],
        category: "monitoring"
    },
    {
        question: "ما الدواء المستخدم لعلاج الأعراض الجسدية للقلق (خفقان، رعشة)؟",
        correct: "Propranolol",
        options: ["Propranolol", "Lithium", "Mirtazapine", "Sertraline"],
        category: "uses"
    },
    {
        question: "أي دواء له تداخلات دوائية كثيرة ويسرع استقلاب أدوية أخرى؟",
        correct: "Carbamazepine",
        options: ["Carbamazepine", "Escitalopram", "Lorazepam", "Buspirone"],
        category: "warnings"
    }
];