import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Question from './components/Question';
import Choices from './components/Choices';
import Schedule from './components/Schedule';
import Confirmation from './components/Confirmation';
import './css/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/choices" element={<Choices />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;