import React from 'react'
import './Choose.css';

const Choose = ({icon,title}) => {
  return (
    <div className='choose-item'> 
    {icon}
    <h3>{title}</h3>
    </div>
  )
}

export default Choose;