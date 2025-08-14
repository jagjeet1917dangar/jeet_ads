import React from 'react'
import Workspaceprovider from './provider';

function Workspacelayout({children}) {
  return (
    <div>
        <Workspaceprovider>
            {children}
        </Workspaceprovider>
    </div>
  )
}

export default Workspacelayout;
