import './Card.modulus.css'
import { useState, useEffect, useRef } from 'react'

const Card = () => {
    const [ showText, setShowText] = useState(true);
    const isMountedRef = useRef(false);

    useEffect(() => {
        if(!isMountedRef.current){
            console.log("i am born")
            isMountedRef.current = true
        }
        else{
            console.log("i am updated")
        }

        return () => {
            console.log('cleaning up')
        }
    })

    return(
        <div className="container">
            <div className="card_wrapper">
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
                </div>
            </div>
        </div>
    )
}
export default Card