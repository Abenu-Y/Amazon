import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/Data/DataProvider'
import cartStyle from './cart.module.css'
import ProductCard  from '../../Components/Product/ProductCard/ProductCard'
import CurrentCurrency from '../../Components/Product/CurrentCurrency'
import { Link } from 'react-router-dom'
import {Type} from '../../Utility/action.type'

import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

function Cart() {


  const [{basket,user},dispatch]=useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount;
  },0)


//   console.log(basket)

  const increment = (item)=>{
       dispatch({
        type:Type.ADD_TO_BASKET,
        item,
       })
  }

  const decremet = (id)=>{
     dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
     })
  }

// console.log(basket.length)
  return (
    <Layout>
      <div className={cartStyle.cart__outer__container}>
           <div className={cartStyle.cart__inner__container} >
                 <h2> Your Shopping Bakset </h2>
                 <hr />
                 {
                    basket?.length === 0 ?(<p>No items found in your cart</p>):(
                      basket?.map((item,index)=>(
                            
                          <div className={cartStyle.cart_product} key={index}>
                                    <ProductCard key={index} product={item} rendDescr ={true} flex={true} renderADD={false} />

                                                {/* {console.log(item)} */}
                                    <div className={cartStyle.cartbtn_container}>
                                         <button className={cartStyle.cartbtn} onClick={()=>increment(item)}>
                                          <IoIosArrowUp size={20} />
                                         </button>
                                         <span>{item.amount}</span>
                                         <button className={cartStyle.cartbtn} onClick={()=>decremet(item.id)}>
                                          <IoIosArrowDown size={20}/>
                                         </button>
                                    </div>
                          </div>
                      ))
                    )
                 }
           </div>

           {
            basket?.length !== 0 && (
                 <div className={cartStyle.subtotal}>
                        <div  >
                             <p>
                                  Subtotal ({basket?.length} items)
                             </p>
                             <CurrentCurrency amount ={total} />

                             </div>

                             <span>
                                  <input type="checkbox" />
                                  <small>This order contains a gift </small>
                             </span>

                             <Link to ='/payment'>Continue to checkout</Link>
                        
                 </div>

            )
           }
      </div>
    </Layout>
  )
}

export default Cart