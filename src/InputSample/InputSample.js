import React from "react";
import "./InputSample.css";

const InputSample = () => {

    console.log("Pintamos componente InputSample");

    // Estado para almacenar el valor del input
    const [name, setName] = React.useState("");

    // UseRef para acceder al DOM
    const inputReference = React.useRef(null);

    // Función para recuperar el valor del input
    const getInputValue = () => {
        console.log("Vamos a recuperar el valor, esta es la referencia al elemento en el DOM:");
        console.log(inputReference.current);
        setName(inputReference.current.value);
    }

    return (
        <div className="input-sample">
            <p>El valor actual es {name}</p>
            <input ref={inputReference} type="text" placeholder="Introduce un nombre..." />
            <button onClick={getInputValue} >Actualiza el valor</button>
        </div>
    );
}


export default InputSample;
