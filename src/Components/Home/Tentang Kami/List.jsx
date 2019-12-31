import React from 'react'
import Data from './Data.json'
import './List.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const ListTentangKami = () => {
  return (
    <div className='row mt-5'>
      <div className='col-md-6'>
        <ScrollAnimation animateOnce={true} animateIn='zoomIn'>
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
                      <h6> {res.isi}</h6>
                      {res.id === 1 ? (
                        <div>
                          <ul className='list-group list-list'>
                            <li className='list-group-item'>
                              {' '}
                              <i className='fa fa-check-square'></i> Frontend
                              Development
                            </li>
                            <li className='list-group-item'>
                              {' '}
                              <i className='fa fa-check-square'></i> Backend
                              Development
                            </li>
                            <li className='list-group-item'>
                              {' '}
                              <i className='fa fa-check-square'></i> Mobile
                              Development
                            </li>
                            <li className='list-group-item'>
                              {' '}
                              <i className='fa fa-check-square'></i> Game
                              Development
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className='col-md-6'>
        <ScrollAnimation animateOnce={true} animateIn='zoomIn'>
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
                      <h6> {res.isi}</h6>
                      {res.id === 8 ? (
                        <div>
                          <ul className='list-group list-list'>
                            <li className='list-group-item'>
                              {' '}
                              <i className='fa fa-check-square'></i> Bidang
                              programming ( Frontend Development , Backend
                              Development, Mobile Development , Game
                              Development)
                            </li>
                            <li className='list-group-item'>
                              {' '}
                              <i className='fa fa-check-square'></i> Bidang
                              Agama ( Aqidah , Akhlak , Ibadah , Alquran )
                            </li>
                          </ul>
                        </div>
                      ) : null}
                      {res.id === 9 ? (
                        <div>
                          <ul className='list-group list-list'>
                            {Data.Persyaratan.map(res => (
                              <li key={res.id} className='list-group-item'>
                                {' '}
                                <i className='fa fa-check-square'></i>{' '}
                                {res.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default ListTentangKami
