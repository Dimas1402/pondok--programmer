import React from 'react'
import './Pendidikan.scss'

const Pendidikan = () => {
  return (
    <div className='row'>
      <div className='col-md-12 col-pendidikan text-center'>
        
        <h1 style={{ color: '#00aa88ff' }}>Fokus Pendidikan</h1>
        
      </div>
      <div className='col-md-12 mb-5 pb-5'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card-box-pen'>
              <div className='face face1'>
                <div className='content text-center'>
                <i className="fa fa-laptop-code"></i>
                  <h3>Frontend Development</h3>
                </div>
              </div>
              <div className='face face2'>
                <div className='content'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cum cumque minus iste veritatis provident at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card-box-pen'>
              <div className='face face1'>
                <div className='content text-center'>
                <i className="fa fa-cogs"></i>
                  <h3>Backend Development</h3>
                </div>
              </div>
              <div className='face face2'>
                <div className='content'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cum cumque minus iste veritatis provident at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card-box-pen'>
              <div className='face face1'>
                <div className='content text-center'>
                 <i className="fa fa-mobile-alt"></i>
                  <h3>Mobile Development</h3>
                </div>
              </div>
              <div className='face face2'>
                <div className='content'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cum cumque minus iste veritatis provident at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card-box-pen'>
              <div className='face face1'>
                <div className='content text-center'>
                <i className="fa fa-gamepad"></i>
                  <h3>Game Development</h3>
                </div>
              </div>
              <div className='face face2'>
                <div className='content'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cum cumque minus iste veritatis provident at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pendidikan
