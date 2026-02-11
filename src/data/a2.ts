import type { LevelData } from './types';

export const a2Data: LevelData = {
    id: 'A2',
    title: 'A2 - Élémentaire',
    description: 'Routine, passé, futur proche, description physique, obligations.',
    topics: [
        {
            id: 'pronominal-verbs-routine',
            title: 'Les Verbes Pronominaux & La Routine',
            description: 'Daily routine verbs (se lever, se laver).',
            translation: 'Reflexive Verbs & Routine',
            formula: 'Je me + Verbe / Tu te + Verbe...',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Reflexive verbs reflect the action back on the subject. Common for daily routine.',
                    translation: 'Se lever (to get up), Se laver (to wash), S\'habiller (to get dressed).'
                },
                {
                    type: 'conjugation',
                    verb: 'Se lever',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'me lève' }, { pronoun: 'Tu', form: 'te lèves' }, { pronoun: 'Il/Elle', form: 'se lève' },
                        { pronoun: 'Nous', form: 'nous levons' }, { pronoun: 'Vous', form: 'vous levez' }, { pronoun: 'Ils/Elles', form: 'se lèvent' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Je me réveille à 7h00.', translation: 'I wake up at 7:00.' },
                        { french: 'Il se brosse les dents.', translation: 'He brushes his teeth.' }
                    ]
                }
            ]
        },
        {
            id: 'body-pain-physical',
            title: 'Le Corps, Avoir mal à, Description',
            description: 'Body parts, physical description, expressing pain.',
            translation: 'The Body, Pain, Physical Description',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Body Parts</b>: La tête, le bras, la jambe, le ventre, le dos, les yeux.<br><b>Avoir mal à</b>: J\'ai mal à la tête (headache), au ventre (stomach ache).',
                    translation: 'Description : Il est grand, elle est blonde, il a les yeux bleus.'
                }
            ]
        },
        {
            id: 'feelings-sensations',
            title: 'Exprimer des émotions et sensations',
            description: 'Feeling hot, cold, happy, sad.',
            translation: 'Emotions and Sensations',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Use <b>Avoir</b> for needs/sensations (froid, chaud, faim, soif, peur).<br>Use <b>Être</b> for emotions (content, triste, fatigué).',
                    translation: 'J\'ai faim (I am hungry). Je suis content (I am happy).'
                }
            ]
        },
        {
            id: 'modals-propose',
            title: 'Pouvoir, Vouloir, Devoir & Proposer',
            description: 'Can, Want, Must. Proposing outings.',
            translation: 'Modals & Proposing an outing',
            blocks: [
                {
                    type: 'conjugation',
                    verb: 'Pouvoir',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'peux' }, { pronoun: 'Tu', form: 'peux' }, { pronoun: 'Il', form: 'peut' },
                        { pronoun: 'Nous', form: 'pouvons' }, { pronoun: 'Vous', form: 'pouvez' }, { pronoun: 'Ils', form: 'peuvent' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Tu veux aller au cinéma ?', translation: 'Do you want to go to the movies?' },
                        { french: 'Je dois partir.', translation: 'I must leave.' },
                        { french: 'On peut manger au resto ?', translation: 'Can we eat at the restaurant?' }
                    ]
                }
            ]
        },
        {
            id: 'imperative-invitation',
            title: 'L\'Impératif & Inviter',
            description: 'Orders, advice, invitations (Standard & Pronominal).',
            translation: 'The Imperative & Inviting',
            formula: 'Verbe without subject pronoun (Tu/Nous/Vous forms)',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Used for commands. Keep the verb form of Tu, Nous, Vous (drop "s" for -er verbs in Tu form).<br><b>Reflexive</b>: Lève-toi ! (Get up!)',
                    translation: 'Entrez ! (Come in!) Assieds-toi ! (Sit down!)'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Viens chez moi ce soir !', translation: 'Come to my place tonight!' },
                        { french: 'Ne fumez pas ici.', translation: 'Do not smoke here.' }
                    ]
                }
            ]
        },
        {
            id: 'weather-climate',
            title: 'Parler du climat et Les Couleurs',
            description: 'Weather and Colors.',
            translation: 'Weather & Colors',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Weather</b>: Il fait beau, il pleut, il neige, il fait froid.<br><b>Colors</b>: Rouge, bleu, vert, jaune, noir, blanc (agree with noun).',
                    translation: 'Il fait chaud aujourd\'hui.'
                }
            ]
        },
        {
            id: 'future-proche',
            title: 'Le Futur Proche',
            description: 'Going to do something.',
            translation: 'The Near Future',
            formula: 'Aller (Present) + Infinitive',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Use standard verbs or pronominal verbs.',
                    translation: 'Je vais manger. Je vais me coucher.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Qu\'est-ce que tu vas faire ce week-end ?', translation: 'What are you going to do this weekend?' },
                        { french: 'Nous allons partir en vacances.', translation: 'We are going to go on vacation.' }
                    ]
                }
            ]
        },
        {
            id: 'professions-character',
            title: 'Les Professions & Caractériser une personne',
            description: 'Jobs and personality traits.',
            translation: 'Professions & Character',
            blocks: [
                {
                    type: 'examples',
                    list: [
                        { french: 'Il est médecin.', translation: 'He is a doctor.' },
                        { french: 'Elle est sympa et intelligente.', translation: 'She is nice and smart.' }
                    ]
                }
            ]
        },
        {
            id: 'phone-questions',
            title: 'Numéros de téléphone, Inscription, Questions',
            description: 'Giving phone numbers and asking more questions.',
            translation: 'Phone numbers, Registration, Questions (2)',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Phone numbers in France are read in pairs (06, 12, 34, 56, 78).',
                    translation: 'Quel est votre numéro de téléphone ?'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Je voudrais m\'inscrire.', translation: 'I would like to register.' },
                        { french: 'Combien ça coûte ?', translation: 'How much does it cost?' }
                    ]
                }
            ]
        }
    ]
};
