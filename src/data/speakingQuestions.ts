export interface SpeakingQuestion {
    id: string;
    category: string;
    question: string;
}

export const speakingQuestions: SpeakingQuestion[] = [
    // Information Personnelle
    { id: 'ip1', category: 'Information Personnelle (Personal Information)', question: "Comment tu t’appelles ?" },
    { id: 'ip2', category: 'Information Personnelle (Personal Information)', question: "Quel est ton prénom et ton nom ?" },
    { id: 'ip3', category: 'Information Personnelle (Personal Information)', question: "Quel âge as-tu ?" },
    { id: 'ip4', category: 'Information Personnelle (Personal Information)', question: "D’où viens-tu ?" },
    { id: 'ip5', category: 'Information Personnelle (Personal Information)', question: "Où habites-tu ?" },
    { id: 'ip6', category: 'Information Personnelle (Personal Information)', question: "Quelle est ta nationalité ?" },

    // La routine
    { id: 'rt1', category: 'La routine (Routine)', question: "Que fais-tu dans la vie ?" },
    { id: 'rt2', category: 'La routine (Routine)', question: "Est-ce que tu travailles ou est-ce que tu étudies ?" },
    { id: 'rt3', category: 'La routine (Routine)', question: "À quelle heure te lèves-tu ?" },
    { id: 'rt4', category: 'La routine (Routine)', question: "Que fais-tu le matin / le soir ?" },
    { id: 'rt5', category: 'La routine (Routine)', question: "Que fais-tu le week-end ?" },

    // Les gouts et les loisirs
    { id: 'gl1', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Qu’est-ce que tu aimes ?" },
    { id: 'gl2', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Qu’est-ce que tu n’aimes pas ?" },
    { id: 'gl3', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Quel est ton plat préféré ?" },
    { id: 'gl4', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Quel est ton loisir préféré ?" },

    // La famille et la description physique et psychologique
    { id: 'fam1', category: 'La famille (Family)', question: "As-tu des frères et sœurs ?" },
    { id: 'fam2', category: 'La famille (Family)', question: "Combien de personnes y a-t-il dans ta famille ?" },
    { id: 'fam3', category: 'La famille (Family)', question: "Peux-tu décrire ton ami(e) ?" },

    // Parler des événements passés
    { id: 'pass1', category: 'Parler des événements passés (Past Events)', question: "Qu’est-ce que vous avez fait hier / le week-end dernier ?" },
    { id: 'pass2', category: 'Parler des événements passés (Past Events)', question: "Est-ce que vous avez voyagé récemment ? Avec qui ? et qu’est-ce que vous avez fait pendant ce voyage ?" },
    { id: 'pass3', category: 'Parler des événements passés (Past Events)', question: "Qu’est-ce que vous avez fait pendant vos vacances d’hiver ?" },

    // Parler des projets de l’avenir
    { id: 'fut1', category: 'Parler des projets de l’avenir (Future Projects)', question: "Qu’est-ce que vous allez faire ce soir / demain ?" },
    { id: 'fut2', category: 'Parler des projets de l’avenir (Future Projects)', question: "Quels sont vos projets pour le week-end ?" },
    { id: 'fut3', category: 'Parler des projets de l’avenir (Future Projects)', question: "Qu’est-ce que vous allez faire l’année prochaine ?" },
];
