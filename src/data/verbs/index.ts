import { createRegularVerb } from '../verbUtils';
import { aimer } from './aimer';
import { aller } from './aller';
import { avoir } from './avoir';
import { devoir } from './devoir';
import { dire } from './dire';
import { etre } from './etre';
import { faire } from './faire';
import { mettre } from './mettre';
import { pouvoir } from './pouvoir';
import { prendre } from './prendre';
import { savoir } from './savoir';
import { venir } from './venir';
import { voir } from './voir';
import { vouloir } from './vouloir';

// --- Regular Verbs ---
export const accepter = createRegularVerb('accepter', 'ER');
export const amuser = createRegularVerb('amuser', 'ER'); // s'amuser?
export const attendre = createRegularVerb('attendre', 'RE');
export const baigner = createRegularVerb('baigner', 'ER'); // se baigner/baigner
export const coiffer = createRegularVerb('coiffer', 'ER'); // se coiffer
export const connecter = createRegularVerb('connecter', 'ER');
export const coucher = createRegularVerb('coucher', 'ER'); // se coucher
export const couvrir = createRegularVerb('couvrir', 'IR_COCOS');
export const decouvrir = createRegularVerb('découvrir', 'IR_COCOS');
export const defendre = createRegularVerb('défendre', 'RE');
export const dejeuner = createRegularVerb('déjeuner', 'ER');
export const dependre = createRegularVerb('dépendre', 'RE');
export const descendre = createRegularVerb('descendre', 'RE', 'etre');
export const deshabiller = createRegularVerb('déshabiller', 'ER'); // se déshabiller
export const diner = createRegularVerb('dîner', 'ER');
export const doucher = createRegularVerb('doucher', 'ER'); // se doucher
export const endormir = createRegularVerb('endormir', 'IR_DORMIR'); // s'endormir
export const entendre = createRegularVerb('entendre', 'RE');
export const habiller = createRegularVerb('habiller', 'ER'); // s'habiller
export const informer = createRegularVerb('informer', 'ER');
export const jouer = createRegularVerb('jouer', 'ER');
export const laver = createRegularVerb('laver', 'ER'); // se laver
export const lever = createRegularVerb('lever', 'ER'); // se lever
export const manger = createRegularVerb('manger', 'ER');
export const maquiller = createRegularVerb('maquiller', 'ER'); // se maquiller
export const nettoyer = createRegularVerb('nettoyer', 'ER');
export const offrir = createRegularVerb('offrir', 'IR_COCOS');
export const oublier = createRegularVerb('oublier', 'ER');
export const parler = createRegularVerb('parler', 'ER');
export const peigner = createRegularVerb('peigner', 'ER'); // se peigner
export const perdre = createRegularVerb('perdre', 'RE');
export const preciser = createRegularVerb('préciser', 'ER');
export const promener = createRegularVerb('promener', 'ER'); // se promener
export const proposer = createRegularVerb('proposer', 'ER');
export const raser = createRegularVerb('raser', 'ER'); // se raser
export const remercier = createRegularVerb('remercier', 'ER');
export const rendre = createRegularVerb('rendre', 'RE');
export const rentrer = createRegularVerb('rentrer', 'ER', 'etre');
export const repondre = createRegularVerb('répondre', 'RE');
export const reveiller = createRegularVerb('réveiller', 'ER'); // se réveiller
export const rouvrir = createRegularVerb('rouvrir', 'IR_COCOS');
export const secher = createRegularVerb('sécher', 'ER'); // se sécher
export const souffrir = createRegularVerb('souffrir', 'IR_COCOS');
export const surfer = createRegularVerb('surfer', 'ER');
export const terminer = createRegularVerb('terminer', 'ER');
export const toucher = createRegularVerb('toucher', 'ER');
export const vendre = createRegularVerb('vendre', 'RE');

export const verbs = [
    accepter,
    aimer,
    aller,
    amuser,
    attendre,
    avoir,
    baigner,
    coiffer,
    connecter,
    coucher,
    couvrir,
    decouvrir,
    defendre,
    dejeuner,
    dependre,
    descendre,
    deshabiller,
    devoir,
    diner,
    dire,
    doucher,
    endormir,
    entendre,
    etre,
    faire,
    habiller,
    informer,
    jouer,
    laver,
    lever,
    manger,
    maquiller,
    mettre,
    nettoyer,
    offrir,
    oublier,
    parler,
    peigner,
    perdre,
    pouvoir,
    preciser,
    prendre,
    promener,
    proposer,
    raser,
    remercier,
    rendre,
    rentrer,
    repondre,
    reveiller,
    rouvrir,
    savoir,
    secher,
    souffrir,
    surfer,
    terminer,
    toucher,
    vendre,
    venir,
    voir,
    vouloir
];
