import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cv from './Pages/Cv';
import Contact from './Pages/Contact';
import WorkList from './components/WorkList';
import WorkDetails from './Pages/WorkDetails';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<WorkList />} />
        <Route path="/works/:id" element={<WorkDetails />} />
      </Routes>
    </div>
  );
}

export default App;
