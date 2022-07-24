import React, { Component } from 'react';
import { Button } from '../Button';
import { Menuitems } from "./Menuitems";
import './Navbar.css'
class Navbar extends Component{
    state={ clicked:false}

    handleClick=() =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Portfolio< i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i classname={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :'nav-menu'}>
                    {Menuitems.map((item,index) =>{
                        return (
                            <li key={index}>
                                <a classname={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
        
                    
                </ul>
                <Button>Contact</Button>
            </nav>
        )
    }
}

export default Navbar