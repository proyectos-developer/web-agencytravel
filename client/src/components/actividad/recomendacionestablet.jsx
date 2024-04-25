import React from 'react'

import CardRecomendacionTablet from './card/recomendaciontablet.jsx'

export default function RecomendacionesTablet({proporcional}) {

    return (
      <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
          <p style={{fontSize: 30 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 50 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
              fontFamily: 'Roboto, sans-serif', textAlign: 'start'}} >
              Reseñas
          </p>
          <div style={{width: '100%', height: 'auto'}}>
              <div id='carouselRecomendaciones' className='carousel slide' data-bs-ride='carousel'>
                  <div className='carousel-inner'>
                      <div className='carousel-item active' data-bs-interval='3000'>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <CardRecomendacionTablet  proporcional={proporcional}/>
                            <CardRecomendacionTablet  proporcional={proporcional}/>
                        </div>
                      </div>
                      <div className='carousel-item' data-bs-interval='3000'>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <CardRecomendacionTablet  proporcional={proporcional}/>
                            <CardRecomendacionTablet  proporcional={proporcional}/>
                        </div>
                      </div>
                      <div className='carousel-item' data-bs-interval='3000'>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <CardRecomendacionTablet  proporcional={proporcional}/>
                            <CardRecomendacionTablet  proporcional={proporcional}/>
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