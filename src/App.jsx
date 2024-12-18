import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Categorie from './Components/Categorie';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/categorie">Categorie</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:routeName" element={<Shop />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/categorie" element={<Categorie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;