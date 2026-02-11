import type { VerbDefinition } from '../types';

export const prendre: VerbDefinition = {
    infinitive: 'prendre',
    translation: 'to take',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'Participle: pris.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'prends' }, { pronoun: 'tu', form: 'prends' }, { pronoun: 'il/elle', form: 'prend' },
                { pronoun: 'nous', form: 'prenons' }, { pronoun: 'vous', form: 'prenez' }, { pronoun: 'ils/elles', form: 'prennent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai pris' }, { pronoun: 'tu', form: 'as pris' }, { pronoun: 'il/elle', form: 'a pris' },
                { pronoun: 'nous', form: 'avons pris' }, { pronoun: 'vous', form: 'avez pris' }, { pronoun: 'ils/elles', form: 'ont pris' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'prenais' }, { pronoun: 'tu', form: 'prenais' }, { pronoun: 'il/elle', form: 'prenait' },
                { pronoun: 'nous', form: 'prenions' }, { pronoun: 'vous', form: 'preniez' }, { pronoun: 'ils/elles', form: 'prenaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'pris' }, { pronoun: 'tu', form: 'pris' }, { pronoun: 'il/elle', form: 'prit' },
                { pronoun: 'nous', form: 'prîmes' }, { pronoun: 'vous', form: 'prîtes' }, { pronoun: 'ils/elles', form: 'prirent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais pris' }, { pronoun: 'tu', form: 'avais pris' }, { pronoun: 'il/elle', form: 'avait pris' },
                { pronoun: 'nous', form: 'avions pris' }, { pronoun: 'vous', form: 'aviez pris' }, { pronoun: 'ils/elles', form: 'avaient pris' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus pris' }, { pronoun: 'tu', form: 'eus pris' }, { pronoun: 'il/elle', form: 'eut pris' },
                { pronoun: 'nous', form: 'eûmes pris' }, { pronoun: 'vous', form: 'eûtes pris' }, { pronoun: 'ils/elles', form: 'eurent pris' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'prendrai' }, { pronoun: 'tu', form: 'prendras' }, { pronoun: 'il/elle', form: 'prendra' },
                { pronoun: 'nous', form: 'prendrons' }, { pronoun: 'vous', form: 'prendrez' }, { pronoun: 'ils/elles', form: 'prendront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai pris' }, { pronoun: 'tu', form: 'auras pris' }, { pronoun: 'il/elle', form: 'aura pris' },
                { pronoun: 'nous', form: 'aurons pris' }, { pronoun: 'vous', form: 'aurez pris' }, { pronoun: 'ils/elles', form: 'auront pris' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais prendre' }, { pronoun: 'tu', form: 'vas prendre' }, { pronoun: 'il/elle', form: 'va prendre' },
                { pronoun: 'nous', form: 'allons prendre' }, { pronoun: 'vous', form: 'allez prendre' }, { pronoun: 'ils/elles', form: 'vont prendre' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'prenne' }, { pronoun: 'que tu', form: 'prennes' }, { pronoun: 'qu\'il/elle', form: 'prenne' },
                { pronoun: 'que nous', form: 'prenions' }, { pronoun: 'que vous', form: 'preniez' }, { pronoun: 'qu\'ils/elles', form: 'prennent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'prisse' }, { pronoun: 'que tu', form: 'prisses' }, { pronoun: 'qu\'il/elle', form: 'prît' },
                { pronoun: 'que nous', form: 'prissions' }, { pronoun: 'que vous', form: 'prissiez' }, { pronoun: 'qu\'ils/elles', form: 'prissent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie pris' }, { pronoun: 'que tu', form: 'aies pris' }, { pronoun: 'qu\'il/elle', form: 'ait pris' },
                { pronoun: 'que nous', form: 'ayons pris' }, { pronoun: 'que vous', form: 'ayez pris' }, { pronoun: 'qu\'ils/elles', form: 'aient pris' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse pris' }, { pronoun: 'que tu', form: 'eusses pris' }, { pronoun: 'qu\'il/elle', form: 'eût pris' },
                { pronoun: 'que nous', form: 'eussions pris' }, { pronoun: 'que vous', form: 'eussiez pris' }, { pronoun: 'qu\'ils/elles', form: 'eussent pris' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'prendrais' }, { pronoun: 'tu', form: 'prendrais' }, { pronoun: 'il/elle', form: 'prendrait' },
                { pronoun: 'nous', form: 'prendrions' }, { pronoun: 'vous', form: 'prendriez' }, { pronoun: 'ils/elles', form: 'prendraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais pris' }, { pronoun: 'tu', form: 'aurais pris' }, { pronoun: 'il/elle', form: 'aurait pris' },
                { pronoun: 'nous', form: 'aurions pris' }, { pronoun: 'vous', form: 'auriez pris' }, { pronoun: 'ils/elles', form: 'auraient pris' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse pris' }, { pronoun: 'tu', form: 'eusses pris' }, { pronoun: 'il/elle', form: 'eût pris' },
                { pronoun: 'nous', form: 'eussions pris' }, { pronoun: 'vous', form: 'eussiez pris' }, { pronoun: 'ils/elles', form: 'eussent pris' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'prends' },
                { pronoun: '(nous)', form: 'prenons' },
                { pronoun: '(vous)', form: 'prenez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'prenant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'pris' },
                { pronoun: 'Fem. Sing.', form: 'prise' },
                { pronoun: 'Masc. Plur.', form: 'pris' },
                { pronoun: 'Fem. Plur.', form: 'prises' }
            ]
        }
    }
};
