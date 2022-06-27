import { useState } from "react";
import Hello from "./Hello";

function Contenedor (){
    const [ name, setName ] = useState("World")
    return (
        <>
            <Hello name= {name}></Hello>
            <button onClick={() => setName("mundo")}>Click me!</button>
        </>
    )
}

export default Contenedor;