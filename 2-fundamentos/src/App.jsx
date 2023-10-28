// arquivo de estilo
import './App.css';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  // função legal
  return (
    <div className="App">
      <FirstComponent />
      <hr />
      {/* muito legall*/}
      <SecondComponent />
      <hr />
      <TemplateExpression />
      <hr />
      <Events />
      <hr />
      <Challenge />
    </div>
  );
}

export default App;
