import React from 'react'

import {ClimbingBoxLoader} from 'react-spinners'

function Loader() {
  return (
    <div  style={{
         display:'flex',
         justifyContent:'center',
         alignContent:'center',
         height:'50vh'
    }}
     >
         <ClimbingBoxLoader color="#36d7b7" />
    </div>
  )
}

export default Loader