import React from "react";
import "./QrGenerator.css";
import qrcode from "qrcode-generator";

const QrGenerator = () => {
    // Referencias
    const inputReference = React.useRef();
    const qrReference = React.useRef();

    // Funciones auxiliares
    const sumbit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Prevenimos comportamiento por defecto");
        generateQr();
    }

    const generateQr = () => {
        const qr = qrcode(4, 'L');
        qr.addData(inputReference.current.value);
        qr.make();
        qrReference.current.innerHTML = qr.createImgTag();
    }

    return (
        <div className="qr-generator">
            <form onSubmit={sumbit}>
                <label htmlFor="url">Introduce una URL:</label>
                <input ref={inputReference} placeholder="https://google.es" name="url" id="url" type="text"/>
                <button type="submit">Generar QR</button>
            </form>

            <div ref={qrReference} className="qr-generator__image"></div>
        </div>
    );
}

export default QrGenerator;