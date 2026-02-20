import { pronounsData, type PronounSection } from './pronouns';

export const grammarData: PronounSection[] = [
    {
        title: "Noms (Nouns)",
        useFr: "designent des personnes, objets, lieux, idées ou concepts.",
        useEn: "designate people, objects, places, ideas, or concepts.",
        structure: "Variable en genre (masculin/féminin) et en nombre (singulier/pluriel).",
        examples: [],
        subSections: [
            {
                title: "Genre des noms",
                useFr: "Masculin ou Féminin.",
                useEn: "Masculine or Feminine.",
                structure: "Variable",
                examples: [],
                subSections: [
                    {
                        title: "Masculin",
                        useFr: "Généralement terminaisons -age, -ment, -eau, -isme, jours, langues.",
                        useEn: "Usually endings -age, -ment, -eau, -ism, days, languages.",
                        structure: "Le / Un",
                        examples: [{ fr: "Le lit, le lundi, le français.", en: "The bed, Monday, French." }]
                    },
                    {
                        title: "Féminin",
                        useFr: "Généralement terminaisons -tion, -sion, -té, -ance, -ence, pays en -e.",
                        useEn: "Usually endings -tion, -sion, -té, -ance, -ence, countries in -e.",
                        structure: "La / Une",
                        examples: [{ fr: "La chambre, la nation, la France.", en: "The room, the nation, France." }]
                    }
                ]
            },
            {
                title: "Pluriel des noms",
                useFr: "Règle générale : +s.",
                useEn: "General rule: +s.",
                structure: "Sing. + -s",
                examples: [],
                subSections: [
                    {
                        title: "Règle générale",
                        useFr: "Ajouter s (silencieux).",
                        useEn: "Add s (silent).",
                        structure: "Sing. + -s",
                        examples: [{ fr: "lit → lits", en: "bed → beds" }]
                    },
                    {
                        title: "Exceptions",
                        useFr: "-s/-x/-z inchangés; -au/-eau/-eu → -x; -al → -aux.",
                        useEn: "-s/-x/-z unchanged; -au/-eau/-eu → -x; -al → -aux.",
                        structure: "Irrégulier",
                        examples: [
                            { fr: "bateau → bateaux", en: "boat" },
                            { fr: "journal → journaux", en: "newspaper" },
                            { fr: "prix → prix", en: "price" }
                        ]
                    }
                ]
            },
            {
                title: "Types de noms",
                useFr: "Différentes catégories de noms.",
                useEn: "Different categories of nouns.",
                structure: "Variable",
                examples: [],
                subSections: [
                    {
                        title: "Commun",
                        useFr: "Général, avec article.",
                        useEn: "Common, with article.",
                        structure: "art. + nom",
                        examples: [{ fr: "maison, chaise", en: "house, chair" }]
                    },
                    {
                        title: "Propre",
                        useFr: "Spécifique, majuscule.",
                        useEn: "Proper, capitalized.",
                        structure: "Majuscule",
                        examples: [{ fr: "Paris, Marie", en: "Paris, Marie" }]
                    },
                    {
                        title: "Concret",
                        useFr: "Tangible, perceptible.",
                        useEn: "Concrete, tangible.",
                        structure: "Variable",
                        examples: [{ fr: "armoire, miroir", en: "wardrobe, mirror" }]
                    },
                    {
                        title: "Abstrait",
                        useFr: "Idée, qualité intangible.",
                        useEn: "Abstract, intangible.",
                        structure: "Variable",
                        examples: [{ fr: "beauté, propreté", en: "beauty, cleanliness" }]
                    }
                ]
            },
            {
                title: "Exemples maison",
                useFr: "Phrases complètes.",
                useEn: "Full sentences.",
                structure: "Phrase",
                examples: [
                    { fr: "Le grand lit → Les grands lits.", en: "The big bed → The big beds." },
                    { fr: "Une belle armoire → Des belles armoires.", en: "A beautiful wardrobe → Beautiful wardrobes." }
                ]
            }
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

        subSections: pronounsData
    },
    {
        title: "Verbes (Verbs)",
        useFr: "expriment des actions, états ou processus.",
        useEn: "express actions, states, or processes.",
        structure: "Se conjugue selon le sujet, le temps, le mode et le groupe.",
        examples: [],
        subSections: [
            {
                title: "Les 3 groupes de verbes",
                useFr: "Classification des verbes selon leur terminaison.",
                useEn: "Classification of verbs based on their ending.",
                structure: "Variable",
                examples: [],
                subSections: [
                    {
                        title: "1er groupe (-ER)",
                        useFr: "Verbes réguliers les plus nombreux, radical + terminaisons standards.",
                        useEn: "Most common regular verbs ending in -er.",
                        structure: "Radical + -e, -es, -e, -ons, -ez, -ent",
                        examples: [{ fr: "parler → je parle, tu parles...", en: "to speak → I speak, you speak..." }]
                    },
                    {
                        title: "2e groupe (-IR)",
                        useFr: "Terminaisons régulières -is, -is, -it, -issons...",
                        useEn: "Regular -ir verbs with specific endings.",
                        structure: "Radical + -is, -is, -it, -issons, -issez, -issent",
                        examples: [{ fr: "finir → je finis... nous finissons", en: "to finish → I finish... we finish" }]
                    },
                    {
                        title: "3e groupe (irréguliers)",
                        useFr: "Verbes variés (-IR, -RE, -OIR) avec formes spéciales à mémoriser.",
                        useEn: "Irregular verbs, must be memorized.",
                        structure: "Irrégulier",
                        examples: [{ fr: "aller → je vais, tu vas...", en: "to go → I go, you go..." }]
                    }
                ]
            },
            {
                title: "Conjugaison au présent (indicatif)",
                useFr: "Terminaisons générales pour les 3 groupes.",
                useEn: "General endings for the 3 groups.",
                structure: "Voir tableau",
                examples: [
                    { fr: "Nettoyer (1er): Je nettoie la salle de bain.", en: "I clean the bathroom." },
                    { fr: "Choisir (2e): Tu choisis le lit.", en: "You choose the bed." },
                    { fr: "Prendre (3e): Nous prenons l'armoire.", en: "We take the wardrobe." }
                ]
            },
            {
                title: "Verbes auxiliaires essentiels",
                useFr: "Avoir et Être, utilisés pour les temps composés.",
                useEn: "Avoir and Être, used for compound tenses.",
                structure: "Irrégulier",
                examples: [],
                subSections: [
                    {
                        title: "Avoir",
                        useFr: "Auxiliaire principal pour la plupart des verbes.",
                        useEn: "Main auxiliary for compound tenses.",
                        structure: "j'ai, tu as, il a, nous avons, vous avez, ils ont",
                        examples: [{ fr: "J'ai rangé la chambre.", en: "I tidied the bedroom." }]
                    },
                    {
                        title: "Être",
                        useFr: "Pour aller, venir, entrer + tous les pronominaux (se laver).",
                        useEn: "For motion verbs and reflexives.",
                        structure: "je suis, tu es, il est, nous sommes, vous êtes, ils sont",
                        examples: [{ fr: "Je me suis lavé les mains.", en: "I washed my hands." }]
                    }
                ]
            }
        ]
    },
    {
        title: "Adjectifs (Adjectives)",
        useFr: "décrivent ou qualifient les noms.",
        useEn: "describe or qualify nouns.",
        structure: "S'accorde en genre et nombre. Position variable.",
        examples: [],
        subSections: [
            {
                title: "Formation du féminin",
                useFr: "Généralement : masculin + -e.",
                useEn: "Generally: masculine + -e.",
                structure: "Variable",
                examples: [],
                subSections: [
                    {
                        title: "Règle générale",
                        useFr: "Ajouter un e à la forme masculine.",
                        useEn: "Add an e to the masculine form.",
                        structure: "Masc. + -e",
                        examples: [{ fr: "grand → grande", en: "big" }]
                    },
                    {
                        title: "Double consonne + -e",
                        useFr: "Doubler la consonne finale avant d'ajouter e (pour -el, -il, -ul, -il).",
                        useEn: "Double the final consonant before adding e.",
                        structure: "Double consonne + -e",
                        examples: [{ fr: "fiel → fièle", en: "" }]
                    },
                    {
                        title: "Changements spéciaux",
                        useFr: "Certains changent radicalement (f → v, c → que).",
                        useEn: "Some change completely (f → v, c → que).",
                        structure: "Irrégulier",
                        examples: [
                            { fr: "naïf → naïve", en: "naive" },
                            { fr: "blanc → blanche", en: "white" }
                        ]
                    }
                ]
            },
            {
                title: "Position des adjectifs",
                useFr: "Avant ou après le nom selon le type.",
                useEn: "Before or after the noun depending on type.",
                structure: "Variable",
                examples: [],
                subSections: [
                    {
                        title: "Avant le nom",
                        useFr: "Pour les adjectifs courts et fréquents (beau, grand, petit, bon...).",
                        useEn: "For short/common adjectives.",
                        structure: "Adj + Nom",
                        examples: [{ fr: "Une belle armoire.", en: "A beautiful wardrobe." }]
                    },
                    {
                        title: "Après le nom",
                        useFr: "Pour les adjectifs longs, de couleur, de forme, etc.",
                        useEn: "For long/descriptive adjectives.",
                        structure: "Nom + Adj",
                        examples: [{ fr: "Une armoire en bois.", en: "A wooden wardrobe." }]
                    }
                ]
            },
            {
                title: "Pluriel : +s ou +x",
                useFr: "Règle générale : Ajouter s au singulier.",
                useEn: "General rule: Add s.",
                structure: "Sing. + -s",
                examples: [
                    { fr: "grand → grands", en: "big (plural)" },
                    { fr: "Un grand lit → Des grandes chambres.", en: "A big bed → Big rooms." },
                    { fr: "Une jolie salle de bain → Des jolis miroirs.", en: "Pretty bathroom → Pretty mirrors." }
                ]
            }
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
        useFr: "précèdent les noms pour les déterminer.",
        useEn: "precede nouns to determine them.",
        structure: "S'accorde en genre et nombre avec le nom.",
        examples: [],
        subSections: [
            {
                title: "Articles définis (le, la, l', les)",
                useFr: "Pour désigner quelque chose de connu ou spécifique.",
                useEn: "To designate something known or specific (The).",
                structure: "le/la/l'/les + nom",
                examples: [],
                subSections: [
                    {
                        title: "Le",
                        useFr: "Masculin singulier.",
                        useEn: "Masculine singular.",
                        structure: "Devant consonne",
                        examples: [{ fr: "Le lit est grand.", en: "The bed is big." }]
                    },
                    {
                        title: "La",
                        useFr: "Féminin singulier.",
                        useEn: "Feminine singular.",
                        structure: "Devant consonne",
                        examples: [{ fr: "La lampe est belle.", en: "The lamp is beautiful." }]
                    },
                    {
                        title: "L' (élision)",
                        useFr: "Devant voyelle ou h muet (masc./fém. sing.).",
                        useEn: "Before vowel or silent h.",
                        structure: "Devant voyelle/h",
                        examples: [{ fr: "L'armoire est neuve.", en: "The wardrobe is new." }]
                    },
                    {
                        title: "Les",
                        useFr: "Pluriel (masculin et féminin).",
                        useEn: "Plural (masculine and feminine).",
                        structure: "Pluriel",
                        examples: [{ fr: "Les serviettes sont propres.", en: "The towels are clean." }]
                    }
                ]
            },
            {
                title: "Articles indéfinis (un, une, des)",
                useFr: "Pour désigner quelque chose de non-spécifique.",
                useEn: "To designate something non-specific (A/An/Some).",
                structure: "un/une/des + nom",
                examples: [],
                subSections: [
                    {
                        title: "Un",
                        useFr: "Masculin singulier.",
                        useEn: "Masculine singular (A/An).",
                        structure: "Masc. Sing.",
                        examples: [{ fr: "Un miroir cassé.", en: "A broken mirror." }]
                    },
                    {
                        title: "Une",
                        useFr: "Féminin singulier.",
                        useEn: "Feminine singular (A/An).",
                        structure: "Fém. Sing.",
                        examples: [{ fr: "Une chaise confortable.", en: "A comfortable chair." }]
                    },
                    {
                        title: "Des",
                        useFr: "Pluriel (quelques-uns).",
                        useEn: "Plural (Some).",
                        structure: "Pluriel",
                        examples: [{ fr: "Des rideaux bleus.", en: "Some blue curtains." }]
                    }
                ]
            },
            {
                title: "Articles partitifs (du, de la, de l', des)",
                useFr: "Pour désigner une quantité indéterminée ou une substance.",
                useEn: "To designate an indeterminate quantity or substance (Some/Any).",
                structure: "du/de la/de l'/des + nom",
                examples: [],
                subSections: [
                    {
                        title: "Du",
                        useFr: "Masculin singulier.",
                        useEn: "Masculine singular.",
                        structure: "Masc. Sing.",
                        examples: [{ fr: "Du savon.", en: "Some soap." }]
                    },
                    {
                        title: "De la",
                        useFr: "Féminin singulier.",
                        useEn: "Feminine singular.",
                        structure: "Fém. Sing.",
                        examples: [{ fr: "De la peinture.", en: "Some paint." }]
                    },
                    {
                        title: "De l'",
                        useFr: "Devant voyelle ou h muet.",
                        useEn: "Before vowel.",
                        structure: "Devant voyelle",
                        examples: [{ fr: "De l'eau chaude.", en: "Some hot water." }]
                    },
                    {
                        title: "Des",
                        useFr: "Pluriel, après négation ou comparaison.",
                        useEn: "Plural.",
                        structure: "Pluriel",
                        examples: [{ fr: "Je n'ai pas des meubles.", en: "I don't have any furniture." }]
                    }
                ]
            }
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
        useFr: "relient des mots, des groupes de mots ou des propositions.",
        useEn: "connect words, phrases, or clauses.",
        structure: "Invariable",
        examples: [],
        subSections: [
            {
                title: "Conjonctions de coordination (simples)",
                useFr: "Relient des éléments de même importance (Mais, ou, et, donc, or, ni, car).",
                useEn: "Connect elements of equal importance.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Et",
                        useFr: "Ajoute ou accumule des éléments.",
                        useEn: "And, adds information.",
                        structure: "Invariable",
                        examples: [{ fr: "Le lit et la commode.", en: "The bed and the dresser." }]
                    },
                    {
                        title: "Mais",
                        useFr: "Introduit une opposition.",
                        useEn: "But, contrasts.",
                        structure: "Invariable",
                        examples: [{ fr: "La chambre est grande, mais sombre.", en: "The room is big, but dark." }]
                    },
                    {
                        title: "Ou",
                        useFr: "Présente un choix alternatif.",
                        useEn: "Or, alternative.",
                        structure: "Invariable",
                        examples: [{ fr: "Un miroir ou une lampe ?", en: "A mirror or a lamp?" }]
                    },
                    {
                        title: "Donc",
                        useFr: "Indique une conséquence.",
                        useEn: "So, therefore.",
                        structure: "Invariable",
                        examples: [{ fr: "Le savon est fini, donc j'en achète.", en: "The soap is finished, so I buy more." }]
                    },
                    {
                        title: "Or",
                        useFr: "Opposition forte (mais inattendue).",
                        useEn: "Yet, however.",
                        structure: "Invariable",
                        examples: [{ fr: "J'aime les meubles modernes, or ils sont chers.", en: "I like modern furniture, yet they're expensive." }]
                    },
                    {
                        title: "Ni",
                        useFr: "Négation double (ni...ni).",
                        useEn: "Neither...nor.",
                        structure: "Invariable",
                        examples: [{ fr: "Ni lampe ni tapis.", en: "Neither lamp nor rug." }]
                    },
                    {
                        title: "Car",
                        useFr: "Explique une cause (littéraire).",
                        useEn: "For, because.",
                        structure: "Invariable",
                        examples: [{ fr: "Je nettoie, car c'est sale.", en: "I clean, for it's dirty." }]
                    }
                ]
            },
            {
                title: "Conjonctions de subordination",
                useFr: "Introduisent une proposition dépendante.",
                useEn: "Introduce a dependent clause.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Parce que",
                        useFr: "Indique la cause.",
                        useEn: "Because.",
                        structure: "Invariable",
                        examples: [{ fr: "Je range parce que tu arrives.", en: "I tidy because you're coming." }]
                    },
                    {
                        title: "Quand",
                        useFr: "Indique le temps.",
                        useEn: "When.",
                        structure: "Invariable",
                        examples: [{ fr: "Je me lave quand je me lève.", en: "I wash when I get up." }]
                    },
                    {
                        title: "Si",
                        useFr: "Introduit une condition.",
                        useEn: "If.",
                        structure: "Invariable",
                        examples: [{ fr: "Si la salle de bain est propre.", en: "If the bathroom is clean." }]
                    },
                    {
                        title: "Bien que",
                        useFr: "Concession (nécessite le subjonctif).",
                        useEn: "Although.",
                        structure: "Invariable + Subjonctif",
                        examples: [{ fr: "Bien qu'il y ait des meubles.", en: "Although there is furniture." }]
                    }
                ]
            }
        ]
    },
    {
        title: "Interjections (Interjections)",
        useFr: "mots ou expressions exclamatives exprimant une émotion.",
        useEn: "exclamatory words or phrases expressing emotion.",
        structure: "Invariable, souvent suivi d'un point d'exclamation.",
        examples: [],
        subSections: [
            {
                title: "Interjections de douleur/surprise",
                useFr: "Pour exprimer la douleur ou l'étonnement.",
                useEn: "To express pain or surprise.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Aïe !",
                        useFr: "Exprime la douleur physique soudaine.",
                        useEn: "Ouch! (physical pain).",
                        structure: "Invariable",
                        examples: [{ fr: "Aïe ! Le marteau est tombé sur mon pied !", en: "Ouch! The hammer fell on my foot!" }]
                    },
                    {
                        title: "Oh là là !",
                        useFr: "Exprime la surprise, l'étonnement ou l'admiration.",
                        useEn: "Oh my! / Wow! (surprise).",
                        structure: "Invariable",
                        examples: [{ fr: "Oh là là ! Quel beau canapé !", en: "Oh my! What a beautiful sofa!" }]
                    },
                    {
                        title: "Zut !",
                        useFr: "Expression légère de contrariété ou frustration.",
                        useEn: "Darn! / Shoot! (mild frustration).",
                        structure: "Invariable",
                        examples: [{ fr: "Zut ! J'ai oublié le savon !", en: "Darn! I forgot the soap!" }]
                    }
                ]
            },
            {
                title: "Interjections de joie/approbation",
                useFr: "Pour exprimer la satisfaction.",
                useEn: "To express satisfaction.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Super !",
                        useFr: "Exprime l'enthousiasme ou l'approbation.",
                        useEn: "Great! / Awesome!",
                        structure: "Invariable",
                        examples: [{ fr: "Super ! La chambre est parfaite !", en: "Great! The bedroom is perfect!" }]
                    },
                    {
                        title: "Bravo !",
                        useFr: "Félicite quelqu'un pour un succès.",
                        useEn: "Bravo! / Well done!",
                        structure: "Invariable",
                        examples: [{ fr: "Bravo ! Tu as bien rangé la salle de bain.", en: "Bravo! You cleaned the bathroom well." }]
                    },
                    {
                        title: "Génial !",
                        useFr: "Montre un enthousiasme extrême.",
                        useEn: "Awesome! / Fantastic!",
                        structure: "Invariable",
                        examples: [{ fr: "Génial ! Les nouveaux rideaux sont arrivés.", en: "Awesome! The new curtains arrived." }]
                    }
                ]
            },
            {
                title: "Interjections quotidiennes",
                useFr: "Pour des réactions courantes (dégoût, silence, appétit).",
                useEn: "For common reactions (disgust, silence, appetite).",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Beurk !",
                        useFr: "Exprime le dégoût.",
                        useEn: "Yuck! / Gross!",
                        structure: "Invariable",
                        examples: [{ fr: "Beurk ! Le lavabo est sale.", en: "Yuck! The sink is dirty." }]
                    },
                    {
                        title: "Chut !",
                        useFr: "Demande le silence.",
                        useEn: "Shh! / Quiet!",
                        structure: "Invariable",
                        examples: [{ fr: "Chut ! Les voisins dorment.", en: "Shh! The neighbors are sleeping." }]
                    },
                    {
                        title: "Miam !",
                        useFr: "Exprime le plaisir de manger.",
                        useEn: "Yum!",
                        structure: "Invariable",
                        examples: [{ fr: "Miam ! Ça sent bon la cuisine !", en: "Yum! It smells good in the kitchen!" }]
                    }
                ]
            },
            {
                title: "Interjections de question/réaction",
                useFr: "Pour demander confirmation ou réagir.",
                useEn: "To ask for confirmation or react.",
                structure: "Invariable",
                examples: [],
                subSections: [
                    {
                        title: "Hein ?",
                        useFr: "Demande une répétition ou exprime l'incrédulité.",
                        useEn: "Huh? / What?",
                        structure: "Invariable",
                        examples: [{ fr: "Hein ? Tu as acheté deux armoires ?", en: "Huh? You bought two wardrobes?" }]
                    },
                    {
                        title: "Bah !",
                        useFr: "Fillers de conversation, indifférence.",
                        useEn: "Well... / Um...",
                        structure: "Invariable",
                        examples: [{ fr: "Bah, on choisira plus tard.", en: "Well, we'll choose later." }]
                    }
                ]
            }
        ]
    },
];
