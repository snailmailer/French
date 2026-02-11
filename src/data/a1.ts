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
            formula: 'Subject + Verb Stem + Ending',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>In French, regular verbs are grouped by their endings: -er, -ir, and -re. The present tense describes actions happening now or general truths.</p>',
                    translation: '<p>En français, les verbes réguliers sont groupés par leurs terminaisons : -er, -ir et -re. Le présent décrit des actions en cours ou des vérités générales.</p>'
                },
                {
                    type: 'formula',
                    items: [
                        '-er verbs: e, es, e, ons, ez, ent',
                        '-ir verbs: is, is, it, issons, issez, issent',
                        '-re verbs: s, s, -, ons, ez, ent'
                    ]
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
                        { french: "Nous finissons le travail.", translation: "We are finishing the work." },
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
                    content: '<p>Some -er verbs have slight spelling changes to maintain pronunciation. Verbs ending in -ger add an "e" before "ons" in the "nous" form to keep the soft "g" sound. Verbs in -yer change "y" to "i" in singular forms and the third person plural.</p>',
                    translation: '<p>Des verbes en -er changent pour la prononciation. -ger ajoute un "e" avec "nous". -yer change "y" en "i" au singulier et à la 3e personne du pluriel.</p>'
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
                    content: '<p>Use verbs like "aimer" (to like), "adorer" (to love), "détester" (to hate), and "préférer" (to prefer) to talk about food.</p>',
                    translation: '<p>Utilisez "aimer", "adorer", "détester" et "préférer" pour parler de nourriture.</p>'
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
                    content: '<p>When talking about quantities, we use expressions like "un kilo de", "bouteille de", "beaucoup de". The pronoun "en" replaces "de" + noun, often used for quantities.</p>',
                    translation: '<p>Pour les quantités : "un kilo de", "beaucoup de". Le pronom "en" remplace "de" + nom.</p>'
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
            formula: 'Subject + COD + Verb',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Direct object pronouns replace nouns that are directly acted upon by the verb. They are placed <strong>before</strong> the conjugated verb.</p>',
                    translation: '<p>Les pronoms COD remplacent les noms objets directs. Ils se placent <strong>devant</strong> le verbe conjugué.</p>'
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
            formula: 'Subject + ne + Verb + pas',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>To make a sentence negative, place "ne" before the verb and "pas" after it. (ne -> n\' before a vowel).</p>',
                    translation: '<p>Pour la négation, placez "ne" avant le verbe et "pas" après.</p>'
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
            formula: 'Subject + être (conjugated) + en train de + Infinitive',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Use "être en train de" + infinitive to say you are currently in the middle of doing something.</p>',
                    translation: '<p>Utilisez "être en train de" + infinitif pour une action en cours.</p>'
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
        },
        {
            id: 'numbers-0-100',
            title: 'Les Nombres (0-100+)',
            description: 'Counting from 0 to 1 million.',
            translation: 'Numbers (0-100+)',
            blocks: [
                {
                    type: 'markdown',
                    content: '<h3>0 - 20</h3><p>0 (zéro), 1 (un), 2 (deux), 3 (trois), 4 (quatre), 5 (cinq), 6 (six), 7 (sept), 8 (huit), 9 (neuf), 10 (dix), 11 (onze), 12 (douze), 13 (treize), 14 (quatorze), 15 (quinze), 16 (seize), 17 (dix-sept), 18 (dix-huit), 19 (dix-neuf), 20 (vingt).</p>',
                    translation: 'The basics needed for all other numbers.'
                },
                {
                    type: 'markdown',
                    content: '<h3>Tens (Les dizaines)</h3><p>10 (dix), 20 (vingt), 30 (trente), 40 (quarante), 50 (cinquante), 60 (soixante), 70 (soixante-dix), 80 (quatre-vingts), 90 (quatre-vingt-dix), 100 (cent).</p>'
                },
                {
                    type: 'markdown',
                    content: '<h3>Big Numbers</h3><ul><li>1 000 = mille</li><li>10 000 = dix mille</li><li>100 000 = cent mille</li><li>1 000 000 = un million</li></ul>',
                    translation: 'Note: "mille" takes no "s" in the plural, but "million" does (deux millions).'
                }
            ]
        },
        {
            id: 'family-possessives',
            title: 'La Famille et les Adjectifs Possessifs',
            description: 'Talking about family members and possession.',
            translation: 'Family and Possessive Adjectives',
            formula: 'Possessive + Noun (agrees with noun, not owner)',
            blocks: [
                {
                    type: 'markdown',
                    content: 'The possessive adjective depends on the gender/number of the **object/person** possessed.<br><br><b>Mon, Ma, Mes</b> (My)<br><b>Ton, Ta, Tes</b> (Your)<br><b>Son, Sa, Ses</b> (His/Her/Its)<br><b>Notre, Nos</b> (Our)<br><b>Votre, Vos</b> (Your)<br><b>Leur, Leurs</b> (Their)',
                    translation: 'Examples: Mon père (M), Ma mère (F), Mes parents (Pl).'
                },
                {
                    type: 'examples',
                    list: [
                        { french: 'C\'est mon frère.', translation: 'This is my brother.' },
                        { french: 'Elle aime sa soeur.', translation: 'She loves her sister.' },
                        { french: 'Ce sont nos cousins.', translation: 'These are our cousins.' }
                    ]
                }
            ]
        },
        {
            id: 'body-parts',
            title: 'Les parties du corps',
            description: 'Vocabulary for the human body.',
            translation: 'Body Parts',
            blocks: [
                {
                    type: 'markdown',
                    content: '<ul><li>La tête (head)</li><li>Le bras (arm)</li><li>La main (hand)</li><li>La jambe (leg)</li><li>Le pied (foot)</li><li>Le ventre (stomach)</li><li>Le dos (back)</li><li>Les yeux (eyes)</li></ul>',
                    translation: 'Use "avoir mal à..." to say something hurts (J\'ai mal à la tête).'
                }
            ]
        },
        {
            id: 'verbs-ger-yer-ir-re-details',
            title: 'Verbes en -ger, -yer, -ir, -re (Détails)',
            description: 'Specific spelling changes and regular patterns.',
            translation: 'Verbs in -ger, -yer, -ir, -re (Details)',
            blocks: [
                {
                    type: 'markdown',
                    content: '<b>-ger verbs</b> (manger): Add "e" before "ons" (nous mang<b>e</b>ons).<br><b>-yer verbs</b> (payer): "y" becomes "i" in boot forms (je paie).<br><b>-ir verbs</b> (finir): Regular Type 2 (iss extensions).',
                    translation: 'These are predictable patterns once memorized.'
                }
            ]
        }
    ]
};
