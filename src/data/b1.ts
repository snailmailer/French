import type { LevelData } from './types';

export const b1Data: LevelData = {
    id: 'B1',
    title: 'B1 - Intermédiaire',
    description: 'Récits passés, futur, conditionnel, pronoms complexes.',
    topics: [
        {
            id: 'verbs-advanced',
            title: 'Verbes (-ger, -yer, -ir, -re) & Quantités',
            description: 'Special verb spellings, Food tastes, Shopping.',
            translation: 'Advanced Verbs & Quantities',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>-ger</b>: mangEons. <b>-yer</b>: paie/payons. <br><b>Quantities</b>: du, de la, des, un kilo de, beaucoup de, <b>En</b> (pronoun).',
                    translation: 'Je mange du pain. J\'en mange.'
                }
            ]
        },
        {
            id: 'past-tenses-narrative',
            title: 'Les Temps du Passé (PC, Imparfait, PQP, Récent)',
            description: 'Narrating in the past: Differences and sequencing.',
            translation: 'Past Tenses Narrative',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Passé Composé</b>: Actions (J\'ai mangé). <br><b>Imparfait</b>: Description/Habit (Il faisait beau). <br><b>Passé Récent</b>: Venir de (Je viens de finir). <br><b>Plus-que-parfait</b>: Before past (Avaits/Etait + PP).',
                    translation: 'Comparaison : J\'ai fini vs Je finissais.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'J\'avais déjà mangé quand il est arrivé.', translation: 'I had already eaten when he arrived.' },
                        { french: 'Je regardais la télé quand il a crié.', translation: 'I was watching TV when he shouted.' }
                    ]
                }
            ]
        },
        {
            id: 'advice-modals',
            title: 'Donner des conseils & Devoir',
            description: 'Il faut, Devoir, Imperative.',
            translation: 'Giving Advice',
            blocks: [
                {
                    type: 'examples',
                    list: [
                        { french: 'Il faut faire du sport.', translation: 'You must do sports.' },
                        { french: 'Tu devrais arrêter de fumer.', translation: 'You should stop smoking.' }
                    ]
                }
            ]
        },
        {
            id: 'comparison',
            title: 'La Comparaison (Quantité & Qualité)',
            description: 'Comparing adjectives, adverbs, and nouns.',
            translation: 'Comparison',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Quality</b>: Plus/Moins/Aussi + Adjective + Que. (Plus grand que).<br><b>Quantity</b>: Plus/Moins/Autant + DE + Noun + Que. (Plus de livres que).',
                    translation: 'Prononciation : "Plus" (pronounce S if ends sentence or before vowel).'
                }
            ]
        },
        {
            id: 'future-simple',
            title: 'Le Futur Simple vs Futur Proche',
            description: 'Plans vs Predictions.',
            translation: 'Simple Future vs Near Future',
            formula: 'Stem (-r) + ai, as, a, ons, ez, ont',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Futur Simple</b>: Un jour, je partirai. (Distant/Formal).<br><b>Futur Proche</b>: Je vais partir. (Certain/Soon).',
                    translation: 'Demain, il pleuvra.'
                }
            ]
        },
        {
            id: 'conditional-present',
            title: 'Le Conditionnel Présent',
            description: 'Politeness and Hypothesis.',
            translation: 'Present Conditional',
            formula: 'Stem (-r) + impft endings (ais, ais, ait...)',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Used for polite requests (Je voudrais) or advice (Tu devrais).',
                    translation: 'Si j\'avais de l\'argent, je voyagerais.'
                }
            ]
        },
        {
            id: 'pronouns-complex',
            title: 'Pronoms (COD, COI, En, Y)',
            description: 'Replacing all types of objects.',
            translation: 'Complex Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>COD</b>: Le/La/Les. <b>COI</b>: Lui/Leur. <b>Y</b>: Place/À. <b>En</b>: Quantity/De.',
                    translation: 'Je lui en donne. Il y va.'
                }
            ]
        },
        {
            id: 'pronouns-rel-demo-int',
            title: 'Pronoms Relatifs, Démonstratifs, Interrogatifs',
            description: 'Qui/Que/Où/Dont, Celui/Celle, Lequel.',
            translation: 'Relative, Demonstrative, Interrogative Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Relatifs</b>: L\'homme qui..., Le livre que..., Le pays où..., Le film dont...<br><b>Démonstratifs</b>: Celui-ci, Celle-là.<br><b>Interrogatifs</b>: Lequel ? Laquelle ?',
                    translation: 'Laquelle préfères-tu ?'
                }
            ]
        },
        {
            id: 'gerondif',
            title: 'Le Gérondif',
            description: 'While doing...',
            translation: 'The Gerund',
            formula: 'En + Participe Présent (nous form -ons + ant)',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Indicates simultaneous action or manner.',
                    translation: 'Il mange en marchant (He eats while walking).'
                }
            ]
        },
        {
            id: 'pronouns-demo-interro',
            title: 'Les pronoms demonstratifs',
            description: 'This one, That one, etc.',
            translation: 'Demonstrative Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Celui-ci / Celui-là / Celle-ci / Celle-là / Ceux-ci / Ceux-là / Celles-ci / Celles-là.',
                    translation: 'Je préfère celui-ci.'
                }
            ]
        }
    ]
};
