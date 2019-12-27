import React from 'react'
import Data from './Data.json'
import './List.scss'

const ListTentangKami = () => {
  return (
    <div className='row mt-5'>
      <div className='col-md-6'>
        <div className='row m-2'>
          <div className='accordion collapse-list' id='accordionExample'>
            {Data.Data.map(res => (
              <div
                key={res.id}
                data-toggle='collapse'
                data-target={res.collapseTarget}
                aria-expanded='false'
                aria-controls={res.Collapse}
                className='card mt-2'
              >
                <div className='card-header' id={res.Heading}>
                  <h2 className='mb-0 h2-list'>
                    <button
                      className='btn btn-link collapsed text-left'
                      type='button'
                      data-toggle='collapse'
                      data-target={res.collapseTarget}
                      aria-expanded='false'
                      aria-controls={res.Collapse}
                    >
                      <i className='fa fa-question-circle'></i> {res.judul}
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
          <div className='accordion collapse-list' id='accordionExample1'>
            {Data.Data2.map(res => (
              <div
                key={res.id}
                data-toggle='collapse'
                data-target={res.collapseTarget}
                aria-expanded='false'
                aria-controls={res.Collapse}
                className='card mt-2 text-left'
              >
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
                      {' '}
                      <i className='fa fa-question-circle'></i> {res.judul}
                    </button>
                  </h2>
                </div>
                <div
                  id={res.Collapse}
                  className='collapse'
                  aria-labelledby={res.Heading}
                  data-parent='#accordionExample1'
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
