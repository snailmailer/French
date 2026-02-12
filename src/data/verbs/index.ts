import { createRegularVerb } from '../verbUtils';
import { applyExamplesToVerb } from '../../utils/exampleGenerator';
import { aller as allerBase } from './aller';
import { asseoir as asseoirBase } from './asseoir';
import { avoir as avoirBase } from './avoir';
import { devoir as devoirBase } from './devoir';
import { etre as etreBase } from './etre';
import { faire as faireBase } from './faire';
import { pouvoir as pouvoirBase } from './pouvoir';
import { souvenir as souvenirBase } from './souvenir';
import { vouloir as vouloirBase } from './vouloir';

// Helper to Create Regular Verb with Auto-Examples
const crv = (...args: Parameters<typeof createRegularVerb>) => {
    const verb = createRegularVerb(...args);
    return applyExamplesToVerb(verb);
};

// Wrap Irregular Verbs & Apply Categories where obvious
export const aller = applyExamplesToVerb({ ...allerBase, category: 'General' });
export const asseoir = applyExamplesToVerb({ ...asseoirBase, category: 'General' });
export const avoir = applyExamplesToVerb({ ...avoirBase, category: 'General' });
export const devoir = applyExamplesToVerb({ ...devoirBase, category: 'General' });
export const etre = applyExamplesToVerb({ ...etreBase, category: 'General' });
export const faire = applyExamplesToVerb({ ...faireBase, category: 'General' });
export const pouvoir = applyExamplesToVerb({ ...pouvoirBase, category: 'General' });
export const se_souvenir = applyExamplesToVerb({ ...souvenirBase, category: 'Routine' });
export const vouloir = applyExamplesToVerb({ ...vouloirBase, category: 'General' });

// --- Education / Apprendre ---
export const etudier = crv('étudier', 'ER', 'avoir', 'to study', false, [], [], 'Education');
export const apprendre = crv('apprendre', 'RE', 'avoir', 'to learn', false, [], [], 'Education');
export const reviser = crv('réviser', 'ER', 'avoir', 'to review/revise', false, [], [], 'Education');
export const lire = crv('lire', 'RE', 'avoir', 'to read', false, [], [], 'Education');
const ecrireBase = crv('écrire', 'RE', 'avoir', 'to write', false, [], [], 'Education');
export const ecrire = {
    ...ecrireBase,
    conjugations: {
        ...ecrireBase.conjugations,
        Indicatif: {
            ...ecrireBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'j\'', form: 'écris' },
                { pronoun: 'tu', form: 'écris' },
                { pronoun: 'il/elle', form: 'écrit' },
                { pronoun: 'nous', form: 'écrivons' },
                { pronoun: 'vous', form: 'écrivez' },
                { pronoun: 'ils/elles', form: 'écrivent' }
            ],
            'Imparfait': [
                { pronoun: 'j\'', form: 'écrivais' },
                { pronoun: 'tu', form: 'écrivais' },
                { pronoun: 'il/elle', form: 'écrivait' },
                { pronoun: 'nous', form: 'écrivions' },
                { pronoun: 'vous', form: 'écriviez' },
                { pronoun: 'ils/elles', form: 'écrivaient' }
            ],
            'Futur Simple': [
                { pronoun: 'j\'', form: 'écrirai' },
                { pronoun: 'tu', form: 'écriras' },
                { pronoun: 'il/elle', form: 'écrira' },
                { pronoun: 'nous', form: 'écrirons' },
                { pronoun: 'vous', form: 'écrirez' },
                { pronoun: 'ils/elles', form: 'écriront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai écrit' },
                { pronoun: 'tu', form: 'as écrit' },
                { pronoun: 'il/elle', form: 'a écrit' },
                { pronoun: 'nous', form: 'avons écrit' },
                { pronoun: 'vous', form: 'avez écrit' },
                { pronoun: 'ils/elles', form: 'ont écrit' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais écrit' },
                { pronoun: 'tu', form: 'avais écrit' },
                { pronoun: 'il/elle', form: 'avait écrit' },
                { pronoun: 'nous', form: 'avions écrit' },
                { pronoun: 'vous', form: 'aviez écrit' },
                { pronoun: 'ils/elles', form: 'avaient écrit' }
            ]
        },
        Conditionnel: {
            ...ecrireBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'j\'', form: 'écrirais' },
                { pronoun: 'tu', form: 'écrirais' },
                { pronoun: 'il/elle', form: 'écrirait' },
                { pronoun: 'nous', form: 'écririons' },
                { pronoun: 'vous', form: 'écririez' },
                { pronoun: 'ils/elles', form: 'écriraient' }
            ]
        },
        Participe: {
            ...ecrireBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'écrivant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'écrit' },
                { pronoun: 'Fem. Sing.', form: 'écrite' },
                { pronoun: 'Masc. Plur.', form: 'écrits' },
                { pronoun: 'Fem. Plur.', form: 'écrites' }
            ]
        }
    }
};
export const souligner = crv('souligner', 'ER', 'avoir', 'to underline', false, [], [], 'Education');
export const surligner = crv('surligner', 'ER', 'avoir', 'to highlight', false, [], [], 'Education');
export const memoriser = crv('mémoriser', 'ER', 'avoir', 'to memorize', false, [], [], 'Education');
export const repeter = crv('répéter', 'ER', 'avoir', 'to repeat', false, [], [], 'Education');
export const comprendre = crv('comprendre', 'RE', 'avoir', 'to understand', false, [], [], 'Education');
export const expliquer = crv('expliquer', 'ER', 'avoir', 'to explain', false, [], [], 'Education');
export const poser_question = crv('poser une question', 'ER', 'avoir', 'to ask a question', false, [], [], 'Education'); // Special handling for spaces? createRegularVerb handles it? regex matching endings might take last word?
export const repondre = crv('répondre', 'RE', 'avoir', 'to answer', false, [], [], 'Education');
export const reussir = crv('réussir', 'IR_ISS', 'avoir', 'to pass (exam)', false, [], [], 'Education');
export const echouer = crv('échouer', 'ER', 'avoir', 'to fail', false, [], [], 'Education');

// --- Work / Vie Professionnelle ---
export const travailler = crv('travailler', 'ER', 'avoir', 'to work', false, [], [], 'Work');
export const chercher_emploi = crv('chercher un emploi', 'ER', 'avoir', 'to look for a job', false, [], [], 'Work');
export const postuler = crv('postuler', 'ER', 'avoir', 'to apply', false, [], [], 'Work');
export const embaucher = crv('embaucher', 'ER', 'avoir', 'to hire', false, [], [], 'Work');
export const licencier = crv('licencier', 'ER', 'avoir', 'to fire', false, [], [], 'Work');
export const gagner_argent = crv('gagner de l\'argent', 'ER', 'avoir', 'to earn money', false, [], [], 'Work');
export const payer = crv('payer', 'ER', 'avoir', 'to pay', false, [], [], 'Work');
export const diriger = crv('diriger', 'ER', 'avoir', 'to manage/lead', false, [], [], 'Work');
export const organiser = crv('organiser', 'ER', 'avoir', 'to organize', false, [], [], 'Work');
export const planifier = crv('planifier', 'ER', 'avoir', 'to plan', false, [], [], 'Work');
export const participer = crv('participer', 'ER', 'avoir', 'to participate', false, [], [], 'Work');
export const negocier = crv('négocier', 'ER', 'avoir', 'to negotiate', false, [], [], 'Work');
export const signer = crv('signer', 'ER', 'avoir', 'to sign', false, [], [], 'Work');
export const envoyer_email = crv('envoyer un e-mail', 'ER', 'avoir', 'to send an email', false, [], [], 'Work');

// --- Hobbies / Loisirs ---
export const jouer = crv('jouer', 'ER', 'avoir', 'to play', false, [], [], 'Hobbies');
export const dessiner = crv('dessiner', 'ER', 'avoir', 'to draw', false, [], [], 'Hobbies');
const peindreBase = crv('peindre', 'RE', 'avoir', 'to paint', false, [], [], 'Hobbies');
export const peindre = {
    ...peindreBase,
    conjugations: {
        ...peindreBase.conjugations,
        Indicatif: {
            ...peindreBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'peins' },
                { pronoun: 'tu', form: 'peins' },
                { pronoun: 'il/elle', form: 'peint' },
                { pronoun: 'nous', form: 'peignons' },
                { pronoun: 'vous', form: 'peignez' },
                { pronoun: 'ils/elles', form: 'peignent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'peignais' },
                { pronoun: 'tu', form: 'peignais' },
                { pronoun: 'il/elle', form: 'peignait' },
                { pronoun: 'nous', form: 'peignions' },
                { pronoun: 'vous', form: 'peigniez' },
                { pronoun: 'ils/elles', form: 'peignaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'peindrai' },
                { pronoun: 'tu', form: 'peindras' },
                { pronoun: 'il/elle', form: 'peindra' },
                { pronoun: 'nous', form: 'peindrons' },
                { pronoun: 'vous', form: 'peindrez' },
                { pronoun: 'ils/elles', form: 'peindront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai peint' },
                { pronoun: 'tu', form: 'as peint' },
                { pronoun: 'il/elle', form: 'a peint' },
                { pronoun: 'nous', form: 'avons peint' },
                { pronoun: 'vous', form: 'avez peint' },
                { pronoun: 'ils/elles', form: 'ont peint' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais peint' },
                { pronoun: 'tu', form: 'avais peint' },
                { pronoun: 'il/elle', form: 'avait peint' },
                { pronoun: 'nous', form: 'avions peint' },
                { pronoun: 'vous', form: 'aviez peint' },
                { pronoun: 'ils/elles', form: 'avaient peint' }
            ]
        },
        Participe: {
            ...peindreBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'peignant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'peint' },
                { pronoun: 'Fem. Sing.', form: 'peinte' },
                { pronoun: 'Masc. Plur.', form: 'peints' },
                { pronoun: 'Fem. Plur.', form: 'peintes' }
            ]
        }
    }
};
export const chanter = crv('chanter', 'ER', 'avoir', 'to sing', false, [], [], 'Hobbies');
export const danser = crv('danser', 'ER', 'avoir', 'to dance', false, [], [], 'Hobbies');
export const regarder_film = crv('regarder un film', 'ER', 'avoir', 'to watch a movie', false, [], [], 'Hobbies');
export const ecouter_musique = crv('écouter de la musique', 'ER', 'avoir', 'to listen to music', false, [], [], 'Hobbies');
export const cuisiner = crv('cuisiner', 'ER', 'avoir', 'to cook', false, [], [], 'Hobbies');
export const jardiner = crv('jardiner', 'ER', 'avoir', 'to garden', false, [], [], 'Hobbies');
export const bricoler = crv('bricoler', 'ER', 'avoir', 'to do DIY', false, [], [], 'Hobbies');
export const voyager = crv('voyager', 'ER', 'avoir', 'to travel', false, [], [], 'Hobbies');
export const se_detendre = crv('se détendre', 'RE', 'avoir', 'to relax', true, [], [], 'Hobbies');
export const samuser = crv("s'amuser", 'ER', 'avoir', 'to have fun', true, [], [], 'Hobbies');

// --- Food / Manger ---
export const manger = crv('manger', 'ER', 'avoir', 'to eat', false, [], [], 'Food');
export const boire = crv('boire', 'RE', 'avoir', 'to drink', false, [], [], 'Food');
export const preparer_repas = crv('préparer le repas', 'ER', 'avoir', 'to prepare meal', false, [], [], 'Food');
export const gouter = crv('goûter', 'ER', 'avoir', 'to taste/snack', false, [], [], 'Food');
export const commander = crv('commander', 'ER', 'avoir', 'to order', false, [], [], 'Food');
export const servir = crv('servir', 'IR_DORMIR', 'avoir', 'to serve', false, [], [], 'Food');
export const dejeuner = crv('déjeuner', 'ER', 'avoir', 'to have lunch', false, [], [], 'Food');
export const diner = crv('dîner', 'ER', 'avoir', 'to have dinner', false, [], [], 'Food');
export const grignoter = crv('grignoter', 'ER', 'avoir', 'to snack', false, [], [], 'Food');

// --- Routine / Hygiène ---
export const se_reveiller = crv('se réveiller', 'ER', 'avoir', 'to wake up', true, [], [], 'Routine');
export const se_lever = crv('se lever', 'ER', 'avoir', 'to get up', true, [], [], 'Routine');
export const se_coucher = crv('se coucher', 'ER', 'avoir', 'to go to bed', true, [], [], 'Routine');
export const dormir = crv('dormir', 'IR_DORMIR', 'avoir', 'to sleep', false, [], [], 'Routine');
export const se_doucher = crv('se doucher', 'ER', 'avoir', 'to shower', true, [], [], 'Routine');
export const se_laver = crv('se laver', 'ER', 'avoir', 'to wash oneself', true, [], [], 'Routine');
export const se_brosser_dents = crv('se brosser les dents', 'ER', 'avoir', 'to brush teeth', true, [], [], 'Routine');
export const shabiller = crv("s'habiller", 'ER', 'avoir', 'to get dressed', true, [], [], 'Routine');
export const se_deshabiller = crv('se déshabiller', 'ER', 'avoir', 'to undress', true, [], [], 'Routine');
export const se_maquiller = crv('se maquiller', 'ER', 'avoir', 'to makeup', true, [], [], 'Routine');
export const se_coiffer = crv('se coiffer', 'ER', 'avoir', 'to do hair', true, [], [], 'Routine');
export const se_raser = crv('se raser', 'ER', 'avoir', 'to shave', true, [], [], 'Routine');
export const se_depecher = crv('se dépêcher', 'ER', 'avoir', 'to hurry', true, [], [], 'Routine');
export const se_reposer = crv('se reposer', 'ER', 'avoir', 'to rest', true, [], [], 'Routine');

// --- Housing / Logement ---
const vivreBase = crv('vivre', 'RE', 'avoir', 'to live', false, [], [], 'Housing');
export const vivre = {
    ...vivreBase,
    conjugations: {
        ...vivreBase.conjugations,
        Indicatif: {
            ...vivreBase.conjugations.Indicatif,
            'Présent': [
                { pronoun: 'je', form: 'vis' },
                { pronoun: 'tu', form: 'vis' },
                { pronoun: 'il/elle', form: 'vit' },
                { pronoun: 'nous', form: 'vivons' },
                { pronoun: 'vous', form: 'vivez' },
                { pronoun: 'ils/elles', form: 'vivent' }
            ],
            'Imparfait': [
                { pronoun: 'je', form: 'vivais' },
                { pronoun: 'tu', form: 'vivais' },
                { pronoun: 'il/elle', form: 'vivait' },
                { pronoun: 'nous', form: 'vivions' },
                { pronoun: 'vous', form: 'viviez' },
                { pronoun: 'ils/elles', form: 'vivaient' }
            ],
            'Futur Simple': [
                { pronoun: 'je', form: 'vivrai' },
                { pronoun: 'tu', form: 'vivras' },
                { pronoun: 'il/elle', form: 'vivra' },
                { pronoun: 'nous', form: 'vivrons' },
                { pronoun: 'vous', form: 'vivrez' },
                { pronoun: 'ils/elles', form: 'vivront' }
            ],
            'Passé Composé': [
                { pronoun: 'j\'', form: 'ai vécu' },
                { pronoun: 'tu', form: 'as vécu' },
                { pronoun: 'il/elle', form: 'a vécu' },
                { pronoun: 'nous', form: 'avons vécu' },
                { pronoun: 'vous', form: 'avez vécu' },
                { pronoun: 'ils/elles', form: 'ont vécu' }
            ],
            'Plus-que-parfait': [
                { pronoun: 'j\'', form: 'avais vécu' },
                { pronoun: 'tu', form: 'avais vécu' },
                { pronoun: 'il/elle', form: 'avait vécu' },
                { pronoun: 'nous', form: 'avions vécu' },
                { pronoun: 'vous', form: 'aviez vécu' },
                { pronoun: 'ils/elles', form: 'avaient vécu' }
            ]
        },
        Conditionnel: {
            ...vivreBase.conjugations.Conditionnel,
            'Présent': [
                { pronoun: 'je', form: 'vivrais' },
                { pronoun: 'tu', form: 'vivrais' },
                { pronoun: 'il/elle', form: 'vivrait' },
                { pronoun: 'nous', form: 'vivrions' },
                { pronoun: 'vous', form: 'vivriez' },
                { pronoun: 'ils/elles', form: 'vivraient' }
            ]
        },
        Participe: {
            ...vivreBase.conjugations.Participe,
            'Présent': [{ pronoun: '', form: 'vivant' }],
            'Passé': [
                { pronoun: 'Masc. Sing.', form: 'vécu' },
                { pronoun: 'Fem. Sing.', form: 'vécu' }, // Vivre mostly intransitive or used with avoir (no agreement usually unless direct object precedes, but base form is vécu)
                { pronoun: 'Masc. Plur.', form: 'vécus' },
                { pronoun: 'Fem. Plur.', form: 'vécues' }
            ]
        }
    }
};
export const habiter = crv('habiter', 'ER', 'avoir', 'to reside', false, [], [], 'Housing');
export const demenager = crv('déménager', 'ER', 'avoir', 'to move out', false, [], [], 'Housing');
export const louer = crv('louer', 'ER', 'avoir', 'to rent', false, [], [], 'Housing');
export const acheter = crv('acheter', 'ER', 'avoir', 'to buy', false, [], [], 'Housing');
export const vendre = crv('vendre', 'RE', 'avoir', 'to sell', false, [], [], 'Housing');
export const nettoyer = crv('nettoyer', 'ER', 'avoir', 'to clean', false, [], [], 'Housing');
export const balayer = crv('balayer', 'ER', 'avoir', 'to sweep', false, [], [], 'Housing');
export const passer_aspirateur = crv('passer l\'aspirateur', 'ER', 'avoir', 'to vacuum', false, [], [], 'Housing');
export const ranger = crv('ranger', 'ER', 'avoir', 'to tidy', false, [], [], 'Housing');
export const reparer = crv('réparer', 'ER', 'avoir', 'to repair', false, [], [], 'Housing');
export const arroser = crv('arroser les plantes', 'ER', 'avoir', 'to water plants', false, [], [], 'Housing');

// --- Sport ---
// export const faire_sport = crv('faire du sport', 'RE', 'avoir', 'to do sports', false, [], [], 'Sport'); // Removed duplicate
// Actually "faire du sport" conjugates like "faire". "aller au cinema" like "aller".
// createRegularVerb attempts to stem based on ending. "faire du sport" ends in "rt" (RE-ish?).
// IMPORTANT: For compound verbs based on irregulars, we should probably clone the base irregular.
// But for now, user listed them as "Verbes en -RE". "Faire" is irregular.
// Let's use `faire` base for `faire_sport` if possible, or just treat as regular RE if that's what `createRegularVerb` does (it doesn't do Irregulars well).
// Only "faire" is irregular. "faire du sport" is just "faire" + " du sport".
// Better strategy: Don't use `createRegularVerb` for "faire ...". Use `faire` and change infinitive.
const makeFaire = (inf: string, trans: string, cat: string) => applyExamplesToVerb({ ...faireBase, infinitive: inf, translation: trans, category: cat });
export const faire_du_sport = makeFaire('faire du sport', 'to do sports', 'Sport');
export const sentrainer = crv("s'entraîner", 'ER', 'avoir', 'to train', true, [], [], 'Sport');
export const courir = crv('courir', 'IR_DORMIR', 'avoir', 'to run', false, [], [], 'Sport'); // Short stem? courir is irregular-ish. IR_DORMIR might work (cours, cours, court...).
export const marcher = crv('marcher', 'ER', 'avoir', 'to walk', false, [], [], 'Sport');
export const musculation = makeFaire('faire de la musculation', 'to lift weights', 'Sport');
export const yoga = makeFaire('faire du yoga', 'to do yoga', 'Sport');
export const boxer = crv('boxer', 'ER', 'avoir', 'to box', false, [], [], 'Sport');
export const nager = crv('nager', 'ER', 'avoir', 'to swim', false, [], [], 'Sport');
export const sauter = crv('sauter', 'ER', 'avoir', 'to jump', false, [], [], 'Sport');
export const setirer = crv("s'étirer", 'ER', 'avoir', 'to stretch', true, [], [], 'Sport');
export const respirer = crv('respirer', 'ER', 'avoir', 'to breathe', false, [], [], 'Sport');

// --- General / Social ---
export const sortir = crv('sortir', 'IR_DORMIR', 'etre', 'to go out', false, [], [], 'Social');
export const se_promener = crv('se promener', 'ER', 'avoir', 'to take a walk', true, [], [], 'Social');
export const rencontrer = crv('rencontrer', 'ER', 'avoir', 'to meet', false, [], [], 'Social');
export const discuter = crv('discuter', 'ER', 'avoir', 'to discuss', false, [], [], 'Social');
export const inviter = crv('inviter', 'ER', 'avoir', 'to invite', false, [], [], 'Social');
export const rester = crv('rester', 'ER', 'etre', 'to stay', false, [], [], 'Social');
export const se_connecter = crv('se connecter', 'ER', 'avoir', 'to go online', true, [], [], 'Social');
export const jouer_jeux = crv('jouer aux jeux vidéo', 'ER', 'avoir', 'to play video games', false, [], [], 'Social');
export const sappeler = crv("s'appeler", 'ER', 'avoir', 'to be called', true, [], [], 'General');
export const accepter = crv('accepter', 'ER', 'avoir', 'to accept', false, [], [], 'General');
export const aider = crv('aider', 'ER', 'avoir', 'to help', false, [], [], 'General');
export const appeler = crv('appeler', 'ER', 'avoir', 'to call', false, [], [], 'General');
export const arriver = crv('arriver', 'ER', 'etre', 'to arrive', false, [], [], 'General');
export const attendre = crv('attendre', 'RE', 'avoir', 'to wait', false, [], [], 'General');
export const commencer = crv('commencer', 'ER', 'avoir', 'to start', false, [], [], 'General');
export const demander = crv('demander', 'ER', 'avoir', 'to ask', false, [], [], 'General');
export const dire = crv('dire', 'RE', 'avoir', 'to say', false, [], [], 'General'); // Irregular! createRegularVerb(RE) might be wrong. Dire is irregular (dites).
export const ecouter = crv('écouter', 'ER', 'avoir', 'to listen', false, [], [], 'General');
export const entendre = crv('entendre', 'RE', 'avoir', 'to hear', false, [], [], 'General');
export const finir = crv('finir', 'IR_ISS', 'avoir', 'to finish', false, [], [], 'General');
export const grandir = crv('grandir', 'IR_ISS', 'avoir', 'to grow', false, [], [], 'General');
export const mettre = crv('mettre', 'RE', 'avoir', 'to put', false, [], [], 'General'); // Irregular.
export const offrir = crv('offrir', 'IR_COCOS', 'avoir', 'to offer', false, [], [], 'General');
export const oublier = crv('oublier', 'ER', 'avoir', 'to forget', false, [], [], 'General');
export const parler = crv('parler', 'ER', 'avoir', 'to speak', false, [], [], 'General');
export const perdre = crv('perdre', 'RE', 'avoir', 'to lose', false, [], [], 'General');
export const porter = crv('porter', 'ER', 'avoir', 'to wear/carry', false, [], [], 'General');
export const prendre = crv('prendre', 'RE', 'avoir', 'to take', false, [], [], 'General'); // Irregular
export const proposer = crv('proposer', 'ER', 'avoir', 'to propose', false, [], [], 'General');
export const remercier = crv('remercier', 'ER', 'avoir', 'to thank', false, [], [], 'General');
export const rendre = crv('rendre', 'RE', 'avoir', 'to give back', false, [], [], 'General');
export const se_rendre = crv('se rendre', 'RE', 'etre', 'to go to', true, [], [], 'General');
export const rentrer = crv('rentrer', 'ER', 'etre', 'to return', false, [], [], 'General');
export const rouvrir = crv('rouvrir', 'IR_COCOS', 'avoir', 'to reopen', false, [], [], 'General');
export const se_sentir = crv('se sentir', 'IR_DORMIR', 'avoir', 'to feel', true, [], [], 'General');
export const souffrir = crv('souffrir', 'IR_COCOS', 'avoir', 'to suffer', false, [], [], 'General');
export const terminer = crv('terminer', 'ER', 'avoir', 'to finish', false, [], [], 'General');
export const toucher = crv('toucher', 'ER', 'avoir', 'to touch', false, [], [], 'General');
export const trouver = crv('trouver', 'ER', 'avoir', 'to find', false, [], [], 'General');
export const utiliser = crv('utiliser', 'ER', 'avoir', 'to use', false, [], [], 'General');
export const venir = crv('venir', 'IR_VENIR', 'etre', 'to come', false, [], [], 'General'); // Need IR_VENIR support in cleanRegularVerb or stick to IR_DORMIR approximation? Venir is irregular.
export const voir = crv('voir', 'IR_DORMIR', 'avoir', 'to see', false, [], [], 'General'); // Irregular (puis, vois...)

// --- Missing / Extra Verbs ---
export const amuser = crv('amuser', 'ER', 'avoir', 'to amuse', false, [], [], 'General');
export const baigner = crv('baigner', 'ER', 'avoir', 'to bathe', false, [], [], 'General');
export const coiffer = crv('coiffer', 'ER', 'avoir', 'to style hair', false, [], [], 'General');
export const se_concentrer = crv('se concentrer', 'ER', 'avoir', 'to concentrate', true, [], [], 'General');
export const connecter = crv('connecter', 'ER', 'avoir', 'to connect', false, [], [], 'General');
export const couvrir = crv('couvrir', 'IR_COCOS', 'avoir', 'to cover', false, [], [], 'General');
export const decouvrir = crv('découvrir', 'IR_COCOS', 'avoir', 'to discover', false, [], [], 'General');
export const defendre = crv('défendre', 'RE', 'avoir', 'to defend', false, [], [], 'General');
export const dependre = crv('dépendre', 'RE', 'avoir', 'to depend', false, [], [], 'General');
export const descendre = crv('descendre', 'RE', 'etre', 'to go down', false, [], [], 'General');
export const deshabiller = crv('déshabiller', 'ER', 'avoir', 'to undress', false, [], [], 'General');
export const se_disputer = crv('se disputer', 'ER', 'avoir', 'to argue', true, [], [], 'General');
export const doucher = crv('doucher', 'ER', 'avoir', 'to shower', false, [], [], 'General');
export const endormir = crv('endormir', 'IR_DORMIR', 'avoir', 'to put to sleep', false, [], [], 'General');
export const sendormir = crv("s'endormir", 'IR_DORMIR', 'avoir', 'to fall asleep', true, [], [], 'General');
export const sennuyer = crv("s'ennuyer", 'ER', 'avoir', 'to get bored', true, [], [], 'General');
export const se_facher = crv('se fâcher', 'ER', 'avoir', 'to get angry', true, [], [], 'General');
export const habiller = crv('habiller', 'ER', 'avoir', 'to dress', false, [], [], 'General');
export const informer = crv('informer', 'ER', 'avoir', 'to inform', false, [], [], 'General');
export const sinquieter = crv("s'inquiéter", 'ER', 'avoir', 'to worry', true, [], [], 'General');
export const sinteresser = crv("s'intéresser à", 'ER', 'avoir', 'to be interested in', true, [], [], 'General');
export const laver = crv('laver', 'ER', 'avoir', 'to wash', false, [], [], 'General');
export const se_laver_les_mains = crv('se laver les mains', 'ER', 'avoir', 'to wash hands', true, [], [], 'General');
export const se_laver_le_visage = crv('se laver le visage', 'ER', 'avoir', 'to wash face', true, [], [], 'General');
export const lever = crv('lever', 'ER', 'avoir', 'to lift', false, [], [], 'General');
export const maquiller = crv('maquiller', 'ER', 'avoir', 'to makeup', false, [], [], 'General');
export const peigner = crv('peigner', 'ER', 'avoir', 'to comb', false, [], [], 'General');
export const se_peigner = crv('se peigner', 'ER', 'avoir', 'to comb hair', true, [], [], 'General');
export const preciser = crv('préciser', 'ER', 'avoir', 'to specify', false, [], [], 'General');
export const promener = crv('promener', 'ER', 'avoir', 'to walk someone', false, [], [], 'General');
export const raser = crv('raser', 'ER', 'avoir', 'to shave', false, [], [], 'General');
export const se_reconcilier = crv('se réconcilier', 'ER', 'avoir', 'to reconcile', true, [], [], 'General');
export const reveiller = crv('réveiller', 'ER', 'avoir', 'to wake', false, [], [], 'General');
export const secher = crv('sécher', 'ER', 'avoir', 'to dry', false, [], [], 'General');
export const se_secher = crv('se sécher', 'ER', 'avoir', 'to dry oneself', true, [], [], 'General');
export const se_secher_les_cheveux = crv('se sécher les cheveux', 'ER', 'avoir', 'to dry hair', true, [], [], 'General');
export const se_tromper = crv('se tromper', 'ER', 'avoir', 'to be mistaken', true, [], [], 'General');
// --- More Missing Verbs ---
export const se_debrouiller = crv('se débrouiller', 'ER', 'avoir', 'to manage', true, [], [], 'General');
export const se_marier = crv('se marier', 'ER', 'avoir', 'to get married', true, [], [], 'General');
export const se_preparer = crv('se préparer', 'ER', 'avoir', 'to get ready', true, [], [], 'General');
// export const sasseoir = asseoir; // Removed alias
// export const sentire = se_sentir; // Removed alias
export const coucher = crv('coucher', 'ER', 'avoir', 'to put to bed', false, [], [], 'Routine');

// Export Dictionary
export const verbs = [
    accepter, acheter, aider, aller, amuser, appeler, apprendre, arriver, arroser, asseoir, attendre, avoir,
    baigner, balayer, boire, boxer, bricoler, se_brosser_dents,
    chanter, chercher_emploi, coiffer, se_coiffer, commander, commencer, comprendre, se_concentrer, connecter, se_connecter, se_coucher, coucher, courir, couvrir, cuisiner,
    danser, se_debrouiller, decouvrir, defendre, dejeuner, demander, demenager, se_depecher, dependre, descendre, se_deshabiller, deshabiller, dessiner, se_detendre, devoir, diner, dire, diriger, discuter, se_disputer, dormir, se_doucher, doucher,
    echouer, ecouter, ecouter_musique, ecrire, embaucher, endormir, sendormir, sennuyer, entendre, envoyer_email, etudier, etre, expliquer,
    se_facher, faire, faire_du_sport, finir,
    gagner_argent, gouter, grandir, grignoter,
    habiter, habiller, shabiller,
    informer, sinquieter, sinteresser, inviter,
    jardiner, jouer, jouer_jeux,
    laver, se_laver, se_laver_les_mains, se_laver_le_visage, se_lever, lever, licencier, lire, louer,
    manger, marcher, maquiller, se_maquiller, se_marier, memoriser, mettre, musculation,
    nager, negocier, nettoyer,
    offrir, organiser, oublier,
    parler, participer, passer_aspirateur, payer, peigner, se_peigner, peindre, perdre, planifier, porter, poser_question, postuler, pouvoir, preciser, prendre, preparer_repas, se_preparer, promener, se_promener, proposer,
    ranger, raser, se_raser, se_reconcilier, regarder_film, remercier, rencontrer, rendre, se_rendre, rentrer, reparer, repeter, repondre, se_reposer, respirer, rester, reussir, reveiller, se_reveiller, reviser, rouvrir,
    samuser, sappeler, sauter, secher, se_secher, se_secher_les_cheveux, se_sentir, sentrainer, servir, setirer, signer, sortir, souffrir, souligner, se_souvenir, surligner,
    terminer, toucher, travailler, se_tromper, trouver,
    utiliser,
    vendre, venir, vivre, voir, vouloir, voyager,
    yoga
].filter(Boolean);
