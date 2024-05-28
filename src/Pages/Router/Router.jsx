import React from 'react'

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Payment from '../Payment/Payment'
import Orders from '../Orders/Orders'
import Cart from '../cart/Cart'
import Results from '../Results/Results'
import ProductDetail from '../ProductDetail/ProductDetail'
import Auth from '../Auth/Auth'



import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe('pk_test_51PFbglP2gIPwTiJTqU7IfhuVyovGee5wgPKvkFMeW8ABSGMlmJneaH2w2FA4JkWR61o0VYimbV8GKi19PA0ctyZF00Mhw9t62a')

function Routing() {

      
  return (

        <Router >
               <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/auth' element={<Auth />} />
                     <Route path='payment' element={<ProtectedRoute msg={'you must log in to pay'}  redirect={'/payment'}><Elements stripe={stripePromise}><Payment /></Elements></ProtectedRoute>} />
                     {/* <Route path='payment' element={<Payment />} /> */}
                     <Route path='orders' element={<ProtectedRoute msg={'you must log in to access your orders'}  redirect={'/orders'}><Elements stripe={stripePromise}><Orders /></Elements></ProtectedRoute>} />
                     {/* <Route path='orders' element={<Orders />} /> */}
                     <Route path='cart' element={<Cart />} />
                     <Route path='category/:categoryType' element={<Results />} />
                     <Route path='products/:singleProductId' element={<ProductDetail />} />
               </Routes>
        </Router>
  )
}

export default Routing