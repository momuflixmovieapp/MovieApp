import{useState,useEffect} from 'react'
import {FetchDataFromApi} from '../utils/Api'


const UseFetch=(url)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(null);
    const[error,setError]=useState(null);


    useEffect(()=>{
        setLoading("Loading");
        setData(null);
        setError(null);


        FetchDataFromApi(url).then((res)=>{
            setLoading(false);
            setData(res);
        }).catch((error)=>{
            setLoading(false);
            setError("Something went wrong");
        });

    },[url]);

    return{data,loading ,error}
}

export default UseFetch;

