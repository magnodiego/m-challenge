import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import { rootPaths } from '../router/paths';
import { rootRoutes } from '../router/routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <React.Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Navigate to={rootPaths.home} />} />
              {rootRoutes.map((route, key) =>
                <Route 
                  key={key} 
                  path={route.path} 
                  element={<route.component/>}
                />
              )}
              <Route path='*' element={<Navigate to={rootPaths.home} />} />
            </Routes>
          </React.Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
