
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

export const speakFrench = (text: string) => {
    if (!window.speechSynthesis) {
        console.error("Speech synthesis not supported");
        return;
    }

    // Cancel any ongoing speech to prevent queue stacking/stuck state on mobile
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Attempt to find a specific French voice
    // iOS/Mac often has "Amelie" or "Thomas". Android "Google français".
    // We prioritize 'fr-FR' voices.
    if (voices.length === 0) {
        voices = window.speechSynthesis.getVoices();
    }

    const frenchVoice = voices.find(v => v.lang === 'fr-FR' || v.lang === 'fr_FR') ||
        voices.find(v => v.lang.startsWith('fr'));

    if (frenchVoice) {
        utterance.voice = frenchVoice;
    } else {
        // Fallback: some mobile browsers need this explicitly unused/null to use default
        // utterance.voice = null; 
    }

    utterance.lang = 'fr-FR';
    utterance.rate = 0.9; // Slightly slower is usually better for learning

    // Mobile debug
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
};
