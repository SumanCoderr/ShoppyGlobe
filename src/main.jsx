import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './components/PageNotFound.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Cart from './components/Cart.jsx'
import Product from './components/ProductList.jsx'
import ProductList from './components/ProductList.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: "/",
        element: <ProductList/>

      },
      {
        path: "/productdetails",
        element: <ProductDetails/>
      },
      {
        path: "/cart",
        element:<Cart/>
      }
    ],

    
  }
])

createRoot(document.getElementById('root')).render(

    <StrictMode>
      <RouterProvider router={appRouter}/>
    </StrictMode>,

  )
