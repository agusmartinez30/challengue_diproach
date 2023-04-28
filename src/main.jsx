import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Categoria from './components/categoria/Categoria.jsx';
import SubCategoria from './components/sub_categoria/SubCategoria.jsx';
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-category",
    element: <Categoria />,
  },
  {
    path: "/create-subcategory",
    element: <SubCategoria />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
