import React from 'react'
import { platform } from '../../assets/data/data'

export const Platform = () => {
  return (
    <section className='platform'>
       <div className="inner">
       <h1>Talk to Us Here <br />at Reina Store</h1>

        {platform.map((items) => (
    <div className="platfrom" key={items.id}>
             <img src={items.cover}  alt="" />
    </div>
    ))}
       </div>
    </section>
  )
}

export default Platform