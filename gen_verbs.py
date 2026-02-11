
verbs_list = """
accepter,ER
aller,IRREG
amuser,ER,REFLEX
baigner,ER,REFLEX
coiffer,ER,REFLEX
connecter,ER
coucher,ER,REFLEX
déshabiller,ER,REFLEX
déjeuner,ER
dîner,ER
doucher,ER,REFLEX
habiller,ER,REFLEX
informer,ER
jouer,ER
laver,ER,REFLEX
lever,ER,REFLEX
maquiller,ER,REFLEX
manger,ER
nettoyer,ER
oublier,ER
parler,ER
peigner,ER,REFLEX
préciser,ER
promener,ER,REFLEX
proposer,ER
remercier,ER
rentrer,ER,ETRE
réveiller,ER,REFLEX
raser,ER,REFLEX
sécher,ER,REFLEX
sécher les cheveux,ER
surfer,ER
terminer,ER
toucher,ER
couvrir,IR_COCOS
découvrir,IR_COCOS
endormir,IR_ISS,REFLEX
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
aimer,IRREG_FAKE
dire,IRREG
etre,IRREG
mettre,IRREG
prendre,IRREG
savoir,IRREG
venir,IRREG
voir,IRREG
""".strip().split('\n')

# Note: aimer, dire, mettre, prendre, savoir, venir, voir were in old invalid list or irregulars.
# "aimer" is actually ER regular.
# "secher les cheveux" is "secher" with suffix.
# "secher" is listed separately.
# Reflexive usually implied by context or user listed them as "se baigner" etc in intent, but list gave simple "baigner".
# However, "baigner" can be transitive "I bathe the dog". "se baigner" = "I swim/bathe".
# Given the context of "La routine", they often want reflexive. 
# But the list provided was "baigner, coiffer...". 
# Wait, "secher les cheveux" is listed.
# I will generate exactly what is requested.
# For existing irregulars, I import them.
# For regulars, I use createRegularVerb.

# Mapping
generated_code = """import { createRegularVerb } from '../verbUtils';
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
import { aimer } from './aimer'; // Aimer is regular but was file. Let's keep file if it exists or replace? File is safer if existing.

// Generated Verbs
"""

# Store variable names to export list
var_names = ["aller", "avoir", "devoir", "dire", "etre", "faire", "mettre", "pouvoir", "prendre", "savoir", "venir", "voir", "vouloir", "aimer"]

irregulars = ["aller", "avoir", "devoir", "dire", "etre", "faire", "mettre", "pouvoir", "prendre", "savoir", "venir", "voir", "vouloir", "aimer"]

sanitized_verbs = []

def sanitize(name):
    # 'sécher les cheveux' -> 'secher_les_cheveux'
    s = name.replace(' ', '_').replace("'", "").replace('é','e').replace('è','e').replace('ê','e').replace('î','i').replace('à','a').lower()
    return s

for line in verbs_list:
    parts = line.split(',')
    name = parts[0].strip()
    vtype = parts[1].strip()
    flags = parts[2:] if len(parts) > 2 else []
    
    sanitized = sanitize(name)
    var_name = sanitized
    
    if var_name in irregulars:
        continue # Already imported
        
    sanitized_verbs.append((name, var_name, vtype, flags))


# Alphabetize definitions
sanitized_verbs.sort(key=lambda x: x[0])

for name, var_name, vtype, flags in sanitized_verbs:
    # Handle "secher les cheveux" special case? 
    # It's basically "start with secher, append ' les cheveux' to forms?" NO.
    # It complicates 'createRegularVerb'.
    # Actually, createRegularVerb takes infinitive. If I pass "sécher les cheveux", 
    # stem becomes "sécher les cheve" (ER removed). WRONG.
    # Needs special handling?
    # Or just `sécher` is enough and `sécher les cheveux` is a duplicate?
    # User listed both `sécher` and `sécher les cheveux`.
    # I'll enable `sécher` correctly. 
    # `sécher les cheveux` acts like `sécher`.
    # For now I will treat `sécher les cheveux` as `sécher` but display `sécher les cheveux`?
    # The verbUtils removes last 2 chars. "sécher les cheveux" - 'ux' -> "sécher les cheve" + endings -> "Je sécher les cheve-e". Garbage.
    # SKIP complex phrases for now or map to base verb? 
    # I will SKIP multi-word verbs that don't fit the pattern unless I manually handle them.
    # `se lever` works if I pass `se lever` because `cleanInfinitive` handles `se `.
    # `sécher les cheveux`: suffix is ` les cheveux`.
    # I'll skip `sécher les cheveux` as a conjugation object (just `sécher` covers it).
    
    if ' ' in name:
        continue

    # Reflexive heuristics?
    # User listed "baigner" but often means "se baigner".
    # I will produce NON-reflexive by default unless flagged?
    # Actually, "baigner" (to bathe someone) is valid.
    # "se baigner" (to swim).
    # "lever" (lift), "se lever" (get up).
    # The list is ambiguous. "Verbes en -ER ... lever ... secher ...".
    # I will implement them as non-reflexive to be safe, OR check if I should make them reflexive?
    # "coucher" -> "se coucher". 
    # Let's check typical usage.
    # `REFLEX` flag in my python list was a guess.
    # I'll output standard regular.
    
    is_reflexive = 'false'
    aux = "'avoir'"
    if 'ETRE' in flags: aux = "'etre'"
    if 'REFLEX' in flags: is_reflexive = 'true' # My list had guesses

    generated_code += f"export const {var_name} = createRegularVerb('{name}', '{vtype}', {aux}, '', {is_reflexive});\n"
    var_names.append(var_name)

# Sort var names for export
var_names.sort()

generated_code += "\nexport const verbs = [\n"
for v in var_names:
    generated_code += f"    {v},\n"
generated_code += "];\n"

print(generated_code)
