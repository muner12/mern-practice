
import { createContext ,useContext,useState} from "react";

const FetchContext = createContext();

export const  FetchProvider=({children})=>{



    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
    return <FetchProvider.Provider value={{ data, loading, error,  }}>
    {
        children
    }
    </FetchProvider.Provider>

}

export const useFetchHook=()=>{
    const contextvalue=useContext(FetchContext);
    if (!contextvalue) {
        throw new Error('useFetch used outside of provider');
      }
    
      return contextvalue;
}