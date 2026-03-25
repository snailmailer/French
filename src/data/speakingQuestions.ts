export interface SpeakingQuestion {
    id: string;
    category: string;
    question: string;
}

export interface QA {
    qFr: string;
    qEn: string;
    aFr: string;
    aEn: string;
}

export interface TefSituation {
    title: string;
    titleEn: string;
    qaList: QA[];
}

export interface ExamTopic {
    id: string;
    title: string;
    description: string;
    prepTime: number;
    speakTime: number;
    usefulQuestions?: string[];
    scenarios?: string[];
    situations?: TefSituation[];
}

export interface LevelStructure {
    level: string;
    intro: string;
    structure: string;
    exampleQuestion: string;
    exampleParts: { label: string; text: string }[];
    tips: string;
}

export const speakingQuestions: SpeakingQuestion[] = [
    // Information Personnelle
    { id: 'ip1', category: 'Information Personnelle (Personal Information)', question: "Comment tu t'appelles ?" },
    { id: 'ip2', category: 'Information Personnelle (Personal Information)', question: "Quel est ton prénom et ton nom ?" },
    { id: 'ip3', category: 'Information Personnelle (Personal Information)', question: "Quel âge as-tu ?" },
    { id: 'ip4', category: 'Information Personnelle (Personal Information)', question: "D'où viens-tu ?" },
    { id: 'ip5', category: 'Information Personnelle (Personal Information)', question: "Où habites-tu ?" },
    { id: 'ip6', category: 'Information Personnelle (Personal Information)', question: "Quelle est ta nationalité ?" },

    // La routine
    { id: 'rt1', category: 'La routine (Routine)', question: "Que fais-tu dans la vie ?" },
    { id: 'rt2', category: 'La routine (Routine)', question: "Est-ce que tu travailles ou est-ce que tu étudies ?" },
    { id: 'rt3', category: 'La routine (Routine)', question: "À quelle heure te lèves-tu ?" },
    { id: 'rt4', category: 'La routine (Routine)', question: "Que fais-tu le matin / le soir ?" },
    { id: 'rt5', category: 'La routine (Routine)', question: "Que fais-tu le week-end ?" },

    // Les gouts et les loisirs
    { id: 'gl1', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Qu'est-ce que tu aimes ?" },
    { id: 'gl2', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Qu'est-ce que tu n'aimes pas ?" },
    { id: 'gl3', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Quel est ton plat préféré ?" },
    { id: 'gl4', category: 'Les goûts et les loisirs (Tastes & Hobbies)', question: "Quel est ton loisir préféré ?" },

    // La famille et la description physique et psychologique
    { id: 'fam1', category: 'La famille (Family)', question: "As-tu des frères et sœurs ?" },
    { id: 'fam2', category: 'La famille (Family)', question: "Combien de personnes y a-t-il dans ta famille ?" },
    { id: 'fam3', category: 'La famille (Family)', question: "Peux-tu décrire ton ami(e) ?" },

    // Parler des événements passés
    { id: 'pass1', category: 'Parler des événements passés (Past Events)', question: "Qu'est-ce que vous avez fait hier / le week-end dernier ?" },
    { id: 'pass2', category: 'Parler des événements passés (Past Events)', question: "Est-ce que vous avez voyagé récemment ? Avec qui ? et qu'est-ce que vous avez fait pendant ce voyage ?" },
    { id: 'pass3', category: 'Parler des événements passés (Past Events)', question: "Qu'est-ce que vous avez fait pendant vos vacances d'hiver ?" },

    // Parler des projets de l'avenir
    { id: 'fut1', category: "Parler des projets de l’avenir (Future Projects)", question: "Qu'est-ce que vous allez faire ce soir / demain ?" },
    { id: 'fut2', category: "Parler des projets de l’avenir (Future Projects)", question: "Quels sont vos projets pour le week-end ?" },
    { id: 'fut3', category: "Parler des projets de l’avenir (Future Projects)", question: "Qu'est-ce que vous allez faire l'année prochaine ?" },
];

// --- TEF/TCF Exam Practice Topics ---
export const examTopics: ExamTopic[] = [
    {
        id: 'tef_a',
        title: 'L’expression Orale Section A',
        description: "Obtenir des informations. Vous avez 5 minutes pour vous préparer, parler, et poser 10 questions.",
        prepTime: 60,
        speakTime: 240, // 4 mins speaking
        situations: [
            {
                title: "Demander des informations sur un cours, une activité, un événement ou un service",
                titleEn: "Asking for information about a course, activity, event, or service",
                qaList: [
                    { qFr: "Pourriez-vous m’indiquer quel est le contenu du cours ?", qEn: "Could you tell me what the course covers?", aFr: "Bien sûr, le cours aborde les bases ainsi que des aspects plus avancés du sujet.", aEn: "Of course, the course covers both the basics and more advanced aspects of the subject." },
                    { qFr: "J’aimerais savoir à qui s’adresse cette activité.", qEn: "I’d like to know who this activity is intended for.", aFr: "Elle s’adresse aux adultes de tous niveaux, y compris aux débutants.", aEn: "It is intended for adults of all levels, including beginners." },
                    { qFr: "Pourriez-vous me dire en quoi consiste exactement cet événement ?", qEn: "Could you tell me exactly what this event consists of?", aFr: "Il s’agit d’une rencontre conviviale avec des ateliers et des échanges.", aEn: "It is a friendly gathering with workshops and discussions." },
                    { qFr: "Serait-il possible d’obtenir des précisions sur les services proposés ?", qEn: "Would it be possible to get more details about the services offered?", aFr: "Oui, nous proposons plusieurs formules selon les besoins des participants.", aEn: "Yes, we offer several options depending on participants’ needs." },
                    { qFr: "Pourriez-vous m’expliquer comment se déroule l’activité ?", qEn: "Could you explain how the activity works?", aFr: "L’activité commence par une présentation, puis se poursuit en petits groupes.", aEn: "The activity begins with a presentation, then continues in small groups." },
                    { qFr: "J’aimerais connaître le niveau requis pour participer.", qEn: "I’d like to know the required level to participate.", aFr: "Aucun niveau particulier n’est exigé, mais une certaine aisance est préférable.", aEn: "No specific level is required, but some comfort is preferable." },
                    { qFr: "Pourriez-vous me préciser si l’activité est encadrée par des professionnels ?", qEn: "Could you specify whether the activity is led by professionals?", aFr: "Oui, elle est encadrée par une équipe expérimentée.", aEn: "Yes, it is led by an experienced team." },
                    { qFr: "Est-ce que le programme inclut plusieurs options ?", qEn: "Does the program include several options?", aFr: "Oui, plusieurs formules sont disponibles selon les objectifs.", aEn: "Yes, several options are available depending on the objectives." },
                    { qFr: "Pourriez-vous me dire si un essai est possible avant l’inscription ?", qEn: "Could you tell me whether a trial is possible before registration?", aFr: "Oui, une séance d’essai peut être organisée sur demande.", aEn: "Yes, a trial session can be arranged upon request." },
                    { qFr: "J’aimerais recevoir davantage d’informations sur cette offre.", qEn: "I’d like to receive more information about this offer.", aFr: "Avec plaisir, je peux vous transmettre tous les détails par courriel.", aEn: "With pleasure, I can send you all the details by email." }
                ]
            },
            {
                title: "Appeler au sujet d’une annonce, d’une offre d’emploi ou d’un avis",
                titleEn: "Calling about an advertisement, job offer, or announcement",
                qaList: [
                    { qFr: "Bonjour, je vous appelle au sujet de votre annonce. Est-elle toujours d’actualité ?", qEn: "Hello, I’m calling about your advertisement. Is it still current?", aFr: "Oui, l’annonce est toujours valable.", aEn: "Yes, the advertisement is still valid." },
                    { qFr: "Pourriez-vous m’indiquer le profil recherché ?", qEn: "Could you tell me what profile you are looking for?", aFr: "Nous recherchons une personne motivée, autonome et disponible rapidement.", aEn: "We are looking for someone motivated, independent, and available quickly." },
                    { qFr: "J’aimerais savoir si le poste est à temps plein ou à temps partiel.", qEn: "I’d like to know whether the position is full-time or part-time.", aFr: "Le poste est à temps plein, avec possibilité d’aménagements selon le profil.", aEn: "The position is full-time, with possible adjustments depending on the profile." },
                    { qFr: "Pourriez-vous me préciser quelles sont les missions principales ?", qEn: "Could you specify the main duties?", aFr: "Les missions principales concernent l’accueil, le suivi et l’organisation.", aEn: "The main duties involve reception, follow-up, and organization." },
                    { qFr: "Serait-il possible de savoir quel est le délai pour postuler ?", qEn: "Would it be possible to know the deadline to apply?", aFr: "Les candidatures sont acceptées jusqu’à la fin de la semaine.", aEn: "Applications are accepted until the end of the week." },
                    { qFr: "J’aimerais connaître les compétences exigées pour ce poste.", qEn: "I’d like to know the skills required for this position.", aFr: "Une bonne communication et une expérience de base sont demandées.", aEn: "Good communication and basic experience are required." },
                    { qFr: "Pourriez-vous m’indiquer s’il s’agit d’un contrat permanent ?", qEn: "Could you tell me whether this is a permanent contract?", aFr: "Oui, il s’agit d’un contrat permanent après une période d’essai.", aEn: "Yes, it is a permanent contract after a probation period." },
                    { qFr: "Est-ce que la formation est incluse ?", qEn: "Is training included?", aFr: "Oui, une formation initiale est prévue à l’arrivée.", aEn: "Yes, initial training is planned upon arrival." },
                    { qFr: "Pourriez-vous me dire où envoyer mon dossier de candidature ?", qEn: "Could you tell me where to send my application file?", aFr: "Vous pouvez l’envoyer par courriel à l’adresse indiquée dans l’annonce.", aEn: "You can send it by email to the address indicated in the advertisement." },
                    { qFr: "J’aimerais avoir des précisions sur les conditions de travail.", qEn: "I’d like more details about the working conditions.", aFr: "Bien entendu, les horaires et les conditions vous seront expliqués lors de l’entretien.", aEn: "Of course, the hours and conditions will be explained during the interview." }
                ]
            },
            {
                title: "Réserver ou effectuer une inscription",
                titleEn: "Booking or reserving something",
                qaList: [
                    { qFr: "Pourriez-vous me dire si je peux réserver pour samedi ?", qEn: "Could you tell me whether I can book for Saturday?", aFr: "Oui, il reste encore quelques disponibilités pour samedi.", aEn: "Yes, there are still a few openings for Saturday." },
                    { qFr: "J’aimerais réserver une place pour le cours de la semaine prochaine.", qEn: "I’d like to reserve a spot for next week’s class.", aFr: "Très bien, je peux enregistrer votre réservation immédiatement.", aEn: "Very well, I can register your booking immediately." },
                    { qFr: "Serait-il possible de confirmer ma réservation par courriel ?", qEn: "Would it be possible to confirm my reservation by email?", aFr: "Oui, vous recevrez une confirmation dans les prochaines minutes.", aEn: "Yes, you will receive a confirmation within the next few minutes." },
                    { qFr: "Pourriez-vous m’indiquer comment procéder pour réserver ?", qEn: "Could you tell me how to proceed with the booking?", aFr: "Il suffit de remplir le formulaire en ligne ou de nous appeler directement.", aEn: "You just need to fill out the online form or call us directly." },
                    { qFr: "J’aimerais savoir si une avance est nécessaire.", qEn: "I’d like to know whether a deposit is required.", aFr: "Oui, un acompte est demandé pour valider la réservation.", aEn: "Yes, a deposit is required to confirm the booking." },
                    { qFr: "Pourriez-vous me préciser si la réservation peut être modifiée ?", qEn: "Could you specify whether the booking can be changed?", aFr: "Oui, elle peut être modifiée jusqu’à 48 heures avant la date prévue.", aEn: "Yes, it can be changed up to 48 hours before the scheduled date." },
                    { qFr: "Serait-il possible de réserver pour plusieurs personnes ?", qEn: "Would it be possible to book for several people?", aFr: "Oui, nous pouvons réserver pour un groupe sans problème.", aEn: "Yes, we can book for a group without any problem." },
                    { qFr: "J’aimerais connaître les conditions d’annulation.", qEn: "I’d like to know the cancellation conditions.", aFr: "L’annulation est gratuite jusqu’à trois jours avant l’activité.", aEn: "Cancellation is free up to three days before the activity." },
                    { qFr: "Pourriez-vous me dire si la réservation est immédiate ?", qEn: "Could you tell me whether the reservation is immediate?", aFr: "Oui, dès que le paiement est effectué, la réservation est confirmée.", aEn: "Yes, once payment is made, the reservation is confirmed." },
                    { qFr: "J’aimerais réserver au plus vite, si possible.", qEn: "I’d like to book as soon as possible, if possible.", aFr: "Bien sûr, je vais m’en occuper tout de suite.", aEn: "Of course, I’ll take care of it right away." }
                ]
            },
            {
                title: "Demander des précisions pratiques",
                titleEn: "Asking about practical details",
                qaList: [
                    { qFr: "Pourriez-vous m’indiquer les horaires exacts ?", qEn: "Could you tell me the exact times?", aFr: "Les horaires sont de 9 h à 17 h en semaine.", aEn: "The hours are from 9 a.m. to 5 p.m. on weekdays." },
                    { qFr: "J’aimerais savoir quelle est la durée du programme.", qEn: "I’d like to know the duration of the program.", aFr: "Le programme dure trois semaines au total.", aEn: "The program lasts three weeks in total." },
                    { qFr: "Serait-il possible de connaître le tarif total ?", qEn: "Would it be possible to know the total price?", aFr: "Le tarif total s’élève à 250 euros.", aEn: "The total price is 250 euros." },
                    { qFr: "Pourriez-vous me dire où se situe le lieu exact ?", qEn: "Could you tell me where the exact location is?", aFr: "Le lieu se trouve en centre-ville, près de la gare.", aEn: "The venue is located downtown, near the station." },
                    { qFr: "J’aimerais savoir quelles sont les démarches à suivre.", qEn: "I’d like to know what steps need to be followed.", aFr: "Il faut d’abord remplir le formulaire, puis envoyer les pièces demandées.", aEn: "First, you need to fill out the form, then send the required documents." },
                    { qFr: "Pourriez-vous m’indiquer la date limite d’inscription ?", qEn: "Could you tell me the registration deadline?", aFr: "La date limite est fixée au 15 du mois.", aEn: "The deadline is set for the 15th of the month." },
                    { qFr: "Serait-il possible de savoir quels documents sont nécessaires ?", qEn: "Would it be possible to know which documents are needed?", aFr: "Une pièce d’identité et un justificatif de domicile sont nécessaires.", aEn: "An ID and proof of address are required." },
                    { qFr: "J’aimerais connaître le mode de paiement accepté.", qEn: "I’d like to know the accepted payment method.", aFr: "Nous acceptons la carte bancaire, le virement et les espèces.", aEn: "We accept bank card, bank transfer, and cash." },
                    { qFr: "Pourriez-vous me préciser si le matériel est fourni ?", qEn: "Could you specify whether the equipment is provided?", aFr: "Oui, tout le matériel est fourni sur place.", aEn: "Yes, all equipment is provided on site." },
                    { qFr: "J’aimerais savoir si un rendez-vous est nécessaire.", qEn: "I’d like to know whether an appointment is necessary.", aFr: "Oui, il est préférable de prendre rendez-vous à l’avance.", aEn: "Yes, it is preferable to book an appointment in advance." }
                ]
            },
            {
                title: "Parler de la participation",
                titleEn: "Discussing participation",
                qaList: [
                    { qFr: "Pourriez-vous me dire si les enfants peuvent participer ?", qEn: "Could you tell me whether children can participate?", aFr: "Oui, les enfants sont acceptés à partir de six ans.", aEn: "Yes, children are accepted from age six." },
                    { qFr: "J’aimerais savoir si le transport est inclus.", qEn: "I’d like to know whether transport is included.", aFr: "Oui, le transport est inclus dans le prix.", aEn: "Yes, transport is included in the price." },
                    { qFr: "Pourriez-vous me confirmer s’il y a des réductions ?", qEn: "Could you confirm whether there are any discounts?", aFr: "Oui, nous proposons une réduction pour les étudiants et les groupes.", aEn: "Yes, we offer a discount for students and groups." },
                    { qFr: "Serait-il possible de savoir si le billet est valable pour deux personnes ?", qEn: "Would it be possible to know whether the ticket is valid for two people?", aFr: "Non, le billet est valable pour une seule personne.", aEn: "No, the ticket is valid for one person only." },
                    { qFr: "J’aimerais savoir si les repas sont compris.", qEn: "I’d like to know whether meals are included.", aFr: "Oui, les repas sont compris dans certaines formules.", aEn: "Yes, meals are included in certain packages." },
                    { qFr: "Pourriez-vous me dire s’il faut réserver à l’avance pour participer ?", qEn: "Could you tell me whether it is necessary to book in advance to participate?", aFr: "Oui, la réservation préalable est obligatoire.", aEn: "Yes, prior booking is mandatory." },
                    { qFr: "J’aimerais savoir si la participation est ouverte à tous les niveaux.", qEn: "I’d like to know whether participation is open to all levels.", aFr: "Oui, l’activité est accessible à tous, quel que soit le niveau.", aEn: "Yes, the activity is open to everyone, regardless of level." },
                    { qFr: "Pourriez-vous me préciser si une assurance est incluse ?", qEn: "Could you specify whether insurance is included?", aFr: "Oui, une assurance de base est incluse dans la prestation.", aEn: "Yes, basic insurance is included in the service." },
                    { qFr: "Serait-il possible de savoir si les accompagnateurs sont autorisés ?", qEn: "Would it be possible to know whether companions are allowed?", aFr: "Oui, les accompagnateurs sont acceptés sous certaines conditions.", aEn: "Yes, companions are allowed under certain conditions." },
                    { qFr: "J’aimerais confirmer si la participation est gratuite.", qEn: "I’d like to confirm whether participation is free.", aFr: "Oui, l’accès est gratuit pour les participants inscrits.", aEn: "Yes, access is free for registered participants." }
                ]
            }
        ]
    },
    {
        id: 'tef_b',
        title: 'L’expression Orale Section B',
        description: "Convainquez un ami de participer à une activité ou d’acheter quelque chose à partir d’un document. Vous avez 10 minutes pour vous préparer, parler, et poser des questions.",
        prepTime: 60,
        speakTime: 540,
        situations: [
            {
                title: "Concert culturel",
                titleEn: "Cultural concert",
                qaList: [
                    { qFr: "J’ai trouvé une annonce pour un concert de musique classique ce samedi soir. Je pense que ça pourrait vraiment nous plaire.", qEn: "I found an advertisement for a classical music concert this Saturday evening. I think we’d really enjoy it.", aFr: "Ah bon ? Je ne suis pas sûr, je ne vais pas souvent à ce genre d’événement.", aEn: "Really? I’m not sure, I don’t often go to that kind of event." },
                    { qFr: "Justement, c’est une bonne occasion de découvrir quelque chose de différent. Le programme a l’air varié, et l’ambiance sera sans doute très agréable.", qEn: "Exactly, it’s a good opportunity to discover something different. The program looks varied, and the atmosphere will probably be very pleasant.", aFr: "Oui, mais est-ce que ce n’est pas trop formel ?", aEn: "Yes, but isn’t it too formal?" },
                    { qFr: "Pas forcément. Au contraire, ce type de concert permet souvent de passer une soirée calme et enrichissante. En plus, le billet n’est pas très cher.", qEn: "Not necessarily. On the contrary, this type of concert often lets you spend a calm and enriching evening. Also, the ticket isn’t very expensive.", aFr: "C’est vrai que ça peut être intéressant.", aEn: "It’s true that it could be interesting." },
                    { qFr: "Et puis, cela nous permettrait de sortir un peu de la routine. On pourrait même dîner après le concert.", qEn: "And it would also let us get out of our routine a little. We could even have dinner after the concert.", aFr: "Dans ce cas, pourquoi pas ?", aEn: "In that case, why not?" },
                    { qFr: "Parfait, je pense que ce serait une excellente idée pour passer un bon moment ensemble.", qEn: "Perfect, I think it would be an excellent way to spend a good time together.", aFr: "D'accord, allons-y.", aEn: "Alright, let's go." }
                ]
            },
            {
                title: "Cours de langue",
                titleEn: "Language course",
                qaList: [
                    { qFr: "J’ai vu une annonce pour un cours de français intensif. Franchement, je pense que c’est une très bonne opportunité.", qEn: "I saw an ad for an intensive French course. Honestly, I think it’s a very good opportunity.", aFr: "Je ne sais pas… j’ai déjà un emploi du temps assez chargé.", aEn: "I don’t know… I already have a pretty busy schedule." },
                    { qFr: "Je comprends, mais justement, le cours est proposé en soirée, donc il pourrait s’adapter à ton rythme.", qEn: "I understand, but precisely, the course is offered in the evening, so it could fit your schedule.", aFr: "Et est-ce que ce serait vraiment utile ?", aEn: "And would it really be useful?" },
                    { qFr: "Oui, bien sûr. Ça permettrait de progresser rapidement, surtout si tu veux renforcer ton expression orale et gagner en confiance.", qEn: "Yes, of course. It would help you progress quickly, especially if you want to improve your speaking skills and gain confidence.", aFr: "C’est vrai, j’en aurais bien besoin.", aEn: "True, I could really use that." },
                    { qFr: "En plus, le groupe est limité, ce qui veut dire un meilleur suivi et plus d’interaction avec le professeur.", qEn: "Plus, the group is limited, which means better follow-up and more interaction with the teacher.", aFr: "Vu comme ça, ça semble intéressant.", aEn: "Seen that way, it sounds interesting." },
                    { qFr: "Exactement. À mon avis, c’est le bon moment pour s’inscrire.", qEn: "Exactly. In my opinion, it’s the right time to register.", aFr: "D'accord, je vais m'inscrire.", aEn: "Okay, I'll register." }
                ]
            },
            {
                title: "Voyage de fin de semaine",
                titleEn: "Weekend trip",
                qaList: [
                    { qFr: "J’ai trouvé une offre pour un court séjour à Québec ce week-end. Je pense que ça vaut vraiment la peine.", qEn: "I found an offer for a short stay in Quebec City this weekend. I really think it’s worth it.", aFr: "Pourquoi ce voyage en particulier ?", aEn: "Why this trip in particular?" },
                    { qFr: "Parce qu’il combine détente et découverte. L’hôtel est bien situé, et le programme inclut une visite guidée de la ville.", qEn: "Because it combines relaxation and discovery. The hotel is well located, and the program includes a guided city tour.", aFr: "Ça a l’air agréable, mais est-ce que ce n’est pas trop fatigant ?", aEn: "It sounds nice, but isn’t it too tiring?" },
                    { qFr: "Pas du tout. Justement, c’est un séjour de courte durée, donc on peut profiter sans se sentir submergé.", qEn: "Not at all. Precisely, it’s a short stay, so we can enjoy it without feeling overwhelmed.", aFr: "Et le prix ?", aEn: "And the price?" },
                    { qFr: "Il est raisonnable si on considère le transport, l’hébergement et les activités incluses.", qEn: "It’s reasonable if you consider the transportation, accommodation, and included activities.", aFr: "Je vois.", aEn: "I see." },
                    { qFr: "Ce serait aussi une belle occasion de changer d’air et de faire une vraie pause.", qEn: "It would also be a great opportunity to get away and take a real break.", aFr: "Dans ce cas, je suis prêt à y réfléchir sérieusement.", aEn: "In that case, I’m ready to think seriously about it." }
                ]
            },
            {
                title: "Activité sportive",
                titleEn: "Sports activity",
                qaList: [
                    { qFr: "J’ai repéré une annonce pour des cours de badminton en groupe. Je pense que ce serait idéal pour nous.", qEn: "I spotted an ad for group badminton lessons. I think it would be ideal for us.", aFr: "Je ne suis pas très sportif, tu sais.", aEn: "I’m not very sporty, you know." },
                    { qFr: "Justement, ce n’est pas un programme trop exigeant. Le but est surtout de bouger, de se faire plaisir et d’apprendre dans une ambiance détendue.", qEn: "Exactly, it’s not a very demanding program. The goal is mainly to move, have fun, and learn in a relaxed atmosphere.", aFr: "Et quel est l’intérêt ?", aEn: "And what’s the benefit?" },
                    { qFr: "Déjà, c’est bon pour la santé. Ensuite, cela permet de rencontrer d’autres personnes et de créer un petit réseau convivial.", qEn: "First, it’s good for your health. Then, it allows you to meet other people and create a friendly social network.", aFr: "C’est vrai que ça change du quotidien.", aEn: "It’s true that it breaks the routine." },
                    { qFr: "En plus, les séances ont lieu après le travail, donc c’est assez pratique.", qEn: "Also, the sessions take place after work, so it’s quite practical.", aFr: "Oui, ça pourrait fonctionner.", aEn: "Yes, that could work." },
                    { qFr: "Franchement, je pense que c’est une activité à la fois utile et agréable.", qEn: "Honestly, I think it’s both useful and enjoyable.", aFr: "D'accord, essayons.", aEn: "Alright, let's try." }
                ]
            },
            {
                title: "Atelier professionnel",
                titleEn: "Professional workshop",
                qaList: [
                    { qFr: "J’ai vu une annonce pour un atelier sur la gestion du temps au travail. Honnêtement, ça me semble très pertinent.", qEn: "I saw an ad for a workshop on time management at work. Honestly, it seems very relevant to me.", aFr: "Tu crois que ce genre d’atelier est vraiment utile ?", aEn: "Do you think that kind of workshop is really useful?" },
                    { qFr: "Oui, parce qu’il peut aider à mieux organiser ses priorités et à travailler plus efficacement.", qEn: "Yes, because it can help you organize your priorities better and work more efficiently.", aFr: "D’accord, mais est-ce que ce n’est pas trop théorique ?", aEn: "Okay, but isn’t it too theoretical?" },
                    { qFr: "Non, d’après l’annonce, il y aura des exercices concrets et des exemples pratiques.", qEn: "No, according to the announcement, there will be concrete exercises and practical examples.", aFr: "Ça change tout, en effet.", aEn: "That changes everything, indeed." },
                    { qFr: "Et puis, ce type de formation peut être utile dans n’importe quel domaine professionnel.", qEn: "Also, this type of training can be useful in any professional field.", aFr: "C’est vrai.", aEn: "That’s true." },
                    { qFr: "À mon avis, c’est une occasion à ne pas négliger si on veut progresser.", qEn: "In my opinion, it’s an opportunity not to be overlooked if one wants to progress.", aFr: "Je suis d'accord, allons-y.", aEn: "I agree, let's go." }
                ]
            },
            {
                title: "Projet de bénévolat",
                titleEn: "Volunteer project",
                qaList: [
                    { qFr: "J’ai trouvé un appel à bénévoles pour une association locale. Je pense qu’on pourrait vraiment s’y investir.", qEn: "I found a volunteer call from a local association. I think we could really get involved.", aFr: "Je n’ai jamais fait de bénévolat.", aEn: "I’ve never done volunteer work." },
                    { qFr: "Justement, ce serait une bonne première expérience. Le projet semble bien encadré et ouvert aux personnes motivées.", qEn: "Precisely, it would be a good first experience. The project seems well supervised and open to motivated people.", aFr: "Et qu’est-ce qu’on ferait exactement ?", aEn: "And what exactly would we do?" },
                    { qFr: "D’après l’annonce, il s’agirait d’aider à l’organisation d’activités pour des jeunes.", qEn: "According to the announcement, it would involve helping organize activities for young people.", aFr: "Ah, ça peut être intéressant.", aEn: "Ah, that could be interesting." },
                    { qFr: "Oui, parce que cela permet de se rendre utile tout en développant des compétences humaines et relationnelles.", qEn: "Yes, because it allows you to be useful while developing human and interpersonal skills.", aFr: "Je n’avais pas vu les choses comme ça.", aEn: "I hadn’t seen it that way." },
                    { qFr: "En plus, cela donne vraiment du sens à son temps libre.", qEn: "Plus, it really gives meaning to your free time.", aFr: "C'est une bonne initiative.", aEn: "It is a good initiative." }
                ]
            },
            {
                title: "Sortie familiale",
                titleEn: "Family outing",
                qaList: [
                    { qFr: "J’ai vu une activité familiale dans un grand parc éducatif. Je pense que ce serait parfait pour dimanche.", qEn: "I saw a family activity in a large educational park. I think it would be perfect for Sunday.", aFr: "Tu crois que les enfants aimeraient ?", aEn: "Do you think the children would like it?" },
                    { qFr: "Oui, parce qu’il y a des jeux, des ateliers et des espaces adaptés à différents âges.", qEn: "Yes, because there are games, workshops, and spaces suited to different age groups.", aFr: "Et pour nous, ce serait agréable aussi ?", aEn: "And for us, would it be enjoyable too?" },
                    { qFr: "Bien sûr. Ce serait l’occasion de passer du temps ensemble dans un cadre calme et amusant.", qEn: "Of course. It would be a chance to spend time together in a calm and fun setting.", aFr: "C’est vrai, on ne sort pas assez en famille.", aEn: "True, we don’t go out as a family enough." },
                    { qFr: "En plus, l’entrée est abordable et le lieu est facile d’accès.", qEn: "Also, the entrance fee is affordable and the place is easy to get to.", aFr: "Dans ce cas, ça semble être une bonne idée.", aEn: "In that case, it seems like a good idea." },
                    { qFr: "Je pense que ce serait une journée simple, mais vraiment réussie.", qEn: "I think it would be a simple but really successful day.", aFr: "Allons-y ce dimanche.", aEn: "Let's go this Sunday." }
                ]
            },
            {
                title: "Service en ligne",
                titleEn: "Online service",
                qaList: [
                    { qFr: "J’ai découvert une plateforme en ligne pour apprendre le français à ton rythme. Je trouve ça très pratique.", qEn: "I discovered an online platform to learn French at your own pace. I find it very practical.", aFr: "Je préfère quand même les cours en présentiel.", aEn: "I still prefer in-person classes." },
                    { qFr: "Je comprends, mais cette solution offre plus de souplesse. Tu peux travailler quand tu veux, selon ton emploi du temps.", qEn: "I understand, but this solution offers more flexibility. You can work whenever you want, according to your schedule.", aFr: "Et le contenu est sérieux ?", aEn: "And is the content serious?" },
                    { qFr: "Oui, il y a des exercices structurés, des vidéos et un suivi clair des progrès.", qEn: "Yes, there are structured exercises, videos, and clear progress tracking.", aFr: "Ça peut être utile, surtout quand on manque de temps.", aEn: "That can be useful, especially when you’re short on time." },
                    { qFr: "Exactement. En plus, on peut revoir les leçons autant de fois qu’on veut.", qEn: "Exactly. Plus, you can review the lessons as many times as you want.", aFr: "Vu comme ça, c’est intéressant.", aEn: "Seen that way, it’s interesting." },
                    { qFr: "À mon sens, c’est un excellent complément à un apprentissage classique.", qEn: "In my opinion, it’s an excellent complement to traditional learning.", aFr: "Je vais l'essayer.", aEn: "I will try it." }
                ]
            },
            {
                title: "Programme bien-être",
                titleEn: "Wellness program",
                qaList: [
                    { qFr: "J’ai vu une annonce pour une retraite bien-être d’un week-end. Franchement, ça pourrait nous faire du bien.", qEn: "I saw an ad for a weekend wellness retreat. Honestly, it could do us good.", aFr: "Je ne suis pas certain d’avoir besoin de ce genre de programme.", aEn: "I’m not sure I need that kind of program." },
                    { qFr: "Parfois, il ne s’agit pas d’un besoin urgent, mais d’un vrai moment pour souffler.", qEn: "Sometimes it’s not about an urgent need, but about a real moment to breathe.", aFr: "C’est vrai…", aEn: "That’s true…" },
                    { qFr: "Le programme comprend du yoga, de la détente et des activités pour réduire le stress.", qEn: "The program includes yoga, relaxation, and activities to reduce stress.", aFr: "Ça a l’air reposant.", aEn: "It sounds restful." },
                    { qFr: "Oui, et dans notre rythme actuel, ce serait une belle manière de se recentrer.", qEn: "Yes, and with our current pace, it would be a great way to refocus.", aFr: "Je commence à voir l’intérêt.", aEn: "I’m starting to see the appeal." },
                    { qFr: "Je pense que c’est exactement le genre de pause dont on peut tous profiter.", qEn: "I think it’s exactly the kind of break we can all benefit from.", aFr: "C'est une bonne idée.", aEn: "It is a good idea." }
                ]
            },
            {
                title: "Salon de l’emploi",
                titleEn: "Job fair",
                qaList: [
                    { qFr: "J’ai reçu une invitation pour un salon de l’emploi. Je pense qu’on devrait vraiment y aller.", qEn: "I received an invitation to a job fair. I think we should really go.", aFr: "Tu crois qu’on peut y trouver quelque chose d’intéressant ?", aEn: "Do you think we can find something interesting there?" },
                    { qFr: "Oui, parce qu’il y aura plusieurs employeurs et de nombreuses opportunités dans différents secteurs.", qEn: "Yes, because there will be several employers and many opportunities in different sectors.", aFr: "Et si on n’est pas prêt ?", aEn: "And if we’re not ready?" },
                    { qFr: "Justement, ce genre d’événement permet de se renseigner, de poser des questions et de mieux préparer sa recherche.", qEn: "Exactly, this kind of event allows you to gather information, ask questions, and better prepare your job search.", aFr: "C’est vrai que ça peut être utile.", aEn: "It’s true that it can be useful." },
                    { qFr: "En plus, cela permet de faire des contacts directement et de mieux comprendre le marché.", qEn: "Also, it allows you to make direct contacts and better understand the market.", aFr: "Dans ce cas, ça mérite qu’on s’y intéresse.", aEn: "In that case, it deserves our attention." },
                    { qFr: "Absolument. C’est une démarche à la fois stratégique et concrète.", qEn: "Absolutely. It’s both a strategic and practical step.", aFr: "Allons-y alors.", aEn: "Let's go then." }
                ]
            }
        ]
    }
];

// --- Boîte à Outils (Toolbox) ---
export const speakingTips = {
    connectors: [
        { category: "Introduction", phrases: ["Tout d'abord...", "Pour commencer...", "Il est indéniable que..."] },
        { category: "Ajouter une idée (Adding)", phrases: ["De plus...", "En outre...", "Par ailleurs...", "Également..."] },
        { category: "Contraste (Contrast)", phrases: ["Cependant...", "Néanmoins...", "Toutefois...", "Au contraire..."] },
        { category: "Cause / Effet", phrases: ["Car...", "Puisque...", "C'est pourquoi...", "En conséquence..."] },
        { category: "Opinion", phrases: ["À mon avis...", "Selon moi...", "Je pense que...", "Il me semble que..."] },
        { category: "Conclusion", phrases: ["En conclusion...", "Pour résumer...", "Finalement..."] }
    ],
    advice: [
        "Articulez clairement et maintenez un rythme régulier.",
        "Utilisez un vocabulaire varié et des structures grammaticales diverses.",
        "Ne paniquez pas si vous faites une erreur ; corrigez-vous et continuez.",
        "Structurez votre argument : Introduction → Point 1 → Point 2 → Conclusion.",
        "Écoutez attentivement l'examinateur lors des tâches d'interaction."
    ]
};

// --- CEFR Level Structures (A1 → C2) ---
export const levelStructures: LevelStructure[] = [
    {
        level: 'A1',
        intro: 'At A1 level French speaking, use very short, basic sentences to give simple facts on familiar topics.',
        structure: 'Start with 1-2 simple sentences to answer directly. Use basic words like "j\'aime" (I like), "j\'ai" (I have), "je suis" (I am). End with a basic question.',
        exampleQuestion: "Qu'est-ce que tu aimes ?",
        exampleParts: [
            { label: '', text: "J'aime le français. J'ai un frère. Et toi ?" }
        ],
        tips: 'Stick to present tense, repeat key words, practice greetings and family topics daily.'
    },
    {
        level: 'A2',
        intro: 'At A2 level French speaking, use short sentences with one simple reason to describe routines or likes.',
        structure: 'Start with a direct answer. Add 1 detail or reason with "parce que" (because). End by repeating the question.',
        exampleQuestion: "Qu'est-ce que tu aimes ?",
        exampleParts: [
            { label: '', text: "J'aime la boxe. C'est bon pour la santé parce que je cours. Et toi, tu aimes le sport ?" }
        ],
        tips: 'Link 2-3 ideas, use near future ("je vais"), practice daily activities like food or hobbies.'
    },
    {
        level: 'B1',
        intro: 'At B1 level French speaking, give a clear opinion with reasons on personal topics.',
        structure: 'Start with your clear opinion. Give 2 reasons/examples with "parce que" (because) and "par exemple" (for example). End with a short summary and question.',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Je préfère la boxe parce que c'est actif." },
            { label: 'Development', text: "Par exemple, je vais à la salle trois fois par semaine." },
            { label: 'Conclusion', text: "C'est bon pour moi. Et toi ?" }
        ],
        tips: 'Use past tense ("j\'ai fait"), compare with "mais", practice describing experiences.'
    },
    {
        level: 'B2',
        intro: 'At B2 level French speaking, use a clear, organized structure to express opinions fluently on everyday topics.',
        structure: 'Start with a simple introduction to state your main idea, e.g., "À mon avis..." or "Je pense que...". Develop with 2-3 reasons or examples, linking them using connectors like "parce que" (because), "par exemple" (for example), "en plus" (plus), or "d\'un autre côté" (on the other hand). End with a short conclusion that summarizes or asks a question, like "En résumé..." or "Et toi ?".',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Je travaille comme consultant freelance en informatique." },
            { label: 'Development', text: "J'aide les entreprises avec le support technique parce que c'est varié. Par exemple, je prépare des certifications CEH. En plus, je développe des chatbots en Python." },
            { label: 'Conclusion', text: "C'est intéressant pour moi. Et toi ?" }
        ],
        tips: 'Vary vocabulary (e.g., "j\'aime" becomes "je préfère"), use complex sentences with "si" clauses, and practice on personal topics like work or hobbies for natural flow.'
    },
    {
        level: 'C1',
        intro: 'At C1 level French speaking, argue nuanced views on complex topics with structured depth.',
        structure: 'Open with a nuanced introduction like "Il est indéniable que..." (It is undeniable that...). Develop with detailed arguments, counterpoints ("bien que..." - although), using advanced connectors ("par conséquent" - therefore, "néanmoins" - nevertheless). End with an argumentative synthesis.',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Il est indéniable que le freelancing offre flexibilité." },
            { label: 'Development', text: "Bien que exigeant, il permet spécialisation en cybersécurité ; par conséquent, je développe chatbots avancés." },
            { label: 'Conclusion', text: "En définitive, cela forge expertise durable." }
        ],
        tips: 'Master subjunctive, idiomatic phrases, debate abstracts like ethics, self-record for fluency.'
    },
    {
        level: 'C2',
        intro: 'At C2 level French speaking, express near-native ideas spontaneously with rhetorical finesse.',
        structure: 'Launch with an elegant introduction ("Force est de constater que..." - It must be noted that...). Develop fluidly with sophisticated arguments, cultural references, refined connectors ("nonobstant" - notwithstanding). Close with a masterful conclusion of philosophical depth.',
        exampleQuestion: "Qu'est-ce que tu travailles ?",
        exampleParts: [
            { label: 'Introduction', text: "Force est de constater que le consulting en cybersécurité transcende routine." },
            { label: 'Development', text: "Nonobstant défis techniques, il incarne innovation via chatbots Python." },
            { label: 'Conclusion', text: "Ainsi s'esquisse une vocation harmonisant passion et utilité sociétale." }
        ],
        tips: 'Weave irony/styles, discuss philosophy/policy with natives, refine cultural nuances.'
    }
];
