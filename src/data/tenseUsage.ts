export interface TenseUsage {
    name: string;
    useFr: string;
    useEn: string;
    structure: string;
    examples: { fr: string; en: string }[];
}

export const tenseUsageData: TenseUsage[] = [
    {
        name: "Présent de l’indicatif",
        useFr: "action en cours, habitude, vérité générale, futur proche parfois.",
        useEn: "actions happening now, habits, general truths, sometimes near future.",
        structure: "sujet + verbe au présent.",
        examples: [
            { fr: "Je parle français.", en: "I speak French / I am speaking French." },
            { fr: "Nous travaillons à Toronto.", en: "We work in Toronto / We are working in Toronto." }
        ]
    },
    {
        name: "Passé composé",
        useFr: "actions terminées, souvent ponctuelles, liées au présent (résultat visible, expérience).",
        useEn: "finished past actions, often like “I did / I have done”.",
        structure: "sujet + auxiliaire (avoir/être au présent) + participe passé.",
        examples: [
            { fr: "J’ai parlé avec lui.", en: "I spoke / I have spoken with him." },
            { fr: "Elle est arrivée en retard.", en: "She arrived late." }
        ]
    },
    {
        name: "Imparfait",
        useFr: "description, habitude, action en cours dans le passé, arrière‑plan.",
        useEn: "“used to”, “was/were doing”, background description.",
        structure: "sujet + verbe à l’imparfait (radical de nous au présent + ais, ais, ait, ions, iez, aient).",
        examples: [
            { fr: "Quand j’étais enfant, je parlais français à la maison.", en: "When I was a child, I used to speak French at home." },
            { fr: "Il pleuvait et je lisais.", en: "It was raining and I was reading." }
        ]
    },
    {
        name: "Plus-que-parfait",
        useFr: "action passée antérieure à une autre action passée.",
        useEn: "equivalent of past perfect: “had done”.",
        structure: "sujet + auxiliaire (avoir/être à l’imparfait) + participe passé.",
        examples: [
            { fr: "J’avais déjà parlé au professeur quand tu es arrivé.", en: "I had already spoken to the teacher when you arrived." },
            { fr: "Elle était partie avant midi.", en: "She had left before noon." }
        ]
    },
    {
        name: "Passé simple",
        useFr: "narration littéraire, surtout à l’écrit (conte, roman, histoire).",
        useEn: "similar time value to simple past “I spoke”, but only in literary French.",
        structure: "sujet + verbe au passé simple (terminaisons propres à chaque groupe).",
        examples: [
            { fr: "Il parla toute la soirée.", en: "He spoke all evening." },
            { fr: "Nous finîmes le travail.", en: "We finished the work." }
        ]
    },
    {
        name: "Passé antérieur",
        useFr: "forme littéraire, exprime l’antériorité par rapport au passé simple.",
        useEn: "literary equivalent of “had done” in a narrative past.",
        structure: "sujet + auxiliaire (avoir/être au passé simple) + participe passé.",
        examples: [
            { fr: "Dès qu’il eut parlé, tout le monde se tut.", en: "As soon as he had spoken, everyone fell silent." },
            { fr: "Lorsqu’ils furent arrivés, la réunion commença.", en: "When they had arrived, the meeting began." }
        ]
    },
    {
        name: "Futur (futur simple)",
        useFr: "futur neutre ou certain, promesses, prévisions.",
        useEn: "“will do”.",
        structure: "sujet + verbe au futur simple (infinitif + ai, as, a, ons, ez, ont).",
        examples: [
            { fr: "Je parlerai avec lui demain.", en: "I will speak with him tomorrow." },
            { fr: "Nous finirons ce projet la semaine prochaine.", en: "We will finish this project next week." }
        ]
    },
    {
        name: "Futur antérieur",
        useFr: "action future achevée avant une autre action future, ou supposition sur un passé récent.",
        useEn: "“will have done”, or “must have done” (guess).",
        structure: "sujet + auxiliaire (avoir/être au futur simple) + participe passé.",
        examples: [
            { fr: "Quand tu arriveras, j’aurai déjà parlé au directeur.", en: "When you arrive, I will already have spoken to the manager." },
            { fr: "Il sera déjà parti.", en: "He will have already left / He must have already left." }
        ]
    },
    {
        name: "Futur proche",
        useFr: "futur immédiat, intention, projet très sûr.",
        useEn: "“going to do”.",
        structure: "sujet + aller au présent + verbe à l’infinitif.",
        examples: [
            { fr: "Je vais parler à mon chef.", en: "I am going to talk to my boss." },
            { fr: "Ils vont partir dans cinq minutes.", en: "They are going to leave in five minutes." }
        ]
    },
    {
        name: "Conditionnel présent",
        useFr: "hypothèse, souhait, politesse, conseil (équivalent de “would”).",
        useEn: "“would do, would like, could”.",
        structure: "sujet + verbe au conditionnel présent (radical du futur + terminaisons de l’imparfait).",
        examples: [
            { fr: "Je parlerais mieux si je pratiquais plus.", en: "I would speak better if I practised more." },
            { fr: "Nous aimerions voyager au Canada.", en: "We would like to travel to Canada." }
        ]
    },
    {
        name: "Conditionnel passé (forme standard)",
        useFr: "hypothèse non réalisée dans le passé, regret, reproche (if + had…, would have…).",
        useEn: "“would have done”.",
        structure: "sujet + auxiliaire (avoir/être au conditionnel présent) + participe passé.",
        examples: [
            { fr: "J’aurais parlé si on m’avait écouté.", en: "I would have spoken if they had listened to me." },
            { fr: "Ils seraient venus s’ils avaient eu le temps.", en: "They would have come if they had had time." }
        ]
    },
    {
        name: "Conditionnel passé – forme alternative (littéraire)",
        useFr: "même valeur que ci‑dessus, mais registre très soutenu, surtout en littérature.",
        useEn: "also “would have done”, but in very formal style.",
        structure: "sujet + auxiliaire (avoir/être au subjonctif imparfait) + participe passé.",
        examples: [
            { fr: "J’eusse parlé si on me l’eût demandé.", en: "I would have spoken if I had been asked." },
            { fr: "Ils fussent partis plus tôt s’ils l’eussent su.", en: "They would have left earlier if they had known." }
        ]
    },
    {
        name: "Subjonctif présent",
        useFr: "après certaines expressions de volonté, nécessité, doute, sentiment, jugement ; action incertaine.",
        useEn: "often “that + subject + verb” after “it’s necessary that, I want you to…”, etc.",
        structure: "que + sujet + verbe au subjonctif présent.",
        examples: [
            { fr: "Il faut que je parle au médecin.", en: "It is necessary that I speak to the doctor / I have to speak to the doctor." },
            { fr: "Je veux que tu finisses ce dossier aujourd’hui.", en: "I want you to finish this file today." }
        ]
    },
    {
        name: "Subjonctif imparfait (littéraire)",
        useFr: "comme le subjonctif présent mais dans un récit au passé, registre littéraire.",
        useEn: "no exact special tense; still “that he spoke/come”, used in literary contexts.",
        structure: "que + sujet + verbe au subjonctif imparfait (parlasse, finisses, vînt, etc.).",
        examples: [
            { fr: "Il souhaitait que je parlasse plus souvent.", en: "He wished that I spoke more often." },
            { fr: "Elle doutait qu’il vînt.", en: "She doubted that he would come." }
        ]
    },
    {
        name: "Subjonctif plus-que-parfait",
        useFr: "exprimer l’antériorité au subjonctif, très littéraire.",
        useEn: "“that I had done”, in a formal/literary register.",
        structure: "que + sujet + auxiliaire (avoir/être au subjonctif imparfait) + participe passé.",
        examples: [
            { fr: "Il aurait voulu que j’eusse parlé plus tôt.", en: "He would have liked me to have spoken earlier." },
            { fr: "Ils craignaient qu’elle fût partie avant leur arrivée.", en: "They feared that she had left before their arrival." }
        ]
    },
    {
        name: "Subjonctif passé",
        useFr: "action déjà accomplie par rapport au verbe principal, mais toujours incertaine/subjective.",
        useEn: "“that I have done / that he has gone”.",
        structure: "que + sujet + auxiliaire (avoir/être au subjonctif présent) + participe passé.",
        examples: [
            { fr: "Je suis content que tu aies réussi l’examen.", en: "I’m happy that you passed the exam." },
            { fr: "Elle regrette qu’ils soient partis si tôt.", en: "She regrets that they left so early." }
        ]
    },
    {
        name: "Impératif présent",
        useFr: "ordre, conseil, interdiction, invitation.",
        useEn: "“Do…, Don’t do…”.",
        structure: "verbe à l’impératif présent, sans sujet (tu, nous, vous).",
        examples: [
            { fr: "Parle plus lentement !", en: "Speak more slowly!" },
            { fr: "Finissons le travail !", en: "Let’s finish the work!" },
            { fr: "Écoutez, s’il vous plaît.", en: "Listen, please." }
        ]
    },
    {
        name: "Participe présent",
        useFr: "exprime la simultanéité, la manière ou la cause, souvent introduit par « en ».",
        useEn: "close to “while doing / by doing” (verb + -ing).",
        structure: "radical de nous au présent + -ant.",
        examples: [
            { fr: "En parlant, il sourit.", en: "While speaking, he smiles." },
            { fr: "En finissant ce projet, tu apprendras beaucoup.", en: "By finishing this project, you will learn a lot." }
        ]
    },
    {
        name: "Participe passé",
        useFr: "forme clé des temps composés, ou adjectif (avec accord parfois).",
        useEn: "past participle (“done, finished, seen”).",
        structure: "forme propre à chaque verbe (parlé, fini, vendu, allé, etc.).",
        examples: [
            { fr: "J’ai fini mon travail.", en: "I have finished my work / I finished my work." },
            { fr: "Les documents signés sont sur la table.", en: "The signed documents are on the table." }
        ]
    }
];
