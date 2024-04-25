import React from 'react'

import icono_star_yellow from '../../../assets/iconos/icono_calificacion_yellow_96.png'

export default function CardOpinionCell({proporcional}) {

    return (
        <div className='shadow rounded' style={{width: '90%', height: 'auto', padding: 30 / proporcional, background: '#efefef', border: '1px solid #bdbdbd'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='rounded-circle' style={{width: 64 / proporcional, height: 64 / proporcional, background: 'rgba(23, 43, 222, 0.6)', marginRight: 20 / proporcional}}>
                        <p style={{fontSize: 30 / proporcional, lineHeight: `${64 / proporcional}px`, color: 'white', cursor: 'default', fontWeight: 600, marginBottom: 0 / proporcional,
                            fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                            J
                        </p>
                    </div>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <div style={{width: 'auto', height: 64 / proporcional, marginBottom: 10 / proporcional}}>
                            <div style={{width: 'auto', heght: 29 / proporcional, marginBottom: 5 / proporcional}}>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${29 / proporcional}px`, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 600, marginBottom: 0 / proporcional,
                                    fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                    Juan Vargas...
                                </p>
                            </div>
                            <div className='d-flex' style={{width: 'auto', height: 30 / proporcional}}>
                                <div className='rounded' style={{width: 30 / proporcional, height: 30 / proporcional, background: '#bdbdbd', marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 600, marginBottom: 0 / proporcional,
                                    fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                    Páis
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                            <img src={icono_star_yellow} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_yellow} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_yellow} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_yellow} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_yellow} style={{width: 24 / proporcional, height: 24 / proporcional}}/>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 500, marginBottom: 0 / proporcional,
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                        Day trip: Huacachina, Islas Ballestas con Buggy y Sandboard desde Lima 2024
                    </p>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(39, 39, 39)', cursor: 'default', fontWeight: 500, marginBottom: 0 / proporcional,
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                        El tour es imprensindilbe al ir a Lima, vale la pena cada centavo utilizado. El guía Fernando es muy...
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#bdbdbd', cursor: 'default', fontWeight: 500, marginBottom: 0 / proporcional,
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                        Publicado el 10 de Marzo del 2024
                    </p>
                </div>
            </div>
        </div>
    )
}