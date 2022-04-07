import {  useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Nav } from "./components/styled/Nav.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import { BiMoviePlay } from "react-icons/bi";



<FontAwesomeIcon icon="fa-solid " />
const Navbar = ({themeChange}) => {
    const darkLight = <FontAwesomeIcon icon={faAdjust} />
    const xback = <FontAwesomeIcon icon={faAngleLeft} />
    

    let [term, setTerm] = useState(null)
    let [schMovies, setSchMovies] = useState(null)

    const [active, setActive] = useState(false);



    const TMDB_SCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=9b1a1f4baeea9e54e73db4dff887c7ec&language=en-US&query='+term+'&page=1'
    const IMG_BASE = 'https://image.tmdb.org/t/p/w500'

    // const {movies,setActiveGenre,activeGenre,setFiltered} = useFetch();


    // useEffect(()=>{

    //     if(activeGenre === 0){
    //         setFiltered(movies)
    //         console.log(movies);
    //         return
    //     }
    //     const filtered = movies.filter((movie)=> movie.genre_ids.includes(activeGenre))
    //     setFiltered(filtered)
    //     console.log(filtered);

    // },[activeGenre])


    const handleSearch = (e) =>{
        // console.log(e.target.value);
        setSchMovies([])
        setTerm(e.target.value)
        console.log(term);

        fetch(TMDB_SCH_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setSchMovies(data.results)
            if(e.target.value.length>1 ){
                setActive(true)
            } else{
                setActive(false)

            }
        })

    }

    // const history = useHistory()

    
    // const handleSListClick = (id) =>{
    //     console.log("logged"+id)
    //     history.replace("movie/"+id)
    // }
    

    const handleClose = () =>{
        setActive(false)
    }

    const handleSRclick = () =>{
        setActive(false)
    }
     
    const variants = {
        visible: i => ({
          opacity: 1,
          scale:1,
          transition: {
            delay: i * 0.1,
          },
        }),
        hidden: { opacity: 0 , scale:0.8},
        hover:{ scale: 1.06},
        tap:{scale: 0.9}


      }



    return ( 

        <Nav>
            <div className="tp-left">
                <h1> <BiMoviePlay/> Movie BRowse</h1>
                {/* <div>
                    <button onClick={()=> setActiveGenre(0)}>All</button>
                    <button onClick={()=> setActiveGenre(35)}>Commedy</button>
                    <button onClick={()=> setActiveGenre(28)}>Action</button>
                    
                </div> */}
                <div className="nav-menu">
                    <Link to="/">Home</Link>
                    <Link to="/movieslist/1">All Movies</Link>
                </div>
                
            </div>
            <div className="tp-right">
                
                <input onChange={(e)=>handleSearch(e)} placeholder="search" type="text" />
                <button className="btn-darkLight" onClick={themeChange}>{darkLight}</button>

            </div>
            
            {/* <p>{term}</p> */}
            <div className={`sch-ovly ${active ? "active" : "" }`}>
                <div className={"sch-movie-list"}>

                    <div className="sch-scroll">

                    
                        <button onClick={handleClose} className="sch-close">{xback}</button>


                        
                        {
                            schMovies && term.length > 1 &&
                            schMovies.map((sMovie,i)=>{
                                return(
                                        <Link onClick={handleSRclick} to={"/movie/"+sMovie.id} key={i}>

                                            <motion.div className="sch-mli"
                                            
                                                custom={i}
                                                variants={variants}
                                                initial = "hidden"
                                                animate="visible"
                                                whileHover="hover"
                                                whileTap="tap"
                                            >
                                                <img src={IMG_BASE+sMovie.poster_path} alt="" />
                                                <div>
                                                    <p>{sMovie.title}</p>
                                                    <label>{sMovie.release_date && sMovie.release_date.slice(0, 4)}</label>
                                                </div>
                                                

                                            </motion.div>
                                        </Link>
                                        
                                
                                
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </Nav>
     );
}
 
export default Navbar;