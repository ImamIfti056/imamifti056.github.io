import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import NotFoundPage from './components/NotFoundPage.jsx';

const sectionRoutes = [
  '/',
  '/about',
  '/skills',
  '/education',
  '/projects',
  '/blogs',
  '/experience',
  '/extracurricular',
  '/contact',
];

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundPage />,
		children: sectionRoutes.map((path) => ({ path, element: null }))
  }
]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
