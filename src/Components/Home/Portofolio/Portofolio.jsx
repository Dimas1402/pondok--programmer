import React from 'react'
import './Portofolio.scss'
import Data from './Data.json'
import ScrollAnimation from 'react-animate-on-scroll'

const Portofolio = () => {
  return (
    <div className='row mt-5 mb-5'>
      <div className='col-md-12 h1-portofolio text-center'>
        <ScrollAnimation delay={500} animateOnce={true} animateIn='fadeInDown'>
          <h1>Portofolio</h1>
        </ScrollAnimation>
      </div>
      <div className='col-md-12 mt-5 box-portofolio'>
        <div className='card-deck d-flex'>
          <div className='col-md-12'>
            <div className='row'>
              {Data.Data.map(res => (
                <div key={res.id} className='col-md-4 p-2'>
                  <ScrollAnimation
                    delay={res.delay}
                    animateOnce={true}
                    animateIn='zoomIn'
                  >
                    <div className='card'>
                      <img src={res.img} className='card-img-top' alt='...' />
                    </div>
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portofolio
