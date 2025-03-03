import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './components/PageNotFound.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Cart from './components/Cart.jsx'
import ProductList from './components/ProductList.jsx'
import Home from './components/Home.jsx'
import CheckOut from './components/CheckoutOut.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <PageNotFound/>,
    children: [
      {
        path: "/",
        element: <Home/>

      },
      {
        path: "/productlist",
        element:<ProductList/>
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails/>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/checkout/:id",
        element: <CheckOut/>
      },
      
    ],

    
  }
])

createRoot(document.getElementById('root')).render(

    <StrictMode>
      <RouterProvider router={appRouter}/>
    </StrictMode>,

  )
