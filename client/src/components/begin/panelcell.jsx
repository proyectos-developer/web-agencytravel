import React from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import SliderPrincipalCell from './sliderprincipalcell.jsx'
import ToursCell from './tourscell.jsx'
import AtraccionesCell from './atraccionescell.jsx'
import ActividadesCell from './actividadescell.jsx'
import ExperienciasCell from './experienciascell.jsx'
import BeneficiosCell from './beneficioscell.jsx'
import OpinionesCell from './opinionescell.jsx'
import RecomendacionesCell from './recomendacionescell.jsx'
import BlogCell from './blogcell.jsx'
import SuscripcionCell from './suscripcioncell.jsx'

export default function BeginPanel({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperiorCell proporcional={proporcional}/>
                </div>
                <SliderPrincipalCell proporcional={proporcional}/>
            </div>
            <ToursCell proporcional={proporcional}/>
            <AtraccionesCell proporcional={proporcional}/>
            <ActividadesCell proporcional={proporcional}/>
            <ExperienciasCell proporcional={proporcional}/> 
            <BeneficiosCell proporcional={proporcional}/> 
            <OpinionesCell proporcional={proporcional}/>
            <RecomendacionesCell proporcional={proporcional}/>
            <BlogCell proporcional={proporcional}/>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute' style={{width: '100%', height: 'auto', top: -185 / proporcional}}>
                    <SuscripcionCell proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}