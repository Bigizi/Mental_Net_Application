import React, { Component } from 'react';
import { MenuItem } from './MenuItem';
import './Navbar.css';
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className='NavBarItems'>
                <img src={Logo} alt=''/>
                <h1 className='logo'>Mental Net</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>

                    {MenuItem.map((item, index) => {
                        return(
                            <li key={index}>
                                
                                <Link to={`${item.url}`} className={item.cName}>
                                    {item.title}{item.btn}
                                </Link>
                                
                            </li>
                        )
                    })}

                </ul>
            </nav>
        )
    }
    
}

export default Navbar;