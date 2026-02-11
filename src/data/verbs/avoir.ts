import type { VerbDefinition } from '../types';

export const avoir: VerbDefinition = {
    infinitive: 'avoir',
    translation: 'to have',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Auxiliary verb.', 'Irregular roots.'],
    examples: [
        { sentence: "J'ai faim.", translation: "I am hungry." },
        { sentence: "Il a une voiture.", translation: "He has a car." }
    ],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'j\'', form: 'ai' }, { pronoun: 'tu', form: 'as' }, { pronoun: 'il/elle', form: 'a' },
                { pronoun: 'nous', form: 'avons' }, { pronoun: 'vous', form: 'avez' }, { pronoun: 'ils/elles', form: 'ont' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai eu' }, { pronoun: 'tu', form: 'as eu' }, { pronoun: 'il/elle', form: 'a eu' },
                { pronoun: 'nous', form: 'avons eu' }, { pronoun: 'vous', form: 'avez eu' }, { pronoun: 'ils/elles', form: 'ont eu' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'avais' }, { pronoun: 'tu', form: 'avais' }, { pronoun: 'il/elle', form: 'avait' },
                { pronoun: 'nous', form: 'avions' }, { pronoun: 'vous', form: 'aviez' }, { pronoun: 'ils/elles', form: 'avaient' }
            ],
            'Passé Simple': [
                { pronoun: 'j\'', form: 'eus' }, { pronoun: 'tu', form: 'eus' }, { pronoun: 'il/elle', form: 'eut' },
                { pronoun: 'nous', form: 'eûmes' }, { pronoun: 'vous', form: 'eûtes' }, { pronoun: 'ils/elles', form: 'eurent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais eu' }, { pronoun: 'tu', form: 'avais eu' }, { pronoun: 'il/elle', form: 'avait eu' },
                { pronoun: 'nous', form: 'avions eu' }, { pronoun: 'vous', form: 'aviez eu' }, { pronoun: 'ils/elles', form: 'avaient eu' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus eu' }, { pronoun: 'tu', form: 'eus eu' }, { pronoun: 'il/elle', form: 'eut eu' },
                { pronoun: 'nous', form: 'eûmes eu' }, { pronoun: 'vous', form: 'eûtes eu' }, { pronoun: 'ils/elles', form: 'eurent eu' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'aurai' }, { pronoun: 'tu', form: 'auras' }, { pronoun: 'il/elle', form: 'aura' },
                { pronoun: 'nous', form: 'aurons' }, { pronoun: 'vous', form: 'aurez' }, { pronoun: 'ils/elles', form: 'auront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai eu' }, { pronoun: 'tu', form: 'auras eu' }, { pronoun: 'il/elle', form: 'aura eu' },
                { pronoun: 'nous', form: 'aurons eu' }, { pronoun: 'vous', form: 'aurez eu' }, { pronoun: 'ils/elles', form: 'auront eu' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais avoir' }, { pronoun: 'tu', form: 'vas avoir' }, { pronoun: 'il/elle', form: 'va avoir' },
                { pronoun: 'nous', form: 'allons avoir' }, { pronoun: 'vous', form: 'allez avoir' }, { pronoun: 'ils/elles', form: 'vont avoir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que j\'', form: 'aie' }, { pronoun: 'que tu', form: 'aies' }, { pronoun: 'qu\'il/elle', form: 'ait' },
                { pronoun: 'que nous', form: 'ayons' }, { pronoun: 'que vous', form: 'ayez' }, { pronoun: 'qu\'ils/elles', form: 'aient' }
            ],
            'Imparfait': [
                { pronoun: 'que j\'', form: 'eusse' }, { pronoun: 'que tu', form: 'eusses' }, { pronoun: 'qu\'il/elle', form: 'eût' },
                { pronoun: 'que nous', form: 'eussions' }, { pronoun: 'que vous', form: 'eussiez' }, { pronoun: 'qu\'ils/elles', form: 'eussent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie eu' }, { pronoun: 'que tu', form: 'aies eu' }, { pronoun: 'qu\'il/elle', form: 'ait eu' },
                { pronoun: 'que nous', form: 'ayons eu' }, { pronoun: 'que vous', form: 'ayez eu' }, { pronoun: 'qu\'ils/elles', form: 'aient eu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse eu' }, { pronoun: 'que tu', form: 'eusses eu' }, { pronoun: 'qu\'il/elle', form: 'eût eu' },
                { pronoun: 'que nous', form: 'eussions eu' }, { pronoun: 'que vous', form: 'eussiez eu' }, { pronoun: 'qu\'ils/elles', form: 'eussent eu' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'j\'', form: 'aurais' }, { pronoun: 'tu', form: 'aurais' }, { pronoun: 'il/elle', form: 'aurait' },
                { pronoun: 'nous', form: 'aurions' }, { pronoun: 'vous', form: 'auriez' }, { pronoun: 'ils/elles', form: 'auraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais eu' }, { pronoun: 'tu', form: 'aurais eu' }, { pronoun: 'il/elle', form: 'aurait eu' },
                { pronoun: 'nous', form: 'aurions eu' }, { pronoun: 'vous', form: 'auriez eu' }, { pronoun: 'ils/elles', form: 'auraient eu' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse eu' }, { pronoun: 'tu', form: 'eusses eu' }, { pronoun: 'il/elle', form: 'eût eu' },
                { pronoun: 'nous', form: 'eussions eu' }, { pronoun: 'vous', form: 'eussiez eu' }, { pronoun: 'ils/elles', form: 'eussent eu' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'aie' },
                { pronoun: '(nous)', form: 'ayons' },
                { pronoun: '(vous)', form: 'ayez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'ayant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'eu' },
                { pronoun: 'Fem. Sing.', form: 'eue' },
                { pronoun: 'Masc. Plur.', form: 'eus' },
                { pronoun: 'Fem. Plur.', form: 'eues' }
            ]
        }
    }
};
