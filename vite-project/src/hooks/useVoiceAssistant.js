import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
// Define possible voice commands
const VOICE_COMMANDS = {
    HOME: ['go home', 'homepage', 'main page'],
    PRODUCTS: ['show products', 'view products', 'product page'],
    CART: ['open cart', 'view cart', 'go to cart'],
    STORES: ['show stores', 'store directory', 'view stores']
};
export function useVoiceAssistant() {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // Text-to-Speech function for feedback
    const speak = useCallback((message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }, []);
    // Process voice command
    const processVoiceCommand = useCallback((command) => {
        const lowercaseCommand = command.toLowerCase();
        // Home Navigation
        if (VOICE_COMMANDS.HOME.some(cmd => lowercaseCommand.includes(cmd))) {
            navigate('/');
            speak('Navigating to home page');
            return;
        }
        // Products Navigation
        if (VOICE_COMMANDS.PRODUCTS.some(cmd => lowercaseCommand.includes(cmd))) {
            navigate('/products');
            speak('Showing product page');
            return;
        }
        // Cart Navigation
        if (VOICE_COMMANDS.CART.some(cmd => lowercaseCommand.includes(cmd))) {
            navigate('/cart');
            speak('Opening shopping cart');
            return;
        }
        // Stores Navigation
        if (VOICE_COMMANDS.STORES.some(cmd => lowercaseCommand.includes(cmd))) {
            navigate('/stores');
            speak('Showing store directory');
            return;
        }
        // Product Search
        const searchMatch = lowercaseCommand.match(/find (.*) product/i);
        if (searchMatch) {
            const productName = searchMatch[1];
            speak(`Searching for ${productName} product`);
            // Implement product search logic
            return;
        }
        // Fallback response
        speak('Sorry, I could not understand that command');
    }, [navigate, speak]);
    // Voice Recognition Setup
    const startVoiceRecognition = useCallback(() => {
        // Check browser support
        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        if (!SpeechRecognition) {
            setError('Speech recognition not supported in this browser');
            speak('Sorry, voice recognition is not supported');
            return;
        }
        // Create speech recognition instance
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        // Event Handlers
        recognition.onstart = () => {
            setIsListening(true);
            setError(null);
            speak('Listening...');
        };
        recognition.onresult = (event) => {
            // Safely access the first result
            if (event.results.length > 0) {
                const result = event.results.item(0);
                const transcript = result.item(0).transcript.trim();
                setTranscript(transcript);
                processVoiceCommand(transcript);
            }
        };
        recognition.onerror = (event) => {
            setError(`Speech recognition error: ${event.error}`);
            setIsListening(false);
            speak('There was an error with voice recognition');
        };
        recognition.onend = () => {
            setIsListening(false);
        };
        // Start recognition
        recognition.start();
    }, [processVoiceCommand, speak]);
    // Stop voice recognition
    const stopVoiceRecognition = useCallback(() => {
        setIsListening(false);
        speak('Voice recognition stopped');
    }, [speak]);
    // Browser support check on component mount
    useEffect(() => {
        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        if (!SpeechRecognition) {
            setError('Speech recognition not supported');
            speak('Voice assistant is not supported in your browser');
        }
    }, [speak]);
    return {
        transcript,
        isListening,
        error,
        startVoiceRecognition,
        stopVoiceRecognition
    };
}
// Voice Assistant Component
export function VoiceAssistant() {
    const { transcript, isListening, error, startVoiceRecognition, stopVoiceRecognition } = useVoiceAssistant();
    return (_jsxs("div", { className: "fixed z-50 bottom-4 right-4", children: [_jsx("button", { type: "button", onClick: () => isListening ? stopVoiceRecognition() : startVoiceRecognition(), className: `
          p-4 rounded-full shadow-lg 
          ${isListening
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-blue-500 hover:bg-blue-600'}
          text-white transition-colors duration-300
        `, children: isListening ? 'Stop Listening' : 'Start Voice Assistant' }), error && (_jsx("div", { className: "mt-2 text-sm text-red-500", children: error })), transcript && (_jsxs("div", { className: "mt-2 text-sm text-gray-600", children: ["Last command: ", transcript] }))] }));
}
