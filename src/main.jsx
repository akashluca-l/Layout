  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'

  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";

  import HomeScreen from './Pages/HomeScreen.jsx';
  import ContactForm from './Component/ContactForm.jsx';



    const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [

        {path:"/", element:<HomeScreen/>},
        {path:"contact", element:<ContactForm/>}

      ]
    },
  ]);

  createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
