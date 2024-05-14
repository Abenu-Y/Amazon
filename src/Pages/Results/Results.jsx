import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import resultStyle from './results.module.css'
import { ProductUrl } from '../../Api/Api'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'
import Loader from '../../Components/Loader/Loader'


function Results() {

  const {categoryType} =useParams()
  const [categorydata, setCategoryData] =useState([])
  const [isLoading , setisLoading]=useState(false)


  useEffect(()=>{
            setisLoading(true)
             axios.get(`${ProductUrl}/products/category/${categoryType}`).then((res)=>{setCategoryData(res.data); setisLoading(false)}).catch((err)=>{; setisLoading(false)})
  },[])

  //console.log(categorydata)

  return (
       <Layout>
            <div>
                 <h1 style={{padding:'30px'}}>Results</h1>
                 <p style={{padding:'30px'}}>{`Category/ ${categoryType}`}</p>
                 <hr />
                {
                  isLoading ?<Loader /> :<div className={resultStyle.products_container}>
                     
                                                { categorydata?.map((product)=>(
                                                       <ProductCard  key={product.id} product={product} renderADD={true}/>
                                                ))
                                              
                                                }
                                        </div>
                }
            </div>
       </Layout>
  )
}

export default Results