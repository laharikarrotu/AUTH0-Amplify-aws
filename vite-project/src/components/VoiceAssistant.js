import { jsx as _jsx } from "react/jsx-runtime";
// src/components/VoiceAssistant.tsx
import { useState } from 'react';
import { Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAIResponse } from '../services/ai';
export function VoiceAssistant() {
    const [status, setStatus] = useState('idle');
    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.lang = 'en-US';
        recognition.onstart = () => setStatus('listening');
        recognition.onresult = async (event) => {
            const text = event.results[event.results.length - 1][0].transcript;
            setStatus('processing');
            const response = await getAIResponse(text);
            const speech = new SpeechSynthesisUtterance(response);
            speech.onend = () => {
                setStatus('listening');
                recognition.start();
            };
            window.speechSynthesis.speak(speech);
        };
        recognition.start();
    };
    return (_jsx(motion.button, { onClick: startListening, className: "p-4 bg-blue-500 rounded-full", children: _jsx(Mic, { className: "w-6 h-6 text-white" }) }));
}
