import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import { rootPaths } from '../router/paths';
import { rootRoutes } from '../router/routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
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
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
