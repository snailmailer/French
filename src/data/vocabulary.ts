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
        title: "Nombres (Numbers 1-10)",
        items: [
            { en: "1", fr: "un" },
            { en: "2", fr: "deux" },
            { en: "3", fr: "trois" },
            { en: "4", fr: "quatre" },
            { en: "5", fr: "cinq" },
            { en: "6", fr: "six" },
            { en: "7", fr: "sept" },
            { en: "8", fr: "huit" },
            { en: "9", fr: "neuf" },
            { en: "10", fr: "dix" }
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
    }
];
