
import type { VerbDefinition } from '../types';

export const souvenir: VerbDefinition = {
    infinitive: 'se souvenir',
    translation: 'to remember',
    group: 3,
    auxiliary: 'être',
    rules: ['Irregular.', 'Reflexive.', 'Conjugates like Venir.'],
    conjugations: {
        Indicatif: {
            'Présent': [
                { pronoun: 'je', form: 'me souviens' }, { pronoun: 'tu', form: 'te souviens' }, { pronoun: 'il/elle', form: 'se souvient' },
                { pronoun: 'nous', form: 'nous souvenons' }, { pronoun: 'vous', form: 'vous souvenez' }, { pronoun: 'ils/elles', form: 'se souviennent' }
            ],
            'Passé Composé': [
                { pronoun: 'je', form: 'me suis souvenu(e)' }, { pronoun: 'tu', form: 't\'es souvenu(e)' }, { pronoun: 'il/elle', form: 's\'est souvenu(e)' },
                { pronoun: 'nous', form: 'nous sommes souvenus(es)' }, { pronoun: 'vous', form: 'vous êtes souvenus(es)' }, { pronoun: 'ils/elles', form: 'se sont souvenus(es)' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'me souvenais' }, { pronoun: 'tu', form: 'te souvenais' }, { pronoun: 'il/elle', form: 'se souvenait' },
                { pronoun: 'nous', form: 'nous souvenions' }, { pronoun: 'vous', form: 'vous souveniez' }, { pronoun: 'ils/elles', form: 'se souvenaient' }
            ],
            'Passé Simple': [
                { pronoun: 'je', form: 'me souvins' }, { pronoun: 'tu', form: 'te souvins' }, { pronoun: 'il/elle', form: 'se souvint' },
                { pronoun: 'nous', form: 'nous souvînmes' }, { pronoun: 'vous', form: 'vous souvîntes' }, { pronoun: 'ils/elles', form: 'se souvinrent' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'je', form: 'm\'étais souvenu(e)' }, { pronoun: 'tu', form: 't\'étais souvenu(e)' }, { pronoun: 'il/elle', form: 's\'était souvenu(e)' },
                { pronoun: 'nous', form: 'nous étions souvenus(es)' }, { pronoun: 'vous', form: 'vous étiez souvenus(es)' }, { pronoun: 'ils/elles', form: 's\'étaient souvenus(es)' }
            ],
            'Passé Antérieur': [
                { pronoun: 'je', form: 'me fus souvenu(e)' }, { pronoun: 'tu', form: 'te fus souvenu(e)' }, { pronoun: 'il/elle', form: 'se fut souvenu(e)' },
                { pronoun: 'nous', form: 'nous fûmes souvenus(es)' }, { pronoun: 'vous', form: 'vous fûtes souvenus(es)' }, { pronoun: 'ils/elles', form: 'se furent souvenus(es)' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'me souviendrai' }, { pronoun: 'tu', form: 'te souviendras' }, { pronoun: 'il/elle', form: 'se souviendra' },
                { pronoun: 'nous', form: 'nous souviendrons' }, { pronoun: 'vous', form: 'vous souviendrez' }, { pronoun: 'ils/elles', form: 'se souviendront' }
            ],
            'Futur Antérieur': [
                { pronoun: 'je', form: 'me serai souvenu(e)' }, { pronoun: 'tu', form: 'te seras souvenu(e)' }, { pronoun: 'il/elle', form: 'se sera souvenu(e)' },
                { pronoun: 'nous', form: 'nous serons souvenus(es)' }, { pronoun: 'vous', form: 'vous serez souvenus(es)' }, { pronoun: 'ils/elles', form: 'se seront souvenus(es)' }
            ],
            'Futur Proche': [
                { pronoun: 'je', form: 'vais me souvenir' }, { pronoun: 'tu', form: 'vas te souvenir' }, { pronoun: 'il/elle', form: 'va se souvenir' },
                { pronoun: 'nous', form: 'allons nous souvenir' }, { pronoun: 'vous', form: 'allez vous souvenir' }, { pronoun: 'ils/elles', form: 'vont se souvenir' }
            ]
        },
        Subjonctif: {
            'Présent': [
                { pronoun: 'que je', form: 'me souvienne' }, { pronoun: 'que tu', form: 'te souviennes' }, { pronoun: 'qu\'il/elle', form: 'se souvienne' },
                { pronoun: 'que nous', form: 'nous souvenions' }, { pronoun: 'que vous', form: 'vous souveniez' }, { pronoun: 'qu\'ils/elles', form: 'se souviennent' }
            ],
            'Imparfait': [
                { pronoun: 'que je', form: 'me souvinsse' }, { pronoun: 'que tu', form: 'te souvinsses' }, { pronoun: 'qu\'il/elle', form: 'se souvint' },
                { pronoun: 'que nous', form: 'nous souvinssions' }, { pronoun: 'que vous', form: 'vous souvinssiez' }, { pronoun: 'qu\'ils/elles', form: 'se souvinssent' }
            ],
            'Passé': [
                { pronoun: 'que je', form: 'me sois souvenu(e)' }, { pronoun: 'que tu', form: 'te sois souvenu(e)' }, { pronoun: 'qu\'il/elle', form: 'se soit souvenu(e)' },
                { pronoun: 'que nous', form: 'nous soyons souvenus(es)' }, { pronoun: 'que vous', form: 'vous soyez souvenus(es)' }, { pronoun: 'qu\'ils/elles', form: 'se soient souvenus(es)' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'que je', form: 'me fusse souvenu(e)' }, { pronoun: 'que tu', form: 'te fusses souvenu(e)' }, { pronoun: 'qu\'il/elle', form: 'se fût souvenu(e)' },
                { pronoun: 'que nous', form: 'nous fussions souvenus(es)' }, { pronoun: 'que vous', form: 'vous fussiez souvenus(es)' }, { pronoun: 'qu\'ils/elles', form: 'se fussent souvenus(es)' }
            ]
        },
        Conditionnel: {
            'Présent': [
                { pronoun: 'je', form: 'me souviendrais' }, { pronoun: 'tu', form: 'te souviendrais' }, { pronoun: 'il/elle', form: 'se souviendrait' },
                { pronoun: 'nous', form: 'nous souviendrions' }, { pronoun: 'vous', form: 'vous souviendriez' }, { pronoun: 'ils/elles', form: 'se souviendraient' }
            ],
            'Passé': [
                { pronoun: 'je', form: 'me serais souvenu(e)' }, { pronoun: 'tu', form: 'te serais souvenu(e)' }, { pronoun: 'il/elle', form: 'se serait souvenu(e)' },
                { pronoun: 'nous', form: 'nous serions souvenus(es)' }, { pronoun: 'vous', form: 'vous seriez souvenus(es)' }, { pronoun: 'ils/elles', form: 'se seraient souvenus(es)' }
            ],
            'Passé (2ème forme)': [
                { pronoun: 'je', form: 'me fusse souvenu(e)' }, { pronoun: 'tu', form: 'te fusses souvenu(e)' }, { pronoun: 'il/elle', form: 'se fût souvenu(e)' },
                { pronoun: 'nous', form: 'nous fussions souvenus(es)' }, { pronoun: 'vous', form: 'vous fussiez souvenus(es)' }, { pronoun: 'ils/elles', form: 'se fussent souvenus(es)' }
            ]
        },
        Impératif: {
            'Présent': [
                { pronoun: '(tu)', form: 'souviens-toi' },
                { pronoun: '(nous)', form: 'souvenons-nous' },
                { pronoun: '(vous)', form: 'souvenez-vous' }
            ]
        },
        Participe: {
            'Présent': [
                { pronoun: '', form: 'se souvenant' }
            ],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'souvenu' },
                { pronoun: 'Fem. Sing.', form: 'souvenue' },
                { pronoun: 'Masc. Plur.', form: 'souvenus' },
                { pronoun: 'Fem. Plur.', form: 'souvenues' }
            ]
        }
    }
};
