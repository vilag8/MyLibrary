import React from 'react';
import logo from '../images/libri.png';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div className='navbar'>
            <img src={logo} className="App-logo" alt="logo" />    
            <nav className= 'navLists'>
                <ul>
                    <Link style={{textDecoration:'none'}} to="/"><li>Home</li></Link>
                    <Link style={{textDecoration:'none'}} to="/about"><li>About</li></Link>
                </ul>      
            </nav>
        </div>
    )
}

export default Nav;