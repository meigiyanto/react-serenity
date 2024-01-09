import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthContextProvider } from "./context/authContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/frontend/style.css';
import './assets/backend/css/app.css';
import './assets/backend/css/metisMenu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
	duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  	<AuthContextProvider>
  		<App />
  	</AuthContextProvider>
  </React.StrictMode>
);
