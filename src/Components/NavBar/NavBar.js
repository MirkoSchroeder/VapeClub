import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logoVapeClub-removebg.png"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {

    const links = [
        { name: "DESCARTABLES", route: "descartables", id: 1 },
        { name: "PODS", route: "pods", id: 2 },
        { name: "KITS DE INICIO", route: "kits-de-inicio", id: 3 },
    ]
    
    return (
        <header className="bg-[#37373f] w-full">
            <div className="flex items-center justify-around px-0 py-4 sm:flex-col">
                <div className="area-logo">
                    <Link to="/"><img className="w-48" src={logo} alt="" /></Link>
                </div>

                <div>
                    <p className="paragraph-header flex sm:hidden">Bienvenido/a</p>
                </div>

                <Link to="/cart">
                    <CartWidget onCart={0} />
                </Link>
            </div>

            <nav>
                <ul className="navContainer mb-0 flex-wrap font-medium">
                    {links.map((element) => {
                        return (
                            <li className="navItem" key={element.id}>
                                <NavLink className='colorLinks' to={element.route}>{element.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar