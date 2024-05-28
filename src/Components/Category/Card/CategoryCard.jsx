import React from 'react'
import categoryCardStyle from './categorycard.module.css'
import { Link } from 'react-router-dom'


function CategoryCard  ({ data }) {
  return (
    <div className={categoryCardStyle.card_container}>
          
          <Link to={`/category/${data.name}`}>
                <span><h3>{data.title}</h3></span>
                <img src={data.imgLink} alt="" />
                <p>shop</p>
          </Link>
           
    </div>
  )
}

export default CategoryCard