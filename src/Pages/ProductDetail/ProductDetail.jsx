import React, { useState,useEffect } from 'react'
import productDetailStyle from './productDetail.module.css'
import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { ProductUrl } from '../../Api/Api'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'
import Loader from '../../Components/Loader/Loader'


function ProductDetail() {
  const [singleProduct, setSingleProduct]=useState([])
  const [isLoading , setisLoading]=useState(false)
  const {singleProductId} =useParams()
//   console.log(singleProduct)

  useEffect(()=>{
       setisLoading(true)
       axios.get(`${ProductUrl}/products/${singleProductId}`)
       .then((res)=>{setSingleProduct(res.data); setisLoading(false)})
       .catch((err)=>{console.log(err); setisLoading(false)})

  },[])

//   console.log(singleProduct)
  return (
        <Layout>
             
             {isLoading?<Loader /> :<ProductCard product={singleProduct} flex={true} renderADD={true} rendDescr={true} />}

        </Layout>
  )
}

export default ProductDetail