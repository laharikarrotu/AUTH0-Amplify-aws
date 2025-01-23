import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useAuth } from '../contexts/AuthContext';
export function LoginButton() {
    const { isAuthenticated, login, logout, user } = useAuth();
    return (_jsx("div", { children: isAuthenticated ? (_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("span", { className: "text-sm text-gray-300", children: ["Welcome, ", user?.name || user?.email] }), _jsx("button", { onClick: () => logout(), className: "px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700", children: "Log Out" })] })) : (_jsx("button", { onClick: () => login(), className: "px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700", children: "Log In" })) }));
}
