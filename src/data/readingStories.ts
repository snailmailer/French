export interface DialogueLine {
    speaker: string;
    french: string;
    english?: string;
}

import story_a1_img from '../assets/images/story_a1.png';
import story_a2_img from '../assets/images/story_a2.png';
import story_b1_img from '../assets/images/story_b1.png';
import story_b2_img from '../assets/images/story_b2.png';
import story_c1_img from '../assets/images/story_c1.png';
import story_c2_img from '../assets/images/story_c2.png';

export interface ReadingStory {
    id: string;
    level: string;
    title: string;
    characters: string;
    dialogue: DialogueLine[];
    grammar: {
        title: string;
        points: string[];
    };
    expressions: {
        french: string;
        english: string;
    }[];
    openQuestions: { french: string; english: string; }[];
    infoQuestions: { french: string; english: string; }[];
    image: string;
    comicDialogue: string;
}

export const readingStories: ReadingStory[] = [
    {
        id: 'a1-petit-dej',
        level: 'A1',
        title: 'Le Petit Déjeuner De Léa',
        characters: 'Léa et sa mère',
        dialogue: [
            { speaker: 'Léa', french: 'Bonjour, maman !', english: 'Good morning, mom!' },
            { speaker: 'Maman', french: 'Bonjour, Léa. Tu as bien dormi ?', english: 'Good morning, Léa. Did you sleep well?' },
            { speaker: 'Léa', french: 'Oui, merci. Je prépare le petit déjeuner. Tu veux du café ?', english: 'Yes, thank you. I’m making breakfast. Do you want some coffee?' },
            { speaker: 'Maman', french: 'Oui, s’il te plaît. Et Mimi, elle veut déjà manger ?', english: 'Yes, please. And Mimi, does she want to eat already?' },
            { speaker: 'Léa', french: 'Oui, elle attend près de sa gamelle !', english: 'Yes, she’s waiting by her bowl!' }
        ],
        grammar: {
            title: 'Grammaire A1',
            points: [
                'Présent de l’indicatif : je prépare, tu veux, elle attend.',
                'Articles définis / indéfinis : le café, du beurre, une tartine.',
                'Formules de politesse basiques : Bonjour, merci, s’il te plaît.'
            ]
        },
        expressions: [
            { french: 'Tu as bien dormi ?', english: 'Did you sleep well?' },
            { french: 'Je prépare le petit déjeuner', english: 'I’m making breakfast' },
            { french: 'Bonne journée !', english: 'Have a nice day!' }
        ],
        openQuestions: [
            { french: 'Que manges-tu le matin ?', english: 'What do you eat in the morning?' },
            { french: 'À quelle heure te lèves-tu ?', english: 'What time do you get up?' },
            { french: 'Aimes-tu le café ?', english: 'Do you like coffee?' },
            { french: 'As-tu un animal de compagnie ?', english: 'Do you have a pet?' },
            { french: 'Que fais-tu avant de sortir ?', english: 'What do you do before leaving?' }
        ],
        infoQuestions: [
            { french: 'Qui prépare le petit déjeuner ?', english: 'Who makes breakfast?' },
            { french: 'Que boit la maman ?', english: 'What does the mom drink?' },
            { french: 'Comment s’appelle le chat ?', english: 'What is the cat’s name?' },
            { french: 'Où est Mimi ?', english: 'Where is Mimi?' },
            { french: 'Que fait Léa ensuite ?', english: 'What does Léa do next?' }
        ],
        image: story_a1_img,
        comicDialogue: 'Bonjour, maman !'
    },
    {
        id: 'a2-karim',
        level: 'A2',
        title: 'Le Week-end De Karim',
        characters: 'Karim et Lila',
        dialogue: [
            { speaker: 'Lila', french: 'Salut Karim ! Tu fais quoi ce week-end ?', english: 'Hi Karim! What are you doing this weekend?' },
            { speaker: 'Karim', french: 'Je vais à la montagne avec mes amis.', english: 'I’m going to the mountains with my friends.' },
            { speaker: 'Lila', french: 'Super ! Il va faire froid, non ?', english: 'Great! It’s going to be cold, right?' },
            { speaker: 'Karim', french: 'Oui, mais il y aura du soleil. On va faire une promenade et manger une raclette.', english: 'Yes, but it’ll be sunny. We’ll walk and eat raclette.' },
            { speaker: 'Lila', french: 'Quelle bonne idée ! Prends des photos !', english: 'What a great idea! Take pictures!' }
        ],
        grammar: {
            title: 'Grammaire A2',
            points: [
                'Futur proche : je vais partir, on va faire.',
                'Expressions de météo : il va faire froid, il y aura du soleil.',
                'Structures avec "avec" et "chez".'
            ]
        },
        expressions: [
            { french: 'Tu fais quoi ce week-end ?', english: 'What are you doing this weekend?' },
            { french: 'Il va faire froid', english: 'It’s going to be cold' },
            { french: 'Prends des photos !', english: 'Take pictures!' }
        ],
        openQuestions: [
            { french: 'Où aimes-tu aller le week-end ?', english: 'Where do you like to go on weekends?' },
            { french: 'Préfères-tu la mer ou la montagne ?', english: 'Do you prefer the sea or the mountains?' },
            { french: 'Aimes-tu voyager en hiver ?', english: 'Do you like to travel in winter?' },
            { french: 'Que fais-tu quand il fait froid ?', english: 'What do you do when it\'s cold?' },
            { french: 'Quelle est ta nourriture préférée en hiver ?', english: 'What is your favorite winter food?' }
        ],
        infoQuestions: [
            { french: 'Où va Karim ?', english: 'Where is Karim going?' },
            { french: 'Avec qui ?', english: 'With whom?' },
            { french: 'Quel temps fera-t-il ?', english: 'What will the weather be like?' },
            { french: 'Que vont-ils manger ?', english: 'What are they going to eat?' },
            { french: 'Que demande Lila ?', english: 'What does Lila ask?' }
        ],
        image: story_a2_img,
        comicDialogue: 'Salut Karim !'
    },
    {
        id: 'b1-collegue',
        level: 'B1',
        title: 'Une Nouvelle Collègue',
        characters: 'Emma, Julien et M. Lemoine (le chef)',
        dialogue: [
            { speaker: 'Julien', french: 'Salut, tu dois être Emma ?', english: 'Hi, you must be Emma?' },
            { speaker: 'Emma', french: 'Oui, enchantée ! C’est mon premier jour ici.', english: 'Yes, nice to meet you! It’s my first day here.' },
            { speaker: 'Julien', french: 'Bienvenue dans l’équipe. On travaille dans le service communication, au fond du couloir.', english: 'Welcome to the team. We work in the communications department, at the end of the hall.' },
            { speaker: 'Emma', french: 'D’accord, merci. Je suis un peu nerveuse, je n’ai jamais travaillé dans une grande entreprise.', english: 'Okay, thanks. I’m a bit nervous, I’ve never worked in a big company before.' },
            { speaker: 'Julien', french: 'Pas de souci, tout le monde t’aidera. Tiens, voici ton bureau.', english: 'No worries, everyone will help you. Here’s your desk.' },
            { speaker: 'M. Lemoine', french: 'Bonjour Emma, ravi de te rencontrer. On m’a parlé de ton expérience en marketing digital.', english: 'Hello Emma, nice to meet you. I’ve heard about your digital marketing experience.' },
            { speaker: 'Emma', french: 'Oui, j’ai travaillé deux ans dans une petite agence de publicité.', english: 'Yes, I worked two years in a small advertising agency.' },
            { speaker: 'M. Lemoine', french: 'Parfait. Nous avons un nouveau projet de campagne à préparer ensemble. Tu commences cet après-midi ?', english: 'Perfect. We have a new campaign project. Will you start this afternoon?' },
            { speaker: 'Emma', french: 'Oui, avec plaisir.', english: 'Yes, happily.' },
            { speaker: 'Julien', french: 'Tu verras, ici, l’ambiance est très sympa.', english: 'You’ll see, it’s a great place to work.' }
        ],
        grammar: {
            title: 'Grammaire B1',
            points: [
                'Passé composé pour raconter des expériences : J’ai travaillé, j’ai commencé.',
                'Séquence du discours professionnel : on m’a parlé de…',
                'Introduction à l’expression des émotions : Je suis nerveuse, j’ai hâte de commencer.'
            ]
        },
        expressions: [
            { french: 'J’ai hâte de…', english: 'I can’t wait to…' },
            { french: 'Tout le monde t’aidera', english: 'Everyone will help you' },
            { french: 'Bien s’intégrer', english: 'To fit in' },
            { french: 'Pas de souci !', english: 'No worries!' }
        ],
        openQuestions: [
            { french: 'Que ressens-tu le premier jour de travail ?', english: 'How do you feel on your first day of work?' },
            { french: 'Pourquoi est-il important d’être accueillant ?', english: 'Why is it important to be welcoming?' },
            { french: 'Comment t’intègres-tu dans une nouvelle équipe ?', english: 'How do you integrate into a new team?' },
            { french: 'As-tu déjà eu un premier jour stressant ?', english: 'Have you ever had a stressful first day?' },
            { french: 'Quelle a été ta meilleure expérience professionnelle ?', english: 'What was your best professional experience?' }
        ],
        infoQuestions: [
            { french: 'Où travaille Emma ?', english: 'Where does Emma work?' },
            { french: 'Qui est son chef ?', english: 'Who is her boss?' },
            { french: 'Combien d’années d’expérience a-t-elle ?', english: 'How many years of experience does she have?' },
            { french: 'Quel est son poste précédent ?', english: 'What was her previous position?' },
            { french: 'Comment se sent-elle ?', english: 'How does she feel?' }
        ],
        image: story_b1_img,
        comicDialogue: 'Enchantée !'
    },
    {
        id: 'b2-lisbonne',
        level: 'B2',
        title: 'Un Été À Lisbonne',
        characters: 'Sophie, Carlos et Maria',
        dialogue: [
            { speaker: 'Carlos', french: 'Salut Sophie ! Comment s’est passé ton été à Lisbonne ?' },
            { speaker: 'Sophie', french: 'C’était incroyable ! J’ai travaillé deux mois dans une entreprise de marketing digital près du centre.' },
            { speaker: 'Maria', french: 'Tu as aimé la ville ?' },
            { speaker: 'Sophie', french: 'Oui, surtout les rues colorées et la musique. L’ambiance était très conviviale.' },
            { speaker: 'Carlos', french: 'Et au travail, tu as appris beaucoup ?' },
            { speaker: 'Sophie', french: 'Énormément. J’ai collaboré à un projet de marque éthique et suivi des cours de portugais le soir.' },
            { speaker: 'Maria', french: 'Et maintenant ?' },
            { speaker: 'Sophie', french: 'J’ai envie de vivre à l’étranger plus longtemps. Cette expérience a changé ma vision du futur.' }
        ],
        grammar: {
            title: 'Grammaire B2',
            points: [
                'Passé composé + imparfait pour mêler actions et descriptions.',
                'Connecteurs logiques : mais, pourtant, cependant, dès que, surtout.',
                'Constructions avec "depuis" et "pendant" pour exprimer la durée.'
            ]
        },
        expressions: [
            { french: 'J’ai participé à…', english: 'I took part in' },
            { french: 'J’ai beaucoup progressé', english: 'I improved a lot' },
            { french: 'Découvrir la culture locale', english: 'discover local culture' },
            { french: 'Une expérience enrichissante', english: 'enriching experience' }
        ],
        openQuestions: [
            { french: 'Qu’apprend-on d’un stage à l’étranger ?', english: 'What do you learn from an internship abroad?' },
            { french: 'Quelle ville aimerais-tu visiter ?', english: 'Which city would you like to visit?' },
            { french: 'Pourquoi est-ce utile d’apprendre des langues ?', english: 'Why is it useful to learn languages?' },
            { french: 'Que peut changer un voyage dans ta vie ?', english: 'What can a trip change in your life?' },
            { french: 'Comment un stage peut influencer ton futur travail ?', english: 'How can an internship influence your future work?' }
        ],
        infoQuestions: [
            { french: 'Où Sophie a-t-elle travaillé ?', english: 'Where did Sophie work?' },
            { french: 'Pendant combien de temps ?', english: 'For how long?' },
            { french: 'Avec qui parle-t-elle ?', english: 'Who is she talking to?' },
            { french: 'Qu’a-t-elle appris ?', english: 'What did she learn?' },
            { french: 'Quelle est sa conclusion ?', english: 'What is her conclusion?' }
        ],
        image: story_b2_img,
        comicDialogue: "C'était incroyable !"
    },
    {
        id: 'c1-camille',
        level: 'C1',
        title: 'Le Choix De Camille',
        characters: 'Camille, Thomas et Élise',
        dialogue: [
            { speaker: 'Thomas', french: 'Tu as quitté ton emploi, vraiment ?' },
            { speaker: 'Camille', french: 'Oui. Après dix ans dans la même entreprise, j’avais besoin de changement.' },
            { speaker: 'Élise', french: 'Ce n’est pas un choix facile. Tu fais quoi maintenant ?' },
            { speaker: 'Camille', french: 'Je lance ma start-up dans la durabilité. Je veux créer quelque chose d’utile.' },
            { speaker: 'Thomas', french: 'Tu n’as pas peur de l’échec ?' },
            { speaker: 'Camille', french: 'Si, bien sûr. Mais je préfère échouer en essayant que de réussir sans passion.' },
            { speaker: 'Élise', french: 'Tu es vraiment courageuse. Peu de gens osent prendre ce risque.' },
            { speaker: 'Camille', french: 'Le vrai risque, c’est de ne rien tenter du tout.' }
        ],
        grammar: {
            title: 'Grammaire C1',
            points: [
                'Subjonctif : Il faut que je change, je préfère qu’on tente.',
                'Opposition et nuance : Le travail était stable, mais je ne me reconnaissais plus.',
                'Lexique du risque et de la motivation.'
            ]
        },
        expressions: [
            { french: 'Avoir besoin de changement', english: 'To need a change' },
            { french: 'Prendre un risque calculé', english: 'To take a calculated risk' },
            { french: 'Travailler sur un projet à impact', english: 'To work on an impactful project' },
            { french: 'Le risque, c’est de ne rien tenter', english: 'The risk is to not try anything' }
        ],
        openQuestions: [
            { french: 'Pourquoi certaines personnes quittent-elles un emploi stable ?', english: 'Why do some people leave a stable job?' },
            { french: 'Quelles sont les qualités nécessaires pour créer une start-up ?', english: 'What qualities are needed to start a startup?' },
            { french: 'Qu’est-ce que le "risque" signifie pour toi ?', english: 'What does "risk" mean to you?' },
            { french: 'As-tu déjà fait un choix difficile dans ta carrière ?', english: 'Have you ever made a difficult choice in your career?' },
            { french: 'Penses-tu qu’il faut suivre la passion ou la sécurité ?', english: 'Do you think you should follow passion or security?' }
        ],
        infoQuestions: [
            { french: 'Combien de temps Camille a-t-elle travaillé dans son ancienne entreprise ?', english: 'How long did Camille work in her old company?' },
            { french: 'Pourquoi a-t-elle décidé de partir ?', english: 'Why did she decide to leave?' },
            { french: 'Dans quel domaine veut-elle créer son entreprise ?', english: 'In what field does she want to start her company?' },
            { french: 'Quelle peur évoque Élise ?', english: 'What fear does Elise mention?' },
            { french: 'Quelle est la philosophie de Camille à la fin ?', english: 'What is Camille\'s philosophy at the end?' }
        ],
        image: story_c1_img,
        comicDialogue: "Je lance ma start-up !"
    },
    {
        id: 'c2-ecrivain',
        level: 'C2',
        title: 'Le Discours De L’Écrivain',
        characters: 'L’écrivain (M. Delcourt), la journaliste, Marc et Aïcha',
        dialogue: [
            { speaker: 'Journaliste', french: 'Votre discours sur la littérature a captivé l’audience. Pouvez-vous expliquer votre vision ?' },
            { speaker: 'Écrivain', french: 'Les mots façonnent notre perception du monde. Lire, c’est élargir son horizon et défendre sa liberté.' },
            { speaker: 'Marc', french: 'Pensez-vous que la littérature puisse encore influencer la société ?' },
            { speaker: 'Écrivain', french: 'Plus que jamais. Face au flux d’informations, l’écriture garde le pouvoir de ralentir et de réfléchir.' },
            { speaker: 'Aïcha', french: 'Votre discours m’a donné envie d’écrire.' },
            { speaker: 'Écrivain', french: 'Alors j’ai atteint mon but : transmettre le goût des mots.' }
        ],
        grammar: {
            title: 'Grammaire C2',
            points: [
                'Discours indirect : L’écrivain affirme que les mots façonnent le monde.',
                'Conditionnel d’atténuation : Les livres ne changeraient peut-être pas le monde…',
                'Connecteurs argumentatifs : En revanche, pourtant, cependant, justement.'
            ]
        },
        expressions: [
            { french: 'Les mots ont un pouvoir immense', english: 'Words have an immense power' },
            { french: 'Éveiller les consciences', english: 'To awaken consciousness' },
            { french: 'Remettre en question nos certitudes', english: 'To question our certainties' },
            { french: 'Lire, c’est élargir sa liberté', english: 'Reading is broadening one’s freedom' }
        ],
        openQuestions: [
            { french: 'Selon toi, quel est le rôle de la littérature aujourd’hui ?', english: 'In your opinion, what is the role of literature today?' },
            { french: 'Comment la lecture peut-elle changer notre manière de penser ?', english: 'How can reading change the way we think?' },
            { french: 'Les mots ont-ils encore de l’influence dans la société moderne ?', english: 'Do words still have influence in modern society?' },
            { french: 'Est-ce que la technologie a remplacé la réflexion selon toi ?', english: 'Has technology replaced thinking according to you?' },
            { french: 'As-tu déjà lu un livre qui a modifié ta vision du monde ?', english: 'Have you ever read a book that changed your view of the world?' }
        ],
        infoQuestions: [
            { french: 'Quel est le sujet du discours ?', english: 'What is the subject of the speech?' },
            { french: 'Que dit l’écrivain sur les mots ?', english: 'What does the writer say about words?' },
            { french: 'Quelle question pose Marc ?', english: 'What question does Marc ask?' },
            { french: 'Quel point de vue exprime Aïcha ?', english: 'What point of view does Aïcha express?' },
            { french: 'Quelle conclusion donne l’écrivain à la fin ?', english: 'What conclusion does the writer give at the end?' }
        ],
        image: story_c2_img,
        comicDialogue: "Le pouvoir des mots !"
    }
];
