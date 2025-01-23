// src/config/theme.ts
export const colorPalette = {
    primary: {
        light: '#8A4FFF', // Vibrant Purple
        main: '#6A5ACD', // Slate Blue
        dark: '#4B0082' // Deep Indigo
    },
    secondary: {
        light: '#FF6B9E', // Soft Pink
        main: '#FF4081', // Bright Pink
        dark: '#F50057' // Deep Pink
    },
    neutral: {
        lightest: '#F4F4F8', // Light Lavender Gray
        light: '#E0E0E0', // Light Gray
        main: '#9E9E9E', // Medium Gray
        dark: '#616161', // Dark Gray
        darkest: '#333333' // Charcoal
    },
    background: {
        default: '#F4F4F8', // Light Lavender Gray
        paper: '#FFFFFF' // White
    },
    text: {
        primary: '#333333', // Dark Charcoal
        secondary: '#666666' // Medium Gray
    }
};
// Reusable animation configurations
export const animationVariants = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    },
    scale: {
        initial: { scale: 0.95, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 1.05, opacity: 0 }
    },
    slideUp: {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 50, opacity: 0 }
    }
};
// Utility for generating consistent transitions
export const createTransition = (duration = 0.5, delay = 0, type = 'tween') => ({
    type,
    duration,
    delay
});
// Reusable animation props
export const defaultMotionProps = {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: animationVariants.fade
};
