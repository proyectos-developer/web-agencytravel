import React from 'react'

import CardExperiencia from './card/experiencia.jsx'

export default function Experiencias({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'start'}} >
                        Experiencias Cautivadoras
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div id='carouselExperiencia' className='carousel slide' data-bs-ride='carousel' 
                        style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                        <div className='carousel-inner' style={{width: '100%', height: 'auto'}}>
                            <div className='carousel-item active' style={{width: '100%', height: 'auto'}} data-bs-interval='3000'>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                </div>
                            </div>
                            <div className='carousel-item' style={{width: '100%', height: 'auto'}} data-bs-interval='3000'>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                </div>
                            </div>
                            <div className='carousel-item' style={{width: '100%', height: 'auto'}} data-bs-interval='3000'>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                    <CardExperiencia proporcional={proporcional}/>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-control-prev' type='button' data-bs-target='#carouselExperiencia' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'/>
                            <span className='visually-hidden'>Previous</span>
                        </div>
                        <div className='carousel-control-next' type='button' data-bs-target='#carouselExperiencia' data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'/>
                            <span className='visually-hidden'>Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}