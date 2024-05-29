import React from 'react'
import './heroStyle.css'
import Button from './Button.js'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero_image'></div>
        <div className='hero_content'>
            <div className='hero_text'><h1>Your true companion in fitness jurney!</h1></div>
            <Button className='hero_button_primary' name="callButton" value= "Join Us" textClass="txt_lg txt_bold" />
            <Button className='hero_button_secondary' name="readMoreButton" value= "Read More" textClass="txt_lg txt_bold" />
        </div>
        
    
        <div className='hero_bg_div'></div>
    </div>
  )
}
