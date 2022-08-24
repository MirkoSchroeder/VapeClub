import React from "react";
import { Link } from "react-router-dom"
import imgWsp from '../../assets/whatsapp.svg'
import imgIg from '../../assets/instagram.svg'

const Footer = () => {
    return (
      <footer className="px-3 py-8 bg-[#37373f] text-gray-50">
          <div className="flex flex-col">
              <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
              </div>
              <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                <a href="/" className="text-white font-semibold"><p>Inicio</p></a>
                <Link className="text-white font-semibold" to="/preguntas-frecuentes">FAQ</Link>
                </nav>
                <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
                <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                    <Link to="/" target="_blank"><img className="w-[32px] h-[32px] text-xl" fill="currentColor" src={imgWsp} alt="whatsapp" /></Link>
                    <Link to="#" className="ml-4"></Link>
                    <a href="https://www.instagram.com/vapeclub_cba/" target="_blank" without rel="noreferrer"><img className="w-[32px] h-[32px] text-xl" fill="currentColor" src={imgIg} alt="instagram" /></a>
                </div>
                <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                </div>
                <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                    <span className="text-white font-semibold">
                        © 2022
                    </span>
                    <span className="mt-7 md:mt-1 text-white font-semibold">
                        Vape Club Córdoba
                    </span>
                </div>
              </div>
          </div>
      </footer>
    )
}

export default Footer