import type { LevelData } from './types';

export const b2Data: LevelData = {
    id: 'B2',
    title: 'B2 - Avancé & TEF/TCF Prep',
    description: 'Nuances, Conditionnel Passé, et Préparation à l\'oral.',
    topics: [
        {
            id: 'conditionnel-passe',
            title: 'Le Conditionnel Passé',
            description: 'Regrets and unverified information.',
            translation: 'Past Conditional',
            formula: 'Avoir/Être (Conditional) + Past Participle',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Used to express regrets ("I should have...") or unverified news ("The president reportedly...").',
                    translation: 'J\'aurais dû étudier. (I should have studied).'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Il serait parti hier.', translation: 'He reportedly left yesterday.' },
                        { french: 'Nous aurions aimé venir.', translation: 'We would have liked to come.' }
                    ]
                }
            ]
        },
        {
            id: 'tef-tcf-personal',
            title: 'TEF/TCF - Information Personnelle',
            description: 'Speaking Practice: Introduce yourself.',
            translation: 'Personal Information',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Practice answering these questions fluently.',
                    translation: 'Entraînement à l\'oral.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Comment tu t’appelles ?', translation: 'What is your name?' },
                        { french: 'Quel est ton prénom et ton nom ?', translation: 'What is your first and last name?' },
                        { french: 'Quel âge as-tu ?', translation: 'How old are you?' },
                        { french: 'D’où viens-tu ?', translation: 'Where do you come from?' },
                        { french: 'Où habites-tu ?', translation: 'Where do you live?' },
                        { french: 'Quelle est ta nationalité ?', translation: 'What is your nationality?' }
                    ]
                }
            ]
        },
        {
            id: 'tef-tcf-routine',
            title: 'TEF/TCF - La Routine & Travail',
            description: 'Speaking Practice: Daily life.',
            translation: 'Routine & Work',
            blocks: [
                {
                    type: 'examples',
                    list: [
                        { french: 'Que fais-tu dans la vie ?', translation: 'What do you do for a living?' },
                        { french: 'Est-ce que tu travailles ou est-ce que tu étudies ?', translation: 'Do you work or study?' },
                        { french: 'À quelle heure te lèves-tu ?', translation: 'What time do you get up?' },
                        { french: 'Que fais-tu le matin / le soir ?', translation: 'What do you do in the morning/evening?' },
                        { french: 'Que fais-tu le week-end ?', translation: 'What do you do on the weekend?' }
                    ]
                }
            ]
        },
        {
            id: 'tef-tcf-tastes',
            title: 'TEF/TCF - Goûts et Loisirs',
            description: 'Speaking Practice: Preferences.',
            translation: 'Tastes & Hobbies',
            blocks: [
                {
                    type: 'examples',
                    list: [
                        { french: 'Qu’est-ce que tu aimes ?', translation: 'What do you like?' },
                        { french: 'Qu’est-ce que tu n’aimes pas ?', translation: 'What do you don\'t like?' },
                        { french: 'Quel est ton plat préféré ?', translation: 'What is your favorite dish?' },
                        { french: 'Quel est ton loisir préféré ?', translation: 'What is your favorite hobby?' }
                    ]
                }
            ]
        },
        {
            id: 'tef-tcf-family',
            title: 'TEF/TCF - Famille & Description',
            description: 'Speaking Practice: Describing people.',
            translation: 'Family & Description',
            blocks: [
                {
                    type: 'examples',
                    list: [
                        { french: 'As-tu des frères et sœurs ?', translation: 'Do you have brothers and sisters?' },
                        { french: 'Combien de personnes y a-t-il dans ta famille ?', translation: 'How many people are there in your family?' },
                        { french: 'Peux-tu décrire ton ami(e) ?', translation: 'Can you describe your friend?' }
                    ]
                }
            ]
        }
    ]
};
