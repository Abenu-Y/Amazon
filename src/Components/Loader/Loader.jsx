import React from 'react'

import {ClimbingBoxLoader} from 'react-spinners'

function Loader() {

  const style = {
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            height:'50vh'
           }

  return (
          <div  style={style}>
                   <ClimbingBoxLoader color="#36d7b7" />
          </div>
  )
}

export default Loader