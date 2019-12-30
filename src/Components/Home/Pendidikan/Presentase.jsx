import React from 'react'
import './Presentase.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const Presentase = () => {
    return (
        <div className='row mt-5 row-presentase'>
        <div className='col-md-12'>
        <ScrollAnimation animateOnce={true} delay={500} animateIn='fadeInDown'>
            <h1 className='text-center'>Presentase Pendidikan</h1>
            </ScrollAnimation>
        </div>
        <div
            className='col-md-12 d-flex justify-content-center '
            style={{ overflow: 'auto' }}
        >
            <div className='svg-item'>
            <svg width='100%' height='100%' viewBox='0 0 40 40' className='donut'>
                <circle
                className='donut-hole'
                cx={60}
                cy={60}
                r='15.91549430918954'
                fill='#fff'
                />
                <circle
                className='donut-ring'
                cx={20}
                cy={20}
                r='15.91549430918954'
                fill='transparent'
                strokeWidth='3.5'
                />
                <circle
                className='donut-segment donut-segment-2'
                cx={20}
                cy={20}
                r='15.91549430918954'
                fill='transparent'
                strokeWidth='3.5'
                strokeDasharray='50 50'
                strokeDashoffset={25}
                />
                <g className='donut-text donut-text-1'>
                <text y='50%' transform='translate(0, 2)'>
                    <tspan x='50%' textAnchor='middle' className='donut-percent'>
                    100%
                    </tspan>
                </text>
                <text y='60%' transform='translate(0, 2)'>
                    <tspan x='50%' textAnchor='middle' className='donut-data'>
                    {/* 50% Ilmu Agama 50% Ilmu It */}
                    </tspan>
                </text>
                </g>
            </svg>
            </div>
        </div>
        <div className='col-md-12 d-flex justify-content-center'>
            <p style={{fontWeight:"bold"}} className="p-2">
            {' '}
            <i className='fa fa-square-full p-1'> </i>50% Ilmu Agama
            </p>
            <p style={{fontWeight:"bold"}} className="p-2">
            {' '}
            <i style={{color:"#00aa88ff"}} className='fa fa-square-full p-1'> </i>50% Ilmu IT
            </p>
        </div>
        </div>
    )
}

export default Presentase
