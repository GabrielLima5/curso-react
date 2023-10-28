import './App.css';
import MyComponent from './components/MyComponent';
import styles from './App.module.css'

function App() {
  const n = 15
  const allowGo = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      <hr />

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      <hr />

      {/* Inline CSS */}
      <p style={{color: "lightgreen", padding: "25px", borderTop: '1px solid red'}}>Esse elemento foi estilizado de forma inline</p>
    
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
    
      {/* Classes dinâmicas */}
      <h2 className={allowGo ? 'green' : 'red'}>Semáforo!</h2>
    
      {/* CSS Modules */}
      <h2 className={styles.pink}>Estilizado com CSS Modules</h2>
    </div>
  );
}

export default App;
