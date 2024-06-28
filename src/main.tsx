import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppExpense from './AppExpense.tsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppExpense />
  </React.StrictMode>,
)
