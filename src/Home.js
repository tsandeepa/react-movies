
import Payment from "./Payment";
import { Container } from "./components/styled/Container.styled";
import {  animated, useSpring} from 'react-spring'
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";



const Home = () => {


    
    const fade = useSpring({
        from: { opacity : 0},
        to:{opacity : 1}
    });
    

    return ( 

        

        <Container >
            <animated.div style={fade}>
                <div className="home-desc">
                    <span className="m-ico"><BiMoviePlay/></span>

                    <h2 className="main-text">Start Bowsing your favourite movies</h2> 
                    <p>You can browse or serch for the <br/> movies by movies title</p>

                    <Link className="btn-all" to="/movieslist/1">All Movies</Link>
                </div>
                
                
                {/* <button onClick={}>Previous</button>
                <label htmlFor="">{}</label>
                <button onClick={}>Next</button> */}

                
            </animated.div>
        </Container>
     );
}
 
export default Home;