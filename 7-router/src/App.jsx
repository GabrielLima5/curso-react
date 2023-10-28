import './App.css';

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About';
import Info from './pages/Info';
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar';
import Product from './pages/Product';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* Search Params */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* Rota dinamica */}
          <Route path="/products/:id" element={<Product />}/>
          {/* Nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* Setting 404 page */}
          <Route path="*" element={<NotFound />} />
          {/* Search */}
          <Route path="/search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
