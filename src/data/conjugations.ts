export interface VerbDefinition {
    infinitive: string;
    translation: string;
    group: 1 | 2 | 3;
    auxiliary: 'avoir' | 'être';
    rules: string[]; // Specific rules e.g., "stem change in future"
    conjugations: {
        [tense: string]: { pronoun: string; form: string }[];
    };
}

export const verbs: VerbDefinition[] = [
    {
        infinitive: 'aimer',
        translation: 'to like/love',
        group: 1,
        auxiliary: 'avoir',
        rules: ['Regular -er verb.'],
        conjugations: {
            'Présent': [
                { pronoun: 'j\'', form: 'aime' },
                { pronoun: 'tu', form: 'aimes' },
                { pronoun: 'il/elle', form: 'aime' },
                { pronoun: 'nous', form: 'aimons' },
                { pronoun: 'vous', form: 'aimez' },
                { pronoun: 'ils/elles', form: 'aiment' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai aimé' },
                { pronoun: 'tu', form: 'as aimé' },
                { pronoun: 'il/elle', form: 'a aimé' },
                { pronoun: 'nous', form: 'avons aimé' },
                { pronoun: 'vous', form: 'avez aimé' },
                { pronoun: 'ils/elles', form: 'ont aimé' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'aimais' },
                { pronoun: 'tu', form: 'aimais' },
                { pronoun: 'il/elle', form: 'aimait' },
                { pronoun: 'nous', form: 'aimions' },
                { pronoun: 'vous', form: 'aimiez' },
                { pronoun: 'ils/elles', form: 'aimaient' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'aimerai' },
                { pronoun: 'tu', form: 'aimeras' },
                { pronoun: 'il/elle', form: 'aimera' },
                { pronoun: 'nous', form: 'aimerons' },
                { pronoun: 'vous', form: 'aimerez' },
                { pronoun: 'ils/elles', form: 'aimeront' }
            ]
        }
    },
    {
        infinitive: 'aller',
        translation: 'to go',
        group: 3,
        auxiliary: 'être',
        rules: ['Irregular verb.', 'Takes "être" in compound tenses.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'vais' },
                { pronoun: 'tu', form: 'vas' },
                { pronoun: 'il/elle', form: 'va' },
                { pronoun: 'nous', form: 'allons' },
                { pronoun: 'vous', form: 'allez' },
                { pronoun: 'ils/elles', form: 'vont' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'suis allé(e)' },
                { pronoun: 'tu', form: 'es allé(e)' },
                { pronoun: 'il/elle', form: 'est allé(e)' },
                { pronoun: 'nous', form: 'sommes allés(es)' },
                { pronoun: 'vous', form: 'êtes allés(es)' },
                { pronoun: 'ils/elles', form: 'sont allés(es)' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'allais' },
                { pronoun: 'tu', form: 'allais' },
                { pronoun: 'il/elle', form: 'allait' },
                { pronoun: 'nous', form: 'allions' },
                { pronoun: 'vous', form: 'alliez' },
                { pronoun: 'ils/elles', form: 'allaient' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'irai' },
                { pronoun: 'tu', form: 'iras' },
                { pronoun: 'il/elle', form: 'ira' },
                { pronoun: 'nous', form: 'irons' },
                { pronoun: 'vous', form: 'irez' },
                { pronoun: 'ils/elles', form: 'iront' }
            ]
        }
    },
    {
        infinitive: 'avoir',
        translation: 'to have',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Auxiliary verb.', 'Very irregular.'],
        conjugations: {
            'Présent': [
                { pronoun: 'j\'', form: 'ai' },
                { pronoun: 'tu', form: 'as' },
                { pronoun: 'il/elle', form: 'a' },
                { pronoun: 'nous', form: 'avons' },
                { pronoun: 'vous', form: 'avez' },
                { pronoun: 'ils/elles', form: 'ont' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai eu' },
                { pronoun: 'tu', form: 'as eu' },
                { pronoun: 'il/elle', form: 'a eu' },
                { pronoun: 'nous', form: 'avons eu' },
                { pronoun: 'vous', form: 'avez eu' },
                { pronoun: 'ils/elles', form: 'ont eu' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'avais' },
                { pronoun: 'tu', form: 'avais' },
                { pronoun: 'il/elle', form: 'avait' },
                { pronoun: 'nous', form: 'avions' },
                { pronoun: 'vous', form: 'aviez' },
                { pronoun: 'ils/elles', form: 'avaient' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'aurai' },
                { pronoun: 'tu', form: 'auras' },
                { pronoun: 'il/elle', form: 'aura' },
                { pronoun: 'nous', form: 'aurons' },
                { pronoun: 'vous', form: 'aurez' },
                { pronoun: 'ils/elles', form: 'auront' }
            ]
        }
    },
    {
        infinitive: 'être',
        translation: 'to be',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Auxiliary verb.', 'Very irregular.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'suis' },
                { pronoun: 'tu', form: 'es' },
                { pronoun: 'il/elle', form: 'est' },
                { pronoun: 'nous', form: 'sommes' },
                { pronoun: 'vous', form: 'êtes' },
                { pronoun: 'ils/elles', form: 'sont' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai été' },
                { pronoun: 'tu', form: 'as été' },
                { pronoun: 'il/elle', form: 'a été' },
                { pronoun: 'nous', form: 'avons été' },
                { pronoun: 'vous', form: 'avez été' },
                { pronoun: 'ils/elles', form: 'ont été' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'étais' },
                { pronoun: 'tu', form: 'étais' },
                { pronoun: 'il/elle', form: 'était' },
                { pronoun: 'nous', form: 'étions' },
                { pronoun: 'vous', form: 'étiez' },
                { pronoun: 'ils/elles', form: 'étaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'serai' },
                { pronoun: 'tu', form: 'seras' },
                { pronoun: 'il/elle', form: 'sera' },
                { pronoun: 'nous', form: 'serons' },
                { pronoun: 'vous', form: 'serez' },
                { pronoun: 'ils/elles', form: 'seront' }
            ]
        }
    },
    {
        infinitive: 'faire',
        translation: 'to do/make',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Used in many expressions.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'fais' },
                { pronoun: 'tu', form: 'fais' },
                { pronoun: 'il/elle', form: 'fait' },
                { pronoun: 'nous', form: 'faisons' },
                { pronoun: 'vous', form: 'faites' },
                { pronoun: 'ils/elles', form: 'font' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai fait' },
                { pronoun: 'tu', form: 'as fait' },
                { pronoun: 'il/elle', form: 'a fait' },
                { pronoun: 'nous', form: 'avons fait' },
                { pronoun: 'vous', form: 'avez fait' },
                { pronoun: 'ils/elles', form: 'ont fait' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'faisais' },
                { pronoun: 'tu', form: 'faisais' },
                { pronoun: 'il/elle', form: 'faisait' },
                { pronoun: 'nous', form: 'faisions' },
                { pronoun: 'vous', form: 'faisiez' },
                { pronoun: 'ils/elles', form: 'faisaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'ferai' },
                { pronoun: 'tu', form: 'feras' },
                { pronoun: 'il/elle', form: 'fera' },
                { pronoun: 'nous', form: 'ferons' },
                { pronoun: 'vous', form: 'ferez' },
                { pronoun: 'ils/elles', form: 'feront' }
            ]
        }
    },
    {
        infinitive: 'pouvoir',
        translation: 'to be able to (can)',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Stem "peux/peu" in present, "pourr" in future.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'peux' },
                { pronoun: 'tu', form: 'peux' },
                { pronoun: 'il/elle', form: 'peut' },
                { pronoun: 'nous', form: 'pouvons' },
                { pronoun: 'vous', form: 'pouvez' },
                { pronoun: 'ils/elles', form: 'peuvent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai pu' },
                { pronoun: 'tu', form: 'as pu' },
                { pronoun: 'il/elle', form: 'a pu' },
                { pronoun: 'nous', form: 'avons pu' },
                { pronoun: 'vous', form: 'avez pu' },
                { pronoun: 'ils/elles', form: 'ont pu' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'pouvais' },
                { pronoun: 'tu', form: 'pouvais' },
                { pronoun: 'il/elle', form: 'pouvait' },
                { pronoun: 'nous', form: 'pouvions' },
                { pronoun: 'vous', form: 'pouviez' },
                { pronoun: 'ils/elles', form: 'pouvaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'pourrai' },
                { pronoun: 'tu', form: 'pourras' },
                { pronoun: 'il/elle', form: 'pourra' },
                { pronoun: 'nous', form: 'pourrons' },
                { pronoun: 'vous', form: 'pourrez' },
                { pronoun: 'ils/elles', form: 'pourront' }
            ]
        }
    },
    {
        infinitive: 'vouloir',
        translation: 'to want',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Stem "veux/veu" in present, "voudr" in future.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'veux' },
                { pronoun: 'tu', form: 'veux' },
                { pronoun: 'il/elle', form: 'veut' },
                { pronoun: 'nous', form: 'voulons' },
                { pronoun: 'vous', form: 'voulez' },
                { pronoun: 'ils/elles', form: 'veulent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai voulu' },
                { pronoun: 'tu', form: 'as voulu' },
                { pronoun: 'il/elle', form: 'a voulu' },
                { pronoun: 'nous', form: 'avons voulu' },
                { pronoun: 'vous', form: 'avez voulu' },
                { pronoun: 'ils/elles', form: 'ont voulu' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'voulais' },
                { pronoun: 'tu', form: 'voulais' },
                { pronoun: 'il/elle', form: 'voulait' },
                { pronoun: 'nous', form: 'voulions' },
                { pronoun: 'vous', form: 'vouliez' },
                { pronoun: 'ils/elles', form: 'voulaint' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'voudrai' },
                { pronoun: 'tu', form: 'voudras' },
                { pronoun: 'il/elle', form: 'voudra' },
                { pronoun: 'nous', form: 'voudrons' },
                { pronoun: 'vous', form: 'voudrez' },
                { pronoun: 'ils/elles', form: 'voudront' }
            ]
        }
    },
    {
        infinitive: 'savoir',
        translation: 'to know',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Participle: su.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'sais' },
                { pronoun: 'tu', form: 'sais' },
                { pronoun: 'il/elle', form: 'sait' },
                { pronoun: 'nous', form: 'savons' },
                { pronoun: 'vous', form: 'savez' },
                { pronoun: 'ils/elles', form: 'savent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai su' },
                { pronoun: 'tu', form: 'as su' },
                { pronoun: 'il/elle', form: 'a su' },
                { pronoun: 'nous', form: 'avons su' },
                { pronoun: 'vous', form: 'avez su' },
                { pronoun: 'ils/elles', form: 'ont su' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'savais' },
                { pronoun: 'tu', form: 'savais' },
                { pronoun: 'il/elle', form: 'savait' },
                { pronoun: 'nous', form: 'savions' },
                { pronoun: 'vous', form: 'saviez' },
                { pronoun: 'ils/elles', form: 'savaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'saurai' },
                { pronoun: 'tu', form: 'sauras' },
                { pronoun: 'il/elle', form: 'saura' },
                { pronoun: 'nous', form: 'saurons' },
                { pronoun: 'vous', form: 'saurez' },
                { pronoun: 'ils/elles', form: 'sauront' }
            ]
        }
    },
    {
        infinitive: 'devoir',
        translation: 'to have to (must)',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Participle: dû.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'dois' },
                { pronoun: 'tu', form: 'dois' },
                { pronoun: 'il/elle', form: 'doit' },
                { pronoun: 'nous', form: 'devons' },
                { pronoun: 'vous', form: 'devez' },
                { pronoun: 'ils/elles', form: 'doivent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai dû' },
                { pronoun: 'tu', form: 'as dû' },
                { pronoun: 'il/elle', form: 'a dû' },
                { pronoun: 'nous', form: 'avons dû' },
                { pronoun: 'vous', form: 'avez dû' },
                { pronoun: 'ils/elles', form: 'ont dû' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'devais' },
                { pronoun: 'tu', form: 'devais' },
                { pronoun: 'il/elle', form: 'devait' },
                { pronoun: 'nous', form: 'devions' },
                { pronoun: 'vous', form: 'deviez' },
                { pronoun: 'ils/elles', form: 'devaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'devrai' },
                { pronoun: 'tu', form: 'devras' },
                { pronoun: 'il/elle', form: 'devra' },
                { pronoun: 'nous', form: 'devrons' },
                { pronoun: 'vous', form: 'devrez' },
                { pronoun: 'ils/elles', form: 'devront' }
            ]
        }
    },
    {
        infinitive: 'prendre',
        translation: 'to take',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Participle: pris.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'prends' },
                { pronoun: 'tu', form: 'prends' },
                { pronoun: 'il/elle', form: 'prend' },
                { pronoun: 'nous', form: 'prenons' },
                { pronoun: 'vous', form: 'prenez' },
                { pronoun: 'ils/elles', form: 'prennent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai pris' },
                { pronoun: 'tu', form: 'as pris' },
                { pronoun: 'il/elle', form: 'a pris' },
                { pronoun: 'nous', form: 'avons pris' },
                { pronoun: 'vous', form: 'avez pris' },
                { pronoun: 'ils/elles', form: 'ont pris' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'prenais' },
                { pronoun: 'tu', form: 'prenais' },
                { pronoun: 'il/elle', form: 'prenait' },
                { pronoun: 'nous', form: 'prenions' },
                { pronoun: 'vous', form: 'preniez' },
                { pronoun: 'ils/elles', form: 'prenaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'prendrai' },
                { pronoun: 'tu', form: 'prendras' },
                { pronoun: 'il/elle', form: 'prendra' },
                { pronoun: 'nous', form: 'prendrons' },
                { pronoun: 'vous', form: 'prendrez' },
                { pronoun: 'ils/elles', form: 'prendront' }
            ]
        }
    },
    {
        infinitive: 'mettre',
        translation: 'to put',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Participle: mis.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'mets' },
                { pronoun: 'tu', form: 'mets' },
                { pronoun: 'il/elle', form: 'met' },
                { pronoun: 'nous', form: 'mettons' },
                { pronoun: 'vous', form: 'mettez' },
                { pronoun: 'ils/elles', form: 'mettent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai mis' },
                { pronoun: 'tu', form: 'as mis' },
                { pronoun: 'il/elle', form: 'a mis' },
                { pronoun: 'nous', form: 'avons mis' },
                { pronoun: 'vous', form: 'avez mis' },
                { pronoun: 'ils/elles', form: 'ont mis' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'mettais' },
                { pronoun: 'tu', form: 'mettais' },
                { pronoun: 'il/elle', form: 'mettait' },
                { pronoun: 'nous', form: 'mettions' },
                { pronoun: 'vous', form: 'mettiez' },
                { pronoun: 'ils/elles', form: 'mettaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'mettrai' },
                { pronoun: 'tu', form: 'mettras' },
                { pronoun: 'il/elle', form: 'mettra' },
                { pronoun: 'nous', form: 'mettrons' },
                { pronoun: 'vous', form: 'mettrez' },
                { pronoun: 'ils/elles', form: 'mettront' }
            ]
        }
    },
    {
        infinitive: 'voir',
        translation: 'to see',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Participle: vu.', 'Future stem: verr-'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'vois' },
                { pronoun: 'tu', form: 'vois' },
                { pronoun: 'il/elle', form: 'voit' },
                { pronoun: 'nous', form: 'voyons' },
                { pronoun: 'vous', form: 'voyez' },
                { pronoun: 'ils/elles', form: 'voient' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai vu' },
                { pronoun: 'tu', form: 'as vu' },
                { pronoun: 'il/elle', form: 'a vu' },
                { pronoun: 'nous', form: 'avons vu' },
                { pronoun: 'vous', form: 'avez vu' },
                { pronoun: 'ils/elles', form: 'ont vu' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'voyais' },
                { pronoun: 'tu', form: 'voyais' },
                { pronoun: 'il/elle', form: 'voyait' },
                { pronoun: 'nous', form: 'voyions' },
                { pronoun: 'vous', form: 'voyiez' },
                { pronoun: 'ils/elles', form: 'voyaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'verrai' },
                { pronoun: 'tu', form: 'verras' },
                { pronoun: 'il/elle', form: 'verra' },
                { pronoun: 'nous', form: 'verrons' },
                { pronoun: 'vous', form: 'verrez' },
                { pronoun: 'ils/elles', form: 'verront' }
            ]
        }
    },
    {
        infinitive: 'dire',
        translation: 'to say',
        group: 3,
        auxiliary: 'avoir',
        rules: ['Irregular.', 'Note "vous dites" in present.', 'Participle: dit.'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'dis' },
                { pronoun: 'tu', form: 'dis' },
                { pronoun: 'il/elle', form: 'dit' },
                { pronoun: 'nous', form: 'disons' },
                { pronoun: 'vous', form: 'dites' },
                { pronoun: 'ils/elles', form: 'disent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai dit' },
                { pronoun: 'tu', form: 'as dit' },
                { pronoun: 'il/elle', form: 'a dit' },
                { pronoun: 'nous', form: 'avons dit' },
                { pronoun: 'vous', form: 'avez dit' },
                { pronoun: 'ils/elles', form: 'ont dit' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'disais' },
                { pronoun: 'tu', form: 'disais' },
                { pronoun: 'il/elle', form: 'disait' },
                { pronoun: 'nous', form: 'disions' },
                { pronoun: 'vous', form: 'disiez' },
                { pronoun: 'ils/elles', form: 'disaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'dirai' },
                { pronoun: 'tu', form: 'diras' },
                { pronoun: 'il/elle', form: 'dira' },
                { pronoun: 'nous', form: 'dirons' },
                { pronoun: 'vous', form: 'direz' },
                { pronoun: 'ils/elles', form: 'diront' }
            ]
        }
    },
    {
        infinitive: 'venir',
        translation: 'to come',
        group: 3,
        auxiliary: 'être',
        rules: ['Irregular.', 'Takes "être".', 'Future stem: viendr-'],
        conjugations: {
            'Présent': [
                { pronoun: 'je', form: 'viens' },
                { pronoun: 'tu', form: 'viens' },
                { pronoun: 'il/elle', form: 'vient' },
                { pronoun: 'nous', form: 'venons' },
                { pronoun: 'vous', form: 'venez' },
                { pronoun: 'ils/elles', form: 'viennent' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'suis venu(e)' },
                { pronoun: 'tu', form: 'es venu(e)' },
                { pronoun: 'il/elle', form: 'est venu(e)' },
                { pronoun: 'nous', form: 'sommes venus(es)' },
                { pronoun: 'vous', form: 'êtes venus(es)' },
                { pronoun: 'ils/elles', form: 'sont venus(es)' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'venais' },
                { pronoun: 'tu', form: 'venais' },
                { pronoun: 'il/elle', form: 'venait' },
                { pronoun: 'nous', form: 'venions' },
                { pronoun: 'vous', form: 'veniez' },
                { pronoun: 'ils/elles', form: 'venaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'viendrai' },
                { pronoun: 'tu', form: 'viendras' },
                { pronoun: 'il/elle', form: 'viendra' },
                { pronoun: 'nous', form: 'viendrons' },
                { pronoun: 'vous', form: 'viendrez' },
                { pronoun: 'ils/elles', form: 'viendront' }
            ]
        }
    }
];
