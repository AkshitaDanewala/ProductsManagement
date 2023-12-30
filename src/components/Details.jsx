import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {

    const {title} = useParams()
    const navigate = useNavigate()

    const backhandler = ()=>{
        navigate(-1)
    }
  return (
    <div>

<h3>{title}</h3>
<button onClick={ backhandler}>Back</button>

    </div>
  )
}

export default Details