import { useState } from "react/cjs/react.development";
import { useTransition, animated} from 'react-spring'

const Payment = () => {

    const blox= {
        background:'#fff',
        width:'90px',
        height:'90px',
    }

    const [isVisible, setIsvisible] = useState(false)
    const transition = useTransition(isVisible, {
        from:{x: 0, y:30, opacity: 0},
        enter:{x: 0, y:0, opacity: 1},
        leave:{x: 0, y:30, opacity: 0},
    });

    return ( 
        <div>
            <h2>This is payment</h2>

            <button onClick={()=>{setIsvisible(v=>!v)}}>Blick</button>

            {transition((style, item) => 
                item ? <animated.div style={style}>
                    <div style={blox}>M</div>
                </animated.div> : ''
            )}

        </div>
     );
}
 
export default Payment;