import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram" element={<div className="p-8">Instagram Page</div>} />
        <Route path="/faq" element={<div className="p-8">FAQ Page</div>} />
        <Route path="/apply" element={<div className="p-8">Apply Page</div>} />
      </Routes>
    </Router>
  );
};

export default App; 