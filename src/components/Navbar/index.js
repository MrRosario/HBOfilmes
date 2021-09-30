import React from "react";
import './style.css'

const Navbar = () => {

    return (
        <aside className="navbar">
            <nav>
                <ul>
                    <li><a href="/">Inicial</a></li>
                    <li><a href="/favorites">Favoritos</a></li>
                </ul>
            </nav>
        </aside>
    )
}
export default Navbar;