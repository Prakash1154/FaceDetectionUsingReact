import React from 'react'
import './Facerecognition.css'
const Facerecognition = ({imageUrl,box}) => {
    console.log(box.topRow,box.rightCol,box.leftCol,box.bottomRow)
    return (
        <div className='center na'>
            <nav className='absolute mt2' >
                <img id='inputimage' alt='' src={imageUrl} width='300px' height='auto'/>
                
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol,
                    bottom:box.bottomRow, left:box.leftCol}}></div>
            </nav>
        </div>
    );
}
export default Facerecognition;