export interface SpeakingQuestion {
    id: string;
    category: string;
    question: string;
}

export const speakingQuestions: SpeakingQuestion[] = [
    // Information Personnelle
    { id: 'ip1', category: 'Information Personnelle', question: "Comment tu t’appelles ?" },
    { id: 'ip2', category: 'Information Personnelle', question: "Quel est ton prénom et ton nom ?" },
    { id: 'ip3', category: 'Information Personnelle', question: "Quel âge as-tu ?" },
    { id: 'ip4', category: 'Information Personnelle', question: "D’où viens-tu ?" },
    { id: 'ip5', category: 'Information Personnelle', question: "Où habites-tu ?" },
    { id: 'ip6', category: 'Information Personnelle', question: "Quelle est ta nationalité ?" },

    // La routine
    { id: 'rt1', category: 'La routine', question: "Que fais-tu dans la vie ?" },
    { id: 'rt2', category: 'La routine', question: "Est-ce que tu travailles ou est-ce que tu étudies ?" },
    { id: 'rt3', category: 'La routine', question: "À quelle heure te lèves-tu ?" },
    { id: 'rt4', category: 'La routine', question: "Que fais-tu le matin / le soir ?" },
    { id: 'rt5', category: 'La routine', question: "Que fais-tu le week-end ?" },

    // Les gouts et les loisirs
    { id: 'gl1', category: 'Les gouts et les loisirs', question: "Qu’est-ce que tu aimes ?" },
    { id: 'gl2', category: 'Les gouts et les loisirs', question: "Qu’est-ce que tu n’aimes pas ?" },
    { id: 'gl3', category: 'Les gouts et les loisirs', question: "Quel est ton plat préféré ?" },
    { id: 'gl4', category: 'Les gouts et les loisirs', question: "Quel est ton loisir préféré ?" },

    // La famille et la description physique et psychologique
    { id: 'fam1', category: 'La famille', question: "As-tu des frères et sœurs ?" },
    { id: 'fam2', category: 'La famille', question: "Combien de personnes y a-t-il dans ta famille ?" },
    { id: 'fam3', category: 'La famille', question: "Peux-tu décrire ton ami(e) ?" },

    // Parler des événements passés
    { id: 'pass1', category: 'Parler des événements passés', question: "Qu’est-ce que vous avez fait hier / le week-end dernier ?" },
    { id: 'pass2', category: 'Parler des événements passés', question: "Est-ce que vous avez voyagé récemment ? Avec qui ? et qu’est-ce que vous avez fait pendant ce voyage ?" },
    { id: 'pass3', category: 'Parler des événements passés', question: "Qu’est-ce que vous avez fait pendant vos vacances d’hiver ?" },

    // Parler des projets de l’avenir
    { id: 'fut1', category: 'Parler des projets de l’avenir', question: "Qu’est-ce que vous allez faire ce soir / demain ?" },
    { id: 'fut2', category: 'Parler des projets de l’avenir', question: "Quels sont vos projets pour le week-end ?" },
    { id: 'fut3', category: 'Parler des projets de l’avenir', question: "Qu’est-ce que vous allez faire l’année prochaine ?" },
];
