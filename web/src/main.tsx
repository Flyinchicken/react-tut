import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CardWithForm } from './CardWithForm'
import { TableDemo } from './Table'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardWithForm />
    <TableDemo />
  </React.StrictMode>,
)
