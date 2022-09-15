import React from 'react'
import {NavLink} from 'react-router-dom'
function Navigation({onChangePage}) {
  
  return (
    <div className='navbar'>
      <NavLink to = "/" />
    </div>
  )
}

export default Navigation