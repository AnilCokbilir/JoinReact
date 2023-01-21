import React from 'react';
import Joinlogo from '../assets/img/logo-white.svg';
import './Navbar.css'
import Boardicon from '../assets/img/icon-board.svg';
import AddTaskicon from '../assets/img/icon-add-task.svg';
import Contactsicon from '../assets/img/icon-contacts 13.svg';
import Summaryicon from '../assets/img/icon-summary.svg';
import Legalicon from '../assets/img/icon-legal.svg'

function Navbar() {
  return (
    <div className='h-screen w-52 bg-Color flex flex-col items-center justify-around'>
      <img className='joinlogo' src={Joinlogo} alt="Joinlogo" />
      <div className="links w-full">
        <a href="#" className='flex items-center justify-center py-3 text-white'><img className='mr-4' src={Summaryicon} alt="Summary" /><span className='text-left w-24'>Summary</span></a>
        <a href="#" className='flex items-center justify-center py-3 text-white'><img className='mr-4' src={Boardicon} alt="Board" /><span className='text-left w-24'>Board</span></a>
        <a href="#" className='flex items-center justify-center py-3 text-white'><img className='mr-4' src={AddTaskicon} alt="Add Task" /><span className='text-left w-24'>Add Task</span></a>
        <a href="#" className='flex items-center justify-center py-3 text-white'><img className='mr-4' src={Contactsicon} alt="Contacts" /><span className='text-left w-24'>Contacts</span></a>
      </div>
      <div className="legal w-full">
        <a href="#" className='flex items-center justify-center py-3 text-white'><img className='mr-4' src={Legalicon} alt="Legal" /><span className='text-left w-24'>Legal notice</span></a>
      </div>
    </div>
  )
}

export default Navbar
