import React from "react";
import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <p>Developed by Antero Júnior</p>
            <p className="social">
                <a href="https://www.github.com/anterojunior">
                    <i className="fa-brands fa-github fa-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/antero-arcanjo">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
            </p>
        </footer>
    )
}