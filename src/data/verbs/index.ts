import { createRegularVerb } from '../verbUtils';
import { aller } from './aller';
import { avoir } from './avoir';
import { devoir } from './devoir';
import { faire } from './faire';
import { pouvoir } from './pouvoir';
import { vouloir } from './vouloir';

// --- Regular Verbs from User List ---
export const accepter = createRegularVerb('accepter', 'ER');
export const samuser = createRegularVerb("s'amuser", 'ER', 'avoir', '', true);
export const attendre = createRegularVerb('attendre', 'RE');
export const se_baigner = createRegularVerb('se baigner', 'ER', 'avoir', '', true);
export const se_coiffer = createRegularVerb('se coiffer', 'ER', 'avoir', '', true);
export const se_connecter = createRegularVerb('se connecter', 'ER', 'avoir', '', true);
export const se_coucher = createRegularVerb('se coucher', 'ER', 'avoir', '', true);
export const couvrir = createRegularVerb('couvrir', 'IR_COCOS');
export const decouvrir = createRegularVerb('découvrir', 'IR_COCOS');
export const defendre = createRegularVerb('défendre', 'RE');
export const dejeuner = createRegularVerb('déjeuner', 'ER');
export const dependre = createRegularVerb('dépendre', 'RE');
export const descendre = createRegularVerb('descendre', 'RE', 'etre');
export const se_deshabiller = createRegularVerb('se déshabiller', 'ER', 'avoir', '', true);
export const diner = createRegularVerb('dîner', 'ER');
export const se_doucher = createRegularVerb('se doucher', 'ER', 'avoir', '', true);
export const sendormir = createRegularVerb("s'endormir", 'IR_DORMIR', 'avoir', '', true);
export const entendre = createRegularVerb('entendre', 'RE');
export const shabiller = createRegularVerb("s'habiller", 'ER', 'avoir', '', true);
export const informer = createRegularVerb('informer', 'ER');
export const jouer = createRegularVerb('jouer', 'ER');
export const se_laver = createRegularVerb('se laver', 'ER', 'avoir', '', true);
export const se_lever = createRegularVerb('se lever', 'ER', 'avoir', '', true);
export const se_maquiller = createRegularVerb('se maquiller', 'ER', 'avoir', '', true);
export const manger = createRegularVerb('manger', 'ER');
export const nettoyer = createRegularVerb('nettoyer', 'ER');
export const offrir = createRegularVerb('offrir', 'IR_COCOS');
export const oublier = createRegularVerb('oublier', 'ER');
export const parler = createRegularVerb('parler', 'ER');
export const se_peigner = createRegularVerb('se peigner', 'ER', 'avoir', '', true);
export const perdre = createRegularVerb('perdre', 'RE');
export const preciser = createRegularVerb('préciser', 'ER');
export const se_promener = createRegularVerb('se promener', 'ER', 'avoir', '', true);
export const proposer = createRegularVerb('proposer', 'ER');
export const se_raser = createRegularVerb('se raser', 'ER', 'avoir', '', true);
export const remercier = createRegularVerb('remercier', 'ER');
export const rendre = createRegularVerb('rendre', 'RE');
export const rentrer = createRegularVerb('rentrer', 'ER', 'etre'); // Not reflexive in list "rentrer"
export const repondre = createRegularVerb('répondre', 'RE');
export const se_reveiller = createRegularVerb('se réveiller', 'ER', 'avoir', '', true);
export const rouvrir = createRegularVerb('rouvrir', 'IR_COCOS');
export const se_secher = createRegularVerb('se sécher', 'ER', 'avoir', '', true);
export const se_secher_les_cheveux = createRegularVerb('se sécher les cheveux', 'ER', 'avoir', '', true);
export const souffrir = createRegularVerb('souffrir', 'IR_COCOS');
export const surfer = createRegularVerb('surfer', 'ER');
export const terminer = createRegularVerb('terminer', 'ER');
export const toucher = createRegularVerb('toucher', 'ER');
export const vendre = createRegularVerb('vendre', 'RE');

export const verbs = [
    accepter,
    aller,
    samuser,
    attendre,
    avoir,
    se_baigner,
    se_coiffer,
    se_connecter,
    se_coucher,
    couvrir,
    decouvrir,
    defendre,
    dejeuner,
    dependre,
    descendre,
    se_deshabiller,
    devoir,
    diner,
    se_doucher,
    sendormir,
    entendre,
    faire,
    shabiller,
    informer,
    jouer,
    se_laver,
    se_lever,
    manger,
    se_maquiller,
    nettoyer,
    offrir,
    oublier,
    parler,
    se_peigner,
    perdre,
    pouvoir,
    preciser,
    se_promener,
    proposer,
    se_raser,
    remercier,
    rendre,
    rentrer,
    repondre,
    se_reveiller,
    rouvrir,
    se_secher,
    se_secher_les_cheveux,
    souffrir,
    surfer,
    terminer,
    toucher,
    vendre,
    vouloir
];
