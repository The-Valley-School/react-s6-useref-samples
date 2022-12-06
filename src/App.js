import './App.css';
import InputSample from './InputSample/InputSample';
import MortgageCalcultator from './MortgageCalcultator/MortgageCalcultator';

function App() {
  return (
    <div className="App">
      {/* calculadora de hipotecas */}
      <MortgageCalcultator></MortgageCalcultator>

      <hr className="separator"></hr>

      {/* Ejemplo de input simple */}
      <InputSample></InputSample>
    </div>
  );
}

export default App;
