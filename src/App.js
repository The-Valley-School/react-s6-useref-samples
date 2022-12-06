import './App.css';
import InputSample from './InputSample/InputSample';
import Collapsable from './Collapsable/Collapsable';
import MortgageCalcultator from './MortgageCalcultator/MortgageCalcultator';

function App() {
  return (
    <div className="App">
      
      {/* FAQS */}
      <Collapsable title="¿Cuál es el horario?" body="Abrimos de 9AM a 10PM"></Collapsable>
      <Collapsable title="¿Tenéis carta de alérgenos?" body="Por supuesto, cumplimos con la ley"></Collapsable>
      
      {/* calculadora de hipotecas */}
      <MortgageCalcultator></MortgageCalcultator>

      <hr className="separator"></hr>

      {/* Ejemplo de input simple */}
      <InputSample></InputSample>
    </div>
  );
}

export default App;
