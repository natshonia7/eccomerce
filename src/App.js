import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from "react-router-dom"
import ProductModules from './modules/ProductModules';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/products/:id" element={ <ProductModules/> } />

      </Routes>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
