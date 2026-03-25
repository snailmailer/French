export interface SpeakingQuestion {
    id: string;
    category: string;
    question: string;
}

export interface QA {
    qFr: string;
    qEn: string;
    aFr: string;
    aEn: string;
}

export interface TefSituation {
    title: string;
    titleEn: string;
    qaList: QA[];
}

export interface ExamTopic {
    id: string;
    title: string;
    description: string;
    prepTime: number;
    speakTime: number;
    usefulQuestions?: string[];
    scenarios?: string[];
    situations?: TefSituation[];
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
        title: 'L’expression Orale Section A',
        description: "Obtenir des informations. Vous avez 5 minutes pour vous préparer, parler, et poser 10 questions.",
        prepTime: 60,
        speakTime: 240, // 4 mins speaking
        situations: [
            {
                title: "Demander des informations sur un cours, une activité, un événement ou un service",
                titleEn: "Asking for information about a course, activity, event, or service",
                qaList: [
                    { qFr: "Pourriez-vous m’indiquer quel est le contenu du cours ?", qEn: "Could you tell me what the course covers?", aFr: "Bien sûr, le cours aborde les bases ainsi que des aspects plus avancés du sujet.", aEn: "Of course, the course covers both the basics and more advanced aspects of the subject." },
                    { qFr: "J’aimerais savoir à qui s’adresse cette activité.", qEn: "I’d like to know who this activity is intended for.", aFr: "Elle s’adresse aux adultes de tous niveaux, y compris aux débutants.", aEn: "It is intended for adults of all levels, including beginners." },
                    { qFr: "Pourriez-vous me dire en quoi consiste exactement cet événement ?", qEn: "Could you tell me exactly what this event consists of?", aFr: "Il s’agit d’une rencontre conviviale avec des ateliers et des échanges.", aEn: "It is a friendly gathering with workshops and discussions." },
                    { qFr: "Serait-il possible d’obtenir des précisions sur les services proposés ?", qEn: "Would it be possible to get more details about the services offered?", aFr: "Oui, nous proposons plusieurs formules selon les besoins des participants.", aEn: "Yes, we offer several options depending on participants’ needs." },
                    { qFr: "Pourriez-vous m’expliquer comment se déroule l’activité ?", qEn: "Could you explain how the activity works?", aFr: "L’activité commence par une présentation, puis se poursuit en petits groupes.", aEn: "The activity begins with a presentation, then continues in small groups." },
                    { qFr: "J’aimerais connaître le niveau requis pour participer.", qEn: "I’d like to know the required level to participate.", aFr: "Aucun niveau particulier n’est exigé, mais une certaine aisance est préférable.", aEn: "No specific level is required, but some comfort is preferable." },
                    { qFr: "Pourriez-vous me préciser si l’activité est encadrée par des professionnels ?", qEn: "Could you specify whether the activity is led by professionals?", aFr: "Oui, elle est encadrée par une équipe expérimentée.", aEn: "Yes, it is led by an experienced team." },
                    { qFr: "Est-ce que le programme inclut plusieurs options ?", qEn: "Does the program include several options?", aFr: "Oui, plusieurs formules sont disponibles selon les objectifs.", aEn: "Yes, several options are available depending on the objectives." },
                    { qFr: "Pourriez-vous me dire si un essai est possible avant l’inscription ?", qEn: "Could you tell me whether a trial is possible before registration?", aFr: "Oui, une séance d’essai peut être organisée sur demande.", aEn: "Yes, a trial session can be arranged upon request." },
                    { qFr: "J’aimerais recevoir davantage d’informations sur cette offre.", qEn: "I’d like to receive more information about this offer.", aFr: "Avec plaisir, je peux vous transmettre tous les détails par courriel.", aEn: "With pleasure, I can send you all the details by email." }
                ]
            },
            {
                title: "Appeler au sujet d’une annonce, d’une offre d’emploi ou d’un avis",
                titleEn: "Calling about an advertisement, job offer, or announcement",
                qaList: [
                    { qFr: "Bonjour, je vous appelle au sujet de votre annonce. Est-elle toujours d’actualité ?", qEn: "Hello, I’m calling about your advertisement. Is it still current?", aFr: "Oui, l’annonce est toujours valable.", aEn: "Yes, the advertisement is still valid." },
                    { qFr: "Pourriez-vous m’indiquer le profil recherché ?", qEn: "Could you tell me what profile you are looking for?", aFr: "Nous recherchons une personne motivée, autonome et disponible rapidement.", aEn: "We are looking for someone motivated, independent, and available quickly." },
                    { qFr: "J’aimerais savoir si le poste est à temps plein ou à temps partiel.", qEn: "I’d like to know whether the position is full-time or part-time.", aFr: "Le poste est à temps plein, avec possibilité d’aménagements selon le profil.", aEn: "The position is full-time, with possible adjustments depending on the profile." },
                    { qFr: "Pourriez-vous me préciser quelles sont les missions principales ?", qEn: "Could you specify the main duties?", aFr: "Les missions principales concernent l’accueil, le suivi et l’organisation.", aEn: "The main duties involve reception, follow-up, and organization." },
                    { qFr: "Serait-il possible de savoir quel est le délai pour postuler ?", qEn: "Would it be possible to know the deadline to apply?", aFr: "Les candidatures sont acceptées jusqu’à la fin de la semaine.", aEn: "Applications are accepted until the end of the week." },
                    { qFr: "J’aimerais connaître les compétences exigées pour ce poste.", qEn: "I’d like to know the skills required for this position.", aFr: "Une bonne communication et une expérience de base sont demandées.", aEn: "Good communication and basic experience are required." },
                    { qFr: "Pourriez-vous m’indiquer s’il s’agit d’un contrat permanent ?", qEn: "Could you tell me whether this is a permanent contract?", aFr: "Oui, il s’agit d’un contrat permanent après une période d’essai.", aEn: "Yes, it is a permanent contract after a probation period." },
                    { qFr: "Est-ce que la formation est incluse ?", qEn: "Is training included?", aFr: "Oui, une formation initiale est prévue à l’arrivée.", aEn: "Yes, initial training is planned upon arrival." },
                    { qFr: "Pourriez-vous me dire où envoyer mon dossier de candidature ?", qEn: "Could you tell me where to send my application file?", aFr: "Vous pouvez l’envoyer par courriel à l’adresse indiquée dans l’annonce.", aEn: "You can send it by email to the address indicated in the advertisement." },
                    { qFr: "J’aimerais avoir des précisions sur les conditions de travail.", qEn: "I’d like more details about the working conditions.", aFr: "Bien entendu, les horaires et les conditions vous seront expliqués lors de l’entretien.", aEn: "Of course, the hours and conditions will be explained during the interview." }
                ]
            },
            {
                title: "Réserver ou effectuer une inscription",
                titleEn: "Booking or reserving something",
                qaList: [
                    { qFr: "Pourriez-vous me dire si je peux réserver pour samedi ?", qEn: "Could you tell me whether I can book for Saturday?", aFr: "Oui, il reste encore quelques disponibilités pour samedi.", aEn: "Yes, there are still a few openings for Saturday." },
                    { qFr: "J’aimerais réserver une place pour le cours de la semaine prochaine.", qEn: "I’d like to reserve a spot for next week’s class.", aFr: "Très bien, je peux enregistrer votre réservation immédiatement.", aEn: "Very well, I can register your booking immediately." },
                    { qFr: "Serait-il possible de confirmer ma réservation par courriel ?", qEn: "Would it be possible to confirm my reservation by email?", aFr: "Oui, vous recevrez une confirmation dans les prochaines minutes.", aEn: "Yes, you will receive a confirmation within the next few minutes." },
                    { qFr: "Pourriez-vous m’indiquer comment procéder pour réserver ?", qEn: "Could you tell me how to proceed with the booking?", aFr: "Il suffit de remplir le formulaire en ligne ou de nous appeler directement.", aEn: "You just need to fill out the online form or call us directly." },
                    { qFr: "J’aimerais savoir si une avance est nécessaire.", qEn: "I’d like to know whether a deposit is required.", aFr: "Oui, un acompte est demandé pour valider la réservation.", aEn: "Yes, a deposit is required to confirm the booking." },
                    { qFr: "Pourriez-vous me préciser si la réservation peut être modifiée ?", qEn: "Could you specify whether the booking can be changed?", aFr: "Oui, elle peut être modifiée jusqu’à 48 heures avant la date prévue.", aEn: "Yes, it can be changed up to 48 hours before the scheduled date." },
                    { qFr: "Serait-il possible de réserver pour plusieurs personnes ?", qEn: "Would it be possible to book for several people?", aFr: "Oui, nous pouvons réserver pour un groupe sans problème.", aEn: "Yes, we can book for a group without any problem." },
                    { qFr: "J’aimerais connaître les conditions d’annulation.", qEn: "I’d like to know the cancellation conditions.", aFr: "L’annulation est gratuite jusqu’à trois jours avant l’activité.", aEn: "Cancellation is free up to three days before the activity." },
                    { qFr: "Pourriez-vous me dire si la réservation est immédiate ?", qEn: "Could you tell me whether the reservation is immediate?", aFr: "Oui, dès que le paiement est effectué, la réservation est confirmée.", aEn: "Yes, once payment is made, the reservation is confirmed." },
                    { qFr: "J’aimerais réserver au plus vite, si possible.", qEn: "I’d like to book as soon as possible, if possible.", aFr: "Bien sûr, je vais m’en occuper tout de suite.", aEn: "Of course, I’ll take care of it right away." }
                ]
            },
            {
                title: "Demander des précisions pratiques",
                titleEn: "Asking about practical details",
                qaList: [
                    { qFr: "Pourriez-vous m’indiquer les horaires exacts ?", qEn: "Could you tell me the exact times?", aFr: "Les horaires sont de 9 h à 17 h en semaine.", aEn: "The hours are from 9 a.m. to 5 p.m. on weekdays." },
                    { qFr: "J’aimerais savoir quelle est la durée du programme.", qEn: "I’d like to know the duration of the program.", aFr: "Le programme dure trois semaines au total.", aEn: "The program lasts three weeks in total." },
                    { qFr: "Serait-il possible de connaître le tarif total ?", qEn: "Would it be possible to know the total price?", aFr: "Le tarif total s’élève à 250 euros.", aEn: "The total price is 250 euros." },
                    { qFr: "Pourriez-vous me dire où se situe le lieu exact ?", qEn: "Could you tell me where the exact location is?", aFr: "Le lieu se trouve en centre-ville, près de la gare.", aEn: "The venue is located downtown, near the station." },
                    { qFr: "J’aimerais savoir quelles sont les démarches à suivre.", qEn: "I’d like to know what steps need to be followed.", aFr: "Il faut d’abord remplir le formulaire, puis envoyer les pièces demandées.", aEn: "First, you need to fill out the form, then send the required documents." },
                    { qFr: "Pourriez-vous m’indiquer la date limite d’inscription ?", qEn: "Could you tell me the registration deadline?", aFr: "La date limite est fixée au 15 du mois.", aEn: "The deadline is set for the 15th of the month." },
                    { qFr: "Serait-il possible de savoir quels documents sont nécessaires ?", qEn: "Would it be possible to know which documents are needed?", aFr: "Une pièce d’identité et un justificatif de domicile sont nécessaires.", aEn: "An ID and proof of address are required." },
                    { qFr: "J’aimerais connaître le mode de paiement accepté.", qEn: "I’d like to know the accepted payment method.", aFr: "Nous acceptons la carte bancaire, le virement et les espèces.", aEn: "We accept bank card, bank transfer, and cash." },
                    { qFr: "Pourriez-vous me préciser si le matériel est fourni ?", qEn: "Could you specify whether the equipment is provided?", aFr: "Oui, tout le matériel est fourni sur place.", aEn: "Yes, all equipment is provided on site." },
                    { qFr: "J’aimerais savoir si un rendez-vous est nécessaire.", qEn: "I’d like to know whether an appointment is necessary.", aFr: "Oui, il est préférable de prendre rendez-vous à l’avance.", aEn: "Yes, it is preferable to book an appointment in advance." }
                ]
            },
            {
                title: "Parler de la participation",
                titleEn: "Discussing participation",
                qaList: [
                    { qFr: "Pourriez-vous me dire si les enfants peuvent participer ?", qEn: "Could you tell me whether children can participate?", aFr: "Oui, les enfants sont acceptés à partir de six ans.", aEn: "Yes, children are accepted from age six." },
                    { qFr: "J’aimerais savoir si le transport est inclus.", qEn: "I’d like to know whether transport is included.", aFr: "Oui, le transport est inclus dans le prix.", aEn: "Yes, transport is included in the price." },
                    { qFr: "Pourriez-vous me confirmer s’il y a des réductions ?", qEn: "Could you confirm whether there are any discounts?", aFr: "Oui, nous proposons une réduction pour les étudiants et les groupes.", aEn: "Yes, we offer a discount for students and groups." },
                    { qFr: "Serait-il possible de savoir si le billet est valable pour deux personnes ?", qEn: "Would it be possible to know whether the ticket is valid for two people?", aFr: "Non, le billet est valable pour une seule personne.", aEn: "No, the ticket is valid for one person only." },
                    { qFr: "J’aimerais savoir si les repas sont compris.", qEn: "I’d like to know whether meals are included.", aFr: "Oui, les repas sont compris dans certaines formules.", aEn: "Yes, meals are included in certain packages." },
                    { qFr: "Pourriez-vous me dire s’il faut réserver à l’avance pour participer ?", qEn: "Could you tell me whether it is necessary to book in advance to participate?", aFr: "Oui, la réservation préalable est obligatoire.", aEn: "Yes, prior booking is mandatory." },
                    { qFr: "J’aimerais savoir si la participation est ouverte à tous les niveaux.", qEn: "I’d like to know whether participation is open to all levels.", aFr: "Oui, l’activité est accessible à tous, quel que soit le niveau.", aEn: "Yes, the activity is open to everyone, regardless of level." },
                    { qFr: "Pourriez-vous me préciser si une assurance est incluse ?", qEn: "Could you specify whether insurance is included?", aFr: "Oui, une assurance de base est incluse dans la prestation.", aEn: "Yes, basic insurance is included in the service." },
                    { qFr: "Serait-il possible de savoir si les accompagnateurs sont autorisés ?", qEn: "Would it be possible to know whether companions are allowed?", aFr: "Oui, les accompagnateurs sont acceptés sous certaines conditions.", aEn: "Yes, companions are allowed under certain conditions." },
                    { qFr: "J’aimerais confirmer si la participation est gratuite.", qEn: "I’d like to confirm whether participation is free.", aFr: "Oui, l’accès est gratuit pour les participants inscrits.", aEn: "Yes, access is free for registered participants." }
                ]
            }
        ]
    },
    {
        id: 'tef_b',
        title: 'L’expression Orale Section B',
        description: "Convainquez un ami de participer à une activité ou d’acheter quelque chose à partir d’un document.",
        prepTime: 60,
        speakTime: 300,
        scenarios: [
            "Convaincre un ami de faire du covoiturage pour aller au travail.",
            "Convaincre un ami d'acheter des produits locaux et bio.",
            "Convaincre un ami de participer à un marathon caritatif."
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
