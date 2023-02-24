# VIDEO 05: UseRef - Ejemplo generador de QRs

En este video vamos a realizar un pequeño generador de QRs, para ello lo primero que vamos a hacer es instalar la siguiente librería:

<https://www.npmjs.com/package/qrcode-generator>

Para ello ejecutaremos el comando:

```jsx
npm i qrcode-generator
```

Posteriormente crearemos un componente que importe la librería 

```jsx
import qrcode from "qrcode-generator";
```

Y que genere un QR recogiendo el texto que haya en el input de texto mediante useRef:

```jsx
const generateQr = () => {
    const qr = qrcode(4, 'L');
    qr.addData(inputReference.current.value);
    qr.make();
    qrReference.current.innerHTML = qr.createImgTag();
}
```

El código completo de nuestro componente quedará así:

```jsx
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
```
