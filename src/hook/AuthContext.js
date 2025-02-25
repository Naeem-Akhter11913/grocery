import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
const AuthContext = createContext(null);

// Auth Provider Component
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (token) {
            setValid(true);
        }
    }, [token])

    const login = () => {
        setToken("newToken");
        setValid(true);
        navigate('/dashboard');
    };

    const updateToken = (newToken) => {
        setToken(newToken);
    };

    // Logout function to clear token
    const logout = () => {
        setToken(null);
    };

    useEffect(() => {
        if (!valid) {
            setValid(false);
            navigate('/login');
        }
    }, [valid, navigate]);

    return (
        <AuthContext.Provider value={{ token, login, logout, updateToken, setToken, valid }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};