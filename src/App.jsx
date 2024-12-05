
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import Category from './components/Category';
import Anillos from './components/Anillos';
import Pulseras from './components/Pulseras';
import Tobilleras from './components/Tobilleras';
import Collares from './components/Collares';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/categorias/anillos" element={<Anillos />} />
        <Route path="/categorias/pulseras" element={<Pulseras />} />
        <Route path="/categorias/tobilleras" element={<Tobilleras />} />
        <Route path="/categorias/collares" element={<Collares />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;

