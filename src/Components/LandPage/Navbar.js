import React, { Component } from 'react';
import { MenuItem } from './MenuItem';
import './Navbar.css';
import Logo from '../images/Logo.PNG'

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
                                
                                <a className={item.cName} href={item.url} onClick={_=>this._onClick( item.url)}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        )
    }
    /**
     * 
     * @param {Event} evt 
     */
    _onClick(url){
        if(url === '#login' || url === '#sign-up'){
            this.props.onClick();
        }
    }
    // _onClickSign(url){
    //     if (url === '#signup'){
    //         this.props.onClick();
    //     }
    // }
}

export default Navbar;