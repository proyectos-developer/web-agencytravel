import React from 'react'

import CardRecomendacion from './card/recomendacion.jsx'

export default function Recomendaciones({proporcional}) {

    return (
      <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
          <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 500, 
              fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
              Lo que dicen de nosotros
          </p>
          <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121', cursor: 'default', fontWeight: 700, 
              fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
              Recomendaciones
          </p>
          <div style={{width: '100%', height: 'auto'}}>
              <div id='carouselRecomendaciones' className='carousel slide' data-bs-ride='carousel'>
                  <div className='carousel-inner'>
                      <div className='carousel-item active' data-bs-interval='3000'>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                        </div>
                      </div>
                      <div className='carousel-item' data-bs-interval='3000'>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                        </div>
                      </div>
                      <div className='carousel-item' data-bs-interval='3000'>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                            <CardRecomendacion  proporcional={proporcional}/>
                        </div>
                      </div>
                  </div>
              </div>
              <button className='carousel-control-prev' type='button' data-bs-target='#carouselRecomendaciones' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button className='carousel-control-next' type='button' data-bs-target='#carouselRecomendaciones' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
              </button>
          </div>
      </div>
    )
}