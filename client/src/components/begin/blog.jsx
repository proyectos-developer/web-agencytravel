import React, { useState } from 'react'

import CardBlog from './card/blog.jsx'

export default function Blog({proporcional}) {

    const [boton_ver_todas, setBotonVerTodas] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 300 / proporcional, paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 500, 
                fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                Todo sobre turismo en Perú
            </p>
            <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121', cursor: 'default', fontWeight: 700, 
                fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                Blog de Noticias
            </p>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <CardBlog  proporcional={proporcional}/>
                    <CardBlog  proporcional={proporcional}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <CardBlog  proporcional={proporcional}/>
                    <CardBlog  proporcional={proporcional}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                <button className='btn' style={{width: '25%', height: 50 / proporcional, flontSize: 18 / proporcional, color: boton_ver_todas ? 'rgb(23, 43, 222)' : 'white', 
                    background: boton_ver_todas ? 'white' : 'rgb(23, 43, 222)', border: '1px solid rgb(23, 43, 222)'}}
                    onMouseOver={() => setBotonVerTodas(true)} onMouseLeave={() => setBotonVerTodas(false)}>
                    Ver todas las noticias
                </button>
            </div>
        </div>
    )
}