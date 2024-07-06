import React from 'react';
import Links from '../../../links/Links';
import { FaUser } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import '../sideNavBar/SideBar.css'



const SideNavBar = () => {

    const Paths = [
        {
            to: '/settings',
            icons : <AiFillSetting/>,
            label:'SETTINGS'
        },
        {
            to: '/home',
            icons : <FaHome/>,
            label:'HOME'
        },
        {
            to: '/user',
            icons : <FaUser/>,
            label:'USERS'
        },
        {
            to: '/admin',
            icons : <RiAdminFill/>,
            label:'ADMIN'
        }

    ]

  return (

    <ul className='allLinks'>

        {
            Paths.map(( val, index)=>{
                return <li className='nav-link' key={index}><Links to={val.to} logo={val.icons}  label={val.label}/></li>
            })
        }
      
    </ul>

  )
}

export default SideNavBar
