import React from 'react'

export default function ModalCargando ({loading, proporcional}){

    return (
        <div className='position-fixed top-0 w-100 vh-100' style={{display: loading ? 'block' : 'none', zIndex: '9999', background: 'rgba(39, 39, 39, 0.40)'}}>
            <div className='position-fixed top-50 start-50 translate-middle' style={{background: 'transparent', borderRadius: 4 / proporcional}}>
                <div className='spinner-boder' role='status' style={{margin: 10 / proporcional}}>
                    <span className='visually-hidden'>loading...</span>
                </div>
            </div>
        </div>
    )
}