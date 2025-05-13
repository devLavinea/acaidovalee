import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='fixed shadow-[0px_2px_5px_rgba(0,0,0,0.2)] w-full lg:h-[60px] h-[60px] md:h-[70px] flex justify-center items-center z-10 bg-[#ffd427]'>
      <nav className="w-[96%]  flex lg:justify-between md:justify-start justify-between   items-center">
        {/* Logo */}
        <div className="lg:w-[30%] md:w-[20%] md:mr-[30px] lg:mr-0  justify-center flex">
          <a href="/" className="m-[10px] cursor-pointer">
            <img className="w-[120px] h-[50px] " src={logo} alt="Logo" />
          </a>
        </div>

        {/* Botão de menu para mobile */}
        <div className="md:hidden z-20">
          <button onClick={toggleMenu} className="focus:outline-none text-[#6b1b6f] text-[40px] item-menu">
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Menu (Desktop + Mobile com toggle) */}
        <div
          className={` 
            absolute md:static top-[59px] left-0 w-full md:w-[50%] 
            bg-[#ffd427] md:bg-transparent transition-all duration-300 ease-in-out
            ${menuOpen ? 'block' : 'hidden'} md:flex
            justify-center items-center
          `}
        >
          <ul className="flex flex-col gap-4 lg:ml-0 md:ml-[30px] md:flex-row justify-around items-center w-full text-[#6b1b6f] font-medium text-[21px] p-4 md:p-0">
            <li className="mb-4 md:mb-0"><a className="item-menu" href="/">Início</a></li>
            <li className="mb-4 md:mb-0"><a className="item-menu" href="./cardapio.html">Cardápio</a></li>
            <li className="mb-4 md:mb-0"><a className="item-menu " href="#footer">Contatos/Localização</a></li>
            <a href="https://api.whatsapp.com/send?phone=5574999840828&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!">
              <button className='btn-default md:w-[130px] h-[35px] w-[240px]  ml-0 md:ml-[15px] md:text-[17px] text-[20px]'>Fazer Pedido</button>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
