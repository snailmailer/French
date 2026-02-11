import type { VerbDefinition } from '../types';

export const faire: VerbDefinition = {
    infinitive: 'faire',
    translation: 'to do/make',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular conjugation.', 'Very common regular-irregular pattern.'],
    examples: [
        { sentence: "Je fais du sport.", translation: "I do sports." },
        { sentence: "Qu'est-ce que tu fais ?", translation: "What are you doing?" }
    ],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'fais' }, { pronoun: 'tu', form: 'fais' }, { pronoun: 'il/elle', form: 'fait' },
                { pronoun: 'nous', form: 'faisons' }, { pronoun: 'vous', form: 'faites' }, { pronoun: 'ils/elles', form: 'font' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai fait' }, { pronoun: 'tu', form: 'as fait' }, { pronoun: 'il/elle', form: 'a fait' },
                { pronoun: 'nous', form: 'avons fait' }, { pronoun: 'vous', form: 'avez fait' }, { pronoun: 'ils/elles', form: 'ont fait' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'faisais' }, { pronoun: 'tu', form: 'faisais' }, { pronoun: 'il/elle', form: 'faisait' },
                { pronoun: 'nous', form: 'faisions' }, { pronoun: 'vous', form: 'faisiez' }, { pronoun: 'ils/elles', form: 'faisaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'fis' }, { pronoun: 'tu', form: 'fis' }, { pronoun: 'il/elle', form: 'fit' },
                { pronoun: 'nous', form: 'fîmes' }, { pronoun: 'vous', form: 'fîtes' }, { pronoun: 'ils/elles', form: 'firent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais fait' }, { pronoun: 'tu', form: 'avais fait' }, { pronoun: 'il/elle', form: 'avait fait' },
                { pronoun: 'nous', form: 'avions fait' }, { pronoun: 'vous', form: 'aviez fait' }, { pronoun: 'ils/elles', form: 'avaient fait' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus fait' }, { pronoun: 'tu', form: 'eus fait' }, { pronoun: 'il/elle', form: 'eut fait' },
                { pronoun: 'nous', form: 'eûmes fait' }, { pronoun: 'vous', form: 'eûtes fait' }, { pronoun: 'ils/elles', form: 'eurent fait' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'ferai' }, { pronoun: 'tu', form: 'feras' }, { pronoun: 'il/elle', form: 'fera' },
                { pronoun: 'nous', form: 'ferons' }, { pronoun: 'vous', form: 'ferez' }, { pronoun: 'ils/elles', form: 'feront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai fait' }, { pronoun: 'tu', form: 'auras fait' }, { pronoun: 'il/elle', form: 'aura fait' },
                { pronoun: 'nous', form: 'aurons fait' }, { pronoun: 'vous', form: 'aurez fait' }, { pronoun: 'ils/elles', form: 'auront fait' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais faire' }, { pronoun: 'tu', form: 'vas faire' }, { pronoun: 'il/elle', form: 'va faire' },
                { pronoun: 'nous', form: 'allons faire' }, { pronoun: 'vous', form: 'allez faire' }, { pronoun: 'ils/elles', form: 'vont faire' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'fasse' }, { pronoun: 'que tu', form: 'fasses' }, { pronoun: 'qu\'il/elle', form: 'fasse' },
                { pronoun: 'que nous', form: 'fassions' }, { pronoun: 'que vous', form: 'fassiez' }, { pronoun: 'qu\'ils/elles', form: 'fassent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'fisse' }, { pronoun: 'que tu', form: 'fisses' }, { pronoun: 'qu\'il/elle', form: 'fît' },
                { pronoun: 'que nous', form: 'fissions' }, { pronoun: 'que vous', form: 'fissiez' }, { pronoun: 'qu\'ils/elles', form: 'fissent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie fait' }, { pronoun: 'que tu', form: 'aies fait' }, { pronoun: 'qu\'il/elle', form: 'ait fait' },
                { pronoun: 'que nous', form: 'ayons fait' }, { pronoun: 'que vous', form: 'ayez fait' }, { pronoun: 'qu\'ils/elles', form: 'aient fait' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse fait' }, { pronoun: 'que tu', form: 'eusses fait' }, { pronoun: 'qu\'il/elle', form: 'eût fait' },
                { pronoun: 'que nous', form: 'eussions fait' }, { pronoun: 'que vous', form: 'eussiez fait' }, { pronoun: 'qu\'ils/elles', form: 'eussent fait' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'ferais' }, { pronoun: 'tu', form: 'ferais' }, { pronoun: 'il/elle', form: 'ferait' },
                { pronoun: 'nous', form: 'ferions' }, { pronoun: 'vous', form: 'feriez' }, { pronoun: 'ils/elles', form: 'feraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais fait' }, { pronoun: 'tu', form: 'aurais fait' }, { pronoun: 'il/elle', form: 'aurait fait' },
                { pronoun: 'nous', form: 'aurions fait' }, { pronoun: 'vous', form: 'auriez fait' }, { pronoun: 'ils/elles', form: 'auraient fait' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse fait' }, { pronoun: 'tu', form: 'eusses fait' }, { pronoun: 'il/elle', form: 'eût fait' },
                { pronoun: 'nous', form: 'eussions fait' }, { pronoun: 'vous', form: 'eussiez fait' }, { pronoun: 'ils/elles', form: 'eussent fait' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'fais' },
                { pronoun: '(nous)', form: 'faisons' },
                { pronoun: '(vous)', form: 'faites' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'faisant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'fait' },
                { pronoun: 'Fem. Sing.', form: 'faite' },
                { pronoun: 'Masc. Plur.', form: 'faits' },
                { pronoun: 'Fem. Plur.', form: 'faites' }
            ]
        }
    }
};
