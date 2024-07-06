import React from 'react'
import '../links/Links.css'
import { NavLink } from 'react-router-dom'
import TopNavBar from '../components/navigation/topNavBar/TopNavBar'

const Links = ({ label, to, logo }) => {
    return (
        <div className="allLink">
            <NavLink className='nav-links' to={to}>
                
                <span className='combined'>{logo} {label}</span>
            </NavLink>
            
        </div>
    )
}

export default Links
