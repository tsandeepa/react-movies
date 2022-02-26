import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";


const useFetch = (pge_no,schterm) => {

    const [isLoading, setIsLoading] = useState(true)

    let [PAGE_NO,setPageno] = useState(pge_no);
    // console.log(PAGE_NO);


    const [movies, setMovies] = useState(null);
    const [filtered, setFiltered] = useState(null);
    const [activeGenre, setActiveGenre] = useState(0);
    

    const API_IFO ={
        TMDB_URL : 'https://api.themoviedb.org/3/movie/popular?api_key=9b1a1f4baeea9e54e73db4dff887c7ec&&page='+PAGE_NO,
        IMG_BASE : 'https://image.tmdb.org/t/p/w500',
        TMDB_SEARCH : 'https://api.themoviedb.org/3/search/company?api_key=9b1a1f4baeea9e54e73db4dff887c7ec&query='+schterm+'&page=1'
    }

    const history = useHistory()
    
    const handleNext = () =>{
        
        if(PAGE_NO >= 1  ){
            // just to make current movies disapier 
            setMovies(null)
            setFiltered(null)
            document.getElementById('bt-prv').disabled = false;
            let pgVlue = ++PAGE_NO;
            history.push('/movieslist/'+pgVlue)

            setPageno(pgVlue);
        } else{
            document.getElementById('bt-prv').disabled = true;
            
        }
        
    }

    const handlePrevious = () => {
        

        if(PAGE_NO <= 1 || PAGE_NO ==2 && PAGE_NO !== 0 ){
             // just to make current movies disapier 
             setMovies(null)
            setFiltered(null)

            document.getElementById('bt-prv').disabled = true;
            let pgVlue = --PAGE_NO;
            history.push('/movieslist/'+pgVlue)
            setPageno(pgVlue);
        } else{
            setMovies(null)
            setFiltered(null)

            document.getElementById('bt-prv').disabled = false;
            let pgVlue = --PAGE_NO;
            history.push('/movieslist/'+pgVlue)
            setPageno(pgVlue);
        }

    }

    const hadldeGenre = (id) => {

                console.log("genre fucnt "+ id);
                console.log(filtered);
    }

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
            fetch(API_IFO.TMDB_URL)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setMovies(data.results)
                setFiltered(data.results)
                setIsLoading(false)
            }
            )
        },0)

     
    },[PAGE_NO])

    




    return {movies,filtered,setFiltered,API_IFO,PAGE_NO,handleNext,handlePrevious,activeGenre,setActiveGenre,isLoading}
}
 
export default useFetch;