import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
