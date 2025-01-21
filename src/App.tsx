import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyEvents } from './pages/MyEvents';

console.log

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meus-eventos" element={<MyEvents />} />
      </Routes>
    </>
  );
};

export default App;
