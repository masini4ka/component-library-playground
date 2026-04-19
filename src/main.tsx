import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { initBrandLoader } from './hooks/useBrandLoader';
import './styles/reset.css';

// Initialize brand loader before React renders
initBrandLoader();

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);