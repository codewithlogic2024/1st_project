import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aos from 'aos';
import "aos/dist/aos.css";
import { IndexRouter } from './router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([...IndexRouter]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
Aos.init({
  offset: 0,
  duration: 1000,
});
