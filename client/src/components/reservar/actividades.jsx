import React from 'react'

import CardActividad from './card/actividad.jsx'

export default function Actividades({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                    fontFamily: 'Roboto, sans-serif', textAlign: 'start'}} >
                    Otras experiencias
                </p>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <CardActividad proporcional={proporcional}/>
                        <CardActividad proporcional={proporcional}/>
                        <CardActividad proporcional={proporcional}/>
                        <CardActividad proporcional={proporcional}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <CardActividad proporcional={proporcional}/>
                        <CardActividad proporcional={proporcional}/>
                        <CardActividad proporcional={proporcional}/>
                        <CardActividad proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}