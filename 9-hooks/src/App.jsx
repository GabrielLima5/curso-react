import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { SomeProvider } from './components/useContext';
import { useState } from 'react';

function App() {
  const [fruit, setFruit] = useState('banana')
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <SomeProvider value={{fruit, setFruit}}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </SomeProvider>
    </div>
  );
}

export default App;
