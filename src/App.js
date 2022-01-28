import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} /> {/* exact prop는 경로를 정확히 매칭하고자 */}
        <Route path="/test" element={<h1>hi</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
