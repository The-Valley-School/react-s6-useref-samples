# VIDEO 04: UseRef - Ejemplo práctico collapsable

En este video vamos a realizar un componente “Collapsable”. Este componente recibirá en sus props los textos a mostrar tanto en título como en el desplegable.

Para la “apertura” modificaremos el HTML mediante useRef.

Nuestro componente completo quedará así:

```jsx
import React from "react";
import "./Collapsable.css";

const Collapsable = (props) => {

    console.log("PINTAMOS Collapsable");

    // Referencias a componentes
    const collapsableReference = React.useRef(null);

    // Funciones auxiliares
    const toggleCollapble = () => {
        // if (collapsableReference.current.classList.contains("collapsable--opened")) {
        //     collapsableReference.current.classList.remove("collapsable--opened");
        // } else {
        //     collapsableReference.current.classList.add("collapsable--opened");
        // }
        collapsableReference.current.classList.toggle("collapsable--opened");
    }

    return (
        <div className="collapsable" ref={collapsableReference}>
            <div className="collapsable__title" onClick={toggleCollapble} >{props.title}</div>
            <div className="collapsable__indicator">{">"}</div>
            <div className="collapsable__body">{props.body}</div>
        </div>
    );
}

export default Collapsable;
```
