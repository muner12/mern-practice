import { useEffect,useState } from "react";

export const storeTokenInLs=(token)=>{
    return localStorage.setItem('token', token);
}


export const print=(...data)=>{
    return console.log(data);
}


//custom hook

const useFetch=async(url,option={})=>{
    const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [ok, setOk] = useState(false);

    useEffect(()=>{

        const fetchData=async()=>{
                try {
                setLoading(true);
                 let response=await fetch(url,option);
                 if(response.ok)setOk(response.ok);
                 const result=await response.json();
                 setData(result);
                 setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                    
                }


        }
fetchData();
    },[url,option]);

    return {data,loading,ok,error}
}