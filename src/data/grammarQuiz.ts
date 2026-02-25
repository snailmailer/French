export type GrammarQuizLevel = {
    id: string;
    level: string;
    instructionFr: string;
    instructionEn: string;
    sentences: {
        textParts: string[]; // text before and after the blank
        answer: string;
        verbHint: string;
    }[];
    draggables: string[];
};

export const grammarQuizData: GrammarQuizLevel[] = [
    {
        id: 'A1',
        level: 'A1 – Débutant (présent très fréquent)',
        instructionEn: 'Drag the correct present-tense form of the verb into each blank.',
        instructionFr: 'Fais glisser la bonne forme du verbe au présent dans chaque trou.',
        sentences: [
            { textParts: ['Léa ', ' le petit déjeuner dans la cuisine.'], answer: 'fait', verbHint: 'faire' },
            { textParts: ['Sa mère ', ' du café.'], answer: 'veut', verbHint: 'vouloir' },
            { textParts: ['Mimi, le chat, ', ' près de sa gamelle.'], answer: 'est', verbHint: 'être' },
            { textParts: ['Le matin, Léa ', ' toujours un café.'], answer: 'boit', verbHint: 'boire' },
            { textParts: ['Elles ', ' ensemble à la table.'], answer: 's\'asseyent', verbHint: 's\'asseoir' },
            { textParts: ['Après le petit déjeuner, Léa ', ' au travail.'], answer: 'va', verbHint: 'aller' },
            { textParts: ['Elle ', ' souvent en bus.'], answer: 'prend', verbHint: 'prendre' },
            { textParts: ['Le chat ', ' longtemps dans la journée.'], answer: 'dort', verbHint: 'dormir' },
            { textParts: ['La mère de Léa ', ' la télévision dans le salon.'], answer: 'regarde', verbHint: 'regarder' },
            { textParts: ['Elles ', ' un bon matin.'], answer: 'passent', verbHint: 'passer' }
        ],
        draggables: ['est', 'a', 'fait', 'va', 'veut', 'mange', 'boit', 'regarde', 'attend', 'dort', 'passent', 'prend', 's\'asseyent', 'prenons', 'finis']
    },
    {
        id: 'A2',
        level: 'A2 – Élémentaire (présent + futur proche)',
        instructionEn: 'Match the correct form of the verb (présent or futur proche) to each sentence.',
        instructionFr: 'Associe la bonne forme du verbe (présent ou futur proche) à chaque phrase.',
        sentences: [
            { textParts: ['Ce week-end, Karim ', ' à la montagne avec ses amis.'], answer: 'va', verbHint: 'aller' },
            { textParts: ['Ils ', ' le train samedi matin.'], answer: 'prennent', verbHint: 'prendre' },
            { textParts: ['Il ', ' très froid, mais il y aura du soleil.'], answer: 'fait', verbHint: 'faire' },
            { textParts: ['Le soir, ils ', ' une raclette dans un petit chalet.'], answer: 'vont manger', verbHint: 'manger' },
            { textParts: ['Dimanche, ils ', ' tôt pour rentrer chez eux.'], answer: 'partent', verbHint: 'partir' },
            { textParts: ['Lila ', ' les photos sur son téléphone.'], answer: 'voit', verbHint: 'voir' },
            { textParts: ['Peut-être qu\'il ', ' un peu dans la nuit.'], answer: 'va neiger', verbHint: 'neiger' },
            { textParts: ['Karim ', ' rester plus longtemps, mais il doit travailler lundi.'], answer: 'veut', verbHint: 'vouloir' },
            { textParts: ['Ses amis ', ' très contents du week-end.'], answer: 'sont', verbHint: 'être' },
            { textParts: ['L\'année prochaine, ils ', ' encore un voyage ensemble.'], answer: 'vont faire', verbHint: 'faire' }
        ],
        draggables: ['va', 'prennent', 'fait', 'vont faire', 'vont manger', 'partent', 'voit', 'va neiger', 'veut', 'sont', 'vont', 'faisons']
    },
    {
        id: 'B1',
        level: 'B1 – Intermédiaire (présent, passé composé, expression du temps)',
        instructionEn: 'Drag the correct conjugated form into each gap. Use present or passé composé as needed.',
        instructionFr: 'Complète avec la bonne forme au présent ou au passé composé.',
        sentences: [
            { textParts: ['Emma ', ' un peu nerveuse ce matin.'], answer: 'est', verbHint: 'être – présent' },
            { textParts: ['Elle ', ' son nouveau travail dans une grande entreprise.'], answer: 'a commencé', verbHint: 'commencer – passé composé' },
            { textParts: ['Julien ', ' Emma dans le couloir et lui parle.'], answer: 'a rencontré', verbHint: 'rencontrer – passé composé' },
            { textParts: ['Il lui ', ' son bureau et l\'équipe.'], answer: 'a montré', verbHint: 'montrer – passé composé' },
            { textParts: ['Le chef ', ' les projets du service communication.'], answer: 'a expliqué', verbHint: 'expliquer – passé composé' },
            { textParts: ['Avant, Emma ', ' deux ans dans une petite agence.'], answer: 'a travaillé', verbHint: 'travailler – passé composé' },
            { textParts: ['Aujourd\'hui, ses collègues l\'', ' à s\'intégrer.'], answer: 'aident', verbHint: 'aider – présent' },
            { textParts: ['À la fin de la journée, elle ', ' plus à l\'aise.'], answer: 'se sent', verbHint: 'se sentir – présent' },
            { textParts: ['Ils ', ' un nouveau projet de campagne.'], answer: 'préparent', verbHint: 'préparer – présent' },
            { textParts: ['Emma ', ' envie de revenir demain.'], answer: 'a', verbHint: 'avoir – présent' }
        ],
        draggables: ['est', 'a commencé', 'a rencontré', 'a montré', 'a expliqué', 'a travaillé', 'aident', 'se sent', 'préparent', 'a', 'sommes', 'ont aidé']
    },
    {
        id: 'B2',
        level: 'B2 – Avancé (passé composé vs imparfait, durée, habitude)',
        instructionEn: 'Choose the correct past tense form (passé composé or imparfait) and drag it into each blank.',
        instructionFr: 'Choisis la bonne forme au passé (passé composé ou imparfait) et complète les phrases.',
        sentences: [
            { textParts: ['Sophie ', ' deux mois dans une entreprise de marketing digital à Lisbonne.'], answer: 'a travaillé', verbHint: 'travailler – passé composé' },
            { textParts: ['Le bureau ', ' petit, mais l\'ambiance '], answer: 'était', verbHint: 'être – imparfait' }, // Special handling for double blank if needed, but we'll adapt to split sentences
            { textParts: ['...l\'ambiance ', ' chaleureuse.'], answer: 'était', verbHint: 'être – imparfait' },
            { textParts: ['Elle ', ' la ville : les rues colorées et la musique dans les rues.'], answer: 'adorait', verbHint: 'adorer – imparfait' },
            { textParts: ['Le week-end, elle ', ' souvent dans les quartiers historiques.'], answer: 'marchait', verbHint: 'marcher – imparfait' },
            { textParts: ['Elle ', ' aussi des cours de portugais le soir.'], answer: 'suivait', verbHint: 'suivre – imparfait' },
            { textParts: ['Pendant son stage, elle ', ' beaucoup sur la culture portugaise.'], answer: 'a appris', verbHint: 'apprendre – passé composé' },
            { textParts: ['Elle ', ' souvent avec ses collègues après le travail.'], answer: 'sortait', verbHint: 'sortir – imparfait' },
            { textParts: ['Avant ce séjour, elle n\'', ' jamais vécu à l\'étranger.'], answer: 'avait', verbHint: 'avoir – plus-que-parfait' },
            { textParts: ['Cette expérience ', ' sa vision de l\'avenir.'], answer: 'a changé', verbHint: 'changer – passé composé' },
            { textParts: ['Maintenant, elle ', ' travailler de nouveau à l\'étranger.'], answer: 'veut', verbHint: 'vouloir – présent' }
        ],
        draggables: ['a travaillé', 'était', 'adorait', 'marchait', 'suivait', 'a appris', 'sortait', 'avait', 'a changé', 'veut', 'est', 'travaillait', 'a sorti']
    },
    {
        id: 'C1',
        level: 'C1 – Autonome (subjonctif, contraste, opinion)',
        instructionEn: 'Complete with the correct form (présent, passé composé, futur proche, subjonctif présent selon le sens).',
        instructionFr: 'Complète avec la forme correcte des verbes (présent, passé composé ou subjonctif).',
        sentences: [
            { textParts: ['Camille ', ' dix ans dans la même entreprise avant de partir.'], answer: 'a travaillé', verbHint: 'travailler – passé composé' },
            { textParts: ['Un jour, elle ', ' de quitter son poste.'], answer: 'a décidé', verbHint: 'décider – passé composé' },
            { textParts: ['Elle ne ', ' plus à sa place, elle se sentait bloquée.'], answer: 'se sentait', verbHint: 'se sentir – imparfait' },
            { textParts: ['Maintenant, elle ', ' créer sa propre start-up.'], answer: 'veut', verbHint: 'vouloir – présent' },
            { textParts: ['Elle veut que son travail ', ' vraiment du sens.'], answer: 'ait', verbHint: 'avoir – subjonctif' },
            { textParts: ['Ses amis pensent qu\'elle ', ' beaucoup de courage.'], answer: 'a', verbHint: 'avoir – présent' },
            { textParts: ['Élise préfère qu\'elle ', ' prudente, mais elle la soutient.'], answer: 'soit', verbHint: 'être – subjonctif' },
            { textParts: ['Camille ', ' prendre un risque calculé.'], answer: 'préfère', verbHint: 'préférer – présent' },
            { textParts: ['Elle dit que le vrai risque, c\'', ' de ne rien tenter.'], answer: 'est', verbHint: 'être – présent' },
            { textParts: ['Ce choix ', ' sa vie, d\'une façon ou d\'une autre.'], answer: 'changera', verbHint: 'changer – futur simple' }
        ],
        draggables: ['a travaillé', 'avait travaillé', 'a décidé', 'se sentait', 'veut', 'ait', 'a', 'soit', 'préfère', 'est', 'changera', 'aie']
    },
    {
        id: 'C2',
        level: 'C2 – Maîtrise (subjonctif, conditionnel, discours abstrait)',
        instructionEn: 'Drag the correct advanced form (subjonctif, conditionnel, présent, passé composé) into each sentence.',
        instructionFr: 'Fais glisser la forme verbale correcte (subjonctif, conditionnel, etc.) dans chaque phrase.',
        sentences: [
            { textParts: ['L\'écrivain ', ' que les mots façonnent notre vision du monde.'], answer: 'croit', verbHint: 'croire – présent' },
            { textParts: ['Il est essentiel que la littérature ', ' une place dans la société.'], answer: 'ait', verbHint: 'avoir – subjonctif' },
            { textParts: ['Selon lui, un texte ', ' les consciences.'], answer: 'éveille', verbHint: 'éveiller – présent' },
            { textParts: ['Marc lui demande si la littérature ', ' encore changer la société.'], answer: 'peut', verbHint: 'pouvoir – présent' },
            { textParts: ['L\'écrivain répond que les livres ne ', ' peut-être pas le monde, mais qu\'ils changent les esprits.'], answer: 'changeraient', verbHint: 'changer – conditionnel' },
            { textParts: ['À l\'ère du numérique, il ', ' que la réflexion est plus nécessaire que jamais.'], answer: 'semble', verbHint: 'sembler – présent' },
            { textParts: ['Il veut que les lecteurs ', ' le temps de réfléchir.'], answer: 'prennent', verbHint: 'prendre – subjonctif' },
            { textParts: ['La journaliste lui ', ' que son discours a profondément touché le public.'], answer: 'a dit', verbHint: 'dire – passé composé' },
            { textParts: ['Pour lui, les mots ', ' encore la liberté et la dignité humaines.'], answer: 'défendent', verbHint: 'défendre – présent' },
            { textParts: ['Il est possible que son message ', ' certains jeunes à écrire eux-mêmes.'], answer: 'inspire', verbHint: 'inspirer – subjonctif' }
        ],
        draggables: ['croit', 'façonnent', 'ait', 'éveille', 'remet', 'peut', 'changeraient', 'semble', 'prennent', 'a dit', 'défendent', 'inspire', 'aie', 'change']
    }
];
