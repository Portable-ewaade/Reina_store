import React from 'react'
import {hero} from "../../assets/data/data"


const Card = () => {
  return <>
   <section className='cards'>
        {hero.map((items) => (
            <div className="card" key={items.id}>
                <div className="left">
                    <img src={items.cover}  alt="" />
                </div>
                <div className="right">
                    <h4>{items.name}</h4>
                    <p>{items.items}</p>
                </div>
            </div>
        ))}
    </section>
    </>
}

export default Card