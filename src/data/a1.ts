import type { LevelData } from './types';

export const a1Data: LevelData = {
    id: 'A1',
    title: 'A1 - Absolute Beginner',
    description: 'Focus: present tense, basic verbs, simple phrases, food and quantities.',
    topics: [
        {
            id: 'verbs-er-ir-re',
            title: 'Les verbes -er / -ir / -re (au présent)',
            description: 'Introduction to the three main groups of verbs in French.',
            translation: 'The verbs -er / -ir / -re (in the present tense)',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>In French, regular verbs are grouped by their endings: -er, -ir, and -re. The present tense is used to describe actions happening now or general truths.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Parler',
                    tense: 'Présent (-er)',
                    data: [
                        { pronoun: 'Je', form: 'parle' },
                        { pronoun: 'Tu', form: 'parles' },
                        { pronoun: 'Il/Elle/On', form: 'parle' },
                        { pronoun: 'Nous', form: 'parlons' },
                        { pronoun: 'Vous', form: 'parlez' },
                        { pronoun: 'Ils/Elles', form: 'parlent' }
                    ]
                },
                {
                    type: 'conjugation',
                    verb: 'Finir',
                    tense: 'Présent (-ir)',
                    data: [
                        { pronoun: 'Je', form: 'finis' },
                        { pronoun: 'Tu', form: 'finis' },
                        { pronoun: 'Il/Elle/On', form: 'finit' },
                        { pronoun: 'Nous', form: 'finissons' },
                        { pronoun: 'Vous', form: 'finissez' },
                        { pronoun: 'Ils/Elles', form: 'finissent' }
                    ]
                },
                {
                    type: 'conjugation',
                    verb: 'Vendre',
                    tense: 'Présent (-re)',
                    data: [
                        { pronoun: 'Je', form: 'vends' },
                        { pronoun: 'Tu', form: 'vends' },
                        { pronoun: 'Il/Elle/On', form: 'vend' },
                        { pronoun: 'Nous', form: 'vendons' },
                        { pronoun: 'Vous', form: 'vendez' },
                        { pronoun: 'Ils/Elles', form: 'vendent' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Je parle français.", translation: "I speak French." },
                        { french: "nous finissons le travail.", translation: "We are finishing the work." },
                        { french: "Ils vendent des fruits.", translation: "They sell fruits." }
                    ]
                }
            ]
        },
        {
            id: 'verbs-ger-yer',
            title: 'Les verbes -ger, -yer (au présent)',
            description: 'Spelling changes in specific -er verbs.',
            translation: 'Verbs ending in -ger and -yer',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Some -er verbs have slight spelling changes to maintain pronunciation. Verbs ending in -ger add an "e" before "ons" in the "nous" form to keep the soft "g" sound. Verbs in -yer change "y" to "i" in singular forms and the third person plural.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Manger',
                    tense: 'Présent (-ger)',
                    data: [
                        { pronoun: 'Je', form: 'mange' },
                        { pronoun: 'Tu', form: 'manges' },
                        { pronoun: 'Il/Elle/On', form: 'mange' },
                        { pronoun: 'Nous', form: 'mangeons' },
                        { pronoun: 'Vous', form: 'mangez' },
                        { pronoun: 'Ils/Elles', form: 'mangent' }
                    ]
                },
                {
                    type: 'conjugation',
                    verb: 'Payer',
                    tense: 'Présent (-yer)',
                    data: [
                        { pronoun: 'Je', form: 'paie' },
                        { pronoun: 'Tu', form: 'paies' },
                        { pronoun: 'Il/Elle/On', form: 'paie' },
                        { pronoun: 'Nous', form: 'payons' },
                        { pronoun: 'Vous', form: 'payez' },
                        { pronoun: 'Ils/Elles', form: 'paient' }
                    ]
                }
            ]
        },
        {
            id: 'food-tastes',
            title: 'Les goûts alimentaires',
            description: 'Expressing likes and dislikes regarding food.',
            translation: 'Food tastes',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Use verbs like "aimer" (to like), "adorer" (to love), "détester" (to hate), and "préférer" (to prefer) to talk about food.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "J'aime le chocolat.", translation: "I like chocolate." },
                        { french: "Je n'aime pas le café.", translation: "I don't like coffee." },
                        { french: "Elle adore les fraises.", translation: "She loves strawberries." },
                        { french: "Nous détestons les épinards.", translation: "We hate spinach." }
                    ]
                }
            ]
        },
        {
            id: 'shopping-quantities-en',
            title: 'Faire les courses, les quantités, "en"',
            description: 'Shopping, quantities and the pronoun "en".',
            translation: 'Shopping, quantities, "en"',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>When talking about quantities, we use expressions like "un kilo de", "bouteille de", "beaucoup de". The pronoun "en" replaces "de" + noun, often used for quantities.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Je voudrais un kilo de pommes.", translation: "I would like a kilo of apples." },
                        { french: "Tu as des pommes ? Oui, j'en ai.", translation: "Do you have apples? Yes, I have some." },
                        { french: "Combien en voulez-vous ?", translation: "How many do you want?" }
                    ]
                }
            ]
        },
        {
            id: 'pronouns-cod',
            title: 'Les pronoms COD (me, te, le, la)',
            description: 'Direct Object Pronouns in the present.',
            translation: 'COD Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Direct object pronouns replace nouns that are directly acted upon by the verb. They are placed <strong>before</strong> the conjugated verb.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Tu regardes la télé ? Oui, je la regarde.", translation: "Do you watch TV? Yes, I watch it." },
                        { french: "Il m'aime.", translation: "He loves me." },
                        { french: "Je te vois.", translation: "I see you." }
                    ]
                }
            ]
        },
        {
            id: 'negation',
            title: 'Négation de base (ne...pas)',
            description: 'Basic negation.',
            translation: 'Basic negation',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>To make a sentence negative, place "ne" before the verb and "pas" after it. (ne -> n\' before a vowel).</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Je ne fume pas.", translation: "I do not smoke." },
                        { french: "Il n'habite pas ici.", translation: "He doesn't live here." }
                    ]
                }
            ]
        },
        {
            id: 'present-continuous',
            title: 'Le présent continu',
            description: 'Expressing ongoing actions.',
            translation: 'Present continuous',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Use "être en train de" + infinitive to say you are currently in the middle of doing something.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Être en train de...',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'suis en train de...' },
                        { pronoun: 'Tu', form: 'es en train de...' },
                        { pronoun: 'Il/Elle', form: 'est en train de...' },
                        { pronoun: 'Nous', form: 'sommes en train de...' },
                        { pronoun: 'Vous', form: 'êtes en train de...' },
                        { pronoun: 'Ils/Elles', form: 'sont en train de...' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Je suis en train de manger.", translation: "I am eating (right now)." },
                        { french: "Qu'est-ce que tu es en train de faire ?", translation: "What are you doing (right now)?" }
                    ]
                }
            ]
        }
    ]
};
