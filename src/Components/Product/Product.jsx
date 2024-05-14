import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard/ProductCard'
import productStyle from './productStyle.module.css'
import Loader  from '../Loader/Loader'

function Product() {


     const [products , setProducts] = useState([])
     const [isLoading , setisLoading]=useState(false)


     useEffect(()=>{
            setisLoading(true)
            axios.get('https://fakestoreapi.com/products')
            .then((info)=>{
                  setProducts(info.data); 
                  setisLoading(false)}
            ).
            catch((err)=>{
                  //console.log(err); 
                  setisLoading(false)}
            )
     },[])
  
  //console.log(products)
      return (
            <>
                  {
                        isLoading?<Loader />:<div className={productStyle.product__container}>
                        {
                              products.map((singleProduct)=>(
                              <ProductCard product={singleProduct} key={singleProduct.id} renderADD={true}/>
                              ))
                        }
                        </div>
                  }
            </>
            
          
      )
  
}

export default Product