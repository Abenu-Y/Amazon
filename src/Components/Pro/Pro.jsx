import React from 'react'
import ProData from './ProData/ProData'
import proStyle from './pro.module.css'


function Pro() {

    // console.log(ProData)
  return (
    <div  className={proStyle.pro_flex_container}>
          {
            ProData?.map((item,i)=>(
                 <div className={proStyle.pro_flex_child} key={i}>

                        <div className={proStyle.title}>{item.title}</div>
                        <div className={proStyle.pro_container} style={{display:'grid',gridTemplateColumns:`repeat(${item.set.length/2},1fr)`,gap:'40px 20px'}}>

                                        
                    {
                    item.set.map((element,index)=>(
                        <div className={proStyle.singlePro} key={index}>

                            <div><img src={element.pic} alt="" /></div>
                            <div><p>{element.subTitle}</p></div>

                        </div>
                    ))
                        
                    }


                    </div>

                    <div className={proStyle.seeMore}>see more</div>
                 
                 </div>
            ))
          }
    </div>
  )
}

export default Pro