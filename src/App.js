import React from 'react';
import './App.css';
import './components/Calculator/index.css';
import './components/Collapse/index.css';
import { TestDescription } from './components/Descriptions/TestDescription';
import { CalculatorDescription } from './components/Descriptions/CalculatorDescription';
import Calculator from './components/Calculator/index';
import { CollapseDescription } from './components/Descriptions/CollapseDescription';
import ComponentCollapse from './components/Collapse/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <TestDescription />
      <section>
        <CalculatorDescription />
        <div className="app-exercice ">
          <h3 className="app-exercise-title">Exercice to completed :</h3>
          <Calculator />
        </div>
      </section>
      <section>
        <CollapseDescription />
        <div className="app-exercice ">
          <h3 className="app-exercise-title">Exercice to completed :</h3>
          <ComponentCollapse />
        </div>
      </section>
    </div>
  );
}

export default App;
