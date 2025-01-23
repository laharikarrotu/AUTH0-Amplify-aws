import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
export function CallbackPage() {
    const { isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, isLoading, navigate]);
    return (_jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx("div", { className: "w-12 h-12 border-b-2 border-blue-600 rounded-full animate-spin" }) }));
}
