import Movie from "./Movie";
import useFetch from "./useFetch";
import MovieList from "./MovieList"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Payment from "./Payment";
import { Container } from "./components/styled/Container.styled";
import { useTransition, animated, useSpring} from 'react-spring'



const Home = () => {


    const width = '1300px'
    
    const fade = useSpring({
        from: { opacity : 0},
        to:{opacity : 1}
    });
    

    return ( 

        

        <Container wi={width}>
            <animated.div style={fade}>
                <h1>This is home</h1> 
                <Payment/>
                {/* <button onClick={}>Previous</button>
                <label htmlFor="">{}</label>
                <button onClick={}>Next</button> */}

                
            </animated.div>
        </Container>
     );
}
 
export default Home;