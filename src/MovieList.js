import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Movie from "./Movie";
import { ListLoader } from "./components/styled/MovielistLoader.styled";
import { animated, useSpring} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"


const variants = {
    visible: i => ({
      opacity: 1,
      scale:1,
      transition: {
        delay: i * 0.09,
      },
    }),
    hidden: { opacity: 0 , scale:0.8},
  }

  


const MovieList = () => {
    const icoRight = <FontAwesomeIcon icon={faAngleRight} />
    const icoLeft = <FontAwesomeIcon icon={faAngleLeft} />
    // const history = useHistory()
    let {pge_no} = useParams()
    // console.log(pge_no);
    // const handleGo = () =>{
    //     let inc = ++pg;
    //     console.log(inc);
    //     setPg(inc)
    //     history.push('/movieslist/'+inc)

    // }


    const {movies,activeGenre,setFiltered,filtered,API_IFO,PAGE_NO,handleNext,handlePrevious,isLoading} = useFetch(pge_no);
    // const {movies,setActiveGenre,activeGenre,setFiltered} = useFetch();
    

    const fade = useSpring({
        from: { opacity : 0},
        to:{opacity : 1}
    });
    
    useEffect(()=>{

        if(activeGenre === 0){
            setFiltered(movies)
            console.log(movies);
            return
        }
        const filtered = movies.filter((movie)=> movie.genre_ids.includes(activeGenre))
        setFiltered(filtered)
        console.log(filtered);

    },[activeGenre])


   const shDiv = ['','','','','','','','','','','','','','','','','','','','',]

    return ( 
        <animated.div style={fade}>
            
            {
                     isLoading && 
                     <ListLoader>
                         <div  className="mv-loader">   
                            {
                                shDiv.map((e,i)=>(
                                    <motion.div className="mvl-grid" key={i}>
                                        <div className="mg-e"></div>    
                                    </motion.div> 
                                ))
                            }
                         </div>


                     </ListLoader>
            }
           {/* <div>
                    <button onClick={()=> setActiveGenre(0)}>All</button>
                    <button onClick={()=> setActiveGenre(35)}>Commedy</button>
                    <button onClick={()=> setActiveGenre(28)}>Action</button>
                    
            </div> */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(216px,1fr))',gridGap: '15px', padding:'0 15px'}}>

                
                {   filtered &&
                    filtered.map((mv1,i)=>(
                        <motion.div 
                            custom={i}
                            variants={variants}
                            initial = "hidden"
                            animate="visible"
                            key={mv1.id}
                        >
                            <Movie   api_info={API_IFO}  data={mv1}/>

                        </motion.div>
                           
                        
                    ))
                }
            </div>
            <div className="paginate-next">
            

                <button id="bt-prv" onClick={handlePrevious}>{icoLeft}</button>
                <label>{PAGE_NO}</label>
                <button onClick={handleNext}>{icoRight}</button>
            </div>        
        </animated.div>
     );
}
 
export default MovieList;