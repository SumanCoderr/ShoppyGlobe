import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//LazyLoading
const PageNotFound = lazy(() => import('./components/PageNotFound.jsx'))
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx'))
const Cart = lazy(() => import('./components/Cart.jsx'))
const ProductList = lazy(() => import('./components/ProductList.jsx'))
const Home = lazy(() => import('./components/Home.jsx'))
const CheckOut = lazy(() => import('./components/CheckoutOut.jsx'))

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Suspense fallback={<div >Loading...</div>}><PageNotFound/></Suspense> ,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}><Home/></Suspense>
        )

      },
      {
        path: "/productlist",
        element: (
          <Suspense fallback={<div>Loading...</div>}><ProductList/></Suspense>
        )
      },
      {
        path: "/productdetails/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}><ProductDetails/></Suspense>
        ) 
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}><Cart/></Suspense>
        ) 
      },
      {
        path: "/checkout/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}><CheckOut/></Suspense>
        )
      },
      
    ],

    
  }
])

createRoot(document.getElementById('root')).render(

    <StrictMode>
      <RouterProvider router={appRouter}/>
    </StrictMode>,

  )
