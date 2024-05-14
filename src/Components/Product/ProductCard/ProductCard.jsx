import React, { useContext } from 'react'

import Rating from '@mui/material/Rating'
import Currency from '../CurrentCurrency'
import cardStyle from './proCardstyle.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Data/DataProvider'
import {Type} from '../../../Utility/action.type'

function ProductCard({product,flex,rendDescr,renderADD}) {
   
  const {image,title,id,rating,price,description}=product;

  const[state, dispatch] = useContext(DataContext)
  
 //console.log(state)

  const addToCart =()=>{
      
       dispatch({
              type:Type.ADD_TO_BASKET,
              item:{
                  image,title,id,rating,price,description
              }
            })

  }

  return (
            <div className={`${cardStyle.card__container} ${flex ? cardStyle.product__flexed :''}`}>

                    <Link to={`/products/${id}`}><img src={image} alt=""/></Link>

                    <div>

                            <h3>{title}</h3>
                            {rendDescr && <div style={{maxWidth:'750px'}}>{description}</div>}

                            <div className={cardStyle.card__rating}>
                                <Rating  value={rating?.rate} precision={0.1}/>
                                <small>{rating?.count}</small>
                            </div>

                            <div>
                                <Currency amount={price} />
                            </div>

                            {renderADD && <button className={cardStyle.button}  onClick={addToCart}>add to cart</button>}

                    </div>
            </div>
        )
        
}

export default ProductCard