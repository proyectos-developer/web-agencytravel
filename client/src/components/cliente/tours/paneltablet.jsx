import React from 'react'

import MenuClienteLateralTablet from '../comun/menutablet.jsx'
import ToursRealizadosTablet from './toursrealizadostablet.jsx'

export default function ClienteToursRealizadosPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '29%', height: 'auto'}}>
                    <MenuClienteLateralTablet proporcional={proporcional}/>
                </div>
                <div style={{width: '1%', height: 'auto'}}>
                    <div style={{width: 4 / proporcional, height: '100%', background: 'rgb(23, 43, 222)'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '70%', height: 'auto'}}>
                    <ToursRealizadosTablet proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
