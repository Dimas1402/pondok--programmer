import React from 'react'
import './Teknologi.scss'
import Swiper from 'swiper'
import st1 from '../../../Asset/Teknologi/st1.png'
import st2 from '../../../Asset/Teknologi/st2.png'
import st3 from '../../../Asset/Teknologi/st3.png'
import st4 from '../../../Asset/Teknologi/st4.png'
import st5 from '../../../Asset/Teknologi/st5.png'
import st6 from '../../../Asset/Teknologi/st6.png'
import st7 from '../../../Asset/Teknologi/st7.png'
import st8 from '../../../Asset/Teknologi/st8.png'
import st9 from '../../../Asset/Teknologi/st9.png'
import st10 from '../../../Asset/Teknologi/st10.png'
import st11 from '../../../Asset/Teknologi/st11.png'
import st12 from '../../../Asset/Teknologi/st12.png'
import st13 from '../../../Asset/Teknologi/st13.png'

class Teknologi extends React.Component {
    componentDidMount () {
        new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
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
                <div className='card-body'>
                <h1>Stack Technology</h1>
                </div>
            </div>
            </div>
            <div className='col-md-12 swiper-box-tech '>
            <div className='swiper-container'>
                <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                    <img src={st1} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st2} alt='' />{' '}
                </div>
                <div className='swiper-slide'>
                    <img src={st3} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st4} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st5} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st6} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st7} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st8} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st9} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st10} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st11} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st12} alt='' />
                </div>
                <div className='swiper-slide'>
                    <img src={st13} alt='' />
                </div>
                </div>
                {/* Add Pagination */}
               
            </div>
            <div className="d-flex justify-content-center">
            <div className='swiper-pagination' />
            </div>
            </div>
        </div>
        )
    }
}
export default Teknologi
