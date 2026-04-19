import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { initBrandLoader } from './hooks/useBrandLoader';
import './styles/reset.css';

initBrandLoader();

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);