import React from 'react'

export default function CardExperienciaCell({proporcional}) {

    return (
        <div className='shado-lg rounded' style={{width: '90%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 450 / proporcional}}>
                <div className='rounded' style={{width: '100%', height: '100%', background: '#efefef'}}/>
                <div className='position-absolute' style={{width: '25%', height: 40 / proporcional, top: 40 / proporcional, left: 20 / proporcional}}>
                    <div className='rounded' style={{width: '100%', height: 40 / proporcional, background: 'rgba(23, 43, 222)', cursor: 'pointer'}}>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}} >
                            Actividad
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}