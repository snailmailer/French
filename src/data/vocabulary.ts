export interface VocabularyItem {
    en: string;
    fr: string;
}

export interface VocabularySubsection {
    subtitle: string;
    items: VocabularyItem[];
    format?: 'cards' | 'table';
    descriptionFr?: string;
    descriptionEn?: string;
    notesFr?: string;
    notesEn?: string;
}

export interface VocabularySection {
    title: string;
    items?: VocabularyItem[];
    subsections?: VocabularySubsection[];
    descriptionFr?: string;
    descriptionEn?: string;
}

export const vocabularyData: VocabularySection[] = [
    {
        title: "Les Autres objets (Other Items)",
        items: [
            { en: "Alarm clock", fr: "le réveil" },
            { en: "Bath mat", fr: "le tapis de bain" },
            { en: "Bedside lamp", fr: "la lampe de chevet" },
            { en: "Hanger", fr: "le cintre" },
            { en: "Lampshade", fr: "l'abat-jour" },
            { en: "Laundry basket", fr: "le panier à linge" },
            { en: "Shower curtain", fr: "le rideau de douche" },
            { en: "Toilet paper", fr: "le papier toilette" },
            { en: "Towel rack", fr: "le porte-serviettes" },
            { en: "Wastebasket", fr: "la corbeille à papier" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Bâtiments et établissements (Buildings & Establishments)",
        items: [
            { en: "Apartment", fr: "l'appartement" },
            { en: "Bank", fr: "la banque" },
            { en: "Factory", fr: "l'usine" },
            { en: "Hospital", fr: "l'hôpital" },
            { en: "Hotel", fr: "l'hôtel" },
            { en: "House", fr: "la maison" },
            { en: "Library", fr: "la bibliothèque" },
            { en: "Office", fr: "le bureau" },
            { en: "Restaurant", fr: "le restaurant" },
            { en: "School", fr: "l'école" },
            { en: "Store", fr: "le magasin" },
            { en: "Supermarket", fr: "le supermarché" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Couleurs (Colors)",
        subsections: [
            {
                subtitle: "Couleurs de base (Basic Colors)",
                format: 'table' as const,
                items: [
                    { fr: "Blanc / Blanche", en: "White" },
                    { fr: "Bleu / Bleue", en: "Blue" },
                    { fr: "Gris / Grise", en: "Gray" },
                    { fr: "Jaune", en: "Yellow" },
                    { fr: "Marron", en: "Brown" },
                    { fr: "Noir / Noire", en: "Black" },
                    { fr: "Orange", en: "Orange" },
                    { fr: "Rose", en: "Pink" },
                    { fr: "Rouge", en: "Red" },
                    { fr: "Vert / Verte", en: "Green" },
                    { fr: "Violet / Violette", en: "Purple" }
                ].sort((a, b) => (a.en || '').localeCompare(b.en || ''))
            },
            {
                subtitle: "Règle générale (General Rule)",
                format: 'table' as const,
                items: [
                    { fr: "Les adjectifs de couleur en français doivent s'accorder en genre et en nombre avec le nom qu'ils décrivent.", en: "French color adjectives must agree in gender and number with the noun they describe." },
                    { fr: "Masculin singulier : vert", en: "Masculine singular: green (vert)" },
                    { fr: "Féminin singulier : verte (ajouter -e)", en: "Feminine singular: green (verte, add -e)" },
                    { fr: "Masculin pluriel : verts (ajouter -s)", en: "Masculine plural: green (verts, add -s)" },
                    { fr: "Féminin pluriel : vertes (ajouter -e et -s)", en: "Feminine plural: green (vertes, add -e and -s)" },
                    { fr: "Les couleurs se placent après le nom : une voiture rouge", en: "Colors come after the noun: a red car (une voiture rouge)" },
                ]
            },
            {
                subtitle: "Exceptions : couleurs invariables (Invariable Colors)",
                format: 'table' as const,
                items: [
                    { fr: "Certaines couleurs ne changent jamais : marron, orange, turquoise (noms de fruits, fleurs ou pierres).", en: "Some colors are invariable and never change: marron, orange, turquoise (names of fruits, flowers, or gems)." },
                    { fr: "des chaussures marron", en: "brown shoes" },
                    { fr: "une robe orange", en: "an orange dress" },
                ]
            },
            {
                subtitle: "Couleurs composées (Compound Colors)",
                format: 'table' as const,
                items: [
                    { fr: "Les couleurs composées (ex. : bleu-vert) sont invariables et reliées par un trait d'union.", en: "Compound colors (e.g., bleu-vert) are invariable and hyphenated." },
                    { fr: "des yeux bleu-vert", en: "blue-green eyes" },
                    { fr: "Pour les nuances, ajoutez clair / foncé, qui s'accordent : « bleu clair » → « bleue claire » au féminin.", en: "For shades, add clair / foncé, which agree: « bleu clair » → « bleue claire » in feminine." },
                ]
            },
            {
                subtitle: "Autres exceptions (Other Exceptions)",
                format: 'table' as const,
                items: [
                    { fr: "Rose, mauve, pourpre, fauve, écarlate s'accordent en genre et nombre malgré leur apparence.", en: "Rose (pink), mauve, pourpre (purple), fauve (tawny), écarlate (scarlet) agree in gender and number despite appearances." },
                    { fr: "Rose → pink", en: "Pink" },
                    { fr: "Mauve → mauve", en: "Mauve" },
                    { fr: "Pourpre → purple", en: "Purple" },
                    { fr: "Fauve → tawny", en: "Tawny" },
                    { fr: "Écarlate → scarlet", en: "Scarlet" },
                    { fr: "des fleurs roses", en: "pink flowers" },
                    { fr: "une écharpe mauve", en: "a mauve scarf" },
                ]
            }
        ]
    },
    {
        title: "Les Cuisines (Kitchen)",
        items: [
            { en: "Baking dish or pan", fr: "le plat à four / le moule à rôtir" },
            { en: "Bowl", fr: "le bol" },
            { en: "Chair", fr: "la chaise" },
            { en: "Chopping board", fr: "la planche à découper" },
            { en: "Cup", fr: "la tasse" },
            { en: "Dishwasher", fr: "le lave-vaisselle" },
            { en: "Fork", fr: "la fourchette" },
            { en: "Fridge", fr: "le réfrigérateur" },
            { en: "Frying pan", fr: "la poêle" },
            { en: "Glass", fr: "le verre" },
            { en: "Kettle", fr: "la bouilloire" },
            { en: "Knife", fr: "le couteau" },
            { en: "Microwave", fr: "le micro-ondes" },
            { en: "Oven", fr: "le four" },
            { en: "Plate", fr: "l'assiette" },
            { en: "Saucepan", fr: "la casserole" },
            { en: "Sink", fr: "l'évier" },
            { en: "Spoon", fr: "la cuillère" },
            { en: "Steak knife", fr: "le couteau à steak" },
            { en: "Stove", fr: "la cuisinière" },
            { en: "Table", fr: "la table" },
            { en: "Teaspoon", fr: "la cuillère à café" },
            { en: "Trash bin", fr: "la poubelle" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Familles (Families)",
        items: [
            { en: "Brother", fr: "le frère" },
            { en: "Daughter", fr: "la fille" },
            { en: "Father", fr: "le père" },
            { en: "Grandfather", fr: "le grand-père" },
            { en: "Grandmother", fr: "la grand-mère" },
            { en: "Husband", fr: "le mari" },
            { en: "Mother", fr: "la mère" },
            { en: "Sister", fr: "la sœur" },
            { en: "Son", fr: "le fils" },
            { en: "Wife", fr: "la femme" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Fournitures scolaires (School Supplies)",
        items: [
            { en: "Backpack", fr: "le sac à dos" },
            { en: "Book", fr: "le livre" },
            { en: "Calculator", fr: "la calculatrice" },
            { en: "Eraser", fr: "la gomme" },
            { en: "Glue", fr: "la colle" },
            { en: "Notebook", fr: "le cahier" },
            { en: "Pen", fr: "le stylo" },
            { en: "Pencil", fr: "le crayon" },
            { en: "Ruler", fr: "la règle" },
            { en: "Scissors", fr: "les ciseaux" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Jours de la semaine (Days of the Week)",
        items: [
            { en: "Friday", fr: "vendredi" },
            { en: "Monday", fr: "lundi" },
            { en: "Saturday", fr: "samedi" },
            { en: "Sunday", fr: "dimanche" },
            { en: "Thursday", fr: "jeudi" },
            { en: "Tuesday", fr: "mardi" },
            { en: "Wednesday", fr: "mercredi" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Jouets (Toys)",
        items: [
            { en: "Ball", fr: "le ballon" },
            { en: "Board game", fr: "le jeu de société" },
            { en: "Car", fr: "la voiture (jouet)" },
            { en: "Doll", fr: "la poupée" },
            { en: "Kite", fr: "le cerf-volant" },
            { en: "Lego", fr: "les Lego" },
            { en: "Puzzle", fr: "le puzzle" },
            { en: "Teddy bear", fr: "l'ours en peluche" },
            { en: "Yo-yo", fr: "le yoyo" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Lieux (Places)",
        items: [
            { en: "Airport", fr: "l'aéroport" },
            { en: "Beach", fr: "la plage" },
            { en: "Bus stop", fr: "l'arrêt de bus" },
            { en: "Cinema", fr: "le cinéma" },
            { en: "City hall", fr: "la mairie" },
            { en: "Clinic", fr: "la clinique" },
            { en: "Convenience store", fr: "le dépanneur / la supérette" },
            { en: "Market", fr: "le marché" },
            { en: "Museum", fr: "le musée" },
            { en: "Park", fr: "le parc" },
            { en: "Parking lot", fr: "le parking / le stationnement" },
            { en: "Pedestrian lane", fr: "le passage piéton / la voie piétonne" },
            { en: "Pharmacy", fr: "la pharmacie" },
            { en: "Train station", fr: "la gare" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Literies (Bedding Essentials)",
        items: [
            { en: "Blanket", fr: "la couverture" },
            { en: "Duvet", fr: "la couette" },
            { en: "Pillow", fr: "l'oreiller" },
            { en: "Pillowcase", fr: "la taie d'oreiller" },
            { en: "Sheet", fr: "le drap" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Loisirs et activités (Hobbies & Activities)",
        items: [
            { en: "Cooking", fr: "la cuisine" },
            { en: "Dancing", fr: "la danse" },
            { en: "Gardening", fr: "le jardinage" },
            { en: "Listening to music", fr: "écouter de la musique" },
            { en: "Painting", fr: "la peinture" },
            { en: "Photography", fr: "la photographie" },
            { en: "Reading", fr: "la lecture" },
            { en: "Swimming", fr: "la natation" },
            { en: "Traveling", fr: "voyager" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Meubles (Furniture)",
        items: [
            { en: "Armchair", fr: "le fauteuil" },
            { en: "Bathroom vanity/cabinet", fr: "le meuble de salle de bains" },
            { en: "Bed", fr: "le lit" },
            { en: "Bench", fr: "la banquette" },
            { en: "Bookcase", fr: "la bibliothèque" },
            { en: "Chair", fr: "la chaise" },
            { en: "Chest", fr: "le coffre" },
            { en: "Cupboard", fr: "le placard" },
            { en: "Curtains", fr: "les rideaux" },
            { en: "Desk", fr: "le bureau" },
            { en: "Drawer", fr: "le tiroir" },
            { en: "Dresser", fr: "la commode" },
            { en: "Lamp", fr: "la lampe" },
            { en: "Medicine cabinet", fr: "l'armoire à pharmacie" },
            { en: "Mirror", fr: "le miroir" },
            { en: "Nightstand", fr: "la table de nuit" },
            { en: "Rug", fr: "le tapis" },
            { en: "Shelf", fr: "l'étagère" },
            { en: "Sink / Washbasin", fr: "le lavabo" },
            { en: "Sofa", fr: "le canapé" },
            { en: "Stool", fr: "le tabouret" },
            { en: "Table", fr: "la table" },
            { en: "Wardrobe", fr: "l'armoire" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Métiers (Jobs)",
        items: [
            { en: "Actor", fr: "l'acteur (m) / l'actrice (f)" },
            { en: "Artist", fr: "l'artiste" },
            { en: "Chef", fr: "le chef" },
            { en: "Clerk", fr: "l'employé(e) / le commis" },
            { en: "Comedian", fr: "le comédien / la comédienne" },
            { en: "Detective", fr: "le détective / l'inspecteur(-trice)" },
            { en: "Doctor", fr: "le médecin" },
            { en: "Driver", fr: "le chauffeur" },
            { en: "Engineer", fr: "l'ingénieur" },
            { en: "IT specialist", fr: "le spécialiste en informatique" },
            { en: "Janitor", fr: "le concierge / l'agent(e) d'entretien" },
            { en: "Journalist", fr: "le journaliste" },
            { en: "Lawyer", fr: "l'avocat" },
            { en: "Newscaster", fr: "le présentateur / la présentatrice de nouvelles" },
            { en: "Nurse", fr: "l'infirmier(-ière)" },
            { en: "Police", fr: "le policier / la policière" },
            { en: "Programmer", fr: "le programmeur" },
            { en: "Teacher", fr: "le professeur / l'enseignant(e)" },
            { en: "Waiter", fr: "le serveur / la serveuse" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Mois (Months)",
        items: [
            { en: "April", fr: "avril" },
            { en: "August", fr: "août" },
            { en: "February", fr: "février" },
            { en: "January", fr: "janvier" },
            { en: "July", fr: "juillet" },
            { en: "June", fr: "juin" },
            { en: "March", fr: "mars" },
            { en: "May", fr: "mai" },
            { en: "October", fr: "octobre" },
            { en: "September", fr: "septembre" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Nombres (Numbers)",
        items: [
            { en: "0", fr: "zéro" },
            { en: "1", fr: "un" },
            { en: "2", fr: "deux" },
            { en: "3", fr: "trois" },
            { en: "4", fr: "quatre" },
            { en: "5", fr: "cinq" },
            { en: "6", fr: "six" },
            { en: "7", fr: "sept" },
            { en: "8", fr: "huit" },
            { en: "9", fr: "neuf" },
            { en: "10", fr: "dix" },
            { en: "11", fr: "onze" },
            { en: "12", fr: "douze" },
            { en: "13", fr: "treize" },
            { en: "14", fr: "quatorze" },
            { en: "15", fr: "quinze" },
            { en: "16", fr: "seize" },
            { en: "17", fr: "dix-sept" },
            { en: "18", fr: "dix-huit" },
            { en: "19", fr: "dix-neuf" },
            { en: "20", fr: "vingt" },
            { en: "21", fr: "vingt et un" },
            { en: "22", fr: "vingt-deux" },
            { en: "23", fr: "vingt-trois" },
            { en: "24", fr: "vingt-quatre" },
            { en: "25", fr: "vingt-cinq" },
            { en: "26", fr: "vingt-six" },
            { en: "27", fr: "vingt-sept" },
            { en: "28", fr: "vingt-huit" },
            { en: "29", fr: "vingt-neuf" },
            { en: "30", fr: "trente" },
            { en: "31", fr: "trente et un" },
            { en: "32", fr: "trente-deux" },
            { en: "33", fr: "trente-trois" },
            { en: "34", fr: "trente-quatre" },
            { en: "35", fr: "trente-cinq" },
            { en: "36", fr: "trente-six" },
            { en: "37", fr: "trente-sept" },
            { en: "38", fr: "trente-huit" },
            { en: "39", fr: "trente-neuf" },
            { en: "40", fr: "quarante" },
            { en: "41", fr: "quarante et un" },
            { en: "42", fr: "quarante-deux" },
            { en: "43", fr: "quarante-trois" },
            { en: "44", fr: "quarante-quatre" },
            { en: "45", fr: "quarante-cinq" },
            { en: "46", fr: "quarante-six" },
            { en: "47", fr: "quarante-sept" },
            { en: "48", fr: "quarante-huit" },
            { en: "49", fr: "quarante-neuf" },
            { en: "50", fr: "cinquante" },
            { en: "51", fr: "cinquante et un" },
            { en: "52", fr: "cinquante-deux" },
            { en: "53", fr: "cinquante-trois" },
            { en: "54", fr: "cinquante-quatre" },
            { en: "55", fr: "cinquante-cinq" },
            { en: "56", fr: "cinquante-six" },
            { en: "57", fr: "cinquante-sept" },
            { en: "58", fr: "cinquante-huit" },
            { en: "59", fr: "cinquante-neuf" },
            { en: "60", fr: "soixante" },
            { en: "61", fr: "soixante et un" },
            { en: "62", fr: "soixante-deux" },
            { en: "63", fr: "soixante-trois" },
            { en: "64", fr: "soixante-quatre" },
            { en: "65", fr: "soixante-cinq" },
            { en: "66", fr: "soixante-six" },
            { en: "67", fr: "soixante-sept" },
            { en: "68", fr: "soixante-huit" },
            { en: "69", fr: "soixante-neuf" },
            { en: "70", fr: "soixante-dix" },
            { en: "71", fr: "soixante et onze" },
            { en: "72", fr: "soixante-douze" },
            { en: "73", fr: "soixante-treize" },
            { en: "74", fr: "soixante-quatorze" },
            { en: "75", fr: "soixante-quinze" },
            { en: "76", fr: "soixante-seize" },
            { en: "77", fr: "soixante-dix-sept" },
            { en: "78", fr: "soixante-dix-huit" },
            { en: "79", fr: "soixante-dix-neuf" },
            { en: "80", fr: "quatre-vingts" },
            { en: "81", fr: "quatre-vingt-un" },
            { en: "82", fr: "quatre-vingt-deux" },
            { en: "83", fr: "quatre-vingt-trois" },
            { en: "84", fr: "quatre-vingt-quatre" },
            { en: "85", fr: "quatre-vingt-cinq" },
            { en: "86", fr: "quatre-vingt-six" },
            { en: "87", fr: "quatre-vingt-sept" },
            { en: "88", fr: "quatre-vingt-huit" },
            { en: "89", fr: "quatre-vingt-neuf" },
            { en: "90", fr: "quatre-vingt-dix" },
            { en: "91", fr: "quatre-vingt-onze" },
            { en: "92", fr: "quatre-vingt-douze" },
            { en: "93", fr: "quatre-vingt-treize" },
            { en: "94", fr: "quatre-vingt-quatorze" },
            { en: "95", fr: "quatre-vingt-quinze" },
            { en: "96", fr: "quatre-vingt-seize" },
            { en: "97", fr: "quatre-vingt-dix-sept" },
            { en: "98", fr: "quatre-vingt-dix-huit" },
            { en: "99", fr: "quatre-vingt-dix-neuf" },
            { en: "100", fr: "cent" },
            { en: "1,000", fr: "mille" },
            { en: "10,000", fr: "dix mille" },
            { en: "100,000", fr: "cent mille" },
            { en: "1,000,000", fr: "un million" },
            { en: "10,000,000", fr: "dix millions" },
            { en: "100,000,000", fr: "cent millions" },
            { en: "1,000,000,000", fr: "un milliard" }
        ]
    },
    {
        title: "Les Parties de la maison (Parts of the House)",
        items: [
            { en: "Attic", fr: "le grenier" },
            { en: "Backyard", fr: "la cour arrière / le jardin arrière" },
            { en: "Balcony", fr: "le balcon" },
            { en: "Basement", fr: "la cave" },
            { en: "Bathroom", fr: "la salle de bain" },
            { en: "Bedroom", fr: "la chambre" },
            { en: "Dining room", fr: "la salle à manger" },
            { en: "Garage", fr: "le garage" },
            { en: "Garden", fr: "le jardin" },
            { en: "Kitchen", fr: "la cuisine" },
            { en: "Living room", fr: "le salon" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Parties du corps (Body Parts)",
        items: [
            { en: "Arm", fr: "le bras" },
            { en: "Back", fr: "le dos" },
            { en: "Ear", fr: "l'oreille" },
            { en: "Eye", fr: "l'œil (les yeux)" },
            { en: "Finger", fr: "le doigt" },
            { en: "Foot", fr: "le pied" },
            { en: "Hair", fr: "les cheveux" },
            { en: "Hand", fr: "la main" },
            { en: "Head", fr: "la tête" },
            { en: "Heart", fr: "le cœur" },
            { en: "Leg", fr: "la jambe" },
            { en: "Mouth", fr: "la bouche" },
            { en: "Neck", fr: "le cou" },
            { en: "Nose", fr: "le nez" },
            { en: "Stomach", fr: "le ventre" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Parties d'un ordinateur (Computer Parts)",
        items: [
            { en: "Battery", fr: "la batterie" },
            { en: "Hard drive", fr: "le disque dur" },
            { en: "Keyboard", fr: "le clavier" },
            { en: "Mouse", fr: "la souris" },
            { en: "Power button", fr: "le bouton d'alimentation" },
            { en: "Processor", fr: "le processeur" },
            { en: "RAM", fr: "la RAM" },
            { en: "Screen", fr: "l'écran" },
            { en: "USB port", fr: "le port USB" },
            { en: "Webcam", fr: "la webcam" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Produits de toilette (Toiletries & Grooming)",
        items: [
            { en: "Comb", fr: "le peigne" },
            { en: "Hair dryer", fr: "le sèche-cheveux" },
            { en: "Hairbrush", fr: "la brosse à cheveux" },
            { en: "Razor", fr: "le rasoir" },
            { en: "Shampoo", fr: "le shampooing" },
            { en: "Shower gel", fr: "le gel douche" },
            { en: "Soap", fr: "le savon" },
            { en: "Toothbrush", fr: "la brosse à dents" },
            { en: "Toothpaste", fr: "le dentifrice" },
            { en: "Towel", fr: "la serviette" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },
    {
        title: "Les Sports",
        items: [
            { en: "Basketball", fr: "le basket-ball" },
            { en: "Boxing", fr: "la boxe" },
            { en: "Cycling", fr: "le cyclisme" },
            { en: "Golf", fr: "le golf" },
            { en: "Running", fr: "la course à pied" },
            { en: "Skiing", fr: "le ski" },
            { en: "Soccer", fr: "le football" },
            { en: "Tennis", fr: "le tennis" },
            { en: "Volleyball", fr: "le volley-ball" }
        ].sort((a, b) => a.en.localeCompare(b.en))
    },

    // ===== DIRE L'HEURE EN FRANÇAIS (Telling Time in French) =====
    {
        title: "Dire l'heure en français (Telling Time in French)",
        subsections: [
            {
                subtitle: "Règles principales (Main Rules)",
                format: 'table' as const,
                items: [
                    { fr: "Dire l'heure en français suit des règles précises différentes de l'anglais.", en: "Telling the time in French follows precise rules different from English." },
                    { fr: "Structure de base : Il est + heure(s) + minutes + période", en: "Basic Structure: It is + hour(s) + minutes + period of day" },
                    { fr: "\"Une heure\" (singulier) → seulement pour 1h00", en: "\"One hour\" (singular) → only for 1:00" },
                    { fr: "\"Deux heures\" (pluriel) → dès 2h00 et plus", en: "\"Two hours\" (plural) → from 2:00 onwards" },
                    { fr: "Il est une heure.", en: "It's one o'clock. (1:00)" },
                    { fr: "Il est deux heures.", en: "It's two o'clock. (2:00)" },
                    { fr: "Il est trois heures.", en: "It's three o'clock. (3:00)" },
                ]
            },
            {
                subtitle: "Minutes 1-30",
                format: 'table' as const,
                items: [
                    { fr: "Règle : dites les minutes après l'heure", en: "Rule: say minutes after the hour" },
                    { fr: "Il est trois heures cinq.", en: "It's three oh-five. (3:05)" },
                    { fr: "Il est trois heures dix.", en: "It's ten past three. (3:10)" },
                    { fr: "Il est trois heures et quart.", en: "It's quarter past three. (3:15)" },
                    { fr: "Il est trois heures vingt.", en: "It's twenty past three. (3:20)" },
                    { fr: "Il est trois heures vingt-cinq.", en: "It's twenty-five past three. (3:25)" },
                    { fr: "Il est trois heures et demie.", en: "It's half past three. (3:30)" },
                ]
            },
            {
                subtitle: "Minutes 31-59 avec \"moins\" (Minutes 31-59 with \"to\")",
                format: 'table' as const,
                items: [
                    { fr: "Règle : Il est [heure suivante] moins [minutes manquantes]", en: "Rule: It is [next hour] minus [missing minutes to next hour]" },
                    { fr: "Il est quatre heures moins vingt-cinq.", en: "It's twenty-five to four. (3:35)" },
                    { fr: "Il est quatre heures moins vingt.", en: "It's twenty to four. (3:40)" },
                    { fr: "Il est quatre heures moins le quart.", en: "It's quarter to four. (3:45)" },
                    { fr: "Il est quatre heures moins dix.", en: "It's ten to four. (3:50)" },
                    { fr: "Il est quatre heures moins cinq.", en: "It's five to four. (3:55)" },
                ]
            },
            {
                subtitle: "Périodes de la journée (Periods of the Day)",
                format: 'table' as const,
                items: [
                    { fr: "du matin → 00h00-11h59", en: "in the morning / AM → 00:00-11:59" },
                    { fr: "de l'après-midi → 12h00-17h59", en: "in the afternoon / PM → 12:00-17:59" },
                    { fr: "du soir → 18h00-23h59", en: "in the evening → 18:00-23:59" },
                    { fr: "Il est neuf heures du matin.", en: "It's nine in the morning. (9:00 AM)" },
                    { fr: "Il est cinq heures de l'après-midi.", en: "It's five in the afternoon. (5:00 PM)" },
                    { fr: "Il est dix heures du soir.", en: "It's ten in the evening. (10:00 PM)" },
                ]
            },
            {
                subtitle: "Plages horaires (Time Ranges)",
                format: 'table' as const,
                items: [
                    { fr: "Structure : de + heure1 + à + heure2", en: "Structure: from + time1 + to + time2" },
                    { fr: "De neuf heures à dix-sept heures.", en: "From nine to five. (9AM to 5PM)" },
                    { fr: "Je travaille de neuf heures du matin à cinq heures de l'après-midi.", en: "I work from nine in the morning to five in the afternoon. (9AM-5PM)" },
                    { fr: "Le magasin ouvre de huit heures à midi et de quatorze heures à dix-neuf heures.", en: "The store opens from eight to noon and from two to seven. (8AM-noon, 2PM-7PM)" },
                ]
            },
            {
                subtitle: "Rendez-vous (Appointments)",
                format: 'table' as const,
                items: [
                    { fr: "Règle : À + heure précise (sans \"Il est\")", en: "Rule: At + exact time (without \"It is\")" },
                    { fr: "À deux heures.", en: "At two o'clock. (2:00)" },
                    { fr: "À midi et quart.", en: "At quarter past noon. (12:15)" },
                    { fr: "À seize heures trente.", en: "At four thirty. (4:30 PM)" },
                ]
            },
            {
                subtitle: "Futur et Passé (Future & Past)",
                format: 'table' as const,
                items: [
                    { fr: "Dans + durée → futur", en: "In + duration → future" },
                    { fr: "Dans dix minutes.", en: "In ten minutes." },
                    { fr: "Dans une heure.", en: "In one hour." },
                    { fr: "Il y a + durée → passé", en: "Duration + ago → past" },
                    { fr: "Il y a une heure.", en: "One hour ago." },
                    { fr: "Il y a dix minutes.", en: "Ten minutes ago." },
                ]
            },
            {
                subtitle: "Exceptions et cas spéciaux (Exceptions & Special Cases)",
                format: 'table' as const,
                items: [
                    { fr: "Midi / Minuit : jamais avec chiffres", en: "Noon / Midnight: never with numbers" },
                    { fr: "Il est midi.", en: "It's noon. (12:00)" },
                    { fr: "Il est minuit.", en: "It's midnight. (00:00)" },
                    { fr: "Heures précises : \"pile\"", en: "Exact time: \"exactly\"" },
                    { fr: "Il est trois heures pile.", en: "It's exactly three o'clock." },
                    { fr: "Approximations :", en: "Approximations:" },
                    { fr: "Il est environ trois heures.", en: "It's about three o'clock." },
                    { fr: "Il est moins le quart.", en: "It's quarter to." },
                ]
            },
            {
                subtitle: "Questions et Réponses (Questions & Answers)",
                format: 'table' as const,
                items: [
                    { fr: "Q : Quelle heure est-il ?", en: "Q: What time is it?" },
                    { fr: "R : Il est dix heures seize du soir.", en: "A: It is ten sixteen in the evening. (10:16 PM)" },
                    { fr: "Q : À quelle heure ?", en: "Q: At what time?" },
                    { fr: "R : À vingt-deux heures seize.", en: "A: At ten sixteen PM." },
                    { fr: "Q : Tu arrives à quelle heure ?", en: "Q: What time are you arriving?" },
                    { fr: "R : J'arrive maintenant, il est dix heures seize du soir !", en: "A: I'm arriving now, it's ten sixteen in the evening!" },
                ]
            }
        ]
    },

    // ===== DONNER UN NUMÉRO DE TÉLÉPHONE EN FRANÇAIS (Giving Phone Numbers in French) =====
    {
        title: "Donner un numéro de téléphone (Giving Phone Numbers)",
        subsections: [
            {
                subtitle: "Règles principales (Main Rules)",
                items: [
                    { fr: "Les numéros français (10 chiffres) se disent toujours deux par deux.", en: "French phone numbers (10 digits) are always said two digits at a time." },
                    { fr: "Structure : deux chiffres par deux, avec des pauses naturelles.", en: "Structure: group by 2 digits, with natural pauses." },
                    { fr: "Les numéros 10+ utilisent les dizaines : \"quarante-cinq\" (45), pas \"quatre cinq\".", en: "Numbers 10+ use the tens: \"quarante-cinq\" (45), not \"quatre cinq\"." },
                    { fr: "Exemple : 06 12 34 56 78", en: "Example: 06 12 34 56 78" },
                    { fr: "Zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", en: "Zero six, twelve, thirty-four, fifty-six, seventy-eight." },
                ]
            },
            {
                subtitle: "Phrases pour donner son numéro (Giving Your Number)",
                items: [
                    { fr: "Mon numéro c'est le...", en: "My number is..." },
                    { fr: "Mon numéro de téléphone est...", en: "My phone number is..." },
                    { fr: "Mon portable, c'est...", en: "My cell is..." },
                    { fr: "Vous pouvez noter ?", en: "Can you write it down?" },
                    { fr: "Mon numéro, c'est le zéro six, quarante-cinq, soixante-six, soixante-douze, quatre-vingt-un.", en: "My number is zero six, forty-five, sixty-six, seventy-two, eighty-one. (06 45 66 72 81)" },
                ]
            },
            {
                subtitle: "Nombres spéciaux au téléphone (Special Phone Numbers)",
                items: [
                    { fr: "00 → double zéro", en: "00 → double zero" },
                    { fr: "11 → onze", en: "11 → eleven" },
                    { fr: "22 → vingt-deux", en: "22 → twenty-two" },
                    { fr: "33 → trente-trois", en: "33 → thirty-three" },
                    { fr: "Jamais \"double un\" ou \"double deux\" → toujours la dizaine complète !", en: "Never \"double one\" or \"double two\" → always use the full tens!" },
                ]
            },
            {
                subtitle: "Demander un numéro (Asking for a Number)",
                items: [
                    { fr: "Quel est votre numéro ?", en: "What's your number? (formal)" },
                    { fr: "C'est quoi ton numéro ?", en: "What's your number? (informal)" },
                    { fr: "Tu peux me donner ton numéro ?", en: "Can you give me your number?" },
                    { fr: "Répétez lentement, s'il vous plaît.", en: "Repeat slowly, please." },
                ]
            },
            {
                subtitle: "Exemple de dialogue (Dialogue Example)",
                items: [
                    { fr: "A : Quel est votre numéro de téléphone ?", en: "A: What's your phone number?" },
                    { fr: "B : C'est le zéro un, vingt-trois, quarante-cinq, soixante-sept, quatre-vingt-neuf.", en: "B: It's zero one, twenty-three, forty-five, sixty-seven, eighty-nine. (01 23 45 67 89)" },
                    { fr: "A : Parfait, c'est noté !", en: "A: Perfect, got it!" },
                ]
            },
            {
                subtitle: "Types de numéros français (French Number Types)",
                items: [
                    { fr: "Portable (mobile) : 06 XX XX XX XX ou 07 XX XX XX XX", en: "Mobile: 06 XX XX XX XX or 07 XX XX XX XX" },
                    { fr: "Fixe (landline) : 01/02/03/04/05 XX XX XX XX", en: "Landline: 01/02/03/04/05 XX XX XX XX" },
                    { fr: "International : +33 6 XX XX XX XX (sans le 0)", en: "International: +33 6 XX XX XX XX (drop the 0)" },
                    { fr: "Mon numéro professionnel est le zéro quatre, vingt et un, trente-trois, quarante-quatre, cinquante-cinq.", en: "My work number is zero four, twenty-one, thirty-three, forty-four, fifty-five. (04 21 33 44 55)" },
                ]
            }
        ]
    },
    {
        title: "Les Météos (Weather)",
        subsections: [
            {
                subtitle: "Règles principales (Main Rules)",
                format: 'table' as const,
                items: [
                    { fr: "Utilisez « Il + verbe » pour la pluie ou la neige : Il pleut, Il neige.", en: "Use « Il + verb » for rain or snow: It's raining, It's snowing." },
                    { fr: "Pour le vent ou le soleil : « Il y a du + nom » : Il y a du vent, Il y a du soleil.", en: "For wind or sun: « Il y a du + noun »: It's windy, It's sunny." },
                    { fr: "Les adjectifs s'accordent avec le nom si spécifié (ex. : temps nuageux).", en: "Adjectives agree with the noun if specified (e.g., temps nuageux – cloudy weather)." },
                ]
            },
            {
                subtitle: "Conditions générales — Il fait + adjectif (General Conditions)",
                format: 'table' as const,
                items: [
                    { fr: "Il fait beau.", en: "It's nice." },
                    { fr: "Il fait mauvais.", en: "It's bad / stormy." },
                    { fr: "Il fait chaud.", en: "It's hot." },
                    { fr: "Il fait froid.", en: "It's cold." },
                    { fr: "Il fait doux.", en: "It's mild." },
                    { fr: "Il fait frais.", en: "It's cool." },
                    { fr: "Il fait glacial.", en: "It's freezing." },
                    { fr: "Il fait caniculaire.", en: "It's scorchingly hot." },
                ]
            },
            {
                subtitle: "Précipitations — Il + verbe / Il y a de la + nom (Precipitation)",
                format: 'table' as const,
                items: [
                    { fr: "Il pleut.", en: "It's raining." },
                    { fr: "Il pleut des cordes.", en: "It's pouring." },
                    { fr: "Il neige.", en: "It's snowing." },
                    { fr: "Il grêle.", en: "It's hailing." },
                    { fr: "Il y a de la pluie.", en: "It's rainy." },
                    { fr: "Il y a une averse.", en: "There's a shower." },
                    { fr: "Il y a une bruine.", en: "There's a drizzle." },
                ]
            },
            {
                subtitle: "Ciel et nuages — Le ciel est / Il y a du + nom (Sky & Clouds)",
                format: 'table' as const,
                items: [
                    { fr: "Ensoleillé / Il y a du soleil.", en: "Sunny." },
                    { fr: "Nuageux / couvert.", en: "Cloudy / overcast." },
                    { fr: "Dégagé / clair.", en: "Clear." },
                    { fr: "Il y a des nuages.", en: "It's cloudy." },
                ]
            },
            {
                subtitle: "Vent et tempêtes — Il y a du + nom (Wind & Storms)",
                format: 'table' as const,
                items: [
                    { fr: "Il y a du vent / Il vente.", en: "It's windy." },
                    { fr: "Une brise.", en: "A breeze." },
                    { fr: "Une bourrasque / une rafale.", en: "A gust." },
                    { fr: "Orageux / Il y a de l'orage.", en: "Stormy / thundery." },
                    { fr: "Une tempête.", en: "A storm." },
                    { fr: "Un ouragan.", en: "A hurricane." },
                    { fr: "Une tornade.", en: "A tornado." },
                ]
            },
            {
                subtitle: "Autres phénomènes (Other Phenomena)",
                format: 'table' as const,
                items: [
                    { fr: "Il y a du brouillard / de la brume.", en: "It's foggy / misty." },
                    { fr: "Il gèle / Il y a de la gelée.", en: "It's freezing / frosty." },
                    { fr: "Humide.", en: "Humid." },
                    { fr: "Sec.", en: "Dry." },
                    { fr: "Grésil.", en: "Sleet." },
                    { fr: "Verglas.", en: "Black ice." },
                    { fr: "Rosée.", en: "Dew." },
                    { fr: "Arc-en-ciel.", en: "Rainbow." },
                    { fr: "Éclair / Foudre.", en: "Lightning." },
                    { fr: "Tonnerre.", en: "Thunder." },
                ]
            },
            {
                subtitle: "Usage en phrases complètes (Full Sentence Usage)",
                format: 'table' as const,
                items: [
                    { fr: "Q : Quel temps fait-il ?", en: "Q: What's the weather?" },
                    { fr: "R : Il fait frais et nuageux avec des averses.", en: "A: Cool and cloudy with showers." },
                    { fr: "Demain, il va neiger.", en: "Tomorrow, it will snow." },
                    { fr: "Il va pleuvoir cet après-midi.", en: "It's going to rain this afternoon." },
                ]
            },
            {
                subtitle: "Exceptions et nuances (Exceptions & Nuances)",
                format: 'table' as const,
                items: [
                    { fr: "« C'est » remplace parfois « Il fait » pour des états : C'est nuageux.", en: "« C'est » sometimes replaces « Il fait » for states: It's cloudy." },
                    { fr: "« Il pleut des cordes » est une expression idiomatique.", en: "« Il pleut des cordes » (It's raining ropes) is an idiomatic expression for 'It's pouring.'" },
                    { fr: "Utilisez le futur pour les prévisions : Il va pleuvoir.", en: "Use the future tense for forecasts: It's going to rain." },
                ]
            }
        ]
    },
    {
        title: "Les salutations (Greetings)",
        descriptionFr: "En français, les salutations ne se conjuguent pas selon les pronoms personnels (je, tu, il/elle, nous, vous, ils/elles). Elles dépendent surtout de la situation (formelle ou informelle) et du moment de la journée.",
        descriptionEn: "In French, greetings don't conjugate according to personal pronouns (je, tu, il/elle, nous, vous, ils/elles). They mainly depend on the situation (formal or informal) and time of day.",
        subsections: [
            {
                subtitle: "Les salutations principales (Core greetings)",
                descriptionFr: "Ces expressions sont invariables, c'est-à-dire qu'elles ne changent pas avec les pronoms.",
                descriptionEn: "These expressions are invariable, meaning they don't change with pronouns.",
                format: 'table' as const,
                items: [
                    { fr: "Bonjour", en: "Hello / Good day (until ~6 PM)" },
                    { fr: "Bonsoir", en: "Good evening (after ~6 PM)" },
                    { fr: "Salut", en: "Hi / Bye" },
                    { fr: "Coucou", en: "Hey there" },
                    { fr: "Au revoir", en: "Goodbye" }
                ],
                notesFr: "Bonjour et Bonsoir s'emploient dans un cadre formel ou neutre (travail, école, service). Salut et Coucou sont pour la famille, les amis, ou les messages textos.",
                notesEn: "Bonjour and Bonsoir are used in formal or neutral settings (work, school, services). Salut and Coucou are for family, friends, or text messages."
            },
            {
                subtitle: "Les phrases de suivi (Follow-up phrases)",
                descriptionFr: "Ces phrases se conjuguent selon le pronom et révèlent le degré de politesse ou familiarité.",
                descriptionEn: "These phrases conjugate according to the pronoun and reveal the degree of politeness or familiarity.",
                format: 'table' as const,
                items: [
                    { fr: "Comment vas-tu ?", en: "How are you? (informal)" },
                    { fr: "Comment allez-vous ?", en: "How are you? (formal or plural)" },
                    { fr: "Ça va ?", en: "All good? / How's it going?" }
                ],
                notesFr: "Salut ! Comment vas-tu ? → Tu montre une relation amicale. Bonjour ! Comment allez-vous ? → Vous montre le respect ou la distance professionnelle.",
                notesEn: "Salut! Comment vas-tu? → Tu shows a friendly relationship. Bonjour! Comment allez-vous? → Vous shows respect or professional distance."
            },
            {
                subtitle: "Réponses possibles (Possible responses)",
                format: 'table' as const,
                items: [
                    { fr: "Je vais bien.", en: "I'm good." },
                    { fr: "Tu vas bien ?", en: "Are you good?" },
                    { fr: "Nous allons bien.", en: "We're good." },
                    { fr: "Ils/Elles vont bien.", en: "They're good." }
                ]
            },
            {
                subtitle: "Exemples de dialogues complets (Complete dialogue examples)",
                format: 'table' as const,
                items: [
                    {
                        fr: "– Salut ! Comment vas-tu ?\n– Je vais bien, et toi ? On va bien, merci. Elles vont super !",
                        en: "(Hi! How are you?)\n(I'm good, and you? We're good, thanks. They're great!)"
                    },
                    {
                        fr: "– Bonjour ! Comment allez-vous ?\n– Je vais bien, merci. Il va bien aussi. Et vous, allez-vous bien ?",
                        en: "(Hello! How are you?)\n(I'm well, thank you. He's fine too. And you, are you well?)"
                    }
                ]
            },
            {
                subtitle: "Les salutations complémentaires (Expanded greetings)",
                descriptionFr: "Ces expressions expriment la bienveillance et s'emploient sans conjugaison, souvent au moment d'arriver ou de partir.",
                descriptionEn: "These expressions show goodwill and are used without conjugation, often when arriving or leaving.",
                format: 'table' as const,
                items: [
                    { fr: "Bienvenue", en: "Welcome" },
                    { fr: "Bonne journée", en: "Have a good day" },
                    { fr: "Bon après-midi", en: "Good afternoon" },
                    { fr: "Bonne soirée", en: "Have a good evening" },
                    { fr: "Bonne nuit", en: "Good night" }
                ],
                notesFr: "Ces expressions ne changent pas selon le sujet. On dit Bonne journée peu importe si c'est tu, vous, ou ils.",
                notesEn: "These expressions don't change according to the subject. You say Bonne journée regardless of whether it's tu, vous, or ils."
            },
            {
                subtitle: "« Enchanté(e) » – Nice to meet you",
                descriptionFr: "L'expression enchanté(e) s'accorde selon le genre et le nombre du locuteur (celui qui parle, pas celui qu'on salue).",
                descriptionEn: "The expression enchanté(e) agrees according to the gender and number of the speaker (not the person being greeted).",
                format: 'table' as const,
                items: [
                    { fr: "Je suis enchanté", en: "I'm pleased / Nice to meet you (masc.)" },
                    { fr: "Je suis enchantée", en: "I'm pleased (fem.)" },
                    { fr: "Enchanté(e)", en: "Nice to meet you" },
                    { fr: "Il est enchanté", en: "He's pleased" },
                    { fr: "Elle est enchantée", en: "She's pleased" },
                    { fr: "Nous sommes enchantés/ées", en: "We're delighted" },
                    { fr: "Enchanté(e)(s)", en: "Nice to meet you (plural/formal)" }
                ],
                notesFr: "Ajoutez Enchanté(e) juste après vous être présenté. 👉 « Je m'appelle Alex. Enchanté ! » Variante plus formelle : Ravi(e) de vous rencontrer.",
                notesEn: "Add Enchanté(e) right after introducing yourself. 👉 \"Je m'appelle Alex. Enchanté!\" More formal alternative: Ravi(e) de vous rencontrer."
            },
            {
                subtitle: "Notes d'usage et style (Usage notes and style)",
                format: 'table' as const,
                items: [
                    { fr: "Utilisez tu avec les amis, les collègues proches, ou les personnes de votre âge.", en: "Use tu with friends, close colleagues, or people your age." },
                    { fr: "Utilisez vous pour un professeur, un client, un supérieur, ou une personne plus âgée.", en: "Use vous for teachers, clients, superiors, or older people." },
                    { fr: "À l'écrit (email, CV, entretien), préférez les formes formelles : Bonjour, comment allez-vous ? Je suis enchanté(e) de faire votre connaissance.", en: "In writing (email, CV, interview), prefer formal forms: Bonjour, comment allez-vous ? Je suis enchanté(e) de faire votre connaissance." }
                ]
            }
        ]
    }
].sort((a, b) => a.title.localeCompare(b.title));
