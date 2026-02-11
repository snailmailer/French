import type { VerbDefinition } from '../types';

export const mettre: VerbDefinition = {
    infinitive: 'mettre',
    translation: 'to put',
    group: 3,
    auxiliary: 'avoir',
    rules: ['Irregular.', 'Participle: mis.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'mets' }, { pronoun: 'tu', form: 'mets' }, { pronoun: 'il/elle', form: 'met' },
                { pronoun: 'nous', form: 'mettons' }, { pronoun: 'vous', form: 'mettez' }, { pronoun: 'ils/elles', form: 'mettent' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai mis' }, { pronoun: 'tu', form: 'as mis' }, { pronoun: 'il/elle', form: 'a mis' },
                { pronoun: 'nous', form: 'avons mis' }, { pronoun: 'vous', form: 'avez mis' }, { pronoun: 'ils/elles', form: 'ont mis' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'mettais' }, { pronoun: 'tu', form: 'mettais' }, { pronoun: 'il/elle', form: 'mettait' },
                { pronoun: 'nous', form: 'mettions' }, { pronoun: 'vous', form: 'mettiez' }, { pronoun: 'ils/elles', form: 'mettaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'mis' }, { pronoun: 'tu', form: 'mis' }, { pronoun: 'il/elle', form: 'mit' },
                { pronoun: 'nous', form: 'mîmes' }, { pronoun: 'vous', form: 'mîtes' }, { pronoun: 'ils/elles', form: 'mirent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais mis' }, { pronoun: 'tu', form: 'avais mis' }, { pronoun: 'il/elle', form: 'avait mis' },
                { pronoun: 'nous', form: 'avions mis' }, { pronoun: 'vous', form: 'aviez mis' }, { pronoun: 'ils/elles', form: 'avaient mis' }
            ],
            'Passé Antérieur': [
                { pronoun: 'j\'', form: 'eus mis' }, { pronoun: 'tu', form: 'eus mis' }, { pronoun: 'il/elle', form: 'eut mis' },
                { pronoun: 'nous', form: 'eûmes mis' }, { pronoun: 'vous', form: 'eûtes mis' }, { pronoun: 'ils/elles', form: 'eurent mis' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'mettrai' }, { pronoun: 'tu', form: 'mettras' }, { pronoun: 'il/elle', form: 'mettra' },
                { pronoun: 'nous', form: 'mettrons' }, { pronoun: 'vous', form: 'mettrez' }, { pronoun: 'ils/elles', form: 'mettront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'j\'', form: 'aurai mis' }, { pronoun: 'tu', form: 'auras mis' }, { pronoun: 'il/elle', form: 'aura mis' },
                { pronoun: 'nous', form: 'aurons mis' }, { pronoun: 'vous', form: 'aurez mis' }, { pronoun: 'ils/elles', form: 'auront mis' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais mettre' }, { pronoun: 'tu', form: 'vas mettre' }, { pronoun: 'il/elle', form: 'va mettre' },
                { pronoun: 'nous', form: 'allons mettre' }, { pronoun: 'vous', form: 'allez mettre' }, { pronoun: 'ils/elles', form: 'vont mettre' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'mette' }, { pronoun: 'que tu', form: 'mettes' }, { pronoun: 'qu\'il/elle', form: 'mette' },
                { pronoun: 'que nous', form: 'mettions' }, { pronoun: 'que vous', form: 'mettiez' }, { pronoun: 'qu\'ils/elles', form: 'mettent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'misse' }, { pronoun: 'que tu', form: 'misses' }, { pronoun: 'qu\'il/elle', form: 'mît' },
                { pronoun: 'que nous', form: 'missions' }, { pronoun: 'que vous', form: 'missiez' }, { pronoun: 'qu\'ils/elles', form: 'missent' }
            ],
            'Passé': [
                { pronoun: 'que j\'', form: 'aie mis' }, { pronoun: 'que tu', form: 'aies mis' }, { pronoun: 'qu\'il/elle', form: 'ait mis' },
                { pronoun: 'que nous', form: 'ayons mis' }, { pronoun: 'que vous', form: 'ayez mis' }, { pronoun: 'qu\'ils/elles', form: 'aient mis' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que j\'', form: 'eusse mis' }, { pronoun: 'que tu', form: 'eusses mis' }, { pronoun: 'qu\'il/elle', form: 'eût mis' },
                { pronoun: 'que nous', form: 'eussions mis' }, { pronoun: 'que vous', form: 'eussiez mis' }, { pronoun: 'qu\'ils/elles', form: 'eussent mis' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'mettrais' }, { pronoun: 'tu', form: 'mettrais' }, { pronoun: 'il/elle', form: 'mettrait' },
                { pronoun: 'nous', form: 'mettrions' }, { pronoun: 'vous', form: 'mettriez' }, { pronoun: 'ils/elles', form: 'mettraient' }
            ],
            'Passé': [
                { pronoun: 'j\'', form: 'aurais mis' }, { pronoun: 'tu', form: 'aurais mis' }, { pronoun: 'il/elle', form: 'aurait mis' },
                { pronoun: 'nous', form: 'aurions mis' }, { pronoun: 'vous', form: 'auriez mis' }, { pronoun: 'ils/elles', form: 'auraient mis' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'j\'', form: 'eusse mis' }, { pronoun: 'tu', form: 'eusses mis' }, { pronoun: 'il/elle', form: 'eût mis' },
                { pronoun: 'nous', form: 'eussions mis' }, { pronoun: 'vous', form: 'eussiez mis' }, { pronoun: 'ils/elles', form: 'eussent mis' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'mets' },
                { pronoun: '(nous)', form: 'mettons' },
                { pronoun: '(vous)', form: 'mettez' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'mettant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'mis' },
                { pronoun: 'Fem. Sing.', form: 'mise' },
                { pronoun: 'Masc. Plur.', form: 'mis' },
                { pronoun: 'Fem. Plur.', form: 'mises' }
            ]
        }
    }
};
