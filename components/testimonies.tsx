import Image from 'next/image'
import React from 'react'
import testimony1 from '@/resource/img/testimonial-1.jpg'
import testimony2 from '@/resource/img/testimonial-2.jpg'
import testimony3 from '@/resource/img/testimonial-3.jpg'
import testimony4 from '@/resource/img/testimonial-4.jpg'

const Testimonies = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <h1 className="text-center mb-5">Our Clients Say!!!</h1>
                <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">
                    <div className="testimonial-item bg-light rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <Image className="img-fluid flex-shrink-0 rounded" src={testimony1} style={{width: "50px",height: "50px"}} alt=''/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <Image className="img-fluid flex-shrink-0 rounded" src={testimony2} style={{width: "50px",height: "50px"}} alt=''/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <Image className="img-fluid flex-shrink-0 rounded" src={testimony3} style={{width: "50px",height: "50px"}} alt=''/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4">
                        <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <Image className="img-fluid flex-shrink-0 rounded" src={testimony4} style={{width: "50px",height: "50px"}} alt=''/>
                            <div className="ps-3">
                                <h5 className="mb-1">Client Name</h5>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Testimonies
