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