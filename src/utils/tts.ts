
// Utility for robust Text-to-Speech, especially for mobile compatibility

let voices: SpeechSynthesisVoice[] = [];

// Preload voices
const loadVoices = () => {
    voices = window.speechSynthesis.getVoices();
};

// Initial load
if (window.speechSynthesis) {
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}

// Keep references to prevent garbage collection bug
const activeUtterances: SpeechSynthesisUtterance[] = [];

// Shared speak helper with a small delay after cancel to prevent truncation
const speakWithLang = (text: string, lang: string, langPrefix: string, customRate?: number, gender?: 'male' | 'female') => {
    if (!window.speechSynthesis) {
        console.error("Speech synthesis not supported");
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Small delay after cancel — fixes Chrome bug where cancel() + speak()
    // immediately causes only the tail end of the sentence to be spoken
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);

        if (voices.length === 0) {
            voices = window.speechSynthesis.getVoices();
        }

        let validVoices = voices.filter(v => v.lang === lang || v.lang === lang.replace('-', '_'));
        if (validVoices.length === 0) {
            validVoices = voices.filter(v => v.lang.startsWith(langPrefix));
        }

        // Sort voices to heavily prioritize Premium/Enhanced/Siri/Google voices for better mobile quality
        validVoices.sort((a, b) => {
            const getScore = (v: SpeechSynthesisVoice) => {
                const name = v.name.toLowerCase();
                const uri = v.voiceURI.toLowerCase();
                let score = 0;
                if (name.includes('premium') || uri.includes('premium')) score += 10;
                if (name.includes('enhanced') || uri.includes('enhanced')) score += 10;
                if (name.includes('google') || uri.includes('google')) score += 5;
                if (name.includes('siri') || uri.includes('siri')) score += 5;
                if (v.localService) score += 2;
                return score;
            };
            return getScore(b) - getScore(a);
        });

        let voice = undefined;
        if (gender) {
            if (gender === 'female') {
                const femaleKeywords = ['female', 'hortense', 'amélie', 'aurélie', 'margot', 'alice', 'sylvie', 'marie'];
                voice = validVoices.find(v => femaleKeywords.some(k => v.name.toLowerCase().includes(k)));
            } else if (gender === 'male') {
                const maleKeywords = ['male', 'paul', 'thomas', 'nicolas', 'bernard', 'claude', 'jacques'];
                voice = validVoices.find(v => maleKeywords.some(k => v.name.toLowerCase().includes(k)));
            }
        }
        
        if (!voice && validVoices.length > 0) {
             voice = validVoices[0];
        }

        if (voice) {
            utterance.voice = voice;
        }

        utterance.lang = lang;
        utterance.rate = customRate !== undefined ? customRate : 0.9; // Slightly slower default for learning

        utterance.onerror = (e) => console.error("TTS Error:", e);

        // GC protection
        activeUtterances.push(utterance);
        utterance.onend = () => {
            const index = activeUtterances.indexOf(utterance);
            if (index > -1) {
                activeUtterances.splice(index, 1);
            }
        };

        window.speechSynthesis.speak(utterance);
    }, 100);
};

export const speakFrench = (text: string, rate?: number) => {
    speakWithLang(text, 'fr-FR', 'fr', rate);
};

export const speakFrenchMale = (text: string, rate?: number) => {
    speakWithLang(text, 'fr-FR', 'fr', rate, 'male');
};

export const speakFrenchFemale = (text: string, rate?: number) => {
    speakWithLang(text, 'fr-FR', 'fr', rate, 'female');
};

export const speakEnglish = (text: string) => {
    speakWithLang(text, 'en-US', 'en');
};
