import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cv from './Pages/Cv';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
