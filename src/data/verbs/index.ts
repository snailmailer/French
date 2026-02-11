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

// Wrap Irregular Verbs
export const aller = applyExamplesToVerb(allerBase);
export const asseoir = applyExamplesToVerb(asseoirBase);
export const avoir = applyExamplesToVerb(avoirBase);
export const devoir = applyExamplesToVerb(devoirBase);
export const etre = applyExamplesToVerb(etreBase);
export const faire = applyExamplesToVerb(faireBase);
export const pouvoir = applyExamplesToVerb(pouvoirBase);
export const se_souvenir = applyExamplesToVerb(souvenirBase);
export const vouloir = applyExamplesToVerb(vouloirBase);

// --- Regular Verbs from User List ---
export const accepter = crv('accepter', 'ER', 'avoir', 'to accept');
export const amuser = crv('amuser', 'ER', 'avoir', 'to amuse');
export const samuser = crv("s'amuser", 'ER', 'avoir', 'to have fun', true);
export const sappeler = crv("s'appeler", 'ER', 'avoir', 'to be called', true);
export const sasseoir = asseoir;
export const attendre = crv('attendre', 'RE', 'avoir', 'to wait');
export const baigner = crv('baigner', 'ER', 'avoir', 'to bathe');
export const se_baigner = crv('se baigner', 'ER', 'avoir', 'to bathe/swim', true);
export const se_brosser_les_dents = crv('se brosser les dents', 'ER', 'avoir', 'to brush one\'s teeth', true);
export const coiffer = crv('coiffer', 'ER', 'avoir', 'to style hair');
export const se_coiffer = crv('se coiffer', 'ER', 'avoir', 'to fix one\'s hair', true);
export const se_concentrer = crv('se concentrer', 'ER', 'avoir', 'to concentrate', true);
export const connecter = crv('connecter', 'ER', 'avoir', 'to connect');
export const se_connecter = crv('se connecter', 'ER', 'avoir', 'to connect', true);
export const coucher = crv('coucher', 'ER', 'avoir', 'to put to bed');
export const se_coucher = crv('se coucher', 'ER', 'avoir', 'to go to bed', true);
export const couvrir = crv('couvrir', 'IR_COCOS', 'avoir', 'to cover');
export const se_debrouiller = crv('se débrouiller', 'ER', 'avoir', 'to manage/cope', true);
export const decouvrir = crv('découvrir', 'IR_COCOS', 'avoir', 'to discover');
export const defendre = crv('défendre', 'RE', 'avoir', 'to defend');
export const dejeuner = crv('déjeuner', 'ER', 'avoir', 'to have lunch');
export const se_depecher = crv('se dépêcher', 'ER', 'avoir', 'to hurry', true);
export const dependre = crv('dépendre', 'RE', 'avoir', 'to depend');
export const descendre = crv('descendre', 'RE', 'etre', 'to go down');
export const deshabiller = crv('déshabiller', 'ER', 'avoir', 'to undress');
export const se_deshabiller = crv('se déshabiller', 'ER', 'avoir', 'to undress', true);
export const diner = crv('dîner', 'ER', 'avoir', 'to have dinner');
export const se_disputer = crv('se disputer', 'ER', 'avoir', 'to argue', true);
export const doucher = crv('doucher', 'ER', 'avoir', 'to shower');
export const se_doucher = crv('se doucher', 'ER', 'avoir', 'to shower', true);
export const endormir = crv('endormir', 'IR_DORMIR', 'avoir', 'to put to sleep');
export const sendormir = crv("s'endormir", 'IR_DORMIR', 'avoir', 'to fall asleep', true);
export const sennuyer = crv("s'ennuyer", 'ER', 'avoir', 'to get bored', true);
export const entendre = crv('entendre', 'RE', 'avoir', 'to hear');
export const se_facher = crv('se fâcher', 'ER', 'avoir', 'to get angry', true);
export const habiller = crv('habiller', 'ER', 'avoir', 'to dress');
export const shabiller = crv("s'habiller", 'ER', 'avoir', 'to get dressed', true);
export const informer = crv('informer', 'ER', 'avoir', 'to inform');
export const sinquieter = crv("s'inquiéter", 'ER', 'avoir', 'to worry', true);
export const sinteresser = crv("s'intéresser à", 'ER', 'avoir', 'to be interested in', true);
export const jouer = crv('jouer', 'ER', 'avoir', 'to play');
export const laver = crv('laver', 'ER', 'avoir', 'to wash');
export const se_laver = crv('se laver', 'ER', 'avoir', 'to wash oneself', true);
export const se_laver_les_mains = crv('se laver les mains', 'ER', 'avoir', 'to wash one\'s hands', true);
export const se_laver_le_visage = crv('se laver le visage', 'ER', 'avoir', 'to wash one\'s face', true);
export const lever = crv('lever', 'ER', 'avoir', 'to lift/raise');
export const se_lever = crv('se lever', 'ER', 'avoir', 'to get up', true);
export const manger = crv('manger', 'ER', 'avoir', 'to eat');
export const maquiller = crv('maquiller', 'ER', 'avoir', 'to make up');
export const se_maquiller = crv('se maquiller', 'ER', 'avoir', 'to put on makeup', true);
export const se_marier = crv('se marier', 'ER', 'avoir', 'to get married', true);
export const nettoyer = crv('nettoyer', 'ER', 'avoir', 'to clean');
export const offrir = crv('offrir', 'IR_COCOS', 'avoir', 'to offer');
export const oublier = crv('oublier', 'ER', 'avoir', 'to forget');
export const parler = crv('parler', 'ER', 'avoir', 'to speak');
export const peigner = crv('peigner', 'ER', 'avoir', 'to comb');
export const se_peigner = crv('se peigner', 'ER', 'avoir', 'to comb one\'s hair', true);
export const perdre = crv('perdre', 'RE', 'avoir', 'to lose');
export const preciser = crv('préciser', 'ER', 'avoir', 'to specify');
export const se_preparer = crv('se préparer', 'ER', 'avoir', 'to get ready', true);
export const promener = crv('promener', 'ER', 'avoir', 'to walk');
export const se_promener = crv('se promener', 'ER', 'avoir', 'to take a walk', true);
export const proposer = crv('proposer', 'ER', 'avoir', 'to propose');
export const raser = crv('raser', 'ER', 'avoir', 'to shave');
export const se_raser = crv('se raser', 'ER', 'avoir', 'to shave', true);
export const se_reconcilier = crv('se réconcilier', 'ER', 'avoir', 'to reconcile', true);
export const remercier = crv('remercier', 'ER', 'avoir', 'to thank');
export const rendre = crv('rendre', 'RE', 'avoir', 'to give back');
export const se_rendre = crv('se rendre', 'RE', 'avoir', 'to go to', true);
export const rentrer = crv('rentrer', 'ER', 'etre', 'to return/go home');
export const repondre = crv('répondre', 'RE', 'avoir', 'to answer');
export const se_reposer = crv('se reposer', 'ER', 'avoir', 'to rest', true);
export const reveiller = crv('réveiller', 'ER', 'avoir', 'to wake someone');
export const se_reveiller = crv('se réveiller', 'ER', 'avoir', 'to wake up', true);
export const rouvrir = crv('rouvrir', 'IR_COCOS', 'avoir', 'to reopen');
export const secher = crv('sécher', 'ER', 'avoir', 'to dry');
export const se_secher = crv('se sécher', 'ER', 'avoir', 'to dry oneself', true);
export const se_secher_les_cheveux = crv('se sécher les cheveux', 'ER', 'avoir', 'to dry one\'s hair', true);
export const se_sentir = crv('se sentir', 'IR_DORMIR', 'avoir', 'to feel', true);
export const souffrir = crv('souffrir', 'IR_COCOS', 'avoir', 'to suffer');
export const surfer = crv('surfer', 'ER', 'avoir', 'to surf');
export const terminer = crv('terminer', 'ER', 'avoir', 'to finish');
export const toucher = crv('toucher', 'ER', 'avoir', 'to touch');
export const se_tromper = crv('se tromper', 'ER', 'avoir', 'to be mistaken', true);
export const vendre = crv('vendre', 'RE', 'avoir', 'to sell');

export const verbs = [
    accepter,
    aller,
    amuser,
    samuser,
    sappeler,
    sasseoir,
    attendre,
    avoir,
    baigner,
    se_baigner,
    se_brosser_les_dents,
    coiffer,
    se_coiffer,
    se_concentrer,
    connecter,
    se_connecter,
    coucher,
    se_coucher,
    couvrir,
    se_debrouiller,
    decouvrir,
    defendre,
    dejeuner,
    se_depecher,
    dependre,
    descendre,
    deshabiller,
    se_deshabiller,
    devoir,
    diner,
    se_disputer,
    doucher,
    se_doucher,
    endormir,
    sendormir,
    sennuyer,
    entendre,
    etre,
    se_facher,
    faire,
    habiller,
    shabiller,
    informer,
    sinquieter,
    sinteresser,
    jouer,
    laver,
    se_laver,
    se_laver_les_mains,
    se_laver_le_visage,
    lever,
    se_lever,
    manger,
    maquiller,
    se_maquiller,
    se_marier,
    nettoyer,
    offrir,
    oublier,
    parler,
    peigner,
    se_peigner,
    perdre,
    pouvoir,
    preciser,
    se_preparer,
    promener,
    se_promener,
    proposer,
    raser,
    se_raser,
    se_reconcilier,
    remercier,
    rendre,
    se_rendre,
    rentrer,
    repondre,
    se_reposer,
    reveiller,
    se_reveiller,
    rouvrir,
    secher,
    se_secher,
    se_secher_les_cheveux,
    se_sentir,
    se_souvenir,
    souffrir,
    surfer,
    terminer,
    toucher,
    se_tromper,
    vendre,
    vouloir
];
