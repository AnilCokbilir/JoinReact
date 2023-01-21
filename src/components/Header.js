import React from 'react';
import ProfilImg from '../assets/img/profil-img.png';
import Help from '../assets/img/icon-help-head.svg';
import './Header.css';

function Header() {
  return (
    <div className='pl-32 flex justify-between items-center h-24 shadow'>
      <h2 className='text-xl'>Kanban Project Management Tool</h2>
      <div className='flex'> 
          <img src={Help} alt="Help" />
          <img className='rounded-full ml-4 mr-8' src={ProfilImg} alt="ProfilImg" />
      </div>
    </div>
  )
}

export default Header
