import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbsup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'

export const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span> Hi! I Am</span>
                <span> Ansh Goyal</span>
                <span>A Full stack Developer With Excellent Skills in Programming, Web Development, Flutter Development, Competitive Programming. </span>
            </div>
            <button className='button i-button'>Hire me!</button>

            <div className='i-icons'>
               <a href={'https://github.com/anshgoyal1'}>
               <img src={Github} alt='Github' />
               </a>
                <a href={'https://www.linkedin.com/in/ansh-goyal-03936a191/'}>
                <img src={Linkedin} alt='Linkedin' />
                </a>
                <a href={'https://www.instagram.com/_._ansh_._12_.3/'}> 
                <img src={Instagram} alt='Instagram' />
                </a>
            </div>
        </div>
        <div className='i-right'>
            <img src={Vector1} alt='Vector1' className='i-vector1' />
            <img src={Vector2} alt='Vector2' className='i-vector2' />
            <img src={boy} alt='boy' className='i-boy' />
            <img src={glassesemoji} alt='glassesemoji' className='i-glassesemoji' />
            <div style={{top: '-4%', left: '55%'}}>
                <FloatingDiv image = {Crown} txt1 = "Software" txt2="Developer" />
            </div>
            <div style={{top: '57%'}}>
                <FloatingDiv image = {thumbsup} txt1 = "Competitive" txt2="Programmer" />
            </div>

            {/*blur divs*/}
            <div className='i-blur-divs' style={{background: "rgb(238 210 255)"}}></div>
            <div className='i-blur-divs' style={{background: "#C1F5FF", top: '17rem', width: '21rem',height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}