import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='cherry-nav'>
        <Link to='/'><img className = 'cherry-logo' src = "https://res.cloudinary.com/marssantos/image/upload/v1656015333/Grill_food_Logo_k4cmoz.jpg"/></Link>
        <h1 className = 'cherry-title'>Cherry Smoke BBQ</h1>
        <Link className='menu-nav' to='/menu'>Menu</Link>
        <Link className='catering-nav' to='/cateringmenu'>Catering Menu</Link>
        <Link className='order-nav' to='/order'>Order Online</Link>
        <Link className='ourstory-nav' to='/ourstory'>Our Story</Link>
        

    
        </div>
        
    </div>
  )
}

export default Navbar