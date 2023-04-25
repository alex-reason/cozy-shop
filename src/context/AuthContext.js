import { createContext, useState, useEffect } from 'react';
import { authChangeListener, createUserDocFromAuth  } from '../firebase/config';

export const AuthContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsub = authChangeListener((user) => {
            if (user) {
                createUserDocFromAuth(user)
            }
            setCurrentUser(user);
        })
        return unsub;
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}