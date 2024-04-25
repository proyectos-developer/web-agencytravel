import React, { useState } from 'react'

import image_home_00 from '../../assets/images/image_home_499.png'
import icono_search from '../../assets/iconos/icono_search_white_96.png'

export default function SliderPrincipalTablet({proporcional}) {

    const [buscar_donde_ir, setBuscarDondeIr] = useState('')

    return (
        <div style={{width: '100%', height: 800 / proporcional, zIndex: 9}}>
            <div className='carousel slide' data-bs-ride='carousel' id='carouselSlideHome' style={{width: '100%', height: 800 / proporcional}}>
                <div className='carousel-inner' style={{width: '100%', height: 800 / proporcional}}>
                    <div className='carousel-item active'  style={{width: '100%', height: 800 / proporcional}}>
                        <div className='position-relative' style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${image_home_00})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'}}>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Roboto, sans-serif'}}>
                                        AGENCIA <br/>DE TOURS
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                    <input 
                                        type='default'
                                        className='form-control'
                                        style={{width: '60%', height: 60 / proporcional, fontSize: 20 / proporcional, color: '#efefef',
                                            borderTopLeftRadius: 8 / proporcional, borderBottomLeftRadius: 8 / proporcional}}
                                        value={buscar_donde_ir}
                                        onChange={(event) => setBuscarDondeIr(event.target.value)}
                                        placeholder='¿A donde quieres ir?'
                                        id={buscar_donde_ir}/>
                                    <div style={{width: 60 / proporcional, height: 60 / proporcional, background: 'rgb(23, 43, 222)', cursor: 'pointer',
                                        borderTopRightRadius: 8 / proporcional, borderBottomRightRadius: 8 / proporcional}}>
                                        <img src={icono_search} style={{width: 30 / proporcional, height: 30 / proporcional, margin: 15 / proporcional}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}