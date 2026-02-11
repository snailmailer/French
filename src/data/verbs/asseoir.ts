
import type { VerbDefinition } from '../types';

export const asseoir: VerbDefinition = {
    infinitive: 's\'asseoir',
    translation: 'to sit down',
    group: 3,
    auxiliary: 'être',
    rules: ['Irregular.', 'Reflexive.', 'Two common forms (m\'assieds vs m\'assois). Form 1 used here.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'm\'assieds' }, { pronoun: 'tu', form: 't\'assieds' }, { pronoun: 'il/elle', form: 's\'assied' },
                { pronoun: 'nous', form: 'nous asseyons' }, { pronoun: 'vous', form: 'vous asseyez' }, { pronoun: 'ils/elles', form: 's\'asseyent' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'me suis assis(e)' }, { pronoun: 'tu', form: 't\'es assis(e)' }, { pronoun: 'il/elle', form: 's\'est assis(e)' },
                { pronoun: 'nous', form: 'nous sommes assis(es)' }, { pronoun: 'vous', form: 'vous êtes assis(es)' }, { pronoun: 'ils/elles', form: 'se sont assis(es)' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'm\'asseyais' }, { pronoun: 'tu', form: 't\'asseyais' }, { pronoun: 'il/elle', form: 's\'asseyait' },
                { pronoun: 'nous', form: 'nous asseyions' }, { pronoun: 'vous', form: 'vous asseyiez' }, { pronoun: 'ils/elles', form: 's\'asseyaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'm\'assis' }, { pronoun: 'tu', form: 't\'assis' }, { pronoun: 'il/elle', form: 's\'assit' },
                { pronoun: 'nous', form: 'nous assîmes' }, { pronoun: 'vous', form: 'vous assîtes' }, { pronoun: 'ils/elles', form: 's\'assirent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'je', form: 'm\'étais assis(e)' }, { pronoun: 'tu', form: 't\'étais assis(e)' }, { pronoun: 'il/elle', form: 's\'était assis(e)' },
                { pronoun: 'nous', form: 'nous étions assis(es)' }, { pronoun: 'vous', form: 'vous étiez assis(es)' }, { pronoun: 'ils/elles', form: 's\'étaient assis(es)' }
            ],
            'Passé Antérieur': [
                { pronoun: 'je', form: 'me fus assis(e)' }, { pronoun: 'tu', form: 'te fus assis(e)' }, { pronoun: 'il/elle', form: 'se fut assis(e)' },
                { pronoun: 'nous', form: 'nous fûmes assis(es)' }, { pronoun: 'vous', form: 'vous fûtes assis(es)' }, { pronoun: 'ils/elles', form: 'se furent assis(es)' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'm\'assiérai' }, { pronoun: 'tu', form: 't\'assiéras' }, { pronoun: 'il/elle', form: 's\'assiéra' },
                { pronoun: 'nous', form: 'nous assiérons' }, { pronoun: 'vous', form: 'vous assiérez' }, { pronoun: 'ils/elles', form: 's\'assiéront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'je', form: 'me serai assis(e)' }, { pronoun: 'tu', form: 'te seras assis(e)' }, { pronoun: 'il/elle', form: 'se sera assis(e)' },
                { pronoun: 'nous', form: 'nous serons assis(es)' }, { pronoun: 'vous', form: 'vous serez assis(es)' }, { pronoun: 'ils/elles', form: 'se seront assis(es)' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais m\'asseoir' }, { pronoun: 'tu', form: 'vas t\'asseoir' }, { pronoun: 'il/elle', form: 'va s\'asseoir' },
                { pronoun: 'nous', form: 'allons nous asseoir' }, { pronoun: 'vous', form: 'allez vous asseoir' }, { pronoun: 'ils/elles', form: 'vont s\'asseoir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'm\'asseye' }, { pronoun: 'que tu', form: 't\'asseyes' }, { pronoun: 'qu\'il/elle', form: 's\'asseye' },
                { pronoun: 'que nous', form: 'nous asseyions' }, { pronoun: 'que vous', form: 'vous asseyiez' }, { pronoun: 'qu\'ils/elles', form: 's\'asseyent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'm\'assisse' }, { pronoun: 'que tu', form: 't\'assisses' }, { pronoun: 'qu\'il/elle', form: 's\'assît' },
                { pronoun: 'que nous', form: 'nous assissions' }, { pronoun: 'que vous', form: 'vous assissiez' }, { pronoun: 'qu\'ils/elles', form: 's\'assissent' }
            ],
            'Passé': [
                { pronoun: 'que je', form: 'me sois assis(e)' }, { pronoun: 'que tu', form: 'te sois assis(e)' }, { pronoun: 'qu\'il/elle', form: 'se soit assis(e)' },
                { pronoun: 'que nous', form: 'nous soyons assis(es)' }, { pronoun: 'que vous', form: 'vous soyez assis(es)' }, { pronoun: 'qu\'ils/elles', form: 'se soient assis(es)' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que je', form: 'me fusse assis(e)' }, { pronoun: 'que tu', form: 'te fusses assis(e)' }, { pronoun: 'qu\'il/elle', form: 'se fût assis(e)' },
                { pronoun: 'que nous', form: 'nous fussions assis(es)' }, { pronoun: 'que vous', form: 'vous fussiez assis(es)' }, { pronoun: 'qu\'ils/elles', form: 'se fussent assis(es)' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'm\'assiérais' }, { pronoun: 'tu', form: 't\'assiérais' }, { pronoun: 'il/elle', form: 's\'assiérait' },
                { pronoun: 'nous', form: 'nous assiérions' }, { pronoun: 'vous', form: 'vous assiériez' }, { pronoun: 'ils/elles', form: 's\'assiéraient' }
            ],
            'Passé': [
                { pronoun: 'je', form: 'me serais assis(e)' }, { pronoun: 'tu', form: 'te serais assis(e)' }, { pronoun: 'il/elle', form: 'se serait assis(e)' },
                { pronoun: 'nous', form: 'nous serions assis(es)' }, { pronoun: 'vous', form: 'vous seriez assis(es)' }, { pronoun: 'ils/elles', form: 'se seraient assis(es)' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'je', form: 'me fusse assis(e)' }, { pronoun: 'tu', form: 'te fusses assis(e)' }, { pronoun: 'il/elle', form: 'se fût assis(e)' },
                { pronoun: 'nous', form: 'nous fussions assis(es)' }, { pronoun: 'vous', form: 'vous fussiez assis(es)' }, { pronoun: 'ils/elles', form: 'se fussent assis(es)' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'assieds-toi' },
                { pronoun: '(nous)', form: 'asseyons-nous' },
                { pronoun: '(vous)', form: 'asseyez-vous' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 's\'asseyant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'assis' },
                { pronoun: 'Fem. Sing.', form: 'assise' },
                { pronoun: 'Masc. Plur.', form: 'assis' },
                { pronoun: 'Fem. Plur.', form: 'assises' }
            ]
        }
    }
};
