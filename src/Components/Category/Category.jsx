import React from 'react'
import Data from './constant/categoryData'
import CategoryCard from './Card/CategoryCard'
import categoryStyle from './category.module.css'


function Category ()  {
    //console.log(Data)
      return (
              <div className={categoryStyle.container} id='cat'>
                      {
                            Data.map((singleData,index)=>{

                                  return  <CategoryCard key={index} data={singleData} />

                            }
                                  
                            )
                      }
              </div>
      )
}

export default Category