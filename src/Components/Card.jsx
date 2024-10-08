import './Card.modulus.css'
import { useState, useEffect, useRef } from 'react'

const colors = ["purple", "grey", "lightblue"];

const Card = () => {


    const [ showText, setShowText] = useState(true);
    const [ color, setColor] = useState(colors[0]);
    const isMountedRef = useRef(false);

    const randomizeArr = (arr) => {
        const cloned = [...arr];
        for(let i = cloned.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1))
            ;[cloned[i], cloned[j]] = [cloned[j], cloned[i]] 
        }

        return cloned
    }

    useEffect(() => {
        if(!isMountedRef.current){
            console.log("i am born") // do something before you render template or something.
            isMountedRef.current = true
        }
        else{
            console.log("i am updated") // do something when it is updated
        }

        return () => {
            console.log('cleaning up')  // do something before it leaves. maybe stop execution
        }
    });

    return(
        <div className="container">
            <div style={{
                background: color
            }} className="card_wrapper">
                <div className="card">
                    <h1>This is a business card</h1>
                    {showText && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni commodi ipsa dolor, quo quam sit. Autem, quasi nobis quae quidem necessitatibus iusto sunt blanditiis nulla? Aspernatur voluptatem temporibus odio?</p>}
                    <button
                     onClick={ () => {
                        setShowText(!showText)
                     }
                    }>
                        Show text
                    </button>
                    <button
                     onClick={ () => {
                        const randomColor = randomizeArr(colors)[0];
                        setColor(randomColor);
                     }
                    }>
                        Change Background Color
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card