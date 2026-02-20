export interface VocabularyItem {
    en: string;
    fr: string;
}

export interface VocabularySection {
    title: string;
    items: VocabularyItem[];
}

export const vocabularyData: VocabularySection[] = [
    {
        title: "Parties du corps (Body Parts)",
        items: [
            { en: "Head", fr: "la tête" },
            { en: "Hair", fr: "les cheveux" },
            { en: "Eye", fr: "l'œil (les yeux)" },
            { en: "Nose", fr: "le nez" },
            { en: "Mouth", fr: "la bouche" },
            { en: "Ear", fr: "l'oreille" },
            { en: "Neck", fr: "le cou" },
            { en: "Arm", fr: "le bras" },
            { en: "Hand", fr: "la main" },
            { en: "Finger", fr: "le doigt" },
            { en: "Leg", fr: "la jambe" },
            { en: "Foot", fr: "le pied" },
            { en: "Stomach", fr: "le ventre" },
            { en: "Back", fr: "le dos" },
            { en: "Heart", fr: "le cœur" }
        ]
    },
    {
        title: "Famille (Family)",
        items: [
            { en: "Mother", fr: "la mère" },
            { en: "Father", fr: "le père" },
            { en: "Brother", fr: "le frère" },
            { en: "Sister", fr: "la sœur" },
            { en: "Son", fr: "le fils" },
            { en: "Daughter", fr: "la fille" },
            { en: "Grandfather", fr: "le grand-père" },
            { en: "Grandmother", fr: "la grand-mère" },
            { en: "Husband", fr: "le mari" },
            { en: "Wife", fr: "la femme" }
        ]
    },
    {
        title: "Nombres (Numbers)",
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
        title: "Jours de la semaine (Days of the Week)",
        items: [
            { en: "Monday", fr: "lundi" },
            { en: "Tuesday", fr: "mardi" },
            { en: "Wednesday", fr: "mercredi" },
            { en: "Thursday", fr: "jeudi" },
            { en: "Friday", fr: "vendredi" },
            { en: "Saturday", fr: "samedi" },
            { en: "Sunday", fr: "dimanche" }
        ]
    },
    {
        title: "Mois (Months)",
        items: [
            { en: "January", fr: "janvier" },
            { en: "February", fr: "février" },
            { en: "March", fr: "mars" },
            { en: "April", fr: "avril" },
            { en: "May", fr: "mai" },
            { en: "June", fr: "juin" },
            { en: "July", fr: "juillet" },
            { en: "August", fr: "août" },
            { en: "September", fr: "septembre" },
            { en: "October", fr: "octobre" }
        ]
    },
    {
        title: "Métiers (Jobs)",
        items: [
            { en: "Doctor", fr: "le médecin" },
            { en: "Teacher", fr: "le professeur / l'enseignant(e)" },
            { en: "Engineer", fr: "l'ingénieur" },
            { en: "Nurse", fr: "l'infirmier(-ière)" },
            { en: "Programmer", fr: "le programmeur" },
            { en: "Lawyer", fr: "l'avocat" },
            { en: "Chef", fr: "le chef" },
            { en: "Driver", fr: "le chauffeur" },
            { en: "Artist", fr: "l'artiste" },
            { en: "IT specialist", fr: "le spécialiste en informatique" }
        ]
    },
    {
        title: "Bâtiments et établissements (Buildings & Establishments)",
        items: [
            { en: "House", fr: "la maison" },
            { en: "School", fr: "l'école" },
            { en: "Hospital", fr: "l'hôpital" },
            { en: "Bank", fr: "la banque" },
            { en: "Restaurant", fr: "le restaurant" },
            { en: "Store", fr: "le magasin" },
            { en: "Office", fr: "le bureau" },
            { en: "Hotel", fr: "l'hôtel" },
            { en: "Library", fr: "la bibliothèque" },
            { en: "Supermarket", fr: "le supermarché" }
        ]
    },
    {
        title: "Loisirs et activités (Hobbies & Activities)",
        items: [
            { en: "Reading", fr: "la lecture" },
            { en: "Swimming", fr: "la natation" },
            { en: "Cooking", fr: "la cuisine" },
            { en: "Painting", fr: "la peinture" },
            { en: "Gardening", fr: "le jardinage" },
            { en: "Listening to music", fr: "écouter de la musique" },
            { en: "Traveling", fr: "voyager" },
            { en: "Dancing", fr: "la danse" },
            { en: "Photography", fr: "la photographie" },
            { en: "Boxing", fr: "la boxe" }
        ]
    },
    {
        title: "Sports",
        items: [
            { en: "Soccer", fr: "le football" },
            { en: "Tennis", fr: "le tennis" },
            { en: "Basketball", fr: "le basket-ball" },
            { en: "Swimming", fr: "la natation" },
            { en: "Cycling", fr: "le cyclisme" },
            { en: "Running", fr: "la course à pied" },
            { en: "Boxing", fr: "la boxe" },
            { en: "Skiing", fr: "le ski" },
            { en: "Golf", fr: "le golf" },
            { en: "Volleyball", fr: "le volley-ball" }
        ]
    },
    {
        title: "Cuisine (Kitchen)",
        items: [
            { en: "Fridge", fr: "le réfrigérateur" },
            { en: "Oven", fr: "le four" },
            { en: "Stove", fr: "la cuisinière" },
            { en: "Sink", fr: "l'évier" },
            { en: "Table", fr: "la table" },
            { en: "Chair", fr: "la chaise" },
            { en: "Plate", fr: "l'assiette" },
            { en: "Knife", fr: "le couteau" },
            { en: "Fork", fr: "la fourchette" },
            { en: "Spoon", fr: "la cuillère" }
        ]
    },
    {
        title: "Jouets (Toys)",
        items: [
            { en: "Doll", fr: "la poupée" },
            { en: "Ball", fr: "le ballon" },
            { en: "Car", fr: "la voiture (jouet)" },
            { en: "Teddy bear", fr: "l'ours en peluche" },
            { en: "Puzzle", fr: "le puzzle" },
            { en: "Lego", fr: "les Lego" },
            { en: "Kite", fr: "le cerf-volant" },
            { en: "Yo-yo", fr: "le yoyo" },
            { en: "Board game", fr: "le jeu de société" }
        ]
    },
    {
        title: "Parties de la maison (Parts of the House)",
        items: [
            { en: "Living room", fr: "le salon" },
            { en: "Kitchen", fr: "la cuisine" },
            { en: "Bedroom", fr: "la chambre" },
            { en: "Bathroom", fr: "la salle de bain" },
            { en: "Dining room", fr: "la salle à manger" },
            { en: "Garden", fr: "le jardin" },
            { en: "Garage", fr: "le garage" },
            { en: "Attic", fr: "le grenier" },
            { en: "Basement", fr: "la cave" },
            { en: "Balcony", fr: "le balcon" }
        ]
    },
    {
        title: "Lieux (Places)",
        items: [
            { en: "Park", fr: "le parc" },
            { en: "Beach", fr: "la plage" },
            { en: "Airport", fr: "l'aéroport" },
            { en: "Train station", fr: "la gare" },
            { en: "City hall", fr: "la mairie" },
            { en: "Museum", fr: "le musée" },
            { en: "Cinema", fr: "le cinéma" },
            { en: "Market", fr: "le marché" }
        ]
    },
    {
        title: "Fournitures scolaires (School Supplies)",
        items: [
            { en: "Pencil", fr: "le crayon" },
            { en: "Pen", fr: "le stylo" },
            { en: "Notebook", fr: "le cahier" },
            { en: "Book", fr: "le livre" },
            { en: "Eraser", fr: "la gomme" },
            { en: "Ruler", fr: "la règle" },
            { en: "Backpack", fr: "le sac à dos" },
            { en: "Glue", fr: "la colle" },
            { en: "Scissors", fr: "les ciseaux" },
            { en: "Calculator", fr: "la calculatrice" }
        ]
    },
    {
        title: "Parties d'un ordinateur (Computer Parts)",
        items: [
            { en: "Screen", fr: "l'écran" },
            { en: "Keyboard", fr: "le clavier" },
            { en: "Mouse", fr: "la souris" },
            { en: "Processor", fr: "le processeur" },
            { en: "Hard drive", fr: "le disque dur" },
            { en: "RAM", fr: "la RAM" },
            { en: "Battery", fr: "la batterie" },
            { en: "USB port", fr: "le port USB" },
            { en: "Webcam", fr: "la webcam" },
            { en: "Power button", fr: "le bouton d'alimentation" }
        ]
    },
    {
        title: "Meubles essentiels (Essential Furniture)",
        items: [
            { en: "Sofa", fr: "le canapé" },
            { en: "Armchair", fr: "le fauteuil" },
            { en: "Chair", fr: "la chaise" },
            { en: "Stool", fr: "le tabouret" },
            { en: "Table", fr: "la table" },
            { en: "Desk", fr: "le bureau" },
            { en: "Bed", fr: "le lit" },
            { en: "Wardrobe", fr: "l'armoire" },
            { en: "Dresser", fr: "la commode" },
            { en: "Shelf", fr: "l'étagère" }
        ]
    },
    {
        title: "Autres meubles (Other Furniture)",
        items: [
            { en: "Nightstand", fr: "la table de nuit" },
            { en: "Bookcase", fr: "la bibliothèque" },
            { en: "Chest", fr: "le coffre" },
            { en: "Mirror", fr: "le miroir" },
            { en: "Lamp", fr: "la lampe" },
            { en: "Rug", fr: "le tapis" },
            { en: "Curtains", fr: "les rideaux" },
            { en: "Drawer", fr: "le tiroir" },
            { en: "Cupboard", fr: "le placard" },
            { en: "Bench", fr: "la banquette" }
        ]
    },
    {
        title: "Meubles principaux (Main Furniture)",
        items: [
            { en: "Medicine cabinet", fr: "l'armoire à pharmacie" },
            { en: "Sink / Washbasin", fr: "le lavabo" },
            { en: "Bathroom vanity/cabinet", fr: "le meuble de salle de bains" },
            { en: "Mirror", fr: "le miroir" },
            { en: "Drawer", fr: "le tiroir" }
        ]
    },
    {
        title: "Accessoires essentiels (Essential Accessories)",
        items: [
            { en: "Toothbrush", fr: "la brosse à dents" },
            { en: "Toothpaste", fr: "le dentifrice" },
            { en: "Towel", fr: "la serviette" },
            { en: "Soap", fr: "le savon" },
            { en: "Shampoo", fr: "le shampooing" },
            { en: "Shower gel", fr: "le gel douche" }
        ]
    },
    {
        title: "Produits de toilette (Toiletries & Grooming)",
        items: [
            { en: "Hair dryer", fr: "le sèche-cheveux" },
            { en: "Hairbrush", fr: "la brosse à cheveux" },
            { en: "Comb", fr: "le peigne" },
            { en: "Razor", fr: "le rasoir" },
            { en: "Mirror", fr: "le miroir" },
            { en: "Medicine cabinet", fr: "l'armoire à pharmacie" }
        ]
    },
    {
        title: "Autres objets (Other Items)",
        items: [
            { en: "Toilet paper", fr: "le papier toilette" },
            { en: "Laundry basket", fr: "le panier à linge" },
            { en: "Shower curtain", fr: "le rideau de douche" },
            { en: "Towel rack", fr: "le porte-serviettes" },
            { en: "Bath mat", fr: "le tapis de bain" }
        ]
    },
    {
        title: "Literie (Bedding Essentials)",
        items: [
            { en: "Pillow", fr: "l'oreiller" },
            { en: "Pillowcase", fr: "la taie d'oreiller" },
            { en: "Sheet", fr: "le drap" },
            { en: "Duvet", fr: "la couette" },
            { en: "Blanket", fr: "la couverture" }
        ]
    },
    {
        title: "Éclairage et réveil (Lighting & Alarm)",
        items: [
            { en: "Bedside lamp", fr: "la lampe de chevet" },
            { en: "Alarm clock", fr: "le réveil" },
            { en: "Lampshade", fr: "l'abat-jour" }
        ]
    },
    {
        title: "Autres accessoires (Other Accessories)",
        items: [
            { en: "Mirror", fr: "le miroir" },
            { en: "Rug", fr: "le tapis" },
            { en: "Curtains", fr: "les rideaux" },
            { en: "Hanger", fr: "le cintre" },
            { en: "Wastebasket", fr: "la corbeille à papier" }
        ]
    },

    // ===== DIRE L'HEURE EN FRANÇAIS (Telling Time in French) =====
    {
        title: "Dire l'heure — Règles principales (Telling Time — Main Rules)",
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
        title: "Dire l'heure — Minutes 1-30 (Telling Time — Minutes 1-30)",
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
        title: "Dire l'heure — Minutes 31-59 avec \"moins\" (Telling Time — Minutes 31-59 with \"to\")",
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
        title: "Dire l'heure — Périodes de la journée (Telling Time — Periods of the Day)",
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
        title: "Dire l'heure — Plages horaires (Telling Time — Time Ranges)",
        items: [
            { fr: "Structure : de + heure1 + à + heure2", en: "Structure: from + time1 + to + time2" },
            { fr: "De neuf heures à dix-sept heures.", en: "From nine to five. (9AM to 5PM)" },
            { fr: "Je travaille de neuf heures du matin à cinq heures de l'après-midi.", en: "I work from nine in the morning to five in the afternoon. (9AM-5PM)" },
            { fr: "Le magasin ouvre de huit heures à midi et de quatorze heures à dix-neuf heures.", en: "The store opens from eight to noon and from two to seven. (8AM-noon, 2PM-7PM)" },
        ]
    },
    {
        title: "Dire l'heure — Rendez-vous (Telling Time — Appointments)",
        items: [
            { fr: "Règle : À + heure précise (sans \"Il est\")", en: "Rule: At + exact time (without \"It is\")" },
            { fr: "À deux heures.", en: "At two o'clock. (2:00)" },
            { fr: "À midi et quart.", en: "At quarter past noon. (12:15)" },
            { fr: "À seize heures trente.", en: "At four thirty. (4:30 PM)" },
        ]
    },
    {
        title: "Dire l'heure — Futur et Passé (Telling Time — Future & Past)",
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
        title: "Dire l'heure — Exceptions et cas spéciaux (Telling Time — Exceptions & Special Cases)",
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
        title: "Dire l'heure — Questions (Telling Time — Questions)",
        items: [
            { fr: "Quelle heure est-il ?", en: "What time is it?" },
            { fr: "Il est dix heures seize du soir.", en: "It is ten sixteen in the evening. (10:16 PM)" },
            { fr: "À quelle heure ?", en: "At what time?" },
            { fr: "À vingt-deux heures seize.", en: "At ten sixteen PM." },
            { fr: "Tu arrives à quelle heure ?", en: "What time are you arriving?" },
            { fr: "J'arrive maintenant, il est dix heures seize du soir !", en: "I'm arriving now, it's ten sixteen in the evening!" },
        ]
    },

    // ===== DONNER UN NUMÉRO DE TÉLÉPHONE EN FRANÇAIS (Giving Phone Numbers in French) =====
    {
        title: "Numéros de téléphone — Règles principales (Phone Numbers — Main Rules)",
        items: [
            { fr: "Les numéros français (10 chiffres) se disent toujours deux par deux.", en: "French phone numbers (10 digits) are always said two digits at a time." },
            { fr: "Structure : deux chiffres par deux, avec des pauses naturelles.", en: "Structure: group by 2 digits, with natural pauses." },
            { fr: "Les nombres 10+ utilisent les dizaines : \"quarante-cinq\" (45), pas \"quatre cinq\".", en: "Numbers 10+ use the tens: \"quarante-cinq\" (45), not \"quatre cinq\"." },
            { fr: "Exemple : 06 12 34 56 78", en: "Example: 06 12 34 56 78" },
            { fr: "Zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", en: "Zero six, twelve, thirty-four, fifty-six, seventy-eight." },
        ]
    },
    {
        title: "Numéros de téléphone — Phrases pour donner son numéro (Phone Numbers — Giving Your Number)",
        items: [
            { fr: "Mon numéro c'est le...", en: "My number is..." },
            { fr: "Mon numéro de téléphone est...", en: "My phone number is..." },
            { fr: "Mon portable, c'est...", en: "My cell is..." },
            { fr: "Vous pouvez noter ?", en: "Can you write it down?" },
            { fr: "Mon numéro, c'est le zéro six, quarante-cinq, soixante-six, soixante-douze, quatre-vingt-un.", en: "My number is zero six, forty-five, sixty-six, seventy-two, eighty-one. (06 45 66 72 81)" },
        ]
    },
    {
        title: "Numéros de téléphone — Nombres spéciaux (Phone Numbers — Special Numbers)",
        items: [
            { fr: "00 → double zéro", en: "00 → double zero" },
            { fr: "11 → onze", en: "11 → eleven" },
            { fr: "22 → vingt-deux", en: "22 → twenty-two" },
            { fr: "33 → trente-trois", en: "33 → thirty-three" },
            { fr: "Jamais \"double un\" ou \"double deux\" → toujours la dizaine complète !", en: "Never \"double one\" or \"double two\" → always use the full tens!" },
        ]
    },
    {
        title: "Numéros de téléphone — Demander un numéro (Phone Numbers — Asking for a Number)",
        items: [
            { fr: "Quel est votre numéro ?", en: "What's your number? (formal)" },
            { fr: "C'est quoi ton numéro ?", en: "What's your number? (informal)" },
            { fr: "Tu peux me donner ton numéro ?", en: "Can you give me your number?" },
            { fr: "Répétez lentement, s'il vous plaît.", en: "Repeat slowly, please." },
        ]
    },
    {
        title: "Numéros de téléphone — Exemple de dialogue (Phone Numbers — Dialogue Example)",
        items: [
            { fr: "A : Quel est votre numéro de téléphone ?", en: "A: What's your phone number?" },
            { fr: "B : C'est le zéro un, vingt-trois, quarante-cinq, soixante-sept, quatre-vingt-neuf.", en: "B: It's zero one, twenty-three, forty-five, sixty-seven, eighty-nine. (01 23 45 67 89)" },
            { fr: "A : Parfait, c'est noté !", en: "A: Perfect, got it!" },
        ]
    },
    {
        title: "Numéros de téléphone — Types de numéros français (Phone Numbers — French Number Types)",
        items: [
            { fr: "Portable (mobile) : 06 XX XX XX XX ou 07 XX XX XX XX", en: "Mobile: 06 XX XX XX XX or 07 XX XX XX XX" },
            { fr: "Fixe (landline) : 01/02/03/04/05 XX XX XX XX", en: "Landline: 01/02/03/04/05 XX XX XX XX" },
            { fr: "International : +33 6 XX XX XX XX (sans le 0)", en: "International: +33 6 XX XX XX XX (drop the 0)" },
            { fr: "Mon numéro professionnel est le zéro quatre, vingt et un, trente-trois, quarante-quatre, cinquante-cinq.", en: "My work number is zero four, twenty-one, thirty-three, forty-four, fifty-five. (04 21 33 44 55)" },
        ]
    }
];
