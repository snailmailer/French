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
        useFr: "mot invariable qui modifie un verbe, un adjectif ou un autre adverbe.",
        useEn: "invariant word that modifies a verb, an adjective, or another adverb.",
        structure: "Invariable",
        examples: [],
        subSections: [
            {
                title: "Formation des adverbes (Formation)",
                useFr: "Règle générale : Adjectif au féminin + -ment",
                useEn: "General rule: Feminine adjective + -ment",
                structure: "Adjectif fém. + -ment",
                examples: [
                    { fr: "lent → lente → lentement", en: "slow → slowly" },
                    { fr: "rapide → rapide → rapidement", en: "quick → quickly" },
                    { fr: "sérieux → sérieuse → sérieusement", en: "serious → seriously" },
                    { fr: "naturel → naturelle → naturellement", en: "natural → naturally" }
                ],
                subSections: [
                    {
                        title: "Exceptions importantes",
                        useFr: "Adjectifs en -ant ou -ent",
                        useEn: "Adjectives ending in -ant or -ent",
                        structure: "-ant → -amment / -ent → -emment",
                        examples: [
                            { fr: "constant → constamment", en: "constant → constantly" },
                            { fr: "élégant → élégamment", en: "elegant → elegantly" },
                            { fr: "différent → différemment", en: "different → differently" },
                            { fr: "fréquent → fréquemment", en: "frequent → frequently" }
                        ]
                    }
                ]
            },
            {
                title: "Adverbes de manière (Adverbs of Manner)",
                useFr: "décrivent comment une action est faite.",
                useEn: "describe how an action is done.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Rapidement",
                        useFr: "Décrit une action faite à grande vitesse.",
                        useEn: "Quickly, rapidly.",
                        structure: "Invariable",
                        examples: [{ fr: "Elle range la chambre rapidement.", en: "She tidies the bedroom quickly." }]
                    },
                    {
                        title: "Lentement",
                        useFr: "Décrit une action faite à petite vitesse.",
                        useEn: "Slowly.",
                        structure: "Invariable",
                        examples: [{ fr: "Il nettoie la salle de bain lentement.", en: "He cleans the bathroom slowly." }]
                    },
                    {
                        title: "Bien",
                        useFr: "Indique une bonne qualité ou manière.",
                        useEn: "Well, good.",
                        structure: "Invariable",
                        examples: [{ fr: "Le lit est bien fait.", en: "The bed is well made." }]
                    },
                    {
                        title: "Mal",
                        useFr: "Indique une mauvaise qualité ou manière.",
                        useEn: "Badly, poorly.",
                        structure: "Invariable",
                        examples: [{ fr: "Les rideaux sont mal accrochés.", en: "The curtains are poorly hung." }]
                    }
                ]
            },
            {
                title: "Adverbes de temps (Adverbs of Time)",
                useFr: "indiquent quand une action se passe.",
                useEn: "indicate when an action happens.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Maintenant",
                        useFr: "À ce moment précis.",
                        useEn: "Now.",
                        structure: "Invariable",
                        examples: [{ fr: "Je vais acheter un nouveau miroir maintenant.", en: "I'm going to buy a new mirror now." }]
                    },
                    {
                        title: "Hier",
                        useFr: "Le jour avant aujourd'hui.",
                        useEn: "Yesterday.",
                        structure: "Invariable",
                        examples: [{ fr: "Hier, j'ai lavé les serviettes.", en: "Yesterday, I washed the towels." }]
                    },
                    {
                        title: "Aujourd'hui",
                        useFr: "Le jour en cours.",
                        useEn: "Today.",
                        structure: "Invariable",
                        examples: [{ fr: "Aujourd'hui, on change les draps.", en: "Today, we change the sheets." }]
                    },
                    {
                        title: "Demain",
                        useFr: "Le jour après aujourd'hui.",
                        useEn: "Tomorrow.",
                        structure: "Invariable",
                        examples: [{ fr: "Demain, le meuble arrive.", en: "Tomorrow, the furniture arrives." }]
                    }
                ]
            },
            {
                title: "Adverbes de lieu (Adverbs of Place)",
                useFr: "indiquent où une action se passe.",
                useEn: "indicate where an action happens.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Ici",
                        useFr: "À cet endroit précis.",
                        useEn: "Here.",
                        structure: "Invariable",
                        examples: [{ fr: "Mets la lampe ici.", en: "Put the lamp here." }]
                    },
                    {
                        title: "Là",
                        useFr: "À cet endroit (un peu éloigné).",
                        useEn: "There.",
                        structure: "Invariable",
                        examples: [{ fr: "Le savon est là.", en: "The soap is there." }]
                    },
                    {
                        title: "Partout",
                        useFr: "Dans tous les endroits.",
                        useEn: "Everywhere.",
                        structure: "Invariable",
                        examples: [{ fr: "Il y a des tiroirs partout.", en: "There are drawers everywhere." }]
                    },
                    {
                        title: "Près",
                        useFr: "À proximité.",
                        useEn: "Near, close.",
                        structure: "Invariable",
                        examples: [{ fr: "La brosse est près du lavabo.", en: "The brush is near the sink." }]
                    }
                ]
            },
            {
                title: "Adverbes de quantité/intensité (Adverbs of Quantity/Intensity)",
                useFr: "indiquent le degré ou la quantité.",
                useEn: "indicate degree or quantity.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Très",
                        useFr: "Augmente beaucoup l'intensité.",
                        useEn: "Very, much.",
                        structure: "Invariable",
                        examples: [{ fr: "La chambre est très propre.", en: "The room is very clean." }]
                    },
                    {
                        title: "Trop",
                        useFr: "Excès, plus que nécessaire.",
                        useEn: "Too (much).",
                        structure: "Invariable",
                        examples: [{ fr: "Il y a trop de meubles.", en: "There is too much furniture." }]
                    },
                    {
                        title: "Peu",
                        useFr: "Petite quantité.",
                        useEn: "Little, few.",
                        structure: "Invariable",
                        examples: [{ fr: "Peu de serviettes propres.", en: "Few clean towels." }]
                    },
                    {
                        title: "Beaucoup",
                        useFr: "Grande quantité.",
                        useEn: "A lot, much.",
                        structure: "Invariable",
                        examples: [{ fr: "J'aime beaucoup cette armoire.", en: "I like this wardrobe a lot." }]
                    }
                ]
            }
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
        useFr: "mot invariable qui unit des mots en marquant un rapport (lieu, temps, cause, etc.).",
        useEn: "invariant word linking words and indicating a relationship (place, time, cause, etc.).",
        structure: "Préposition + Nom / Pronom / Verbe à l'infinitif",
        // image: '/prepositions_guide.jpg', // Add your image here
        examples: [],
        subSections: [
            {
                title: "Prépositions de lieu (Prepositions of Place)",
                useFr: "décrivent la position d'objets ou de personnes.",
                useEn: "describe the position of objects or people.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Sur",
                        useFr: "Indique une position au-dessus de quelque chose, en contact.",
                        useEn: "On top of, touching the surface.",
                        structure: "Invariable",
                        examples: [{ fr: "Le livre est sur la table.", en: "The book is on the table." }]
                    },
                    {
                        title: "Sous",
                        useFr: "Indique une position en dessous de quelque chose.",
                        useEn: "Under, below something.",
                        structure: "Invariable",
                        examples: [{ fr: "Le chat est sous le lit.", en: "The cat is under the bed." }]
                    },
                    {
                        title: "Dans",
                        useFr: "Indique l'intérieur d'un espace clos.",
                        useEn: "In, inside an enclosed space.",
                        structure: "Invariable",
                        examples: [{ fr: "Les vêtements sont dans l'armoire.", en: "The clothes are in the wardrobe." }]
                    },
                    {
                        title: "Devant",
                        useFr: "Indique une position face à quelque chose, vers l'avant.",
                        useEn: "In front of, facing.",
                        structure: "Invariable",
                        examples: [{ fr: "Le miroir est devant le lavabo.", en: "The mirror is in front of the sink." }]
                    },
                    {
                        title: "Derrière",
                        useFr: "Indique une position à l'arrière de quelque chose.",
                        useEn: "Behind, at the back of.",
                        structure: "Invariable",
                        examples: [{ fr: "La chaise est derrière la porte.", en: "The chair is behind the door." }]
                    },
                    {
                        title: "À côté de",
                        useFr: "Indique une position latérale, proche mais séparée.",
                        useEn: "Next to, beside.",
                        structure: "Invariable",
                        examples: [{ fr: "La lampe est à côté du lit.", en: "The lamp is next to the bed." }]
                    },
                    {
                        title: "Entre",
                        useFr: "Indique une position au milieu de deux choses.",
                        useEn: "Between two things.",
                        structure: "Invariable",
                        examples: [{ fr: "Les oreillers sont entre les couvertures.", en: "The pillows are between the blankets." }]
                    }
                ]
            },
            {
                title: "Autres prépositions courantes (Common Prepositions)",
                useFr: "utilisées pour le temps, la possession, le moyen, etc.",
                useEn: "used for time, possession, means, etc.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "À",
                        useFr: "Indique un lieu, une direction ou un but.",
                        useEn: "At, to, in (location or direction).",
                        structure: "Invariable",
                        examples: [{ fr: "Je suis à la maison.", en: "I am at home." }]
                    },
                    {
                        title: "De",
                        useFr: "Indique la possession, l'origine ou la matière.",
                        useEn: "Of, from (possession or origin).",
                        structure: "Invariable",
                        examples: [{ fr: "Le tiroir de la commode.", en: "The drawer of the dresser." }]
                    },
                    {
                        title: "Pour",
                        useFr: "Indique le destinataire ou l'usage.",
                        useEn: "For (purpose or recipient).",
                        structure: "Invariable",
                        examples: [{ fr: "Une serviette pour la salle de bain.", en: "A towel for the bathroom." }]
                    },
                    {
                        title: "Avec",
                        useFr: "Indique l'accompagnement ou l'instrument.",
                        useEn: "With (accompaniment or tool).",
                        structure: "Invariable",
                        examples: [{ fr: "Le savon avec le shampooing.", en: "The soap with the shampoo." }]
                    },
                    {
                        title: "Par",
                        useFr: "Indique le moyen, la voie ou l'agent.",
                        useEn: "By, through (means or path).",
                        structure: "Invariable",
                        examples: [{ fr: "Passer par la chambre.", en: "Go through the bedroom." }]
                    }
                ]
            }
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
