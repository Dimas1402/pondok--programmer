import React from 'react'
import './Portofolio.scss'
import Data from './Data.json'

const Portofolio = () => {
  return (
    <div className='row mt-5 mb-5'>
      <div className='col-md-12 h1-portofolio text-center'>
        <h1>Portofolio</h1>
      </div>
      <div className='col-md-12 mt-5 box-portofolio'>
        <div className='card-deck d-flex'>
            <div className="col-md-12">
                <div className="row">
                {Data.Data.map(res => (
                    <div className="col-md-4 p-2">
            <div className='card'>
              <img src={res.img} className='card-img-top' alt='...' />
            </div>
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
