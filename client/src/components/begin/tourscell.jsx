import React from 'react'

import CardTourCell from './card/tourcell.jsx'

export default function ToursCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                    fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                    Explora los mejores Tours en el Perú 2024
                </p>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <CardTourCell proporcional={proporcional}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <CardTourCell proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}