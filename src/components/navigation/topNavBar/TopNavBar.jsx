import React from 'react'
import '../topNavBar/top.css'
import Pic from '/src/assets/download.jpg'

const TopNavBar = () => {
  return (
    <div>
      <div className="top">
        <div className="greet">Welcome To Sail Innovation Lab</div>
        <img src={Pic} alt="siteImage" className="image" />
      </div>
    </div>
  )
}

export default TopNavBar
