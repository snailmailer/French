import type { LevelData } from './types';

export const a2Data: LevelData = {
    id: 'A2',
    title: 'A2 - Elementary',
    description: 'Focus: more past, simple comparisons, more pronouns.',
    topics: [
        {
            id: 'passe-compose-avoir',
            title: 'Le Passé Composé (avec Avoir)',
            description: 'The past tense with Avoir.',
            translation: 'The Compound Past (with Avoir)',
            formula: 'Subject + Avoir (Present) + Past Participle',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>The "Passé Composé" is used for completed actions in the past. Most verbs use "avoir" as an auxiliary verb followed by the past participle (-é, -i, -u).</p>',
                    translation: '<p>Le Passé Composé s\'utilise pour des actions terminées. La plupart des verbes utilisent "avoir" + participe passé.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Manger',
                    tense: 'Passé Composé',
                    data: [
                        { pronoun: 'J\'', form: 'ai mangé' },
                        { pronoun: 'Tu', form: 'as mangé' },
                        { pronoun: 'Il/Elle/On', form: 'a mangé' },
                        { pronoun: 'Nous', form: 'avons mangé' },
                        { pronoun: 'Vous', form: 'avez mangé' },
                        { pronoun: 'Ils/Elles', form: 'ont mangé' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: "J'ai fini mon travail.", translation: "I finished my work." },
                        { french: "Tu as parlé à ta mère ?", translation: "Did you speak to your mother?" }
                    ]
                }
            ]
        },
        {
            id: 'passe-compose-etre',
            title: 'Le Passé Composé (avec Être)',
            description: 'The past tense with Être and agreement.',
            translation: 'The Compound Past (with Être)',
            formula: 'Subject + Être (Present) + Past Participle (agreed)',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Some verbs of movement and state change (Dr. Mrs. Vandertramp verbs) use "être". The past participle must agree in gender and number with the subject.</p>',
                    translation: '<p>Certains verbes (mouvement, état) utilisent "être". Le participe passé s\'accorde avec le sujet.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Aller',
                    tense: 'Passé Composé',
                    data: [
                        { pronoun: 'Je', form: 'suis allé(e)' },
                        { pronoun: 'Tu', form: 'es allé(e)' },
                        { pronoun: 'Il/Elle/On', form: 'est allé(e)' },
                        { pronoun: 'Nous', form: 'sommes allés(es)' },
                        { pronoun: 'Vous', form: 'êtes allés(es)' },
                        { pronoun: 'Ils/Elles', form: 'sont allés(es)' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Elle est partie hier.", translation: "She left yesterday." },
                        { french: "Nous sommes arrivés.", translation: "We arrived." }
                    ]
                }
            ]
        },
        {
            id: 'passe-compose-pronominal',
            title: 'Passé Composé (Verbes Pronominaux)',
            description: 'Reflexive verbs in the past.',
            translation: 'Compound Past (Reflexive Verbs)',
            formula: 'Subject + Reflexive Pronoun + Être + Past Participle',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Reflexive verbs always use "être" in the passé composé. The reflexive pronoun comes before the auxiliary verb.</p>',
                    translation: '<p>Les verbes pronominaux utilisent toujours "être". Le pronom réfléchi se place avant l\'auxiliaire.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Se laver',
                    tense: 'Passé Composé',
                    data: [
                        { pronoun: 'Je', form: 'me suis lavé(e)' },
                        { pronoun: 'Tu', form: 't\'es lavé(e)' },
                        { pronoun: 'Il', form: 's\'est lavé' },
                        { pronoun: 'Nous', form: 'nous sommes lavés(es)' },
                        { pronoun: 'Vous', form: 'vous êtes lavés(es)' },
                        { pronoun: 'Ils', form: 'se sont lavés' }
                    ]
                }
            ]
        },
        {
            id: 'imparfait',
            title: 'L\'Imparfait',
            description: 'Used for descriptions and repeated actions in the past.',
            translation: 'The Imperfect',
            formula: 'Nous form stem + ais, ais, ait, ions, iez, aient',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>The imparfait is used for setting the scene, descriptions, and habitual actions in the past. It is formed by taking the "nous" form of the present, removing -ons, and adding endings: -ais, -ais, -ait, -ions, -iez, -aient.</p>',
                    translation: '<p>L\'imparfait décrit le décor ou les habitudes. On prend le radical de "nous" au présent + terminaisons.</p>'
                },
                {
                    type: 'conjugation',
                    verb: 'Parler',
                    tense: 'Imparfait',
                    data: [
                        { pronoun: 'Je', form: 'parlais' },
                        { pronoun: 'Tu', form: 'parlais' },
                        { pronoun: 'Il', form: 'parlait' },
                        { pronoun: 'Nous', form: 'parlions' },
                        { pronoun: 'Vous', form: 'parliez' },
                        { pronoun: 'Ils', form: 'parlaient' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Quand j'étais petit,  je jouais au foot.", translation: "When I was young, I used to play soccer." },
                        { french: "Il faisait beau.", translation: "It was beautiful weather." }
                    ]
                }
            ]
        },
        {
            id: 'imparfait-vs-pc',
            title: 'Imparfait vs Passé Composé',
            description: 'Understanding the difference.',
            translation: 'Imperfect vs Compound Past',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p><strong>Passé Composé</strong>: Specific completed events, main storyline. <br/><strong>Imparfait</strong>: Background, ongoing state, habits.</p>',
                    translation: '<p><strong>Passé Composé</strong> : Actions finies, histoire principale.<br/><strong>Imparfait</strong> : Contexte, état, habitudes.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Je dormais (Imp) quand le téléphone a sonné (PC).", translation: "I was sleeping when the phone rang." }
                    ]
                }
            ]
        },
        {
            id: 'time-markers',
            title: 'Marqueurs Temporels',
            description: 'Depuis, il y a.',
            translation: 'Time Markers',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p><strong>Depuis</strong> + Present: Action started in the past and continues now.<br/><strong>Il y a</strong> + Passé Composé: Completed action that happened some time ago.</p>',
                    translation: '<p><strong>Depuis</strong> + Présent : Action commancée dans le passé qui continue.<br/><strong>Il y a</strong> + Passé : Action terminée il y a un certain temps.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "J'habite ici depuis 2010.", translation: "I have lived here since 2010." },
                        { french: "J'ai fini il y a 5 minutes.", translation: "I finished 5 minutes ago." }
                    ]
                }
            ]
        },
        {
            id: 'pronouns-cod-coi',
            title: 'Pronoms COD et COI',
            description: 'Direct and Indirect pronouns.',
            translation: 'COD and COI Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p><strong>COD</strong> (le, la, les) replace direct objects.<br/><strong>COI</strong> (lui, leur) replace indirect objects introduced by "à".</p>',
                    translation: '<p><strong>COD</strong> (le, la, les) remplacent les objets directs.<br/><strong>COI</strong> (lui, leur) remplacent les objets indirects ("à").</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Je lui parle.", translation: "I speak to him/her." },
                        { french: "Je les vois.", translation: "I see them." }
                    ]
                }
            ]
        },
        {
            id: 'pronoun-y',
            title: 'Le Pronom "y"',
            description: 'Replacing places.',
            translation: 'The pronoun "y"',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>"y" replaces a place introduced by "à", "dans", "en", "chez", etc. It means "there".</p>',
                    translation: '<p>"y" remplace un lieu introduit par une préposition. Il signifie "là-bas" ou "y".</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Tu vas à Paris ? Oui, j'y vais.", translation: "Are you going to Paris? Yes, I'm going there." }
                    ]
                }
            ]
        },
        {
            id: 'comparison',
            title: 'La Comparaison',
            description: 'Comparing quantity and quality.',
            translation: 'Comparison',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Plus... que (more than), moins... que (less than), aussi... que (as... as).</p>',
                    translation: '<p>Plus... que, moins... que, aussi... que.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Elle est plus grande que moi.", translation: "She is taller than me." },
                        { french: "Il travaille autant que toi.", translation: "He works as much as you." }
                    ]
                }
            ]
        },
        {
            id: 'pronouns-en-y',
            title: 'Les Pronoms En et Y',
            description: 'Replacing places and quantities.',
            translation: 'The Pronouns En and Y',
            formula: 'Y = à + place / En = de + noun',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Y</b>: Replaces "à + location" or "à + thing". (J\'y vais = I go there).<br><b>En</b>: Replaces "de + noun" or quantities. (J\'en veux = I want some).',
                    translation: 'Tu vas à Paris? Oui, j\'y vais. Tu veux du pain? Oui, j\'en veux.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Il pense à son travail? Oui, il y pense.', translation: 'Is he thinking about his job? Yes, he is thinking about it.' },
                        { french: 'Tu as des frères? Oui, j\'en ai deux.', translation: 'Do you have brothers? Yes, I have two (of them).' }
                    ]
                }
            ]
        },
        {
            id: 'demonstrative-pronouns',
            title: 'Pronoms Démonstratifs (Celui, celle...)',
            description: 'This one, That one.',
            translation: 'Demonstrative Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Use <b>Celui</b> (M), <b>Celle</b> (F), <b>Ceux</b> (M.Pl), <b>Celles</b> (F.Pl) to replace a noun mentioned before. Often combined with -ci (here) or -là (there).',
                    translation: 'Utilisez Celui, Celle, Ceux, Celles pour remplacer un nom.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Quelle voiture aimes-tu? Celle-ci ou celle-là?', translation: 'Which car do you like? This one or that one?' },
                        { french: 'Je préfère celui de gauche.', translation: 'I prefer the one on the left.' }
                    ]
                }
            ]
        }
    ]
};
