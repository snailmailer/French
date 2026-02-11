import type { VerbDefinition } from '../types';

export const savoir: VerbDefinition = {
    infinitive: 'savoir',
    translation: 'to know',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'Participle: su.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'sais' }, { pronoun: 'tu', form: 'sais' }, { pronoun: 'il/elle', form: 'sait' },
                { pronoun: 'nous', form: 'savons' }, { pronoun: 'vous', form: 'savez' }, { pronoun: 'ils/elles', form: 'savent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai su' }, { pronoun: 'tu', form: 'as su' }, { pronoun: 'il/elle', form: 'a su' },
                { pronoun: 'nous', form: 'avons su' }, { pronoun: 'vous', form: 'avez su' }, { pronoun: 'ils/elles', form: 'ont su' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'savais' }, { pronoun: 'tu', form: 'savais' }, { pronoun: 'il/elle', form: 'savait' },
                { pronoun: 'nous', form: 'savions' }, { pronoun: 'vous', form: 'saviez' }, { pronoun: 'ils/elles', form: 'savaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'sus' }, { pronoun: 'tu', form: 'sus' }, { pronoun: 'il/elle', form: 'sut' },
                { pronoun: 'nous', form: 'sûmes' }, { pronoun: 'vous', form: 'sûtes' }, { pronoun: 'ils/elles', form: 'surent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais su' }, { pronoun: 'tu', form: 'avais su' }, { pronoun: 'il/elle', form: 'avait su' },
                { pronoun: 'nous', form: 'avions su' }, { pronoun: 'vous', form: 'aviez su' }, { pronoun: 'ils/elles', form: 'avaient su' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus su' }, { pronoun: 'tu', form: 'eus su' }, { pronoun: 'il/elle', form: 'eut su' },
                { pronoun: 'nous', form: 'eûmes su' }, { pronoun: 'vous', form: 'eûtes su' }, { pronoun: 'ils/elles', form: 'eurent su' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'saurai' }, { pronoun: 'tu', form: 'sauras' }, { pronoun: 'il/elle', form: 'saura' },
                { pronoun: 'nous', form: 'saurons' }, { pronoun: 'vous', form: 'saurez' }, { pronoun: 'ils/elles', form: 'sauront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai su' }, { pronoun: 'tu', form: 'auras su' }, { pronoun: 'il/elle', form: 'aura su' },
                { pronoun: 'nous', form: 'aurons su' }, { pronoun: 'vous', form: 'aurez su' }, { pronoun: 'ils/elles', form: 'auront su' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais savoir' }, { pronoun: 'tu', form: 'vas savoir' }, { pronoun: 'il/elle', form: 'va savoir' },
                { pronoun: 'nous', form: 'allons savoir' }, { pronoun: 'vous', form: 'allez savoir' }, { pronoun: 'ils/elles', form: 'vont savoir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'sache' }, { pronoun: 'que tu', form: 'saches' }, { pronoun: 'qu\'il/elle', form: 'sache' },
                { pronoun: 'que nous', form: 'sachions' }, { pronoun: 'que vous', form: 'sachiez' }, { pronoun: 'qu\'ils/elles', form: 'sachent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'susse' }, { pronoun: 'que tu', form: 'susses' }, { pronoun: 'qu\'il/elle', form: 'sût' },
                { pronoun: 'que nous', form: 'sussions' }, { pronoun: 'que vous', form: 'sussiez' }, { pronoun: 'qu\'ils/elles', form: 'sussent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie su' }, { pronoun: 'que tu', form: 'aies su' }, { pronoun: 'qu\'il/elle', form: 'ait su' },
                { pronoun: 'que nous', form: 'ayons su' }, { pronoun: 'que vous', form: 'ayez su' }, { pronoun: 'qu\'ils/elles', form: 'aient su' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse su' }, { pronoun: 'que tu', form: 'eusses su' }, { pronoun: 'qu\'il/elle', form: 'eût su' },
                { pronoun: 'que nous', form: 'eussions su' }, { pronoun: 'que vous', form: 'eussiez su' }, { pronoun: 'qu\'ils/elles', form: 'eussent su' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'saurais' }, { pronoun: 'tu', form: 'saurais' }, { pronoun: 'il/elle', form: 'saurait' },
                { pronoun: 'nous', form: 'saurions' }, { pronoun: 'vous', form: 'sauriez' }, { pronoun: 'ils/elles', form: 'sauraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais su' }, { pronoun: 'tu', form: 'aurais su' }, { pronoun: 'il/elle', form: 'aurait su' },
                { pronoun: 'nous', form: 'aurions su' }, { pronoun: 'vous', form: 'auriez su' }, { pronoun: 'ils/elles', form: 'auraient su' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse su' }, { pronoun: 'tu', form: 'eusses su' }, { pronoun: 'il/elle', form: 'eût su' },
                { pronoun: 'nous', form: 'eussions su' }, { pronoun: 'vous', form: 'eussiez su' }, { pronoun: 'ils/elles', form: 'eussent su' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'sache' },
                { pronoun: '(nous)', form: 'sachons' },
                { pronoun: '(vous)', form: 'sachez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'sachant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'su' },
                { pronoun: 'Fem. Sing.', form: 'sue' },
                { pronoun: 'Masc. Plur.', form: 'sus' },
                { pronoun: 'Fem. Plur.', form: 'sues' }
            ]
        }
    }
};
