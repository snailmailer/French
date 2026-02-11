import type { VerbDefinition } from '../types';

export const pouvoir: VerbDefinition = {
    infinitive: 'pouvoir',
    translation: 'to be able to (can)',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'No imperative mood.', 'Stem "peux/peu" in present, "pourr" in future.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'peux' }, { pronoun: 'tu', form: 'peux' }, { pronoun: 'il/elle', form: 'peut' },
                { pronoun: 'nous', form: 'pouvons' }, { pronoun: 'vous', form: 'pouvez' }, { pronoun: 'ils/elles', form: 'peuvent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai pu' }, { pronoun: 'tu', form: 'as pu' }, { pronoun: 'il/elle', form: 'a pu' },
                { pronoun: 'nous', form: 'avons pu' }, { pronoun: 'vous', form: 'avez pu' }, { pronoun: 'ils/elles', form: 'ont pu' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'pouvais' }, { pronoun: 'tu', form: 'pouvais' }, { pronoun: 'il/elle', form: 'pouvait' },
                { pronoun: 'nous', form: 'pouvions' }, { pronoun: 'vous', form: 'pouviez' }, { pronoun: 'ils/elles', form: 'pouvaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'pus' }, { pronoun: 'tu', form: 'pus' }, { pronoun: 'il/elle', form: 'put' },
                { pronoun: 'nous', form: 'pûmes' }, { pronoun: 'vous', form: 'pûtes' }, { pronoun: 'ils/elles', form: 'purent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais pu' }, { pronoun: 'tu', form: 'avais pu' }, { pronoun: 'il/elle', form: 'avait pu' },
                { pronoun: 'nous', form: 'avions pu' }, { pronoun: 'vous', form: 'aviez pu' }, { pronoun: 'ils/elles', form: 'avaient pu' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus pu' }, { pronoun: 'tu', form: 'eus pu' }, { pronoun: 'il/elle', form: 'eut pu' },
                { pronoun: 'nous', form: 'eûmes pu' }, { pronoun: 'vous', form: 'eûtes pu' }, { pronoun: 'ils/elles', form: 'eurent pu' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'pourrai' }, { pronoun: 'tu', form: 'pourras' }, { pronoun: 'il/elle', form: 'pourra' },
                { pronoun: 'nous', form: 'pourrons' }, { pronoun: 'vous', form: 'pourrez' }, { pronoun: 'ils/elles', form: 'pourront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai pu' }, { pronoun: 'tu', form: 'auras pu' }, { pronoun: 'il/elle', form: 'aura pu' },
                { pronoun: 'nous', form: 'aurons pu' }, { pronoun: 'vous', form: 'aurez pu' }, { pronoun: 'ils/elles', form: 'auront pu' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais pouvoir' }, { pronoun: 'tu', form: 'vas pouvoir' }, { pronoun: 'il/elle', form: 'va pouvoir' },
                { pronoun: 'nous', form: 'allons pouvoir' }, { pronoun: 'vous', form: 'allez pouvoir' }, { pronoun: 'ils/elles', form: 'vont pouvoir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'puisse' }, { pronoun: 'que tu', form: 'puisses' }, { pronoun: 'qu\'il/elle', form: 'puisse' },
                { pronoun: 'que nous', form: 'puissions' }, { pronoun: 'que vous', form: 'puissiez' }, { pronoun: 'qu\'ils/elles', form: 'puissent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'pusse' }, { pronoun: 'que tu', form: 'pusses' }, { pronoun: 'qu\'il/elle', form: 'pût' },
                { pronoun: 'que nous', form: 'pussions' }, { pronoun: 'que vous', form: 'pussiez' }, { pronoun: 'qu\'ils/elles', form: 'pussent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie pu' }, { pronoun: 'que tu', form: 'aies pu' }, { pronoun: 'qu\'il/elle', form: 'ait pu' },
                { pronoun: 'que nous', form: 'ayons pu' }, { pronoun: 'que vous', form: 'ayez pu' }, { pronoun: 'qu\'ils/elles', form: 'aient pu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse pu' }, { pronoun: 'que tu', form: 'eusses pu' }, { pronoun: 'qu\'il/elle', form: 'eût pu' },
                { pronoun: 'que nous', form: 'eussions pu' }, { pronoun: 'que vous', form: 'eussiez pu' }, { pronoun: 'qu\'ils/elles', form: 'eussent pu' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'pourrais' }, { pronoun: 'tu', form: 'pourrais' }, { pronoun: 'il/elle', form: 'pourrait' },
                { pronoun: 'nous', form: 'pourrions' }, { pronoun: 'vous', form: 'pourriez' }, { pronoun: 'ils/elles', form: 'pourraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais pu' }, { pronoun: 'tu', form: 'aurais pu' }, { pronoun: 'il/elle', form: 'aurait pu' },
                { pronoun: 'nous', form: 'aurions pu' }, { pronoun: 'vous', form: 'auriez pu' }, { pronoun: 'ils/elles', form: 'auraient pu' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse pu' }, { pronoun: 'tu', form: 'eusses pu' }, { pronoun: 'il/elle', form: 'eût pu' },
                { pronoun: 'nous', form: 'eussions pu' }, { pronoun: 'vous', form: 'eussiez pu' }, { pronoun: 'ils/elles', form: 'eussent pu' }
            ]
        },
        Impératif: {
            'Présent': [] // Pouvoir has no imperative
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'pouvant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'pu' },
                { pronoun: 'Fem. Sing.', form: 'pu' },
                { pronoun: 'Masc. Plur.', form: 'pu' },
                { pronoun: 'Fem. Plur.', form: 'pu' }
            ]
        }
    }
};
