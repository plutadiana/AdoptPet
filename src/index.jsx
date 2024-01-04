import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./fonts/Baloo-Regular.ttf";
import { CartProvider } from './contexts/cart.context';
import { UserContext, UserProvider } from './contexts/user.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>  
  </React.StrictMode>
);


