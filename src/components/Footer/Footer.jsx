import React from 'react'

//style
import './Footer.scss'

import HomeIcon from '../../assets/icons/home.png'
import PhoneIcon from '../../assets/icons/phone.png'
import UserIcon from '../../assets/icons/user.png'
import LinkedIcon from '../../assets/icons/linkedin.svg'
import InstaIcon from '../../assets/icons/instagram.svg'
import YoutubeIcon from '../../assets/icons/youtube.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'


const Footer = () => {
  return (
    <footer>
      <div className='menu-container'>
        <div className='menu'>
          <img src={HomeIcon}/>
          <p>Home</p>
        </div>
        <div className='menu'>
          <img src={UserIcon}/>
          <p>About me</p>
        </div>
        <div className='menu'>
          <img src={PhoneIcon}/>
          <p>Contact</p>
        </div>
      </div>
      <div className='social-container'>
        <div className='social'>
          <img src={LinkedIcon}/>
        </div>
        <div className='social'>
          <img src={InstaIcon}/>
        </div>
        <div className='social'>
          <img src={TwitterIcon}/>
        </div>
        <div className='social'>
          <img src={YoutubeIcon}/>
        </div>
      </div>
      <a href='https://www.figma.com/@sauldesigns'  className='credit'>UI Design by <span>Saul Design</span> </a>
    </footer>
  )
}

export default Footer