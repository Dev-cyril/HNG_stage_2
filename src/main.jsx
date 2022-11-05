import React from 'react'
import Root from './routes/root'
import ReactDOM from 'react-dom/client'
import ContactMe from './routes/contacts'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: "contacts/",
    element: <ContactMe />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
