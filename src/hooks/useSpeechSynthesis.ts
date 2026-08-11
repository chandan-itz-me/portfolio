import { useEffect, useRef } from "react";

type UseSpeechSynthesisOptions = {
    text: string;
    enabled?: boolean;
    rate?: number;
    pitch?: number;
    volume?: number;
    lang?: string;
};

/**
 * Hook for triggering speech synthesis
 * Uses Web Speech API to synthesize voice
 */
export function useSpeechSynthesis(options: UseSpeechSynthesisOptions) {
    const { 
        text, 
        enabled = true, 
        rate = 1, 
        pitch = 1, 
        volume = 1,
        lang = "en-US"
    } = options;
    
    const hasSpokenRef = useRef(false);

    useEffect(() => {
        if (!enabled || hasSpokenRef.current) return;

        // Check if speech synthesis is available
        const synth = window.speechSynthesis;
        if (!synth) return;

        // Cancel any ongoing speech
        synth.cancel();

        // Create utterance
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.volume = volume;
        utterance.lang = lang;

        // Mark as spoken
        hasSpokenRef.current = true;

        // Speak
        synth.speak(utterance);

        return () => {
            synth.cancel();
        };
    }, [enabled, text, rate, pitch, volume, lang]);

    return {
        cancel: () => {
            window.speechSynthesis?.cancel();
            hasSpokenRef.current = false;
        },
    };
}
