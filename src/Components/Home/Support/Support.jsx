import React from 'react'
import './Support.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import data from './data.json'

const Support = () => {
    return (
        <div className='row'>
        <div className='col-md-12 text-center h1-support'>
            <ScrollAnimation delay={500} animateIn='fadeInDown' animateOnce={true}>
            <h1>Supported By</h1>
            </ScrollAnimation>
        </div>
        <div className='col-md-12 support-col mt-5 mb-5'>
            <div className='col-md-12 d-flex justify-content-center '>
            <div className='row'>
                {data.dataSatu.map(res => (
                <div key={res.id} className='col-md-3'>
                    <ScrollAnimation
                    delay={res.delay}
                    animateIn='zoomIn'
                    animateOnce={true}
                    >
                    <div className='card'>
                        <a href={res.link}>
                        <img src={res.img} alt='' />
                        </a>
                    </div>
                    </ScrollAnimation>
                </div>
                ))}
            </div>
            </div>
            <div className='col-md-12 d-flex justify-content-center'>
            <div className='row'>
                {data.dataDua.map(res => (
                <div key={res.id} className='col-md-3'>
                    <ScrollAnimation
                    delay={res.delay}
                    animateIn='zoomIn'
                    animateOnce={true}
                    >
                    <div className='card'>
                        <a href={res.link}>
                        <img src={res.img} alt='' />
                        </a>
                    </div>
                    </ScrollAnimation>
                </div>
                ))}
            </div>
            </div>
            <div className='col-md-12 d-flex justify-content-center'>
            <div className='row'>
                {data.dataTiga.map(res => (
                <div className='col-md-3'>
                    <ScrollAnimation
                    delay={res.delay}
                    animateIn='zoomIn'
                    animateOnce={true}
                    >
                    <div className='card d-flex'>
                        <a href={res.link}>
                        <img src={res.img} alt='' />
                        </a>
                    </div>
                    </ScrollAnimation>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    )
}
export default Support
