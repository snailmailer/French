import type { LevelData } from './types';

export const b2Data: LevelData = {
    id: 'B2',
    title: 'B2 - Upper-Intermediate',
    description: 'Focus: nuance, complex pronouns, advanced tenses and conditionals.',
    topics: [
        {
            id: 'relative-pronouns-composed',
            title: 'Pronoms Relatifs Composés',
            description: 'Compound relative pronouns (lequel, auquel, duquel).',
            translation: 'Compound Relative Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Used after prepositions (avec, pour, sur, sans...). They agree in gender and number with the antecedent.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "La chaise sur laquelle je suis assis.", translation: "The chair on which I am sitting." },
                        { french: "Le projet auquel je pense.", translation: "The project about which I am thinking." }
                    ]
                }
            ]
        },
        {
            id: 'demonstrative-pronouns',
            title: 'Pronoms Démonstratifs',
            description: 'Celui, celle, ceux, celles.',
            translation: 'Demonstrative Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Replaces a noun previously mentioned. Followed by -ci/-la, or "de", or a relative pronoun (qui/que).</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Quel livre veux-tu ? Celui-ci ou celui-là ?", translation: "Which book do you want? This one or that one?" },
                        { french: "Ceux qui travaillent dur réussiront.", translation: "Those who work hard will succeed." }
                    ]
                }
            ]
        },
        {
            id: 'interrogative-pronouns',
            title: 'Pronoms Interrogatifs Complexes',
            description: 'Lequel, auxquels, etc.',
            translation: 'Complex Interrogative Pronouns',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Used to ask questions about a specific choice among a group.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Lequel préfères-tu ?", translation: "Which one do you prefer?" },
                        { french: "Auxquels penses-tu ?", translation: "Which ones are you thinking of?" }
                    ]
                }
            ]
        },
        {
            id: 'conditionnel-passe',
            title: 'Le Conditionnel Passé',
            description: 'Regrets and hypothetical past.',
            translation: 'Past Conditional',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Formed with Conditional Present of auxiliary + Past Participle. Used to express regrets or things that would have happened under different circumstances.</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "J'aurais dû étudier plus.", translation: "I should have studied more." },
                        { french: "Si j'avais su, je serais venu.", translation: "If I had known, I would have come." }
                    ]
                }
            ]
        },
        {
            id: 'gerondif',
            title: 'Le Gérondif',
            description: 'Simultaneous actions and manner.',
            translation: 'The Gerund',
            blocks: [
                {
                    type: 'markdown',
                    content: '<p>Formed with "en" + present participle (-ant). Indicates simultaneous action ("while doing") or method ("by doing").</p>'
                },
                {
                    type: 'examples',
                    list: [
                        { french: "Il mange en regardant la télé.", translation: "He eats while watching TV." },
                        { french: "C'est en forgeant qu'on devient forgeron.", translation: "Practice makes perfect (lit: It is by forging that one becomes a blacksmith)." }
                    ]
                }
            ]
        }
    ]
};
