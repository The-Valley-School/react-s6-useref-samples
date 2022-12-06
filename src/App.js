import './App.css';
import InputSample from './InputSample/InputSample';
import Collapsable from './Collapsable/Collapsable';
import QrGenerator from './QrGenerator/QrGenerator';
import MortgageCalcultator from './MortgageCalcultator/MortgageCalcultator';

function App() {
  return (
    <div className="App">

      {/* Generador de QRs */}
      <QrGenerator></QrGenerator>

      <hr className="separator"></hr>
      
      {/* FAQS */}
      <Collapsable title="¿Cuál es el horario?" body="Abrimos de 9AM a 10PM"></Collapsable>
      <Collapsable title="¿Tenéis carta de alérgenos?" body="Por supuesto, cumplimos con la ley"></Collapsable>

      <hr className="separator"></hr>
      
      {/* calculadora de hipotecas */}
      <MortgageCalcultator></MortgageCalcultator>

      <hr className="separator"></hr>

      {/* Ejemplo de input simple */}
      <InputSample></InputSample>
    </div>
  );
}

export default App;
