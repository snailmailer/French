import type { LevelData } from './types';

export const b1Data: LevelData = {
    id: 'B1',
    title: 'B1 - Intermediate',
    description: 'Focus: narrative pasts, advice, future, more complex speech.',
    topics: [
        {
            id: 'imparfait-pc-narrative',
            title: 'Parler de vos vacances',
            description: 'Narratives using Passé Composé and Imparfait.',
            translation: 'Talking about your holidays',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Detailed narratives mix PC for events and Imparfait for descriptions/states to tell a story.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Il faisait beau quand nous sommes arrivés.", translation: "The weather was nice when we arrived." }
                    ]
                }
            ]
        },
        {
            id: 'passe-recent',
            title: 'Le Passé Récent',
            description: 'Venir de + infinitive.',
            translation: 'The Recent Past',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Use "venir de" + infinitive to say you just did something.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Venir de...',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'viens de...' },
                        { pronoun: 'Tu', form: 'viens de...' },
                        { pronoun: 'Il', form: 'vient de...' },
                        { pronoun: 'Nous', form: 'venons de...' },
                        { pronoun: 'Vous', form: 'venez de...' },
                        { pronoun: 'Ils', form: 'viennent de...' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Je viens de finir.", translation: "I just finished." }
                    ]
                }
            ]
        },
        {
            id: 'plus-que-parfait',
            title: 'Le Plus-que-parfait',
            description: 'Action before another past action.',
            translation: 'The Pluperfect (Past Perfect)',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Formed with Imperfect of auxiliary (avoir/être) + Past Participle. Used for actions that happened <strong>before</strong> another past action.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "J'avais déjà mangé quand il est arrivé.", translation: "I had already eaten when he arrived." }
                    ]
                }
            ]
        },
        {
            id: 'futur-simple',
            title: 'Le Futur Simple',
            description: 'Projections and plans.',
            translation: 'The Simple Future',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Formed by adding endings (-ai, -as, -a, -ons, -ez, -ont) to the infinitive (for regular verbs).</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Parler',
                    tense: 'Futur Simple',
                    data: [
                        { pronoun: 'Je', form: 'parlerai' },
                        { pronoun: 'Tu', form: 'parleras' },
                        { pronoun: 'Il', form: 'parlera' },
                        { pronoun: 'Nous', form: 'parlerons' },
                        { pronoun: 'Vous', form: 'parlerez' },
                        { pronoun: 'Ils', form: 'parleront' }
                    ]
                }
            ]
        },
        {
            id: 'futur-proche-simple',
            title: 'Futur Proche vs Futur Simple',
            description: 'Immediate vs Distant/Formal future.',
            translation: 'Near Future vs Simple Future',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p><strong>Futur Proche</strong> (aller + inf): More certain, immediate.<br/><strong>Futur Simple</strong>: More distant, formal, or conditional.</p>'
                }
            ]
        },
        {
            id: 'conseils-1',
            title: 'Donner des conseils (1)',
            description: 'Devoir, il faut, impératif.',
            translation: 'Giving advice (1)',
            blocks: [
                {
                    type: 'examples',
                    list: [
                        { french: "Il faut étudier.", translation: "You must study." },
                        { french: "Tu dois manger.", translation: "You have to eat." },
                        { french: "Fais attention !", translation: "Be careful!" }
                    ]
                }
            ]
        },
        {
            id: 'conditionnel-present',
            title: 'Le Conditionnel Présent',
            description: 'Politeness, advice, hypothesis.',
            translation: 'Present Conditional',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Used for politeness ("Je voudrais"), advice ("Tu devrais"), or hypothetical situations.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Aimer',
                    tense: 'Conditionnel',
                    data: [
                        { pronoun: 'J\'', form: 'aimerais' },
                        { pronoun: 'Tu', form: 'aimerais' },
                        { pronoun: 'Il', form: 'aimerait' },
                        { pronoun: 'Nous', form: 'aimerions' },
                        { pronoun: 'Vous', form: 'aimeriez' },
                        { pronoun: 'Ils', form: 'aimeraient' }
                    ]
                }
            ]
        },
        {
            id: 'relative-pronouns',
            title: 'Pronoms Relatifs (qui, que, où, dont)',
            description: 'Linking sentences.',
            translation: 'Relative Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p><strong>Qui</strong>: Subject.<br/><strong>Que</strong>: Direct Object.<br/><strong>Où</strong>: Time or Place.<br/><strong>Dont</strong>: Replaces "de".</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "L'homme qui parle.", translation: "The man who is speaking." },
                        { french: "Le livre que je lis.", translation: "The book that I am reading." },
                        { french: "Le moment où je suis parti.", translation: "The moment when I left." },
                        { french: "Le film dont je te parle.", translation: "The film I am talking to you about." }
                    ]
                }
            ]
        }
    ]
};
