import React, { useState } from "react";
import "./navbar.css";

const SideNavbar = () => {

   
    return (
        <>
            <div className="navbar-container" >
                <nav className="navbar">
                    <span><i className="fa-solid fa-house-user "></i></span>
                    <span><i className="fa-solid fa-circle-plus "></i></span>
                    <span><i className="fa-solid fa-list " ></i></span>
                </nav>
            </div>
        </>
    )
}

export default SideNavbar;

