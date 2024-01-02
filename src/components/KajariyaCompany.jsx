import React from 'react'
import { useNavigate } from 'react-router-dom'

const KajariyaCompany = () => {
    const navigate = useNavigate()

    const backHandler = ()=>{
        navigate(-1)
    }
  return (
    <div>KajariyaCompany
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptatibus rem harum expedita in qui fugit officiis, molestiae iste sapiente repellat quibusdam placeat, eius, fugiat adipisci nihil? Officia minus repellendus laudantium maiores accusamus, odio suscipit quia mollitia quod impedit voluptatibus rem in et excepturi repudiandae eveniet natus, maxime esse illo.</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_w0j2FAPRyXRCY3XoJrsHrTrAhAd6Bb8w-Hkz11Ogw&s" alt="" />

<button onClick={backHandler}>Back</button>


    </div>
  )
}

export default KajariyaCompany