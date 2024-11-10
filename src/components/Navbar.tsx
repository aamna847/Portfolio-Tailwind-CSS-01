import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Aamna Rana</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className="menuLink"><a href="#hero">Home</a></li>
            <li className="menuLink"><a href="#about">About</a></li>
            <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>
        <div className="md:hidden" onClick={toogleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> :
          <AiOutlineMenu size={30} />
          }
        </div>
      </div>


      {
        isMenuOpen && (
            <ul className="flex flex-col gap-4 mt-4 md:hidden">
              <li className="menuLink">
                <a href="#hero" onClick={toogleMenu}>Home</a>
              </li>
              <li className="menuLink">
                <a href="#about" onClick={toogleMenu}>About</a>
              </li>
              <li className="menuLink">
                <a href="#contact" onClick={toogleMenu}>Contact</a>
              </li>
            </ul>
      )
      }
    </div>
  )
}

export default Navbar
