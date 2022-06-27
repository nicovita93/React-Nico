import { useState } from "react";

function Contador (){
    const [ num, setNum ] = useState(0);

    const sumar= () => {
        setNum (num + 1)
    }

    return (
        <>
            <p>{num}</p>
            <button onClick={sumar}>Suma!</button>
        </>
    )
}

export default Contador;