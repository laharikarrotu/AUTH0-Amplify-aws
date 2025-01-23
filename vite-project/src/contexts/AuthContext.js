import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout: auth0Logout, getAccessTokenSilently } = useAuth0();
    const login = () => loginWithRedirect();
    const logout = () => {
        const options = {
            logoutParams: {
                returnTo: window.location.origin
            }
        };
        auth0Logout(options);
    };
    const getToken = async () => {
        try {
            return await getAccessTokenSilently();
        }
        catch (error) {
            console.error('Error getting token:', error);
            return null;
        }
    };
    const value = {
        isAuthenticated,
        isLoading,
        user,
        login,
        logout,
        getToken
    };
    return (_jsx(AuthContext.Provider, { value: value, children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
