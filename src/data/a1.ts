import type { LevelData } from './types';

export const a1Data: LevelData = {
    id: 'A1',
    title: 'A1 - Débutant',
    description: 'Bases de la communication, présent, nombres, se présenter.',
    topics: [
        {
            id: 'greetings',
            title: 'Salutations & "Comment ça va ?"',
            description: 'Greeting people and asking how they are.',
            translation: 'Greetings & How are you?',
            blocks: [
                {
                    type: 'markdown',
                    content: '<ul><li><b>Bonjour</b> (Formal/General)</li><li><b>Salut</b> (Informal)</li><li><b>Bonsoir</b> (Evening)</li><li><b>Comment allez-vous ?</b> (Formal)</li><li><b>Comment ça va ? / Ça va ?</b> (Informal)</li></ul>',
                    translation: 'Hello, Hi, Good evening, How are you?'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Je vais bien, merci.', translation: 'I am doing well, thank you.' },
                        { french: 'Pas mal, et toi ?', translation: 'Not bad, and you?' }
                    ]
                }
            ]
        },
        {
            id: 'numbers-dates',
            title: 'Les Nombres (0-100) et la Date',
            description: 'Counting and sayings dates.',
            translation: 'Numbers 0-100, Days, Months',
            blocks: [
                {
                    type: 'markdown',
                    content: '<h3>0-20</h3><p>0 (zéro), 1 (un), 2 (deux), 3 (trois), 4 (quatre), 5 (cinq), 6 (six), 7 (sept), 8 (huit), 9 (neuf), 10 (dix), 11 (onze), 12 (douze), 13 (treize), 14 (quatorze), 15 (quinze), 16 (seize), 17 (dix-sept), 18 (dix-huit), 19 (dix-neuf), 20 (vingt).</p>',
                    translation: 'The basics.'
                },
                {
                    type: 'markdown',
                    content: '<h3>21-69</h3><p>21 (vingt et un), 22 (vingt-deux)... 30 (trente), 40 (quarante), 50 (cinquante), 60 (soixante).</p>'
                },
                {
                    type: 'markdown',
                    content: '<h3>70-100</h3><p>70 (soixante-dix), 71 (soixante et onze)... 80 (quatre-vingts), 90 (quatre-vingt-dix), 100 (cent).</p>',
                    translation: '70 is 60+10, 80 is 4x20, 90 is 4x20+10.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'C\'est le premier mai.', translation: 'It\'s May 1st.' },
                        { french: 'Nous sommes lundi.', translation: 'It is Monday.' }
                    ]
                }
            ]
        },
        {
            id: 'subject-pronouns-verbs-intro',
            title: 'Pronoms Sujets, Être, S\'appeler',
            description: 'Introducing yourself.',
            translation: 'Subject Pronouns, To be, To be named',
            formula: 'Je m\'appelle [Name] / Je suis [Nationality/Job]',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Pronouns</b>: Je, Tu, Il/Elle, Nous, Vous, Ils/Elles.',
                    translation: 'I, You, He/She, We, You, They.'
                },
                {
                    type: 'conjugation',
                    verb: 'Être (To be)',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'suis' }, { pronoun: 'Tu', form: 'es' }, { pronoun: 'Il/Elle', form: 'est' },
                        { pronoun: 'Nous', form: 'sommes' }, { pronoun: 'Vous', form: 'êtes' }, { pronoun: 'Ils/Elles', form: 'sont' }
                    ]
                },
                {
                    type: 'conjugation',
                    verb: 'S\'appeler',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'm\'appelle' }, { pronoun: 'Tu', form: 't\'appelles' }, { pronoun: 'Il/Elle', form: 's\'appelle' },
                        { pronoun: 'Nous', form: 'nous appelons' }, { pronoun: 'Vous', form: 'vous appelez' }, { pronoun: 'Ils/Elles', form: 's\'appellent' }
                    ]
                }
            ]
        },
        {
            id: 'articles-objects',
            title: 'Articles et Objets de la classe',
            description: 'Un/Une/Des vs Le/La/Les. "Qu\'est-ce que c\'est ?"',
            translation: 'Articles and Classroom Objects',
            formula: 'C\'est un/une [Object]',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Indéfinis</b>: Un (M), Une (F), Des (Pl). Used for unspecified things.<br><b>Définis</b>: Le (M), La (F), Les (Pl). Used for specific things.',
                    translation: 'A/An vs The'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Qu\'est-ce que c\'est ? C\'est un livre.', translation: 'What is it? It\'s a book.' },
                        { french: 'C\'est une table.', translation: 'It\'s a table.' },
                        { french: 'Ce sont des chaises.', translation: 'These are chairs.' }
                    ]
                }
            ]
        },
        {
            id: 'nationality-avoir',
            title: 'Nationalités et Verbe Avoir',
            description: 'Saying where you are from and what you have.',
            translation: 'Nationalities and To Have',
            blocks: [
                {
                    type: 'conjugation',
                    verb: 'Avoir (To have)',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'J\'', form: 'ai' }, { pronoun: 'Tu', form: 'as' }, { pronoun: 'Il/Elle', form: 'a' },
                        { pronoun: 'Nous', form: 'avons' }, { pronoun: 'Vous', form: 'avez' }, { pronoun: 'Ils/Elles', form: 'ont' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Il est français. Elle est française.', translation: 'He is French. She is French.' },
                        { french: 'J\'ai vingt ans.', translation: 'I am 20 years old (I have 20 years).' }
                    ]
                }
            ]
        },
        {
            id: 'family-possessives',
            title: 'La Famille et les Adjectifs Possessifs',
            description: 'Mon/Ton/Son etc.',
            translation: 'Family and Possessive Adjectives',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Mon, Ma, Mes</b> (My) | <b>Ton, Ta, Tes</b> (Your) | <b>Son, Sa, Ses</b> (His/Her). <br>Agrees with the object possessed, not the owner.',
                    translation: 'S\'accorde avec l\'objet possédé.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'C\'est mon père.', translation: 'This is my father.' },
                        { french: 'C\'est sa mère.', translation: 'This is his/her mother.' },
                        { french: 'Ce sont nos parents.', translation: 'These are our parents.' }
                    ]
                }
            ]
        },
        {
            id: 'time-schedule',
            title: 'Indiquer l\'heure et les horaires',
            description: 'Asking and telling time.',
            translation: 'Telling Time',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Use "Il est" + number + "heures". <br>Examples: 8h00 (huit heures), 8h15 (huit heures et quart), 8h30 (huit heures et demie), 8h45 (neuf heures moins le quart).',
                    translation: 'Quelle heure est-il ?'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Il est midi.', translation: 'It is noon.' },
                        { french: 'Le film commence à 20h.', translation: 'The movie starts at 8pm.' }
                    ]
                }
            ]
        },
        {
            id: 'verbs-er-negation',
            title: 'Verbes en -er et La Négation',
            description: 'Regular verbs (Parler, Habiter, Aimer) and "Ne...pas".',
            translation: '-er Verbs and Negation',
            formula: 'Subject + ne + verb + pas',
            blocks: [
                {
                    type: 'conjugation',
                    verb: 'Parler',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'parle' }, { pronoun: 'Tu', form: 'parles' }, { pronoun: 'Il/Elle', form: 'parle' },
                        { pronoun: 'Nous', form: 'parlons' }, { pronoun: 'Vous', form: 'parlez' }, { pronoun: 'Ils/Elles', form: 'parlent' }
                    ]
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Je ne parle pas espagnol.', translation: 'I do not speak Spanish.' },
                        { french: 'Il n\'aime pas le café.', translation: 'He does not like coffee.' }
                    ]
                }
            ]
        },
        {
            id: 'tastes-hobbies',
            title: 'Goûts et Loisirs',
            description: 'Talking about likes/dislikes and hobbies.',
            translation: 'Tastes and Hobbies',
            blocks: [
                {
                    type: 'markdown',
                    content: 'Use <b>Aimer, Adorer, Détester, Préférer</b> + Definite Article (le, la, les) OR Infinitive.',
                    translation: 'J\'aime le foot. J\'adore voyager.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Qu\'est-ce que tu aimes faire ?', translation: 'What do you like to do?' },
                        { french: 'J\'aime écouter de la musique.', translation: 'I like listening to music.' }
                    ]
                }
            ]
        },
        {
            id: 'location-prepositions-city',
            title: 'Ville, Pays, Prépositions et Itinéraire',
            description: 'Describing your city and asking directions.',
            translation: 'City, Countries, Prepositions, Directions',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Countries</b>: En (Feminine countries), Au (Masculine), Aux (Plural). <br><b>Cities</b>: À (for all cities). <br><b>Directions</b>: Tout droit (straight), à gauche (left), à droite (right).',
                    translation: 'Je vais en France, au Canada, à Paris.'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'J\'habite à Londres.', translation: 'I live in London.' },
                        { french: 'Tournez à droite.', translation: 'Turn right.' },
                        { french: 'C\'est loin d\'ici ?', translation: 'Is it far from here?' }
                    ]
                }
            ]
        },
        {
            id: 'transport-aller-prendre-venir',
            title: 'Aller, Venir, Prendre (Transport)',
            description: 'Moving around.',
            translation: 'Irregular verbs for transport',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Aller</b> (to go) + à. <b>Venir</b> (to come) + de. <b>Prendre</b> (to take) + le/la/bus/train.',
                    translation: 'Je vais au travail. Je prends le bus.'
                },
                {
                    type: 'conjugation',
                    verb: 'Aller',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'vais' }, { pronoun: 'Tu', form: 'vas' }, { pronoun: 'Il', form: 'va' },
                        { pronoun: 'Nous', form: 'allons' }, { pronoun: 'Vous', form: 'allez' }, { pronoun: 'Ils', form: 'vont' }
                    ]
                },
                {
                    type: 'conjugation',
                    verb: 'Prendre',
                    tense: 'Présent',
                    data: [
                        { pronoun: 'Je', form: 'prends' }, { pronoun: 'Tu', form: 'prends' }, { pronoun: 'Il', form: 'prend' },
                        { pronoun: 'Nous', form: 'prenons' }, { pronoun: 'Vous', form: 'prenez' }, { pronoun: 'Ils', form: 'prennent' }
                    ]
                }
            ]
        },
        {
            id: 'demonstratives-questions-postcard',
            title: 'Démonstratifs, Questions, Carte Postale',
            description: 'Ce/Cette, Poser des questions, Writing.',
            translation: 'Demonstratives, Questions, Postcard',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Adjectifs Démonstratifs</b>: Ce (M), Cet (M+Vowel), Cette (F), Ces (Pl).',
                    translation: 'Ce livre, cet homme, cette femme, ces enfants.'
                },
                {
                    type: 'markdown',
                    content: '<b>Questions</b>: Est-ce que... ? / Qu\'est-ce que... ? / Inversion.',
                    translation: 'Do you...? What...?'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'Est-ce que tu aimes Paris ?', translation: 'Do you like Paris?' },
                        { french: 'Où vas-tu ?', translation: 'Where are you going?' },
                        { french: 'Chers parents, Je suis à Paris...', translation: 'Dear parents, I am in Paris...' }
                    ]
                }
            ]
        },
        {
            id: 'il-ya-cest',
            title: 'Il y a / C\'est',
            description: 'Describing existence vs identification.',
            translation: 'There is / It is',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>Il y a</b>: "There is" or "There are" (Existence). <br><b>C\'est</b>: "It is" (Identification).',
                    translation: 'Il y a un chat. C\'est mon chat.'
                }
            ]
        },
        {
            id: 'same-different',
            title: 'Même / Différent',
            description: 'Comparisons.',
            translation: 'Same / Different',
            blocks: [
                {
                    type: 'examples',
                    list: [
                        { french: 'Ils ont le même âge.', translation: 'They are the same age.' },
                        { french: 'C\'est différent.', translation: 'It is different.' }
                    ]
                }
            ]
        }
    ]
};
