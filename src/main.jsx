import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Ideas from './pages/Ideas';
import IdeaDetail from './pages/IdeaDetail';
import Experiments from './pages/Experiments';
import ExperimentDetail from './pages/ExperimentDetail';
import Events from './pages/Events';
import People from './pages/People';
import Principles from './pages/Principles';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'ideas', element: <Ideas /> },
      { path: 'ideas/:slug', element: <IdeaDetail /> },
      { path: 'experiments', element: <Experiments /> },
      { path: 'experiments/:slug', element: <ExperimentDetail /> },
      { path: 'events', element: <Events /> },
      { path: 'people', element: <People /> },
      { path: 'principles', element: <Principles /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
