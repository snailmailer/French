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
    openQuestions: string[];
    infoQuestions: string[];
    image: string;
    comicDialogue: string;
}

export const readingStories: ReadingStory[] = [
    {
        id: 'a1-petit-dej',
        level: 'A1',
        title: 'Le petit déjeuner de Léa',
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
            'Que manges-tu le matin ?',
            'À quelle heure te lèves-tu ?',
            'Aimes-tu le café ?',
            'As-tu un animal de compagnie ?',
            'Que fais-tu avant de sortir ?'
        ],
        infoQuestions: [
            'Qui prépare le petit déjeuner ?',
            'Que boit la maman ?',
            'Comment s’appelle le chat ?',
            'Où est Mimi ?',
            'Que fait Léa ensuite ?'
        ],
        image: story_a1_img,
        comicDialogue: 'Bonjour, maman !'
    },
    {
        id: 'a2-karim',
        level: 'A2',
        title: 'Le week-end de Karim',
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
            'Où aimes-tu aller le week-end ?',
            'Préfères-tu la mer ou la montagne ?',
            'Aimes-tu voyager en hiver ?',
            'Que fais-tu quand il fait froid ?',
            'Quelle est ta nourriture préférée en hiver ?'
        ],
        infoQuestions: [
            'Où va Karim ?',
            'Avec qui ?',
            'Quel temps fera-t-il ?',
            'Que vont-ils manger ?',
            'Que demande Lila ?'
        ],
        image: story_a2_img,
        comicDialogue: 'Salut Karim !'
    },
    {
        id: 'b1-collegue',
        level: 'B1',
        title: 'Une nouvelle collègue',
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
            'Que ressens-tu le premier jour de travail ?',
            'Pourquoi est-il important d’être accueillant ?',
            'Comment t’intègres-tu dans une nouvelle équipe ?',
            'As-tu déjà eu un premier jour stressant ?',
            'Quelle a été ta meilleure expérience professionnelle ?'
        ],
        infoQuestions: [
            'Où travaille Emma ?',
            'Qui est son chef ?',
            'Combien d’années d’expérience a-t-elle ?',
            'Quel est son poste précédent ?',
            'Comment se sent-elle ?'
        ],
        image: story_b1_img,
        comicDialogue: 'Enchantée !'
    },
    {
        id: 'b2-lisbonne',
        level: 'B2',
        title: 'Un été à Lisbonne',
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
            'Qu’apprend-on d’un stage à l’étranger ?',
            'Quelle ville aimerais-tu visiter ?',
            'Pourquoi est-ce utile d’apprendre des langues ?',
            'Que peut changer un voyage dans ta vie ?',
            'Comment un stage peut influencer ton futur travail ?'
        ],
        infoQuestions: [
            'Où Sophie a-t-elle travaillé ?',
            'Pendant combien de temps ?',
            'Avec qui parle-t-elle ?',
            'Qu’a-t-elle appris ?',
            'Quelle est sa conclusion ?'
        ],
        image: story_b2_img,
        comicDialogue: "C'était incroyable !"
    },
    {
        id: 'c1-camille',
        level: 'C1',
        title: 'Le choix de Camille',
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
            'Pourquoi certaines personnes quittent-elles un emploi stable ?',
            'Quelles sont les qualités nécessaires pour créer une start-up ?',
            'Qu’est-ce que le "risque" signifie pour toi ?',
            'As-tu déjà fait un choix difficile dans ta carrière ?',
            'Penses-tu qu’il faut suivre la passion ou la sécurité ?'
        ],
        infoQuestions: [
            'Combien de temps Camille a-t-elle travaillé dans son ancienne entreprise ?',
            'Pourquoi a-t-elle décidé de partir ?',
            'Dans quel domaine veut-elle créer son entreprise ?',
            'Quelle peur évoque Élise ?',
            'Quelle est la philosophie de Camille à la fin ?'
        ],
        image: story_c1_img,
        comicDialogue: "Je lance ma start-up !"
    },
    {
        id: 'c2-ecrivain',
        level: 'C2',
        title: 'Le discours de l’écrivain',
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
            'Selon toi, quel est le rôle de la littérature aujourd’hui ?',
            'Comment la lecture peut-elle changer notre manière de penser ?',
            'Les mots ont-ils encore de l’influence dans la société moderne ?',
            'Est-ce que la technologie a remplacé la réflexion selon toi ?',
            'As-tu déjà lu un livre qui a modifié ta vision du monde ?'
        ],
        infoQuestions: [
            'Quel est le sujet du discours ?',
            'Que dit l’écrivain sur les mots ?',
            'Quelle question pose Marc ?',
            'Quel point de vue exprime Aïcha ?',
            'Quelle conclusion donne l’écrivain à la fin ?'
        ],
        image: story_c2_img,
        comicDialogue: "Le pouvoir des mots !"
    }
];
