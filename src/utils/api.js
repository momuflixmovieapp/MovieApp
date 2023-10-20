import axios from "axios"

const BASE_URL="https://api.themoviedb.org/3";

// const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI0NDIxNjVmYTVkNmM3NzE1YjRiMGM5MmExNmE1MiIsInN1YiI6IjY0YzExZGE5MTNhMzIwMDBlMjFhOTY5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y003JNaadauBjbj-MbDSjwITF2QAnyxrqK80Psr1APc";
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;

const headers={
    Authorization: "bearer " +TMDB_TOKEN,
};

export  const FetchDataFromApi=async(url,params)=>{
    try{

        const {data}=await axios.get(BASE_URL +url,{
            headers,
            params
        });
        return data;

    }catch(error){
         console.log(error);
         return error;
    }
};

