import React, { useContext, useEffect, useState } from 'react'
import orderStyle from './orders.module.css'
import Layout from '../../Components/Layout/Layout'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/Data/DataProvider'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'


function Orders() {

  const [{user},dispatch]=useContext(DataContext)
  const [orders,setOrders]=useState([])

  useEffect(()=>{

    if(user){
           
           
        db.collection('users').doc(user.uid).collection('orders').orderBy('created','desc').onSnapshot((snapshot)=>{
          // console.log(snapshot)
          setOrders(snapshot.docs.map((doc)=>(
            {
              id:doc.id,
              data:doc.data()
            }
          )))
        })

    } else{
            setOrders([])
    }

  },[])
  return (
             
         <Layout>
              <div className={orderStyle.orders_container}>
                     <div className={orderStyle.order_container}>
                          <h2>Your Orders</h2>
                          {
                            orders?.length === 0 &&(
                              <div>you dont have order yet</div>
                            )
                          }
                          <div>
                                {
                                   orders?.map((eachOrder,index)=>{
                                   // console.log(eachOrder)
                                    return (
                                          <div key={index}>
                                            <hr />
                                             <p>Order ID : {eachOrder?.id}</p>

                                             {
                                              eachOrder?.data?.basket.map((order)=>(
                                                <ProductCard flex={true} product={order} key={order.id} />
                                              ))
                                             }
                                          </div>
                                    ) 
                                   })
                                }
                          </div>
                     </div>
              </div>
         </Layout>
       
  )
}

export default Orders