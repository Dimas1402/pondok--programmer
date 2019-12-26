import React from 'react'
import Data from './Data.json'
import "./List.scss"

const ListTentangKami = () => {
  return (
    <div className='row mt-5'>
      <div className='col-md-6'>
        <div className='row m-2'>
          <div className='accordion collapse-list' id='accordionExample'>
            {Data.Data.map(res => (
              <div className='card mt-2'>
                <div className='card-header' id={res.Heading}>
                  <h2 className='mb-0 h2-list'>
                    <button
                      className='btn btn-link collapsed'
                      type='button'
                      data-toggle='collapse'
                      data-target={res.collapseTarget}
                      aria-expanded='false'
                      aria-controls={res.Collapse}
                    >
                     {res.judul}
                    </button>
                  </h2>
                </div>
                <div
                  id={res.Collapse}
                  className='collapse'
                  aria-labelledby={res.Heading}
                  data-parent='#accordionExample'
                >
                  <div className='card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='row m-2'>
        <div className='accordion collapse-list' id='accordionExample'>
            {Data.Data2.map(res => (
              <div className='card mt-2'>
                <div className='card-header' id={res.Heading}>
                  <h2 className='mb-0 h2-list'>
                    <button
                      className='btn btn-link collapsed'
                      type='button'
                      data-toggle='collapse'
                      data-target={res.collapseTarget}
                      aria-expanded='false'
                      aria-controls={res.Collapse}
                    >
                     {res.judul}
                    </button>
                  </h2>
                </div>
                <div
                  id={res.Collapse}
                  className='collapse'
                  aria-labelledby={res.Heading}
                  data-parent='#accordionExample'
                >
                  <div className='card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListTentangKami
