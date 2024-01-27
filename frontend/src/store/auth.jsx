import { createContext, useContext ,useEffect,useState} from "react";
import { storeTokenInLs,print } from "./functions.js";

//context api
const AuthContext=createContext();
export  const AuthProvider=({children})=>{
 const [token, setToken]=useState(localStorage.getItem('token'));

 const [authUserData,setAuthUserData] =useState("");

 const isLoggedIn=!!token;

 const logOutUser=()=>{
    setToken("");
    return localStorage.removeItem('token');
 }


 //authentication of the user
 const fetchLoggedInUserData=async()=>{
    try{

        const data= await fetch("http://localhost:8080/api/auth/user",{
            method:"GET",
            headers:{"Authorization":`Bearer ${token}`}
        });
        if(data.ok){
            const response=await data.json();
          
            setAuthUserData(response.userData);
        }
       


    }catch(e){
        console.log(e);
    }
 }
 useEffect(()=>{
    fetchLoggedInUserData();
 },[])





    return <AuthContext.Provider value={{storeTokenInLs,print,isLoggedIn,logOutUser,authUserData}}>
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