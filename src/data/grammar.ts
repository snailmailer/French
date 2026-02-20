import { pronounsData, type PronounSection } from './pronouns';

export const grammarData: PronounSection[] = [
    {
        title: "Noms (Nouns)",
        useFr: "mot qui désigne une personne, un animal, un objet, une idée ou un lieu.",
        useEn: "word naming people, places, things, or ideas.",
        structure: "Variable en genre (masculin/féminin) et en nombre (singulier/pluriel).",
        examples: [
            { fr: "Le chat", en: "The cat" },
            { fr: "La ville", en: "The city" }
        ]
    },
    {
        title: "Pronoms (Pronouns)",
        useFr: "remplacent un nom pour éviter la répétition.",
        useEn: "replace nouns.",
        structure: "Varie selon la fonction (sujet, objet, etc.).",
        examples: [
            { fr: "Je mange.", en: "I eat." },
            { fr: "Elle part.", en: "She leaves." },
            { fr: "Ils jouent.", en: "They play." }
        ],
        subSections: pronounsData // Nest existing pronouns data here if you want, or just append them.
        // Actually the user list had "Pronoms" as a single entry. 
        // But since we have a whole detailed section on pronouns, I will append the detailed ones AFTER these basic definitions.
    },
    {
        title: "Verbes (Verbs)",
        useFr: "expriment une action ou un état.",
        useEn: "express actions or states.",
        structure: "Se conjugue (change de forme selon le temps et la personne).",
        examples: [
            { fr: "Manger", en: "To eat" },
            { fr: "Être", en: "To be" }
        ]
    },
    {
        title: "Adjectifs (Adjectives)",
        useFr: "décrivent ou qualifient un nom.",
        useEn: "describe nouns.",
        structure: "S'accorde en genre et en nombre avec le nom.",
        examples: [
            { fr: "Un grand chien.", en: "A big dog." },
            { fr: "Une jolie fleur.", en: "A pretty flower." }
        ]
    },
    {
        title: "Adverbes (Adverbs)",
        useFr: "modifient un verbe, un adjectif ou un autre adverbe.",
        useEn: "modify verbs, adjectives, or other adverbs.",
        structure: "Invariable (ne change pas de forme).",
        examples: [
            { fr: "Il court rapidement.", en: "He runs quickly." },
            { fr: "Très bien.", en: "Very good." }
        ]
    },
    {
        title: "Articles (Articles)",
        useFr: "déterminent le nom (défini, indéfini, partitif).",
        useEn: "specify nouns.",
        structure: "Précède le nom.",
        examples: [
            { fr: "Le livre (défini)", en: "The book" },
            { fr: "Un livre (indéfini)", en: "A book" },
            { fr: "Les enfants", en: "The children" }
        ]
    },
    {
        title: "Prépositions (Prepositions)",
        useFr: "introduisent un complément et indiquent un rapport (lieu, temps, etc.).",
        useEn: "show relationships.",
        structure: "Invariable.",
        examples: [
            { fr: "Dans la maison", en: "In the house" },
            { fr: "Pour toi", en: "For you" },
            { fr: "Avec mon ami", en: "With my friend" }
        ]
    },
    {
        title: "Conjonctions (Conjunctions)",
        useFr: "relient des mots ou des phrases.",
        useEn: "connect words or clauses.",
        structure: "Invariable.",
        examples: [
            { fr: "Et", en: "And" },
            { fr: "Mais", en: "But" },
            { fr: "Parce que", en: "Because" }
        ]
    },
    {
        title: "Interjections (Interjections)",
        useFr: "expriment une émotion vive, un cri, un ordre.",
        useEn: "express emotions.",
        structure: "Invariable, souvent suivi d'un point d'exclamation.",
        examples: [
            { fr: "Oh !", en: "Oh!" },
            { fr: "Zut !", en: "Darn!" }
        ]
    },
    // Append the detailed pronouns data here
    ...pronounsData
];
