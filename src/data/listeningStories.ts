export interface ListeningStory {
    id: string;
    level: string;
    title: string;
    script: string;
    questions: { french: string; english: string; }[];
    vocabulary: { french: string; english: string; }[];
}

export const listeningStories: ListeningStory[] = [
    {
        id: 'a1-journee',
        level: 'A1',
        title: 'Ma Journée (My Day)',
        script: "Bonjour ! Je m'appelle Thomas. Le matin, je me lève à sept heures. Je prends mon petit déjeuner dans la cuisine. Je mange un croissant et je bois du café. Ensuite, je prends une douche et je m'habille. À huit heures, je prends le bus pour aller au travail. Je travaille dans un grand bureau au centre-ville. À midi, je mange une salade avec mes collègues. Le soir, je rentre à la maison à dix-huit heures. Je regarde la télévision et je dîne. Je me couche à vingt-deux heures.",
        questions: [
            { french: 'À quelle heure se lève Thomas ?', english: 'What time does Thomas wake up?' },
            { french: 'Que boit-il le matin ?', english: 'What does he drink in the morning?' },
            { french: 'Comment va-t-il au travail ?', english: 'How does he go to work?' },
            { french: 'Avec qui mange-t-il à midi ?', english: 'Who does he eat with at noon?' },
            { french: 'À quelle heure se couche-t-il ?', english: 'What time does he go to bed?' }
        ],
        vocabulary: [
            { french: 'se lever', english: 'to get up' },
            { french: 'prendre une douche', english: 'to take a shower' },
            { french: 'le matin', english: 'the morning' },
            { french: 'le soir', english: 'the evening' },
            { french: 'le bureau', english: 'the office' }
        ]
    },
    {
        id: 'a2-vacances',
        level: 'A2',
        title: 'Les Vacances en Famille (Family Vacation)',
        script: "Cet été, notre famille va en vacances en Italie. Nous partons le quatorze juillet. Nous allons prendre l'avion à Paris, puis louer une voiture à Rome. J'adore l'Italie parce qu'il fait très beau et la nourriture est délicieuse. Nous allons visiter des musées le matin et aller à la plage l'après-midi. Mon père veut manger de vraies pizzas italiennes. Ma mère préfère visiter les monuments historiques. Nous allons rester dans un petit hôtel près de la mer pendant une semaine. J'ai hâte de partir et de prendre beaucoup de photos !",
        questions: [
            { french: 'Où va la famille en vacances ?', english: 'Where is the family going on vacation?' },
            { french: 'Comment vont-ils voyager ?', english: 'How are they going to travel?' },
            { french: 'Que vont-ils faire le matin ?', english: 'What are they going to do in the morning?' },
            { french: 'Que veut manger le père ?', english: 'What does the father want to eat?' },
            { french: 'Combien de temps vont-ils rester ?', english: 'How long are they going to stay?' }
        ],
        vocabulary: [
            { french: 'les vacances', english: 'the vacation' },
            { french: 'l\'avion', english: 'the airplane' },
            { french: 'la plage', english: 'the beach' },
            { french: 'louer', english: 'to rent' },
            { french: 'rester', english: 'to stay' }
        ]
    },
    {
        id: 'b1-campagne',
        level: 'B1',
        title: 'Un week-end à la campagne',
        script: "Samedi matin, Camille se lève tôt dans son petit appartement à Nantes. Il est sept heures et quart, le soleil commence à briller à travers la fenêtre de la cuisine. Tandis qu'elle prépare un café noir et coupe une pomme verte, elle écoute la météo : “Il fera beau aujourd'hui, avec quelques nuages dans l'après-midi.”\n\nAprès le petit déjeuner, elle range sa valise, met sa carte de train dans son sac à dos, et quitte la maison à huit heures trente. Dans la rue, elle salue son voisin, monsieur Dupont, qui arrose ses plantes sur le balcon.\n\nÀ la gare, elle retrouve son amie Élise. Ensemble, elles prennent le train pour aller à la campagne, près de Tours. Le paysage change peu à peu : les bâtiments disparaissent, remplacés par des champs dorés et des forêts vertes.\n\nArrivées vers dix heures quarante-cinq, elles marchent jusqu'à une petite maison en pierre entourée de fleurs. L'air est frais, et on entend les oiseaux chanter.\n\nL'après-midi, elles font une promenade à vélo, traversent le village, passent devant la poste, la mairie, et s'arrêtent à la boulangerie pour acheter une tarte aux fraises. Ensuite, elles vont pique-niquer près de la rivière, sous un grand chêne.\n\nEn soirée, il fait un peu plus froid, alors elles rentrent cuisiner : pâtes, sauce tomate, fromage râpé, et du vin blanc local. Pendant qu'Élise coupe les légumes, Camille met la table et allume la radio. Elles rient, discutent de leurs souvenirs de vacances, et regardent les étoiles par la fenêtre avant de se coucher vers vingt-trois heures.",
        questions: [
            { french: 'Quelle heure est-il quand Camille se lève ?', english: 'What time is it when Camille wakes up?' },
            { french: 'Que prépare-t-elle pour le petit-déjeuner ?', english: 'What does she prepare for breakfast?' },
            { french: 'Où vont Camille et Élise ?', english: 'Where are Camille and Elise going?' },
            { french: 'Que font-elles l\'après-midi ?', english: 'What do they do in the afternoon?' },
            { french: 'Que font-elles le soir ?', english: 'What do they do in the evening?' }
        ],
        vocabulary: [
            { french: 'le balcon', english: 'the balcony' },
            { french: 'la gare', english: 'the train station' },
            { french: 'la campagne', english: 'the countryside' },
            { french: 'la tarte', english: 'the tart/pie' },
            { french: 'la rivière', english: 'the river' },
            { french: 'se lever', english: 'to wake up / to get up' },
            { french: 'ranger', english: 'to tidy / to put away' },
            { french: 'rire', english: 'to laugh' }
        ]
    },
    {
        id: 'b2-bureau',
        level: 'B2',
        title: 'Le projet du bureau',
        script: "Au cœur du centre-ville de Bordeaux, dans un grand immeuble en verre sur le boulevard Saint-Catherine, une petite équipe travaille sur un projet ambitieux : créer un café éco-responsable combinant design moderne et matériaux recyclés.\n\nLundi matin, à 9 heures précises, tous les membres se réunissent dans la salle de réunion. Le directeur, Monsieur Garnier, commence :\n— « Nous avons trois mois pour finaliser les plans, contacter les fournisseurs, et présenter le concept avant le 15 mars. »\n\nChacun note les dates importantes : réunions à 11 heures le mercredi, visites de site le vendredi, et rapports à envoyer tous les jeudis.\n\nAmélie, la designer, propose d'utiliser des bois locaux et des couleurs naturelles comme le vert, le beige et le brun. Malik, lui, s'occupe de l'éclairage, suggérant des ampoules LED pour réduire la consommation d'énergie.\n\nLe mardi, ils visitent un ancien bâtiment industriel près des quais de la Garonne. Le lieu sent encore la poussière et le métal, mais sous la lumière du ciel bleu, chacun imagine déjà le futur café.\n\nTout au long de la semaine, les discussions s'enchaînent autour du plan de travail dans la cuisine commune du bureau, où l'arôme du café fraîchement moulu accompagne leur concentration. Malgré la fatigue, l'équipe reste motivée.\n\nLe vendredi soir, en quittant les locaux, ils se promettent de fêter l'ouverture ensemble, assis à la terrasse du café qu'ils auront créé de leurs propres mains.",
        questions: [
            { french: 'Où se trouve le bureau de l\'équipe ?', english: 'Where is the team\'s office located?' },
            { french: 'Quel est leur projet ?', english: 'What is their project?' },
            { french: 'Quels matériaux Amélie veut-elle utiliser ?', english: 'What materials does Amélie want to use?' },
            { french: 'Que fait Malik ?', english: 'What does Malik do?' },
            { french: 'Comment se sentent-ils à la fin de la semaine ?', english: 'How do they feel at the end of the week?' }
        ],
        vocabulary: [
            { french: 'un immeuble', english: 'a building' },
            { french: 'un fournisseur', english: 'a supplier' },
            { french: 'un croquis', english: 'a sketch' },
            { french: 'écologique', english: 'ecological' },
            { french: 'industriel(le)', english: 'industrial' },
            { french: 'se réunir', english: 'to gather / to meet' },
            { french: 'respecter les délais', english: 'to meet the deadlines' },
            { french: 'suggérer', english: 'to suggest' }
        ]
    },
    {
        id: 'c1-montreal',
        level: 'C1',
        title: 'Un souvenir d\'hiver à Montréal',
        script: "Je me souviens encore de ce février glacial à Montréal, quand le thermomètre marquait moins quinze degrés et que le vent faisait danser la neige comme des plumes blanches.\n\nChaque matin, je me levais à 6 h 30, mettais mes gants en laine, puis sortais affronter le froid. Le pont Jacques-Cartier, recouvert de givre, scintillait sous le soleil rose du lever du jour. En traversant, j'apercevais le fleuve gelé, silencieux, comme figé dans le temps.\n\nAu bureau, installé dans un immeuble ancien du Vieux-Port, l'odeur du café chaud réchauffait l'atmosphère. Par la fenêtre, on voyait les passants marcher vite, les écharpes jusqu'aux yeux.\n\nLe soir, je retrouvais mes amis dans un petit restaurant italien, au coin de la rue Sainte-Catherine. Là, la chaleur humaine contrastait avec le froid extérieur. Le patron, un vieil homme jovial, portait toujours une chemise rouge. Il connaissait nos plats préférés et plaisantait entre deux verres de vin.\n\nUn soir, en rentrant, la neige tombait doucement. Je me suis arrêté devant une vitrine éclairée, observant mon reflet. Derrière moi, la ville vibrait de lumières et de rires. Ce soir-là, j'ai compris pourquoi les hivers québécois, malgré leur dureté, ont une âme chaleureuse, presque poétique.",
        questions: [
            { french: 'Quelle est la température pendant l\'histoire ?', english: 'What is the temperature during the story?' },
            { french: 'Où travaille le narrateur ?', english: 'Where does the narrator work?' },
            { french: 'Que fait-il le soir ?', english: 'What does he do in the evening?' },
            { french: 'Comment est décrit le patron du restaurant ?', english: 'How is the restaurant owner described?' },
            { french: 'Quelle émotion ressent le narrateur à la fin ?', english: 'What emotion does the narrator feel at the end?' }
        ],
        vocabulary: [
            { french: 'le fleuve', english: 'the river' },
            { french: 'le givre', english: 'frost' },
            { french: 'silencieux', english: 'silent' },
            { french: 'figé', english: 'frozen / fixed' },
            { french: 'jovial', english: 'cheerful' },
            { french: 'réchauffer', english: 'to warm up' },
            { french: 'scintiller', english: 'to sparkle / to glisten' }
        ]
    },
    {
        id: 'c2-saveur',
        level: 'C2',
        title: 'La saveur du souvenir',
        script: "Ce matin-là, un brouillard léger enveloppait les toits de Paris. Assise près de la fenêtre, Marianne contemplait les rues du Quartier Latin, encore silencieuses. L'odeur du café se mêlait à celle du pain chaud venant de la boulangerie en bas.\n\nElle ouvrit son carnet en cuir, celui où elle note des pensées depuis ses voyages à Rome, Lisbonne, et Tokyo. À la page du jour, elle écrivit :\n“La mémoire n'obéit ni à la logique du temps, ni à celle des distances.”\n\nTout à coup, son téléphone vibra. Un numéro familier s'afficha : +33 6 29 45 81 10. Elle hésita, puis répondit :\n— « Allô ? »\n— « C'est moi. Tu te souviens de Berlin, ce soir de décembre ? »\n\nLa voix réveilla mille images : un restaurant caché, des murs rouges, la lumière des bougies, et la musique d'un pianiste en fond.\n\nElle se leva, se servit un peu plus de café, et regarda la pluie tomber. Les parapluies colorés dansaient dans la rue. Tout semblait suspendu — ni vraiment présent, ni passé.\n\nDans son carnet, elle ajouta une phrase :\n“Le temps, comme le parfum du café, ne revient jamais exactement le même, mais il garde la saveur du souvenir.”",
        questions: [
            { french: 'Où se trouve Marianne au début ?', english: 'Where is Marianne at the beginning?' },
            { french: 'Que fait-elle avant de recevoir l\'appel ?', english: 'What is she doing before receiving the call?' },
            { french: 'Quelle ville évoque la voix au téléphone ?', english: 'Which city does the voice on the phone mention?' },
            { french: 'Quels souvenirs reviennent à Marianne ?', english: 'What memories come back to Marianne?' },
            { french: 'Que symbolisent les "parapluies colorés" à la fin ?', english: 'What do the "colorful umbrellas" symbolize at the end?' }
        ],
        vocabulary: [
            { french: 'le brouillard', english: 'the fog' },
            { french: 'le cuir', english: 'leather' },
            { french: 'la saveur', english: 'flavor / savor' },
            { french: 'envelopper', english: 'to wrap / to envelope' },
            { french: 'hésiter', english: 'to hesitate' },
            { french: 'suspendu', english: 'suspended' },
            { french: 'évoquer', english: 'to evoke / to mention' }
        ]
    }
];
