import { useEffect, useState, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { animated, useSpring, config} from 'react-spring'
import { MovieInfo } from "./components/styled/MovieDetail.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faStar } from '@fortawesome/free-solid-svg-icons'



import useFetch from "./useFetch";




const MovieDetails = () => {
    const calc = (x, y, rect) => [
        -(y - rect.top - rect.height / 5) / 10,
        (x - rect.left - rect.width / 5) /10,
        1.001
      ];
      const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const fadeUp = useSpring({
        from: { opacity : 0, marginTop: '10px'},
        to:{opacity : 1, marginTop:'0'}
        
    })

    const icoLeft = <FontAwesomeIcon icon={faAngleLeft} />
    const icoStar = <FontAwesomeIcon icon={faStar} />

    const {id} = useParams()
    // const urli = 'https://yts.mx/api/v2/movie_details.json?movie_id='+id;
    const urli = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=9b1a1f4baeea9e54e73db4dff887c7ec';

    const{API_IFO} = useFetch()

    const [mvInfo,setMovieinfo] = useState(null);
    const [imgUrl, setImageurl] = useState(null);
    const [BdUrl, setBdUrl] = useState(null);
    // const [isLoading, setIsLoading] = useState(true)


    const history = useHistory()


    useEffect(()=>{
        fetch(urli)
        .then(res => res.json())
        .then(data => {
            setMovieinfo(data)
            setImageurl(API_IFO.IMG_BASE+data.poster_path)
            setBdUrl(API_IFO.IMG_BASE+data.backdrop_path)
            console.log(data)
            // setIsLoading(false)
        })
    },[id])


    const handleBack = () => {
        console.log("backed");
        history.goBack()
    }
    // const Banner = ({ children }) => <div className="banner">{children}</div>;

    

    //movie poster spring animation

    // const configList = Object.keys(config);
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const preset = "molasses";

    
    const props = useSpring({ xys, config: config[preset] });


    
    
    

    return ( 

        <MovieInfo>
            {
            // isLoading && 
                // <div className="md-loading">LOADINGGGGGGGGGGGGGGGGG</div>
            
            }



            <animated.div style={fadeUp}> 

                
            




                <div className="bd-fade">
                    <div className="bf-overlay"></div>

                    <img src={BdUrl} alt="" />
                    <div id="particle-container">
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                    </div>
                </div>
                <div className="md-container" ref={ref}>
                    <animated.div 
                        style={{ transform: props.xys.to(trans) }}
                        onMouseLeave={() => set([0, 0, 1])}
                        onMouseMove={(e) => {
                        const rect = ref.current.getBoundingClientRect();
                        set(calc(e.clientX, e.clientY, rect));
                        }}
                    >
                        <img className="mi-poster" src={imgUrl} alt="" />
                    </animated.div>
                    <div className="md-right-info">
                        <button className="btn-mi-close" onClick={()=>handleBack()}>{icoLeft}</button>
                        <div>
                            <div className="user-rate">
                                <span>{icoStar}</span>
                                <label>{mvInfo && mvInfo.vote_average}</label>
                            </div>
                            <h4 className="mv-title">{mvInfo && mvInfo.title}  </h4>
                            <span className="mv-date">({mvInfo && mvInfo.release_date.slice(0,4)})</span>
                            <p className="mi-desc">{mvInfo && mvInfo.overview}</p>
                        </div>
                        


                    {/* <div ref={ref}>
                        <animated.div
                                className="ccard"
                                style={{ transform: props.xys.to(trans) }}
                                onMouseLeave={() => set([0, 0, 1])}
                                onMouseMove={(e) => {
                                const rect = ref.current.getBoundingClientRect();
                                set(calc(e.clientX, e.clientY, rect));
                                }}
                            />
                    </div> */}
                        
                    </div>
                </div>
            </animated.div>
            
        </MovieInfo>
        
     );
}
 
export default MovieDetails;