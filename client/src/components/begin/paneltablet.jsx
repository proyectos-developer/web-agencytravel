import React from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import SliderPrincipalTablet from './sliderprincipaltablet.jsx'
import ToursTablet from './tourstablet.jsx'
import AtraccionesTablet from './atraccionestablet.jsx'
import ActividadesTablet from './actividadestablet.jsx'
import ExperienciasTablet from './experienciastablet.jsx'
import BeneficiosTablet from './beneficiostablet.jsx'
import OpinionesTablet from './opinionestablet.jsx'
import RecomendacionesTablet from './recomendacionestablet.jsx'
import BlogTablet from './blogtablet.jsx'
import SuscripcionTablet from './suscripciontablet.jsx'

export default function BeginPanel({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperiorTablet proporcional={proporcional}/>
                </div>
                <SliderPrincipalTablet proporcional={proporcional}/>
            </div>
            <ToursTablet proporcional={proporcional}/>
            <AtraccionesTablet proporcional={proporcional}/>
            <ActividadesTablet proporcional={proporcional}/>
            <ExperienciasTablet proporcional={proporcional}/> 
            <BeneficiosTablet proporcional={proporcional}/> 
            <OpinionesTablet proporcional={proporcional}/>
            <RecomendacionesTablet proporcional={proporcional}/>
            <BlogTablet proporcional={proporcional}/>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute' style={{width: '100%', height: 'auto', top: -160 / proporcional}}>
                    <SuscripcionTablet proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}