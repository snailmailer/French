export interface PronounSection {
    title: string;
    useFr: string;
    useEn: string;
    structure: string;
    forms?: string; // Optional because some have list, others have table or multiple lists
    commonForms?: { [key: string]: string }[]; // For "Common forms" list in Indefinite pronouns
    examples: { fr: string; en: string }[];
    subSections?: PronounSection[]; // For 2a, 2b etc
    image?: string; // Path to an illustrative image
}

export const pronounsData: PronounSection[] = [
    {
        title: "1. Pronoms personnels sujets",
        useFr: "remplacent le sujet du verbe (la personne / la chose qui fait l’action).",
        useEn: "replace the subject of the verb (the person/thing doing the action).",
        structure: "pronom sujet + verbe + complément.",
        forms: "je, tu, il, elle, on, nous, vous, ils, elles.",
        examples: [
            { fr: "Je parle français.", en: "I speak French." },
            { fr: "Nous habitons au Canada.", en: "We live in Canada." }
        ]
    },
    {
        title: "2. Pronoms personnels compléments",
        useFr: "remplacent un complément d’objet.",
        useEn: "replace an object (direct or indirect).",
        structure: "sujet + pronom + verbe.",
        examples: [],
        subSections: [
            {
                title: "2a. COD – compléments d’objet direct",
                useFr: "remplacent un complément d’objet direct (répond à « qui ? / quoi ? » sans préposition).",
                useEn: "replace a direct object (answers “who? / what?” with no preposition).",
                structure: "sujet + pronom COD + verbe (+ reste de la phrase).",
                forms: "me / m’, te / t’, le / l’, la / l’, nous, vous, les.",
                examples: [
                    { fr: "Je vois mon frère. → Je le vois.", en: "I see him." },
                    { fr: "Elle invite ses amis. → Elle les invite.", en: "She invites them." }
                ]
            },
            {
                title: "2b. COI – compléments d’objet indirect",
                useFr: "remplacent un complément d’objet indirect avec la préposition à (parler à, téléphoner à…).",
                useEn: "replace an indirect object introduced by to (talk to, write to…).",
                structure: "sujet + pronom COI + verbe (+ reste de la phrase).",
                forms: "me / m’, te / t’, lui, nous, vous, leur.",
                examples: [
                    { fr: "Il parle à sa sœur. → Il lui parle.", en: "He talks to her." },
                    { fr: "Elle écrit à ses parents. → Elle leur écrit.", en: "She writes to them." }
                ]
            }
        ]
    },
    {
        title: "3. Pronoms réfléchis (verbes pronominaux)",
        useFr: "s’emploient avec les verbes pronominaux pour montrer que l’action revient sur le sujet (se laver, se lever, se souvenir…).",
        useEn: "used with reflexive verbs to show the subject acts on itself (to wash oneself, to get up, etc.).",
        structure: "sujet + pronom réfléchi + verbe pronominal.",
        forms: "me / m’, te / t’, se / s’, nous, vous, se / s’.",
        examples: [
            { fr: "Je me lève.", en: "I get up." },
            { fr: "Ils se reposent.", en: "They rest." }
        ]
    },
    {
        title: "4. Pronoms toniques (disjoints)",
        useFr: "utilisés après une préposition, pour l’insistance, ou seuls comme réponse courte.",
        useEn: "used after a preposition, for emphasis, or alone as short answers.",
        structure: "préposition + pronom tonique / C’est + pronom tonique / pronom tonique en tête de phrase.",
        forms: "moi, toi, lui, elle, nous, vous, eux, elles.",
        examples: [
            { fr: "C’est pour moi.", en: "It’s for me." },
            { fr: "Je pense à toi.", en: "I’m thinking of you." }
        ]
    },
    {
        title: "5. Pronoms possessifs",
        useFr: "remplacent « mon/ma/mes + nom », « ton/ta/tes + nom », etc., pour éviter de répéter le nom.",
        useEn: "replace “my + noun, your + noun, his/her + noun…” with “mine, yours, his, hers, ours, theirs”.",
        structure: "article défini (le, la, les) + forme possessive.",
        forms: "le mien/la mienne/les miens/les miennes (mine), le tien/la tienne... (yours), le sien... (his/hers), le nôtre... (ours), le vôtre... (yours), le leur... (theirs).",
        examples: [
            { fr: "Ce livre est le mien.", en: "This book is mine." },
            { fr: "Ces idées sont les leurs.", en: "These ideas are theirs." }
        ]
    },
    {
        title: "6. Pronoms démonstratifs",
        useFr: "remplacent « ce/cet/cette/ces + nom » déjà connu pour montrer de quel élément précis on parle.",
        useEn: "correspond to “this one / that one / these / those”.",
        structure: "pronom démonstratif + éventuel complément (de…, qui…, que…, ci / là).",
        forms: "celui, celle (this/that one) ; ceux, celles (these/those) ; ceci, cela / ça (this, that).",
        examples: [
            { fr: "Celui‑ci est plus cher.", en: "This one is more expensive." },
            { fr: "J’aime ça.", en: "I like that." }
        ]
    },
    {
        title: "7. Pronoms relatifs (qui, que, dont, où)",
        useFr: "introduisent une proposition relative et relient deux phrases en remplaçant un nom (personne, chose, lieu, moment).",
        useEn: "introduce a relative clause (who, which, that, whose, where, when).",
        structure: "qui + verbe (sujet) | que + sujet + verbe | dont + ... (de) | où + ... (lieu/temps).",
        forms: "qui, que, dont, où.",
        examples: [
            { fr: "La femme qui parle est ma prof.", en: "The woman who is speaking is my teacher." },
            { fr: "Le livre que j’ai lu.", en: "The book that I read." },
            { fr: "L’ami dont je t’ai parlé.", en: "The friend I told you about." },
            { fr: "Le jour où je suis arrivé.", en: "The day when I arrived." }
        ]
    },
    {
        title: "8. Pronoms interrogatifs",
        useFr: "servent à poser des questions sur une personne, une chose ou un choix entre plusieurs éléments.",
        useEn: "used to ask questions (who? what? which one?).",
        structure: "pronom + verbe... ou préposition + quoi/qui.",
        forms: "qui ? (who), que/quoi ? (what), lequel/laquelle... (which one).",
        examples: [
            { fr: "Qui vient ce soir ?", en: "Who is coming tonight?" },
            { fr: "Que fais‑tu ?", en: "What are you doing?" },
            { fr: "Tu penses à quoi ?", en: "What are you thinking about?" },
            { fr: "Lequel préfères‑tu ?", en: "Which one do you prefer?" }
        ]
    },
    {
        title: "9. Pronoms indéfinis",
        useFr: "désignent des personnes ou des choses de manière vague ou générale (pas identifiées précisément).",
        useEn: "refer to people/things in a non‑specific way (someone, nothing, several…).",
        structure: "pronom indéfini + verbe.",
        forms: "quelqu’un, personne, quelque chose, rien, chacun(e), certains, plusieurs, tout.",
        examples: [
            { fr: "Quelqu’un a appelé.", en: "Someone called." },
            { fr: "Personne n’est venu.", en: "Nobody came." },
            { fr: "Je ne vois rien.", en: "I see nothing." }
        ]
    },
    {
        title: "10. Pronoms adverbiaux y et en",
        useFr: "remplace un lieu ou un objet introduit par une préposition.",
        useEn: "replaces a place or a prepositional phrase.",
        structure: "sujet + y/en + verbe.",
        examples: [],
        subSections: [
            {
                title: "a) y",
                useFr: "remplace un lieu (« là, à Paris… ») ou « à + chose / idée » ; peut se traduire par “là‑bas / à cela”.",
                useEn: "means “there” or “about it / to it” (replaces “to + thing / place”).",
                structure: "sujet + y + verbe.",
                examples: [
                    { fr: "Je vais à Toronto. → J’y vais demain.", en: "I’m going there tomorrow." },
                    { fr: "Il pense à son travail. → Il y pense.", en: "He thinks about it." }
                ]
            },
            {
                title: "b) en",
                useFr: "remplace « de + nom » (quantité, origine, objet) ; se traduit par “some / any / of it / of them”.",
                useEn: "replaces “of + it/them, some of it, any of it/them”.",
                structure: "sujet + en + verbe (+ quantité éventuelle).",
                examples: [
                    { fr: "Tu veux du café ? → Oui, j’en veux.", en: "Yes, I want some." },
                    { fr: "Tu parles de ce film ? → Oui, j’en parle.", en: "Yes, I’m talking about it." }
                ]
            }
        ]
    }
];
