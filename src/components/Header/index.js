import React, { useState } from "react";
import Navbar from "../Navbar";
import './style.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <header className="header">
                <div className="browse" onClick={openMenu}>
                    {
                        isOpen  
                        ? <CloseIcon />
                        : <BrowseIcon />
                    }
                </div>

                <a href="/" className="logo">
                    <span>HBOfilmes</span>
                </a>

                <div className="greating">
                    Olá
                </div>
            </header>
            {
                isOpen && <Navbar />
            }
        </>
    )
}

function CloseIcon(){
    return(
        <div className="header-icon header-icon--close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="3.4375" y1="16.1434" x2="16.5809" y2="3.00003" stroke="#C8C8C8" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="3.41924" y1="3" x2="16.5626" y2="16.1434" stroke="#C8C8C8" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
        </div>
    )
}
function BrowseIcon(){
    return(
        <div className="header-icon header-icon--browse">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 3.5H18.02" stroke="#C8C8C8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 10.48H12.43" stroke="#C8C8C8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17.46H18.02" stroke="#C8C8C8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}
export default Header;