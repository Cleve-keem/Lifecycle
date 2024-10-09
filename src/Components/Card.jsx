import './Card.modulus.css';
import { useState, useEffect, useRef } from 'react';

const colors = ["purple", "tomato", "red", "blue", "orange"];

const Card = () => {
    const [ showPara, setShowPara ] = useState(true); // state to manage the paragraph changes
    const [ color, setColor ] = useState(colors[0]);

    const isMounted = useRef(false);

    useEffect(()=> {
        if(!isMounted.current){
            console.log("i am born");
            isMounted.current = true;
        }
        else{
            console.log("i am updated!")
        }

        return ()=> {
            console.log('i am cleaning')
        }
    });

    const randomizeArr = array => {
        const copyArr = [...array]
        for(let i = copyArr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * ( i + 1))
            ;[copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]]
        }

        return copyArr;
    }

    return (
        <div className='container'>
            <div style={{
                background: color
            }} className="card-wrapper">
                <div className="card">
                    <h1>This is a Card</h1>
                    {showPara && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A animi pariatur praesentium numquam dolor ratione repudiandae placeat totam vitae magni, vero reiciendis nesciunt. Temporibus obcaecati, dignissimos optio aperiam distinctio rem.</p>}
                    
                    <button
                        onClick={ () => {
                            setShowPara(!showPara)
                        }}
                    >Show Paragraph</button>
                    <button onClick={()=> {
                        const randomColor = randomizeArr(colors)[0]
                        setColor(randomColor)
                        console.log(randomColor);
                    }}>Change Background Color</button>
                </div>
            </div>
        </div>
    )
}
export default Card