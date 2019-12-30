import React from 'react'
import './Teknologi.scss'
import Swiper from 'swiper'
import ScrollAnimation from 'react-animate-on-scroll'


class Teknologi extends React.Component {
  componentDidMount () {
    new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
    render () {
        return (
        <div className='row'>
            <div className='col-md-12 d-flex justify-content-center title-teknologi'>
            <div className='card text-center'>
            <ScrollAnimation
                    animateOnce={true}
                    delay={500}
                    animateIn='fadeInDown'
                >
                <div className='card-body'>
            
                    <h1>Stack Technology</h1>
              
                </div>
                </ScrollAnimation>
            </div>
            </div>
            <div className='col-md-12 swiper-box-tech '>
            <div className='swiper-container'>
                <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/html-5.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt='' />{' '}
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/javascript.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/php.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/mysql-5.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/laravel.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/codeigniter.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/java-4.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/android-studio-logo.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src="https://cdn.worldvectorlogo.com/logos/unity-technologies-logo.svg" alt='' />
                </div>
                </div>
                {/* Add Pagination */}
            </div>
            <div className='d-flex justify-content-center'>
                <div className='swiper-pagination' />
            </div>
            </div>
        </div>
        )
    }
}
export default Teknologi
