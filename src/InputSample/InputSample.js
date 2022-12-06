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
            <input autoFocus={true} ref={inputReference} type="text" placeholder="Introduce un nombre..." />
            <p>
                <button onClick={getInputValue} >Actualiza el valor</button>
            </p>
            <p>
                <button onClick={ () => inputReference.current.focus() } >Hacer foco para rellenar input</button>
            </p>
        </div>
    );
}


export default InputSample;
