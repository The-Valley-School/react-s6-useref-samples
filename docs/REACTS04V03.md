# VIDEO 03: UseRef - Ejemplo práctico calculadora hipoteca

En este video veremos cómo realizar una calculadora de hipotecas. No te preocupes porque la formula matemática que lo calcula te la vamos a entregar, es esta:

```jsx
const calculateMonthPayment = (houseValue, savings, annualInterest, numYears) => {
    const numMonths = numYears * 12;
    const annualInterestDecimal = annualInterest / 100;
    const monthlyInterest = annualInterestDecimal / 12;
    const moneyToAsk = houseValue - savings;
    const divider = (1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest;
    const monthPayment = moneyToAsk / divider;
    return monthPayment;
}
```

Lo que vamos a hacer ahora es recuperar los valores de diversos inputs mediante useRef.

Nuestro componente completo quedará así:

```jsx
import React from "react";
import "./MortgageCalcultator.css";

const MortgageCalcultator = () => {

    // Estados
    const [monthlyPayment, setMonthlyPayment] = React.useState(0);

    // Referencias a los inputs
    const houseValueRef = React.useRef();
    const savingsRef = React.useRef();
    const numYearsRef = React.useRef();
    const annualInterestRef = React.useRef();

    const getValuesAndCalculateMonthlyPayment = () => {

        const houseValue = houseValueRef.current.value;
        const savings = savingsRef.current.value;
        const annualInterest = annualInterestRef.current.value;
        const numYears = numYearsRef.current.value;

        const payment = calculateMonthPayment(houseValue, savings, annualInterest, numYears);
        setMonthlyPayment(payment);
    }

    const calculateMonthPayment = (houseValue, savings, annualInterest, numYears) => {
        const numMonths = numYears * 12;
        const annualInterestDecimal = annualInterest / 100;
        const monthlyInterest = annualInterestDecimal / 12;
        const moneyToAsk = houseValue - savings;
        const divider = (1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest;
        const monthPayment = moneyToAsk / divider;
        return monthPayment;
    }

    return (
        <div className="mortage-calculator">
            <h2>Calculadora de hipotecas</h2>

            {/* valor de la casa */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el valor de la casa:
                    <input ref={houseValueRef} placeholder="300000" type="number" name="houseValue" id="houseValue" />
                </label>
            </fieldset>

            {/* ahorros aportados */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el ahorros aportados:
                    <input ref={savingsRef} placeholder="30000" type="number" name="savings" id="savings" />
                </label>
            </fieldset>

            {/* plazo en años */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el plazo en años:
                    <input ref={numYearsRef} placeholder="30" type="number" name="numYears" id="numYears" />
                </label>
            </fieldset>

            {/* interés de la hipoteca (tipo fijo) */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el interés de la hipoteca (tipo fijo):
                    <input ref={annualInterestRef} placeholder="2" type="number" name="annualInterest" id="annualInterest" />
                </label>
            </fieldset>

            <button onClick={getValuesAndCalculateMonthlyPayment}>Calcular cuota mensual</button>

            <p>Tu cuota mensual será de: <strong>{monthlyPayment}</strong></p>
        </div>
    );

}

export default MortgageCalcultator;
```

