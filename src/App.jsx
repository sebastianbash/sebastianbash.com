import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Landing from './components/landing/Landing';
import Project from './pages/projects/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="*" element={<h2>Pagina no encontrada!</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
