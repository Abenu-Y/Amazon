import React,{useContext, useState} from 'react'
import { BsLadder } from 'react-icons/bs'
import Layout from '../../Components/Layout/Layout'
import paymentStyle from './payment.module.css'

import { DataContext } from '../../Components/Data/DataProvider'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import CurrentCurrency from '../../Components/Product/CurrentCurrency'

import {instance} from '../../Api/axios'
import {PulseLoader} from 'react-spinners'
import { db } from '../../Utility/firebase'
import { useNavigate } from 'react-router-dom'
import { Type } from '../../Utility/action.type'


function Payment() {

  const[{basket,user},dispatch]=useContext(DataContext)
  const [processing,setProcessing] = useState(false)
  const navigate = useNavigate()

  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
},0)

const total = basket.reduce((amount,item)=>{
      return item.price * item.amount + amount;
    },0)

      const stripe = useStripe();
      const elements = useElements();
      const [cardError, setCardError]=useState(null)

      const handleChange =(e)=>{
            //  console.log(e)
            e?.error?.message? setCardError(e?.error?.message):setCardError('')
      }

      const handlePayment = async(e) =>{
               e.preventDefault()

               try{
                     setProcessing(true)
                     const response =await instance({
                        method:"post",
                        url:`/payment/create?total=${total*100}`
                     })

                   //  console.log(response.data)
                  const clientSecret = response.data?.clientSecret;

                  const {paymentIntent} = await stripe.confirmCardPayment(clientSecret,
                        {
                              payment_method:{
                                     card:elements.getElement(CardElement),
                                    },
                  })
                  
                  await db.collection("users").doc(user.uid).collection('orders').doc(paymentIntent.id).set({
                        basket:basket,
                        amount:paymentIntent.amount,
                        created:paymentIntent.created
                  })

                  dispatch({type:Type.EMPTY_BASKET})

                  //console.log(confirmation)
                  navigate('/orders',{state:{msg:"you have placed new orders"}})
                  setProcessing(false)
               }
               catch (err){
                     console.log(err)
                     setProcessing(false)

               }
      }
   return (
       <Layout >
             <div className={paymentStyle.payment_header}>Checkout {totalItem}-items</div>

             <div className={paymentStyle.payment}>
                     <div className={paymentStyle.flex}>
                        
                          <h3>Delivery Address</h3>
                          <div>
                               <div>{user?.email}</div>
                               <div>321</div>
                               {/* <div>Unknown</div> */}
                          </div>
                          
                     </div>

                     <hr />

                     <div className={paymentStyle.flex}>
                            <h3>Review items and delivery</h3>
                            <div>
                              { basket?.map((item,index)=><ProductCard product={item} key={index}  flex={true}/>)}
                            </div>
                     </div>

                     <hr />

                     <div className={paymentStyle.flex}>
                          <h3>Payment methods</h3>
                          <div  className={paymentStyle.paymentCard_container}>
                                <div className={paymentStyle.payment_detail}>
                                      <form action="" onSubmit={handlePayment}>
                                          {cardError && <small style={{color:'red'}}>{cardError}</small>}
                                          <CardElement onChange={handleChange} />

                                        <div className={paymentStyle.payment_price}>
                                           <div>
                                                 <span style={{display:'flex', gap:'10px'}}>
                                                       <p>Total Order</p> | <CurrentCurrency amount = {total} />
                                                 </span>

                                           </div>

                                           <button type='submit'>{processing ? <div className={paymentStyle.loading}> <PulseLoader size={15} color='gray' /> <p> wait ...</p></div> :'Buy  Now'}</button>
                                            
                                        </div>
                                      </form>

                                </div>
                          </div>
                     </div>
             </div>
       </Layout>
  )
}

export default Payment