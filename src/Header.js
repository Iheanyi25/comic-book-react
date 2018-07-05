import React from "react";
import "./Main.css";
import logo from './comic_logo.png'

class Header extends React.Component {
    
    render(){
        return (
            <header className= 'header'>
                <img src={logo} alt='Logo' />
                <ul>
                    <li className="links"><a href= "#">Latest</a></li>
                    <li className="links"><a href="#">A-Z</a></li>
                    <li className="links"><a href="#">Popular</a></li>
                    <li className="links"><a href="#">Distributor</a></li>
                    <li className="links"><a href="#">Genre</a></li>
                </ul>
                <button></button>
            </header>
        );
    }
}

export default Header;