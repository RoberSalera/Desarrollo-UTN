import React, { useContext,createContext,useState,useEffect, Children } from "react";

interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated:false,
})
export function AuthProvider ({children}: AuthProviderProps){
    const [isAuthenticated,setIsAuthnticated] = useState(true);

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}    
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);