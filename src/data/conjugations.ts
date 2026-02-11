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
    }
];
