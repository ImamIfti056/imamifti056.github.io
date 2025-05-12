import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
 import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Extracurricular from './components/Extracurricular.jsx';
import Projects from './components/Projects.jsx';
import Intro from './components/Intro.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import Skills from './components/Skills.jsx';
import About from './components/About.jsx';

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundPage />,
		children: [
      {
        path: '/',
        element: <Intro/>
      },
      {
        path: '/education',
        element: <Education/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/experience',
        element: <Experience/>
      },
      {
        path: '/extracurricular',
        element: <Extracurricular/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/skills',
        element: <Skills/>
      },
      {
        path: '/about',
        element: <About/>
      },
    ]
  }
]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
