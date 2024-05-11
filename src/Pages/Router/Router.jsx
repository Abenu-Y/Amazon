import React from 'react'

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from '../Home/Home'
import SignUp from '../Auth/SignUp'
import Payment from '../Payment/Payment'
import Orders from '../Orders/Orders'
import Cart from '../cart/Cart'
import Results from '../Results/Results'
import ProductDetail from '../ProductDetail/ProductDetail'

function Routing() {
  return (

        <Router >
               <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='auth' element={<SignUp />} />
                     <Route path='payment' element={<Payment />} />
                     <Route path='order' element={<Orders />} />
                     <Route path='cart' element={<Cart />} />
                     <Route path='category/:categoryType' element={<Results />} />
                     <Route path='products/:singleProductId' element={<ProductDetail />} />
               </Routes>
        </Router>
  )
}

export default Routing