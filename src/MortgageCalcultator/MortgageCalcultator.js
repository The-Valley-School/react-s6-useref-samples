import React from "react";
import "./MortgageCalcultator.css";

const MortgageCalcultator = () => {

    // Estados
    const [monthlyPayment, setMonthlyPayment] = React.useState("0€");

    // Referencias a los inputs
    const houseValueRef = React.useRef();
    const savingsRef = React.useRef();
    const numYearsRef = React.useRef();
    const annualInterestRef = React.useRef();

    // Aux functions
    const getValuesAndCalculateMonthlyPayment = () => {
        const houseValue = houseValueRef.current.value;
        const savings = savingsRef.current.value;
        const annualInterest = annualInterestRef.current.value;
        const numYears = numYearsRef.current.value;

        const payment = calculateMonthPayment(houseValue, savings, annualInterest, numYears);
        const paymentFormatted = (Math.round(payment * 100) / 100).toFixed(2) + "€";

        setMonthlyPayment(paymentFormatted);
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

    // Increase / decrease values
    const increaseHouseValue = (ammout) => {
        const houseValue = parseInt(houseValueRef.current.value, 10);
        const newHouseValue = houseValue + ammout;
        houseValueRef.current.value = newHouseValue;
    }

    const increaseSavings = (ammout) => {
        const savingsValue = parseInt(savingsRef.current.value, 10);
        const newSavingsValue = savingsValue + ammout;
        savingsRef.current.value = newSavingsValue;
    }

    const increaseNumYearsValue = (ammout) => {
        const numYearsValue = parseInt(numYearsRef.current.value, 10);
        const newNumYearsValue = numYearsValue + ammout;
        numYearsRef.current.value = newNumYearsValue;
    }

    const increaseAnnualInterestValue = (ammout) => {
        const AnnualInterestValue = parseFloat(annualInterestRef.current.value, 10);
        const newAnnualInterestValue = AnnualInterestValue + ammout;
        const newAnnualInterestValueFixed = (Math.round(newAnnualInterestValue * 100) / 100).toFixed(2);
        annualInterestRef.current.value = newAnnualInterestValueFixed;
    }

    return (
        <div className="mortage-calculator">
            <h2>Calculadora de hipotecas</h2>

            {/* valor de la casa */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>Introduce el valor de la casa:</label>
                <div className="input-container">
                    <button onClick={() => increaseHouseValue(-5000)}>-</button>
                    <input ref={houseValueRef} defaultValue="300000" placeholder="Introduce un valor, por ej 300000" type="number" name="houseValue" id="houseValue" />
                    <button onClick={() => increaseHouseValue(5000)}>+</button>
                </div>
            </fieldset>

            {/* ahorros aportados */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>Introduce el ahorros aportados:</label>
                <div className="input-container">
                    <button onClick={() => increaseSavings(-1000)}>-</button>
                    <input ref={savingsRef} defaultValue="30000" placeholder="Introduce tus ahorros, por ej 30000" type="number" name="savings" id="savings" />
                    <button onClick={() => increaseSavings(1000)}>+</button>
                </div>
            </fieldset>

            {/* plazo en años */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>Introduce el plazo en años:</label>
                <div className="input-container">
                    <button onClick={() => increaseNumYearsValue(-1)}>-</button>
                    <input ref={numYearsRef} defaultValue="30" placeholder="Introduce el num de años a pagar, por ej 30" type="number" name="numYears" id="numYears" />
                    <button onClick={() => increaseNumYearsValue(1)}>+</button>
                </div>
            </fieldset>

            {/* interés de la hipoteca (tipo fijo) */}
            <fieldset className="mortgage-calculator__fieldset">
                <label>Introduce el interés de la hipoteca (tipo fijo):</label>
                <div className="input-container">
                    <button onClick={() => increaseAnnualInterestValue(-0.01)}>-</button>
                    <input ref={annualInterestRef} defaultValue="2.50" placeholder="Introduce el interés de la hipoteca, por ej 2.5" type="number" name="annualInterest" id="annualInterest" />
                    <button onClick={() => increaseAnnualInterestValue(+0.01)}>+</button>
                </div>
            </fieldset>

            <button onClick={getValuesAndCalculateMonthlyPayment}>Calcular cuota mensual</button>

            <p>Tu cuota mensual será de: <strong>{monthlyPayment}</strong></p>
        </div>
    );

}

export default MortgageCalcultator;