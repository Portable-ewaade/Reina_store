import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchItems from './SearchItems'
import { products } from '../../assets/data/data'

export const Hero = () => {
    const [value, setValue] = useState("")
    const onChange = (e) =>{
        setValue(e.target.value)
    }

    const onSearch = (key) => {
        setValue(key)
        console.log("search", key)
    }

  return (
    <>
        <section className='hero'>
            <div className="container">
                <h1>
                    <label>Over <span>6,500</span> Curated Design</label> <br />
                    <label>Resources, <span>Food & Beverages </span> Display</label>
                </h1>
                 <p>High-quality Design and Sample for personal or commmerial use contains 6k+ items in 100 categories.</p>
                 <div className="search">
                    <span>All Categories</span>
                    <hr /> 
                    <input type="text" placeholder='Search Products...' onChange={onChange} value={value}/>
                    <button onClick={() => onSearch(value)}>
                        <BiSearch className="searchIcon heIcon" />
                    </button>
                 </div>
                 <SearchItems product= {products} value={value} onSearch={onSearch}/>
                 <p>Examples: Cookies, Burger, Fries, Cakes, Fruit juice..</p>
            </div>
        </section>
    </>
 )

}
export default Hero