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
    intro: string;
    structure: string;
    exampleQuestion: string;
    exampleParts: { label: string; text: string }[];
    tips: string;
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
    { id: 'fut1', category: "Parler des projets de l’avenir (Future Projects)", question: "Qu'est-ce que vous allez faire ce soir / demain ?" },
    { id: 'fut2', category: "Parler des projets de l’avenir (Future Projects)", question: "Quels sont vos projets pour le week-end ?" },
    { id: 'fut3', category: "Parler des projets de l’avenir (Future Projects)", question: "Qu'est-ce que vous allez faire l'année prochaine ?" },
];

// --- TEF/TCF Exam Practice Topics ---
export const examTopics: ExamTopic[] = [
    {
        id: 'tef_a',
        title: 'TEF Section A : Obtenir des informations',
        description: "Appelez pour vous renseigner sur une annonce (location, offre d’emploi, vente). Posez 10 questions.",
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
        description: "Convainquez un ami de participer à une activité ou d’acheter quelque chose à partir d’un document.",
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
        title: "TCF Tâche 2 : Exercice d’interaction",
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
        description: "Répondez à une question en donnant votre avis et en l’expliquant.",
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
        intro: 'At A1 level French speaking, use very short, basic sentences to give simple facts on familiar topics.',
        structure: 'Start with 1-2 simple sentences to answer directly. Use basic words like "j\'aime" (I like), "j\'ai" (I have), "je suis" (I am). End with a basic question.',
        exampleQuestion: "Qu'est-ce que tu aimes ?",
        exampleParts: [
            { label: '', text: "J'aime le français. J'ai un frère. Et toi ?" }
        ],
        tips: 'Stick to present tense, repeat key words, practice greetings and family topics daily.'
    },
    {
        level: 'A2',
        intro: 'At A2 level French speaking, use short sentences with one simple reason to describe routines or likes.',
        structure: 'Start with a direct answer. Add 1 detail or reason with "parce que" (because). End by repeating the question.',
        exampleQuestion: "Qu'est-ce que tu aimes ?",
        exampleParts: [
            { label: '', text: "J'aime la boxe. C'est bon pour la santé parce que je cours. Et toi, tu aimes le sport ?" }
        ],
        tips: 'Link 2-3 ideas, use near future ("je vais"), practice daily activities like food or hobbies.'
    },
    {
        level: 'B1',
        intro: 'At B1 level French speaking, give a clear opinion with reasons on personal topics.',
        structure: 'Start with your clear opinion. Give 2 reasons/examples with "parce que" (because) and "par exemple" (for example). End with a short summary and question.',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Je préfère la boxe parce que c'est actif." },
            { label: 'Development', text: "Par exemple, je vais à la salle trois fois par semaine." },
            { label: 'Conclusion', text: "C'est bon pour moi. Et toi ?" }
        ],
        tips: 'Use past tense ("j\'ai fait"), compare with "mais", practice describing experiences.'
    },
    {
        level: 'B2',
        intro: 'At B2 level French speaking, use a clear, organized structure to express opinions fluently on everyday topics.',
        structure: 'Start with a simple introduction to state your main idea, e.g., "À mon avis..." or "Je pense que...". Develop with 2-3 reasons or examples, linking them using connectors like "parce que" (because), "par exemple" (for example), "en plus" (plus), or "d\'un autre côté" (on the other hand). End with a short conclusion that summarizes or asks a question, like "En résumé..." or "Et toi ?".',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Je travaille comme consultant freelance en informatique." },
            { label: 'Development', text: "J'aide les entreprises avec le support technique parce que c'est varié. Par exemple, je prépare des certifications CEH. En plus, je développe des chatbots en Python." },
            { label: 'Conclusion', text: "C'est intéressant pour moi. Et toi ?" }
        ],
        tips: 'Vary vocabulary (e.g., "j\'aime" becomes "je préfère"), use complex sentences with "si" clauses, and practice on personal topics like work or hobbies for natural flow.'
    },
    {
        level: 'C1',
        intro: 'At C1 level French speaking, argue nuanced views on complex topics with structured depth.',
        structure: 'Open with a nuanced introduction like "Il est indéniable que..." (It is undeniable that...). Develop with detailed arguments, counterpoints ("bien que..." - although), using advanced connectors ("par conséquent" - therefore, "néanmoins" - nevertheless). End with an argumentative synthesis.',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Il est indéniable que le freelancing offre flexibilité." },
            { label: 'Development', text: "Bien que exigeant, il permet spécialisation en cybersécurité ; par conséquent, je développe chatbots avancés." },
            { label: 'Conclusion', text: "En définitive, cela forge expertise durable." }
        ],
        tips: 'Master subjunctive, idiomatic phrases, debate abstracts like ethics, self-record for fluency.'
    },
    {
        level: 'C2',
        intro: 'At C2 level French speaking, express near-native ideas spontaneously with rhetorical finesse.',
        structure: 'Launch with an elegant introduction ("Force est de constater que..." - It must be noted that...). Develop fluidly with sophisticated arguments, cultural references, refined connectors ("nonobstant" - notwithstanding). Close with a masterful conclusion of philosophical depth.',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Force est de constater que le consulting en cybersécurité transcende routine." },
            { label: 'Development', text: "Nonobstant défis techniques, il incarne innovation via chatbots Python." },
            { label: 'Conclusion', text: "Ainsi s'esquisse une vocation harmonisant passion et utilité sociétale." }
        ],
        tips: 'Weave irony/styles, discuss philosophy/policy with natives, refine cultural nuances.'
    }
];
