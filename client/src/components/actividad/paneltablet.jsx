import React from 'react'

import TituloActividadTablet from './tituloactividadtablet.jsx'
import FotosActividadTablet from './fotosactividadtablet.jsx'
import DetallesExperienciaTablet from './detallesexperienciatablet.jsx'
import ExperienciaTablet from './experienciatablet.jsx'
import ReservasCarritoTablet from './reservascarritotablet.jsx'
import InformativoTablet from './informativotablet.jsx'
import GaleriaTablet from './galeriatablet.jsx'
import OpinionesTablet from './opinionestablet.jsx'
import RecomendacionesTablet from './recomendacionestablet.jsx'
import ActividadesTablet from './actividadestablet.jsx'

export default function ActividadPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <TituloActividadTablet proporcional={proporcional}/>
            <FotosActividadTablet proporcional={proporcional}/>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <DetallesExperienciaTablet proporcional={proporcional}/>
                    <ExperienciaTablet proporcional={proporcional}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <ReservasCarritoTablet proporcional={proporcional}/>
                    <InformativoTablet proporcional={proporcional}/>
                </div>
            </div>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <GaleriaTablet proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <OpinionesTablet proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <RecomendacionesTablet proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <ActividadesTablet proporcional={proporcional}/>
        </div>
    )
}