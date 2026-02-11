
# The user wants exact verbs. Some are reflexive.
# -ER
verbs_list = """
accepter,ER
aller,IRREG
s'amuser,ER,REFLEX
se baigner,ER,REFLEX
se coiffer,ER,REFLEX
se connecter,ER,REFLEX
se coucher,ER,REFLEX
se déshabiller,ER,REFLEX
déjeuner,ER
dîner,ER
se doucher,ER,REFLEX
s'habiller,ER,REFLEX
informer,ER
jouer,ER
se laver,ER,REFLEX
se lever,ER,REFLEX
se maquiller,ER,REFLEX
manger,ER
nettoyer,ER
oublier,ER
parler,ER
se peigner,ER,REFLEX
préciser,ER
se promener,ER,REFLEX
proposer,ER
remercier,ER
rentrer,ER,ETRE
se réveiller,ER,REFLEX
se raser,ER,REFLEX
se sécher,ER,REFLEX
se sécher les cheveux,ER,REFLEX
surfer,ER
terminer,ER
toucher,ER
couvrir,IR_COCOS
découvrir,IR_COCOS
s'endormir,IR_DORMIR,REFLEX
offrir,IR_COCOS
rouvrir,IR_COCOS
souffrir,IR_COCOS
attendre,RE
dépendre,RE
défendre,RE
descendre,RE,ETRE
entendre,RE
perdre,RE
rendre,RE
répondre,RE
vendre,RE
avoir,IRREG
devoir,IRREG
faire,IRREG
pouvoir,IRREG
vouloir,IRREG
""".strip().split('\n')

generated_code = """import { createRegularVerb } from '../verbUtils';
import { aller } from './aller';
import { avoir } from './avoir';
import { devoir } from './devoir';
import { faire } from './faire';
import { pouvoir } from './pouvoir';
import { vouloir } from './vouloir';

// Generated Verbs
"""

# Only import irregulars that are TRULY irregular and processed manually
# aller, avoir, devoir, faire, pouvoir, vouloir.
irregulars = ["aller", "avoir", "devoir", "faire", "pouvoir", "vouloir"]

# NOTE: previous list had `dire`, `etre`, `mettre`, `prendre`, `savoir`, `venir`, `voir`, `aimer`.
# These are NOT in the User's new list.
# I should probably remove them from the export if the user wants "the following list" and implied *only* these?
# "Include the following verbs in the tool" -> implies addition or replacement?
# "verb corrections for the conjugation tool... include the following"
# I will output the list the user gave. If they want others, they can ask.
# This ensures alignment with request.

var_names = list(irregulars) # Start with imported

sanitized_verbs = []

def sanitize(name):
    s = name.replace(' ', '_').replace("'", "").replace('é','e').replace('è','e').replace('ê','e').replace('î','i').replace('à','a').lower()
    return s

for line in verbs_list:
    if not line.strip(): continue
    parts = line.split(',')
    name = parts[0].strip()
    vtype = parts[1].strip()
    flags = parts[2:] if len(parts) > 2 else []
    
    sanitized = sanitize(name)
    var_name = sanitized
    
    if var_name in irregulars:
        continue 
        
    sanitized_verbs.append((name, var_name, vtype, flags))

sanitized_verbs.sort(key=lambda x: x[0])

for name, var_name, vtype, flags in sanitized_verbs:
    is_reflexive = 'false'
    aux = "'avoir'"
    if 'ETRE' in flags: aux = "'etre'"
    if 'REFLEX' in flags: is_reflexive = 'true'
    
    generated_code += f"export const {var_name} = createRegularVerb('{name}', '{vtype}', {aux}, '', {is_reflexive});\n"
    var_names.append(var_name)

var_names.sort()

generated_code += "\nexport const verbs = [\n"
for v in var_names:
    generated_code += f"    {v},\n"
generated_code += "];\n"

print(generated_code)
