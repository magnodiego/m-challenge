import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import { rootPaths } from '../router/paths';
import { rootRoutes } from '../router/routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={rootPaths.home} />} />
          {rootRoutes.map((route, key) =>
            <Route  key={key} path={route.path} component={route.component} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
