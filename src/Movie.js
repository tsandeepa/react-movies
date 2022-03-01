import { useHistory } from "react-router-dom";
import { animated, useSpring} from 'react-spring'
import { OneMovie } from './components/styled/Movie.styled'
import { motion } from "framer-motion"



const Movie = ({data, api_info}) => {
    // console.log(api_info);
    // console.log(api_info.IMG_BASE);

    const history = useHistory()
    const img_base = api_info.IMG_BASE;

    const handleClick = (id) =>{
        // console.log(id);
        history.push("/movie/"+id);
    }

    const fade = useSpring({
        from: { opacity : 0},
        to:{opacity : 1}
    });

    return ( 
        <motion.div
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },

          }}
          whileTap={{ scale: 0.9 }}
        >
            <animated.div style={fade}>
                <OneMovie>
                    <div onClick={()=>handleClick(data.id)} className="mv-box">
                        <img style={{width:"100%"}} src={img_base+data.poster_path} alt="" />
                        <h3>{data.title}</h3>
                        <p>{data.overview}</p>


                    </div>
                </OneMovie>
            </animated.div>
        </motion.div>
        
        
     );
}
 
export default Movie;
