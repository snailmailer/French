export interface SpeakingQuestion {
    id: string;
    category: string;
    question: string;
}

export interface ExamTopic {
    id: string;
    title: string;
    description: string;
    prepTime: number;
    speakTime: number;
    scenarios: string[];
}

export interface LevelStructure {
    level: string;
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
    exemple: string;
    exempleEn: string;
}

export const speakingQuestions: SpeakingQuestion[] = [
    // Information Personnelle
    { id: 'ip1', category: 'Information Personnelle (Personal Information)', question: "Comment tu t'appelles ?" },
    { id: 'ip2', category: 'Information Personnelle (Personal Information)', question: "Quel est ton prénom et ton nom ?" },
    { id: 'ip3', category: 'Information Personnelle (Personal Information)', question: "Quel âge as-tu ?" },
    { id: 'ip4', category: 'Information Personnelle (Personal Information)', question: "D'où viens-tu ?" },
    { id: 'ip5', category: 'Information Personnelle (Personal Information)', question: "Où habites-tu ?" },
    { id: 'ip6', category: 'Information Personnelle (Personal Information)', question: "Quelle est ta nationalité ?" },

    // La routine
    { id: 'rt1', category: 'La routine (Routine)', question: "Que fais-tu dans la vie ?" },
    { id: 'rt2', category: 'La routine (Routine)', question: "Est-ce que tu travailles ou est-ce que tu étudies ?" },
    { id: 'rt3', category: 'La routine (Routine)', question: "À quelle heure te lèves-tu ?" },
    { id: 'rt4', category: 'La routine (Routine)', question: "Que fais-tu le matin / le soir ?" },
    { id: 'rt5', category: 'La routine (Routine)', question: "Que fais-tu le week-end ?" },

    // Les gouts et les loisirs
    { id: 'gl1', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Qu'est-ce que tu aimes ?" },
    { id: 'gl2', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Qu'est-ce que tu n'aimes pas ?" },
    { id: 'gl3', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Quel est ton plat préféré ?" },
    { id: 'gl4', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Quel est ton loisir préféré ?" },

    // La famille et la description physique et psychologique
    { id: 'fam1', category: 'La famille (Family)', question: "As-tu des frères et sœurs ?" },
    { id: 'fam2', category: 'La famille (Family)', question: "Combien de personnes y a-t-il dans ta famille ?" },
    { id: 'fam3', category: 'La famille (Family)', question: "Peux-tu décrire ton ami(e) ?" },

    // Parler des événements passés
    { id: 'pass1', category: 'Parler des événements passés (Past Events)', question: "Qu'est-ce que vous avez fait hier / le week-end dernier ?" },
    { id: 'pass2', category: 'Parler des événements passés (Past Events)', question: "Est-ce que vous avez voyagé récemment ? Avec qui ? et qu'est-ce que vous avez fait pendant ce voyage ?" },
    { id: 'pass3', category: 'Parler des événements passés (Past Events)', question: "Qu'est-ce que vous avez fait pendant vos vacances d'hiver ?" },

    // Parler des projets de l'avenir
    { id: 'fut1', category: "Parler des projets de l\u2019avenir (Future Projects)", question: "Qu'est-ce que vous allez faire ce soir / demain ?" },
    { id: 'fut2', category: "Parler des projets de l\u2019avenir (Future Projects)", question: "Quels sont vos projets pour le week-end ?" },
    { id: 'fut3', category: "Parler des projets de l\u2019avenir (Future Projects)", question: "Qu'est-ce que vous allez faire l'année prochaine ?" },
];

// --- TEF/TCF Exam Practice Topics ---
export const examTopics: ExamTopic[] = [
    {
        id: 'tef_a',
        title: 'TEF Section A : Obtenir des informations',
        description: "Appelez pour vous renseigner sur une annonce (location, offre d\u2019emploi, vente). Posez 10 questions.",
        prepTime: 60,
        speakTime: 300,
        scenarios: [
            "Vous avez vu une petite annonce pour une location de vacances. Vous téléphonez pour avoir plus d'informations.",
            "Vous êtes intéressé par une annonce pour des cours de cuisine. Vous appelez pour poser des questions.",
            "Une association cherche des bénévoles pour un festival. Vous téléphonez pour en savoir plus."
        ]
    },
    {
        id: 'tef_b',
        title: 'TEF Section B : Convaincre un ami',
        description: "Convainquez un ami de participer à une activité ou d\u2019acheter quelque chose à partir d\u2019un document.",
        prepTime: 60,
        speakTime: 300,
        scenarios: [
            "Convaincre un ami de faire du covoiturage pour aller au travail.",
            "Convaincre un ami d'acheter des produits locaux et bio.",
            "Convaincre un ami de participer à un marathon caritatif."
        ]
    },
    {
        id: 'tcf_1',
        title: 'TCF Tâche 1 : Entretien dirigé',
        description: "Présentez-vous et parlez de votre environnement immédiat.",
        prepTime: 0,
        speakTime: 120,
        scenarios: [
            "Présentez-vous (nom, âge, profession, loisirs, famille).",
            "Parlez de votre ville ou de votre quartier.",
            "Décrivez votre logement actuel."
        ]
    },
    {
        id: 'tcf_2',
        title: "TCF Tâche 2 : Exercice d\u2019interaction",
        description: "Posez des questions pour obtenir des informations dans une situation de la vie quotidienne.",
        prepTime: 0,
        speakTime: 210,
        scenarios: [
            "Je suis votre voisin. Posez-moi des questions sur la fête des voisins organisée le mois prochain.",
            "Je travaille à l'office de tourisme. Posez-moi des questions sur les activités à faire ce week-end.",
            "Je suis vendeur dans un magasin de sport. Posez-moi des questions pour choisir des chaussures de course."
        ]
    },
    {
        id: 'tcf_3',
        title: 'TCF Tâche 3 : Exprimer un point de vue',
        description: "Répondez à une question en donnant votre avis et en l\u2019expliquant.",
        prepTime: 0,
        speakTime: 270,
        scenarios: [
            "Pensez-vous que le télétravail est une bonne chose pour les employés ?",
            "Est-il important d'apprendre des langues étrangères dès le plus jeune âge ?",
            "Les réseaux sociaux améliorent-ils ou détériorent-ils les relations humaines ?"
        ]
    }
];

// --- Boîte à Outils (Toolbox) ---
export const speakingTips = {
    connectors: [
        { category: "Introduction", phrases: ["Tout d'abord...", "Pour commencer...", "Il est indéniable que..."] },
        { category: "Ajouter une idée (Adding)", phrases: ["De plus...", "En outre...", "Par ailleurs...", "Également..."] },
        { category: "Contraste (Contrast)", phrases: ["Cependant...", "Néanmoins...", "Toutefois...", "Au contraire..."] },
        { category: "Cause / Effet", phrases: ["Car...", "Puisque...", "C'est pourquoi...", "En conséquence..."] },
        { category: "Opinion", phrases: ["À mon avis...", "Selon moi...", "Je pense que...", "Il me semble que..."] },
        { category: "Conclusion", phrases: ["En conclusion...", "Pour résumer...", "Finalement..."] }
    ],
    advice: [
        "Articulez clairement et maintenez un rythme régulier.",
        "Utilisez un vocabulaire varié et des structures grammaticales diverses.",
        "Ne paniquez pas si vous faites une erreur ; corrigez-vous et continuez.",
        "Structurez votre argument : Introduction → Point 1 → Point 2 → Conclusion.",
        "Écoutez attentivement l'examinateur lors des tâches d'interaction."
    ]
};

// --- CEFR Level Structures (A1 → C2) ---
export const levelStructures: LevelStructure[] = [
    {
        level: 'A1',
        titleFr: 'Structure A1',
        titleEn: 'A1 Level Structure',
        descriptionFr: "Commence par des phrases courtes et simples. Réponds directement à la question avec 1-2 idées de base. Utilise des mots simples comme « j'aime », « j'ai », « je suis ». Pose une question simple à la fin.",
        descriptionEn: 'Start with short, simple sentences. Answer directly with 1-2 basic ideas. Use simple words like "j\'aime", "j\'ai", "je suis". End with a simple question.',
        exemple: "« J'aime le français. J'ai un frère. Et toi ? »",
        exempleEn: "I like French. I have a brother. And you?"
    },
    {
        level: 'A2',
        titleFr: 'Structure A2',
        titleEn: 'A2 Level Structure',
        descriptionFr: "Fais 2-3 phrases courtes. Ajoute un petit détail ou une raison simple avec « parce que ». Répète la question à la fin pour continuer la conversation.",
        descriptionEn: 'Use 2-3 short sentences. Add one small detail or simple reason with "parce que". Repeat the question at the end to keep the conversation going.',
        exemple: "« J'aime la boxe. C'est bien pour la santé parce que je cours. Et toi, tu aimes le sport ? »",
        exempleEn: "I like boxing. It's good for health because I run. And you, do you like sports?"
    },
    {
        level: 'B1',
        titleFr: 'Structure B1',
        titleEn: 'B1 Level Structure',
        descriptionFr: "Commence par ton avis clair. Donne 2 raisons ou exemples avec « parce que » et « par exemple ». Termine par un résumé court et une question.",
        descriptionEn: 'Start with your clear opinion. Give 2 reasons or examples with "parce que" and "par exemple". End with a short summary and question.',
        exemple: "« Je préfère la boxe parce que c'est actif. Par exemple, je vais à la salle trois fois par semaine. C'est bon pour moi. Et toi ? »",
        exempleEn: "I prefer boxing because it's active. For example, I go to the gym three times a week. It's good for me. And you?"
    },
    {
        level: 'B2',
        titleFr: 'Structure B2',
        titleEn: 'B2 Level Structure',
        descriptionFr: "Commence par une introduction simple pour dire le sujet ou donner ton avis principal (« À mon avis... » ou « Je pense que... »). Développe avec 2-3 arguments ou exemples, en utilisant des connecteurs comme « parce que », « en plus », « par exemple » ou « d'un autre côté ». Termine par une conclusion courte qui résume ou ouvre le débat.",
        descriptionEn: 'Start with a simple introduction to state the topic or main opinion ("À mon avis..." or "Je pense que..."). Develop with 2-3 arguments or examples using connectors. End with a brief conclusion that summarizes or invites response.',
        exemple: "« À mon avis, la boxe est un excellent sport. En plus, c'est bon pour la santé. D'un autre côté, c'est exigeant. En conclusion, je le recommande. Et toi, qu'en penses-tu ? »",
        exempleEn: "In my opinion, boxing is an excellent sport. Moreover, it's good for health. On the other hand, it's demanding. In conclusion, I recommend it. And you, what do you think?"
    },
    {
        level: 'C1',
        titleFr: 'Structure C1',
        titleEn: 'C1 Level Structure',
        descriptionFr: "Ouvre avec une introduction nuancée qui pose le contexte ou une thèse sophistiquée (« Il est indéniable que... »). Développe de manière structurée avec des arguments approfondis, des contre-arguments (« bien que... ») et des exemples précis, utilisant des connecteurs avancés (« par conséquent », « néanmoins »). Termine par une synthèse argumentative qui nuance ou propose une perspective.",
        descriptionEn: 'Open with a nuanced introduction setting context or a sophisticated thesis ("Il est indéniable que..."). Develop with in-depth arguments, counterpoints ("bien que..."), and precise examples using advanced connectors ("par conséquent", "néanmoins"). End with an argumentative synthesis.',
        exemple: "« Bien que la boxe soit exigeante, je la privilégie car elle forge le caractère. Néanmoins, elle requiert discipline. En somme, c'est idéal pour l'équilibre. »",
        exempleEn: "Although boxing is demanding, I prefer it because it builds character. Nevertheless, it requires discipline. In sum, it's ideal for balance."
    },
    {
        level: 'C2',
        titleFr: 'Structure C2',
        titleEn: 'C2 Level Structure',
        descriptionFr: "Lance une introduction élégante avec une accroche rhétorique ou citation subtile (« Force est de constater que... »). Développe avec fluidité en tissant arguments complexes, références culturelles et ironie si approprié, avec des connecteurs raffinés (« nonobstant », « à cet égard »). Clôture par une conclusion magistrale qui transcende le sujet avec profondeur philosophique.",
        descriptionEn: 'Start with an elegant introduction using rhetorical hook or subtle reference ("Force est de constater que..."). Develop fluidly weaving complex arguments, cultural references, and irony if apt, with refined connectors ("nonobstant", "à cet égard"). Close with a masterful conclusion transcending the topic.',
        exemple: "« Mes inclinations sportives, nonobstant leur apparente rudesse, révèlent une quête d'harmonie corps-esprit. La boxe, par essence, transcende l'effort physique. »",
        exempleEn: "My sports inclinations, notwithstanding their apparent roughness, reveal a quest for body-mind harmony. Boxing, by essence, transcends physical effort."
    }
];
