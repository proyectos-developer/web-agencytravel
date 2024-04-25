import React from 'react'

import CardAtraccionCell from './card/atraccioncell.jsx'

export default function AtraccionesCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'start'}} >
                        Perú: principales atracciones
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div id='carouselAtracciones' className='carousel slide' data-bs-ride='carousel' 
                        style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                        <div className='carousel-inner' style={{width: '100%', height: 'auto'}}>
                            <div className='carousel-item active' style={{width: '100%', height: 'auto'}} data-bs-interval='3000'>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <CardAtraccionCell proporcional={proporcional}/>
                                </div>
                            </div>
                            <div className='carousel-item' style={{width: '100%', height: 'auto'}} data-bs-interval='3000'>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <CardAtraccionCell proporcional={proporcional}/>
                                </div>
                            </div>
                            <div className='carousel-item' style={{width: '100%', height: 'auto'}} data-bs-interval='3000'>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <CardAtraccionCell proporcional={proporcional}/>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-control-prev' type='button' data-bs-target='#carouselAtracciones' data-bs-slide='prev'>
                            <span className='carousel-control-prev-icon' aria-hidden='true'/>
                            <span className='visually-hidden'>Previous</span>
                        </div>
                        <div className='carousel-control-next' type='button' data-bs-target='#carouselAtracciones' data-bs-slide='next'>
                            <span className='carousel-control-next-icon' aria-hidden='true'/>
                            <span className='visually-hidden'>Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}