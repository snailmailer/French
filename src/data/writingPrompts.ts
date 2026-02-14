
export interface WritingPrompt {
    english: string;
    french: string;
}

export interface TenseCategory {
    name: string;
    prompts: WritingPrompt[];
}

export const writingData: TenseCategory[] = [
    {
        name: "Indicatif Présent",
        prompts: [
            { french: "Je décide de réduire ma consommation de sucre.", english: "I decide to cut down on sugar consumption." },
            { french: "Elle comprend parfaitement les phrasal verbs anglais.", english: "She understands English phrasal verbs perfectly." },
            { french: "Nous travaillons ensemble sur un projet rentable.", english: "We work together on a profitable project." },
            { french: "Tu rencontres souvent des défis techniques au bureau.", english: "You often come across technical challenges at work." },
            { french: "Il s'occupe de ses responsabilités quotidiennes.", english: "He looks after his daily responsibilities." },
            { french: "Elles continuent malgré les obstacles.", english: "They carry on despite the obstacles." },
            { french: "Je résous les problèmes rapidement.", english: "I figure out problems quickly." },
            { french: "Vous parlez de préoccupations environnementales.", english: "You talk about environmental concerns." },
            { french: "Nous abandonnons rarement nos objectifs.", english: "We rarely give up on our goals." },
            { french: "Elle remplit les formulaires avec précision.", english: "She fills in forms accurately." }
        ]
    },
    {
        name: "Indicatif Imparfait",
        prompts: [
            { french: "Je décidais de changer de carrière l'année dernière.", english: "I was deciding to change careers last year." },
            { french: "Elle comprenait mieux les règles après l'explication.", english: "She was understanding the rules better after the explanation." },
            { french: "Nous travaillions tard tous les soirs.", english: "We were working late every evening." },
            { french: "Tu rencontrais des amis tous les week-ends.", english: "You were meeting friends every weekend." },
            { french: "Il s'occupait de la maison pendant mes absences.", english: "He was looking after the house during my absences." },
            { french: "Elles continuaient à apprendre malgré la fatigue.", english: "They were continuing to learn despite fatigue." },
            { french: "Je résolvais des énigmes pour m'entraîner.", english: "I was solving puzzles to train." },
            { french: "Vous parliez souvent de voyages aventureux.", english: "You were often talking about adventurous trips." },
            { french: "Nous abandonnions nos efforts trop tôt avant.", english: "We were giving up our efforts too soon before." },
            { french: "Elle remplissait les documents manuellement.", english: "She was filling in documents manually." }
        ]
    },
    {
        name: "Indicatif Passé Simple",
        prompts: [
            { french: "Napoléon décida d'envahir la Russie.", english: "Napoleon decided to invade Russia." },
            { french: "Elle comprit le message immédiatement.", english: "She understood the message immediately." },
            { french: "Nous travaillâmes sans relâche pendant la crise.", english: "We worked relentlessly during the crisis." },
            { french: "Tu rencontras un vieil ami par hasard.", english: "You met an old friend by chance." },
            { french: "Il s'occupa des détails administratifs.", english: "He took care of the administrative details." },
            { french: "Elles continuèrent leur route malgré la pluie.", english: "They continued their journey despite the rain." },
            { french: "Je résolus l'énigme en quelques minutes.", english: "I solved the riddle in a few minutes." },
            { french: "Vous parlâtes avec franchise de vos préoccupations.", english: "You spoke frankly about your concerns." },
            { french: "Nous abandonnâmes le projet faute de fonds.", english: "We abandoned the project due to lack of funds." },
            { french: "Elle remplit le formulaire en un clin d'œil.", english: "She filled in the form in the blink of an eye." }
        ]
    },
    {
        name: "Indicatif Futur Simple",
        prompts: [
            { french: "Je déciderai après réflexion approfondie.", english: "I will decide after thorough reflection." },
            { french: "Elle comprendra vite avec de la pratique.", english: "She will understand quickly with practice." },
            { french: "Nous travaillerons plus efficacement demain.", english: "We will work more efficiently tomorrow." },
            { french: "Tu rencontreras des opportunités inattendues.", english: "You will come across unexpected opportunities." },
            { french: "Il s'occupera de tout pendant ton absence.", english: "He will look after everything during your absence." },
            { french: "Elles continueront jusqu'à la victoire.", english: "They will carry on until victory." },
            { french: "Je résoudrai ce problème technique bientôt.", english: "I will figure out this technical problem soon." },
            { french: "Vous parlerez de vos progrès la semaine prochaine.", english: "You will talk about your progress next week." },
            { french: "Nous abandonnerons cette idée si elle échoue.", english: "We will give up this idea if it fails." },
            { french: "Elle remplira les exigences du poste parfaitement.", english: "She will fill in the job requirements perfectly." }
        ]
    },
    {
        name: "Indicatif Passé Composé",
        prompts: [
            { french: "J'ai décidé de m'inscrire au cours.", english: "I have decided to enroll in the course." },
            { french: "Elle a compris la leçon après correction.", english: "She has understood the lesson after correction." },
            { french: "Nous avons travaillé dur toute la semaine.", english: "We have worked hard all week." },
            { french: "Tu as rencontré des experts hier.", english: "You have met experts yesterday." },
            { french: "Il s'est occupé des enfants cet après-midi.", english: "He has looked after the children this afternoon." },
            { french: "Elles ont continué malgré les difficultés.", english: "They have carried on despite difficulties." },
            { french: "J'ai résolu le bug dans le logiciel.", english: "I have figured out the bug in the software." },
            { french: "Vous avez parlé de vos projets ambitieux.", english: "You have talked about your ambitious projects." },
            { french: "Nous avons abandonné la recherche infructueuse.", english: "We have given up the fruitless search." },
            { french: "Elle a rempli toutes les conditions requises.", english: "She has filled in all required conditions." }
        ]
    },
    {
        name: "Indicatif Plus-que-parfait",
        prompts: [
            { french: "J'avais décidé avant que tu n'arrives.", english: "I had decided before you arrived." },
            { french: "Elle avait compris toute la théorie.", english: "She had understood all the theory." },
            { french: "Nous avions travaillé sur ce dossier pendant des mois.", english: "We had worked on this file for months." },
            { french: "Tu avais rencontré ce professeur l'an dernier.", english: "You had met that professor last year." },
            { french: "Il s'était occupé de la logistique en avance.", english: "He had looked after the logistics in advance." },
            { french: "Elles avaient continué sans se plaindre.", english: "They had carried on without complaining." },
            { french: "J'avais résolu la moitié des exercices.", english: "I had solved half of the exercises." },
            { french: "Vous aviez parlé de cette règle auparavant.", english: "You had talked about this rule before." },
            { french: "Nous avions abandonné trop tôt la première fois.", english: "We had given up too early the first time." },
            { french: "Elle avait rempli le formulaire incomplètement.", english: "She had filled in the form incompletely." }
        ]
    },
    {
        name: "Indicatif Passé Antérieur",
        prompts: [
            { french: "Dès que j'eus décidé, je partis.", english: "As soon as I had decided, I left." },
            { french: "Elle eut compris avant la fin de la réunion.", english: "She had understood before the end of the meeting." },
            { french: "Nous eûmes travaillé toute la nuit avant l'aube.", english: "We had worked all night before dawn." },
            { french: "Tu eus rencontré l'équipe juste avant.", english: "You had met the team just before." },
            { french: "Il se fut occupé des détails avant le départ.", english: "He had looked after the details before departure." },
            { french: "Elles eurent continué sans pause.", english: "They had carried on without a break." },
            { french: "J'eus résolu le mystère rapidement.", english: "I had solved the mystery quickly." },
            { french: "Vous eûtes parlé en privé d'abord.", english: "You had talked privately first." },
            { french: "Nous eûmes abandonné après l'échec.", english: "We had given up after the failure." },
            { french: "Elle eut rempli les papiers nécessaires.", english: "She had filled in the necessary papers." }
        ]
    },
    {
        name: "Indicatif Futur Antérieur",
        prompts: [
            { french: "J'aurai décidé avant demain soir.", english: "I will have decided by tomorrow evening." },
            { french: "Elle aura compris après cette explication.", english: "She will have understood after this explanation." },
            { french: "Nous aurons travaillé 40 heures cette semaine.", english: "We will have worked 40 hours this week." },
            { french: "Tu auras rencontré tous les candidats.", english: "You will have met all the candidates." },
            { french: "Il se sera occupé de la réservation.", english: "He will have looked after the reservation." },
            { french: "Elles auront continué leur entraînement.", english: "They will have carried on their training." },
            { french: "J'aurai résolu tous les problèmes.", english: "I will have figured out all the problems." },
            { french: "Vous aurez parlé aux responsables.", english: "You will have talked to the managers." },
            { french: "Nous aurons abandonné si rien ne change.", english: "We will have given up if nothing changes." },
            { french: "Elle aura rempli son rôle avec succès.", english: "She will have filled in her role successfully." }
        ]
    },
    {
        name: "Conditionnel Présent",
        prompts: [
            { french: "Je déciderais si j'avais plus d'informations.", english: "I would decide if I had more information." },
            { french: "Elle comprendrait avec un meilleur professeur.", english: "She would understand with a better teacher." },
            { french: "Nous travaillerions plus si on nous payait mieux.", english: "We would work more if we were paid better." },
            { french: "Tu rencontrerais des gens intéressants en voyageant.", english: "You would meet interesting people by traveling." },
            { french: "Il s'occuperait des détails s'il pouvait.", english: "He would look after the details if he could." },
            { french: "Elles continueraient sans hésiter.", english: "They would carry on without hesitation." },
            { french: "Je résoudrais le problème autrement.", english: "I would figure out the problem differently." },
            { french: "Vous parleriez plus ouvertement peut-être.", english: "You would talk more openly perhaps." },
            { french: "Nous abandonnerions seulement en dernier recours.", english: "We would give up only as a last resort." },
            { french: "Elle remplirait le poste idéalement.", english: "She would fill in the position ideally." }
        ]
    },
    {
        name: "Conditionnel Passé",
        prompts: [
            { french: "J'aurais décidé autrement avec ces faits.", english: "I would have decided differently with those facts." },
            { french: "Elle aurait compris si on l'avait prévenue.", english: "She would have understood if she had been warned." },
            { french: "Nous aurions travaillé plus efficacement ensemble.", english: "We would have worked more efficiently together." },
            { french: "Tu aurais rencontré l'opportunité parfaite.", english: "You would have met the perfect opportunity." },
            { french: "Il se serait occupé de tout à temps.", english: "He would have looked after everything on time." },
            { french: "Elles auraient continué jusqu'au bout.", english: "They would have carried on to the end." },
            { french: "J'aurais résolu cela sans aide extérieure.", english: "I would have figured it out without outside help." },
            { french: "Vous auriez parlé plus tôt idéalement.", english: "You would have talked earlier ideally." },
            { french: "Nous aurions abandonné trop tard avant.", english: "We would have given up too late before." },
            { french: "Elle aurait rempli toutes les attentes.", english: "She would have filled in all expectations." }
        ]
    },
    {
        name: "Subjonctif Présent",
        prompts: [
            { french: "Il faut que je décide rapidement.", english: "It is necessary that I decide quickly." },
            { french: "Je veux qu'elle comprenne les instructions.", english: "I want her to understand the instructions." },
            { french: "Il est possible que nous travaillions tard.", english: "It is possible that we work late." },
            { french: "Bien que tu rencontres des obstacles, persévère.", english: "Although you meet obstacles, persevere." },
            { french: "J'espère qu'il s'occupe bien de lui.", english: "I hope that he looks after himself well." },
            { french: "Il est essentiel qu'elles continuent l'effort.", english: "It is essential that they carry on the effort." },
            { french: "Avant que je résolve le problème, attends.", english: "Before I figure out the problem, wait." },
            { french: "Malgré que vous parliez anglais couramment.", english: "Although you speak English fluently." },
            { french: "Il faut que nous abandonnions cette idée folle.", english: "We must give up this crazy idea." },
            { french: "Je doute qu'elle remplisse les critères.", english: "I doubt that she fills in the criteria." }
        ]
    },
    {
        name: "Subjonctif Passé",
        prompts: [
            { french: "Il faut que j'aie décidé avant midi.", english: "It is necessary that I have decided by noon." },
            { french: "Je suis content qu'elle ait compris enfin.", english: "I am glad that she has understood finally." },
            { french: "Il est probable que nous ayons travaillé assez.", english: "It is probable that we have worked enough." },
            { french: "Bien qu'il ait rencontré des succès, il doute.", english: "Although he has met successes, he doubts." },
            { french: "J'espère qu'il se soit occupé des détails.", english: "I hope that he has looked after the details." },
            { french: "Il est certain qu'elles aient continué bravement.", english: "It is certain that they have carried on bravely." },
            { french: "Avant que j'aie résolu cela, patience.", english: "Before I have figured it out, patience." },
            { french: "Malgré que vous ayez parlé clairement.", english: "Although you have spoken clearly." },
            { french: "Il faut que nous ayons abandonné les illusions.", english: "We must have given up the illusions." },
            { french: "Je crains qu'elle ait rempli le formulaire mal.", english: "I fear that she has filled in the form wrongly." }
        ]
    },
    {
        name: "Subjonctif Imparfait",
        prompts: [
            { french: "Bien qu'il décidât tardivement, il agit.", english: "Although he decided late, he acted." },
            { french: "Il fallait qu'elle comprît la gravité.", english: "It was necessary that she understood the gravity." },
            { french: "Il était temps que nous travaillassions sérieusement.", english: "It was time that we worked seriously." },
            { french: "S'il rencontrât des amis, il serait heureux.", english: "If he met friends, he would be happy." },
            { french: "Il était bon qu'il s'occupât de sa santé.", english: "It was good that he looked after his health." },
            { french: "Il importait qu'elles continuassent l'œuvre.", english: "It mattered that they carried on the work." },
            { french: "Avant qu'il résolût l'énigme, suspense.", english: "Before he solved the riddle, suspense." },
            { french: "Quoique vous parlassiez bien, pratiquez.", english: "Although you spoke well, practice." },
            { french: "Il convenait que nous abandonnassions l'idée.", english: "It was fitting that we gave up the idea." },
            { french: "Il semblait qu'elle remplît parfaitement le rôle.", english: "It seemed that she filled in the role perfectly." }
        ]
    },
    {
        name: "Subjonctif Plus-que-parfait",
        prompts: [
            { french: "Bien qu'il eût décidé tôt, il hésita.", english: "Although he had decided early, he hesitated." },
            { french: "Il était regrettable qu'elle eût compris trop tard.", english: "It was regrettable that she had understood too late." },
            { french: "Il était essentiel que nous eussions travaillé plus.", english: "It was essential that we had worked more." },
            { french: "S'il eût rencontré l'aide, succès assuré.", english: "If he had met the help, success assured." },
            { french: "Il était sage qu'il se fût occupé des priorités.", english: "It was wise that he had looked after the priorities." },
            { french: "Il importait qu'elles eussent continué malgré tout.", english: "It mattered that they had carried on despite everything." },
            { french: "Avant qu'il eût résolu le conflit, trêve.", english: "Before he had solved the conflict, truce." },
            { french: "Quoique vous eussiez parlé franchement.", english: "Although you had spoken frankly." },
            { french: "Il convenait que nous eussions abandonné avant.", english: "It was fitting that we had given up before." },
            { french: "Il paraissait qu'elle eût rempli sa mission.", english: "It appeared that she had filled in her mission." }
        ]
    },
    {
        name: "Impératif Présent",
        prompts: [
            { french: "Décide-toi vite !", english: "Decide quickly!" },
            { french: "Comprends-la bien !", english: "Understand it well!" },
            { french: "Travaillez ensemble !", english: "Work together!" },
            { french: "Rencontre-nous ce soir !", english: "Meet us tonight!" },
            { french: "Occupe-toi de ça !", english: "Look after that!" },
            { french: "Continuez sans peur !", english: "Carry on without fear!" },
            { french: "Résous le problème !", english: "Figure out the problem!" },
            { french: "Parlez ouvertement !", english: "Talk openly!" },
            { french: "Abandonne cette idée !", english: "Give up this idea!" },
            { french: "Remplis le formulaire !", english: "Fill in the form!" }
        ]
    },
    {
        name: "Impératif Passé",
        prompts: [
            { french: "Aie décidé avant de partir !", english: "Have decided before leaving!" },
            { french: "Aie compris les règles !", english: "Have understood the rules!" },
            { french: "Ayez travaillé dur !", english: "Have worked hard!" },
            { french: "Aie rencontré l'équipe !", english: "Have met the team!" },
            { french: "Sois occupé des détails !", english: "Have looked after the details!" },
            { french: "Ayez continué l'effort !", english: "Have carried on the effort!" },
            { french: "Aie résolu les énigmes !", english: "Have figured out the puzzles!" },
            { french: "Ayez parlé clairement !", english: "Have spoken clearly!" },
            { french: "Ayez abandonné les illusions !", english: "Have given up the illusions!" },
            { french: "Aie rempli les conditions !", english: "Have filled in the conditions!" }
        ]
    },
    {
        name: "Infinitif Présent",
        prompts: [
            { french: "Décider est difficile parfois.", english: "To decide is sometimes difficult." },
            { french: "Comprendre demande du temps.", english: "To understand takes time." },
            { french: "Travailler dur paie.", english: "To work hard pays off." },
            { french: "Rencontrer des gens nouveaux enrichit.", english: "To meet new people enriches." },
            { french: "S'occuper de sa santé prévient les maladies.", english: "To look after one's health prevents illnesses." },
            { french: "Continuer malgré tout gagne.", english: "To carry on despite everything wins." },
            { french: "Résoudre des problèmes développe l'esprit.", english: "To figure out problems develops the mind." },
            { french: "Parler franchement libère.", english: "To talk frankly frees." },
            { french: "Abandonner trop tôt regrette.", english: "To give up too early regrets." },
            { french: "Remplir ses devoirs satisfait.", english: "To fill in one's duties satisfies." }
        ]
    },
    {
        name: "Infinitif Passé",
        prompts: [
            { french: "Avoir décidé tôt était sage.", english: "To have decided early was wise." },
            { french: "Avoir compris à temps sauve.", english: "To have understood in time saves." },
            { french: "Avoir travaillé ensemble réussit.", english: "To have worked together succeeds." },
            { french: "Avoir rencontré l'amour change tout.", english: "To have met love changes everything." },
            { french: "S'être occupé bien récompense.", english: "To have looked after well rewards." },
            { french: "Avoir continué triomphe.", english: "To have carried on triumphs." },
            { french: "Avoir résolu vite impressionne.", english: "To have figured out quickly impresses." },
            { french: "Avoir parlé honnêtement guérit.", english: "To have talked honestly heals." },
            { french: "Avoir abandonné sagement évite les pertes.", english: "To have given up wisely avoids losses." },
            { french: "Avoir rempli parfaitement excelle.", english: "To have filled in perfectly excels." }
        ]
    },
    {
        name: "Participe Présent",
        prompts: [
            { french: "En décidant vite, on gagne du temps.", english: "By deciding quickly, one saves time." },
            { french: "Comprenant bien, elle progresse.", english: "Understanding well, she progresses." },
            { french: "Travaillant dur, il réussit.", english: "Working hard, he succeeds." },
            { french: "Rencontrant des défis, persévère.", english: "Meeting challenges, persevere." },
            { french: "S'occupant des autres, sois généreux.", english: "Looking after others, be generous." },
            { french: "Continuant malgré la pluie, avance.", english: "Carrying on despite rain, advance." },
            { french: "Résolvant les énigmes, amuse-toi.", english: "Figuring out riddles, have fun." },
            { french: "Parlant couramment, impressionne.", english: "Speaking fluently, impress." },
            { french: "Abandonnant tôt, regrette.", english: "Giving up early, regret." },
            { french: "Remplissant tout, sois complet.", english: "Filling in everything, be complete." }
        ]
    },
    {
        name: "Participe Passé (Composé)",
        prompts: [
            { french: "La décision prise, agis.", english: "The decision having been made, act." },
            { french: "La leçon comprise, applique-la.", english: "The lesson having been understood, apply it." },
            { french: "Le travail fait, repose-toi.", english: "The work having been done, rest." },
            { french: "Les amis rencontrés, partage.", english: "The friends having been met, share." },
            { french: "Les enfants occupés, profite.", english: "The children having been looked after, enjoy." },
            { french: "L'effort continué, gagne.", english: "The effort having been carried on, win." },
            { french: "Le problème résolu, célèbre.", english: "The problem having been figured out, celebrate." },
            { french: "Les mots parlés, écoute.", english: "The words having been spoken, listen." },
            { french: "L'idea abandonnée, avance.", english: "The idea having been given up, move on." },
            { french: "Le formulaire rempli, soumets-le.", english: "The form having been filled in, submit it." }
        ]
    },
    {
        name: "Gérondif Présent",
        prompts: [
            { french: "En décidant seul, il assume.", english: "By deciding alone, he takes responsibility." },
            { french: "En comprenant vite, elle excelle.", english: "By understanding quickly, she excels." },
            { french: "En travaillant tard, termine.", english: "By working late, finish." },
            { french: "En rencontrant des pros, apprends.", english: "By meeting pros, learn." },
            { french: "En s'occupant bien, prospère.", english: "By looking after well, prosper." },
            { french: "En continuant fort, triomphe.", english: "By carrying on strongly, triumph." },
            { french: "En résolvant logiquement, réussis.", english: "By figuring out logically, succeed." },
            { french: "En parlant clair, convaincs.", english: "By talking clearly, convince." },
            { french: "En abandonnant malin, économise.", english: "By giving up smartly, save." },
            { french: "En remplissant précis, impressionne.", english: "By filling in precisely, impress." }
        ]
    },
    {
        name: "Gérondif Passé",
        prompts: [
            { french: "Après avoir décidé, exécute.", english: "After having decided, execute." },
            { french: "Après avoir compris, enseigne.", english: "After having understood, teach." },
            { french: "Après avoir travaillé, évalue.", english: "After having worked, evaluate." },
            { french: "Après avoir rencontré, contacte.", english: "After having met, contact." },
            { french: "Après s'être occupé, repose-toi.", english: "After having looked after, rest." },
            { french: "Après avoir continué, récolte.", english: "After having carried on, harvest." },
            { french: "Après avoir résolu, partage.", english: "After having figured out, share." },
            { french: "Après avoir parlé, écoute.", english: "After having talked, listen." },
            { french: "Après avoir abandonné, recommence.", english: "After having given up, start over." },
            { french: "Après avoir rempli, vérifie.", english: "After having filled in, check." }
        ]
    }
];
