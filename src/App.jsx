import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h3>Hello from Home</h3>} />
      </Route>
    </Routes>
  );
}

export default App;
