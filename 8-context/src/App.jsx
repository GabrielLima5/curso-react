import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageTwo from "./pages/PageTwo"
import PageThree from "./pages/PageThree"
import Navbar from './components/Navbar'
import UserContext from './context/UserContext'
import { useState } from 'react';
import ChangeUser from './context/ChangeUser'

import {TitleColorContext} from './context/TitleColorContext';

function App() {
  const [user, setUser] = useState(1)
  const saudacao = 'Oi!'

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <TitleColorContext.Provider value={{saudacao}}>
          <h1>CONTEXT API</h1>
          <BrowserRouter>
            <Navbar />
                <Routes>
                  <Route path="/1" element={<Home />} />
                  <Route path="/2" element={<PageTwo />} />
                  <Route path="/3" element={<PageThree />} />
                  <Route path="/changeuser" element={<ChangeUser />} />
                </Routes>
          </BrowserRouter>
        </TitleColorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
