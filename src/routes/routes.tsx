import React from 'react';
import { Route } from 'react-router-dom';
import JobRoles from './pages/JobRoles';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/jobRoles', element: <JobRoles /> },
];

const RenderRoutes = () => (
  <>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </>
);

export default RenderRoutes;
