import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';
import brain from'./brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>    
            <Tilt className="Tilt br2 shadow-3" options={{ max : 80 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '2px'}}alt='logo' src ={brain}/> </div>
            </Tilt>
        </div>
    );
}
export default Logo;