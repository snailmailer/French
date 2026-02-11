import type { VerbDefinition } from '../types';

export const devoir: VerbDefinition = {
    infinitive: 'devoir',
    translation: 'to have to (must)',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'Participle: dû (circumflex only in masc. sing.).'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'dois' }, { pronoun: 'tu', form: 'dois' }, { pronoun: 'il/elle', form: 'doit' },
                { pronoun: 'nous', form: 'devons' }, { pronoun: 'vous', form: 'devez' }, { pronoun: 'ils/elles', form: 'doivent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai dû' }, { pronoun: 'tu', form: 'as dû' }, { pronoun: 'il/elle', form: 'a dû' },
                { pronoun: 'nous', form: 'avons dû' }, { pronoun: 'vous', form: 'avez dû' }, { pronoun: 'ils/elles', form: 'ont dû' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'devais' }, { pronoun: 'tu', form: 'devais' }, { pronoun: 'il/elle', form: 'devait' },
                { pronoun: 'nous', form: 'devions' }, { pronoun: 'vous', form: 'deviez' }, { pronoun: 'ils/elles', form: 'devaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'dus' }, { pronoun: 'tu', form: 'dus' }, { pronoun: 'il/elle', form: 'dut' },
                { pronoun: 'nous', form: 'dûmes' }, { pronoun: 'vous', form: 'dûtes' }, { pronoun: 'ils/elles', form: 'durent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais dû' }, { pronoun: 'tu', form: 'avais dû' }, { pronoun: 'il/elle', form: 'avait dû' },
                { pronoun: 'nous', form: 'avions dû' }, { pronoun: 'vous', form: 'aviez dû' }, { pronoun: 'ils/elles', form: 'avaient dû' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus dû' }, { pronoun: 'tu', form: 'eus dû' }, { pronoun: 'il/elle', form: 'eut dû' },
                { pronoun: 'nous', form: 'eûmes dû' }, { pronoun: 'vous', form: 'eûtes dû' }, { pronoun: 'ils/elles', form: 'eurent dû' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'devrai' }, { pronoun: 'tu', form: 'devras' }, { pronoun: 'il/elle', form: 'devra' },
                { pronoun: 'nous', form: 'devrons' }, { pronoun: 'vous', form: 'devrez' }, { pronoun: 'ils/elles', form: 'devront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai dû' }, { pronoun: 'tu', form: 'auras dû' }, { pronoun: 'il/elle', form: 'aura dû' },
                { pronoun: 'nous', form: 'aurons dû' }, { pronoun: 'vous', form: 'aurez dû' }, { pronoun: 'ils/elles', form: 'auront dû' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais devoir' }, { pronoun: 'tu', form: 'vas devoir' }, { pronoun: 'il/elle', form: 'va devoir' },
                { pronoun: 'nous', form: 'allons devoir' }, { pronoun: 'vous', form: 'allez devoir' }, { pronoun: 'ils/elles', form: 'vont devoir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'doive' }, { pronoun: 'que tu', form: 'doives' }, { pronoun: 'qu\'il/elle', form: 'doive' },
                { pronoun: 'que nous', form: 'devions' }, { pronoun: 'que vous', form: 'deviez' }, { pronoun: 'qu\'ils/elles', form: 'doivent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'dusse' }, { pronoun: 'que tu', form: 'dusses' }, { pronoun: 'qu\'il/elle', form: 'dût' },
                { pronoun: 'que nous', form: 'dussions' }, { pronoun: 'que vous', form: 'dussiez' }, { pronoun: 'qu\'ils/elles', form: 'dussent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie dû' }, { pronoun: 'que tu', form: 'aies dû' }, { pronoun: 'qu\'il/elle', form: 'ait dû' },
                { pronoun: 'que nous', form: 'ayons dû' }, { pronoun: 'que vous', form: 'ayez dû' }, { pronoun: 'qu\'ils/elles', form: 'aient dû' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse dû' }, { pronoun: 'que tu', form: 'eusses dû' }, { pronoun: 'qu\'il/elle', form: 'eût dû' },
                { pronoun: 'que nous', form: 'eussions dû' }, { pronoun: 'que vous', form: 'eussiez dû' }, { pronoun: 'qu\'ils/elles', form: 'eussent dû' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'devrais' }, { pronoun: 'tu', form: 'devrais' }, { pronoun: 'il/elle', form: 'devrait' },
                { pronoun: 'nous', form: 'devrions' }, { pronoun: 'vous', form: 'devriez' }, { pronoun: 'ils/elles', form: 'devraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais dû' }, { pronoun: 'tu', form: 'aurais dû' }, { pronoun: 'il/elle', form: 'aurait dû' },
                { pronoun: 'nous', form: 'aurions dû' }, { pronoun: 'vous', form: 'auriez dû' }, { pronoun: 'ils/elles', form: 'auraient dû' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse dû' }, { pronoun: 'tu', form: 'eusses dû' }, { pronoun: 'il/elle', form: 'eût dû' },
                { pronoun: 'nous', form: 'eussions dû' }, { pronoun: 'vous', form: 'eussiez dû' }, { pronoun: 'ils/elles', form: 'eussent dû' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'dois' }, // Devoir imperative is very rare, often listed as having none or these
                { pronoun: '(nous)', form: 'devons' },
                { pronoun: '(vous)', form: 'devez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'devant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'dû' },
                { pronoun: 'Fem. Sing.', form: 'due' },
                { pronoun: 'Masc. Plur.', form: 'dus' },
                { pronoun: 'Fem. Plur.', form: 'dues' }
            ]
        }
    }
};
