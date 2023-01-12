import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Ansh</div>
            <span> Toggle </span>
        </div>
        <div className='n-right'>
        <div className= 'n-list'>
            <ul style={{listStyleType: 'none'}}>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
        </div>
        <button className='button'>
            Contact
        </button>
        </div>
    </div>
  )
}
