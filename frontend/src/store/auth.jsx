import { createContext, useContext ,useEffect,useState} from "react";
import { storeTokenInLs,print } from "./functions.js";

//context api
const AuthContext=createContext();
export  const AuthProvider=({children})=>{
 const [token, setToken]=useState(localStorage.getItem('token'));

 const isLoggedIn=!!token;

 const logOutUser=()=>{
    setToken("");
    return localStorage.removeItem('token');
 }






    return <AuthContext.Provider value={{storeTokenInLs,print,isLoggedIn,logOutUser}}>
    {
        children
    }
    </AuthContext.Provider>
}







export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of provider");
    }
    return authContextValue;
}