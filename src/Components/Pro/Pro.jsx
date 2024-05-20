import React from 'react'
import ProData from './ProData/ProData'
import proStyle from './pro.module.css'


function Pro() {

    // console.log(ProData)
  return (
    <div  className={proStyle.pro_flex_container}>
          {
            ProData?.map((item)=>(
                 <div className={proStyle.pro_flex_child}>

                        <div className={proStyle.title}>{item.title}</div>
                        <div className={proStyle.pro_container} style={{display:'gird', gridTemplateColumns:`repeat(${item.set.length/2},1fr)`,gap:'30px 15px'}}>

                                        
                    {
                    item.set.map((element)=>(
                        <div className={proStyle.singlePro}>

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