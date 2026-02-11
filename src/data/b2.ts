import type { LevelData } from './types';

export const b2Data: LevelData = {
    id: 'B2',
    title: 'B2 - Avancé',
    description: 'Programme complet pas-à-pas.',
    topics: [
        { id: 'conditionnel-passe', title: 'Le conditionnel Passé', description: 'Regrets.', translation: 'Past Conditional', blocks: [{ type: 'markdown', content: 'Avoir/Être (Cond) + Participe Passé.' }, { type: 'examples', list: [{ french: 'J\'aurais dû venir.', translation: 'I should have come.' }] }] },
        { id: 'speaking-prep', title: 'Speaking Practice for TEF/TCF', description: 'Exam Preparation.', translation: 'Oral Preparation', blocks: [{ type: 'markdown', content: 'Questions d\'examen.' }] },
        { id: 'info-personnelle', title: 'Information Personnelle', description: 'Identité.', translation: 'Personal Information', blocks: [{ type: 'examples', list: [{ french: 'Comment tu t’appelles ?', translation: 'What is your name?' }, { french: 'Quel est ton prénom et ton nom ?', translation: 'What is your first and last name?' }, { french: 'Quel âge as-tu ?', translation: 'How old are you?' }, { french: 'D’où viens-tu ?', translation: 'Where do you come from?' }, { french: 'Où habites-tu ?', translation: 'Where do you live?' }, { french: 'Quelle est ta nationalité ?', translation: 'What is your nationality?' }] }] },
        { id: 'routine-work', title: 'La routine', description: 'Travail et Quotidien.', translation: 'Routine', blocks: [{ type: 'examples', list: [{ french: 'Que fais-tu dans la vie ?', translation: 'What do you do for a living?' }, { french: 'Est-ce que tu travailles ou est-ce que tu étudies ?', translation: 'Do you work or study?' }, { french: 'À quelle heure te lèves-tu ?', translation: 'What time do you get up?' }, { french: 'Que fais-tu le matin / le soir ?', translation: 'What do you do in the morning / evening?' }, { french: 'Que fais-tu le week-end ?', translation: 'What do you do on the weekend?' }] }] },
        { id: 'gouts-loisirs', title: 'Les gouts et les loisirs', description: 'Préférences.', translation: 'Tastes & Hobbies', blocks: [{ type: 'examples', list: [{ french: 'Qu’est-ce que tu aimes ?', translation: 'What do you like?' }, { french: 'Qu’est-ce que tu n’aimes pas ?', translation: 'What don\'t you like?' }, { french: 'Quel est ton plat préféré ?', translation: 'What is your favorite dish?' }, { french: 'Quel est ton loisir préféré ?', translation: 'What is your favorite hobby?' }] }] },
        { id: 'famille-desc', title: 'La famille et la description physique et psychologique', description: 'Entourage.', translation: 'Family & Description', blocks: [{ type: 'examples', list: [{ french: 'As-tu des frères et sœurs ?', translation: 'Do you have brothers and sisters?' }, { french: 'Combien de personnes y a-t-il dans ta famille ?', translation: 'How many people are there in your family?' }, { french: 'Peux-tu décrire ton ami(e) ?', translation: 'Can you describe your friend?' }] }] }
    ]
};
