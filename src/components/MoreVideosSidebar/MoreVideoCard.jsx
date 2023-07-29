import React from 'react'
import './MoreVideosSidebar.css'
import { Link } from 'react-router-dom'

const MoreVideoCard = ({data}) => {
  return (
    <Link to={`/video/${data._id}`}>
    <div className='MoreVideoCard'>
        <img src={data?.thumbnail} alt={data?.title}/>
        <div>
            <h3>{data?.title}</h3>
            <p>{data?.creator}</p>
        </div>
    </div>
    </Link>
  )
}

export default MoreVideoCard