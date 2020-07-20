import React from 'react';
import social from '../images/linkedin.JPG';

function Footer(){

    return(
        <div className='footer' style={{textAlign:'center', padding:'2%'}}>
            <hr/>
            <div className='social' style={{padding:'1%'}}>
                <a href="http://www.linkedin.com/in/vincenzo-lagrotta-308362110" target='blank'><img src={social} alt="Linkedin" style={{width:'1.6%'}}/></a>
            </div>
            <hr/>
        </div>
    )
}

export default Footer;