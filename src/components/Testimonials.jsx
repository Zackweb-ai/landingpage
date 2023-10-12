import React from 'react'
import prof1 from '../images/image-emily.jpg'
import prof2 from '../images/image-thomas.jpg'
import prof3 from '../images/image-jennie.jpg'

const Testimonials = () => {
  return (
    <div className="testimonials text-center pb-5">
        <p className='main-t'>CLIENT TESTIMONIALS</p>
    <div className="center d-flex justify-content-center text-center">
        <div className="d-flex w-75 mt-5 column">
        <div className="section col-12 col-md-4">
            <img src={prof1} alt="" className='rounded-circle size' />
            <p className='py-5 p-text'>
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </p>
            <div className="name">
                <p className='link'>Emily R.</p>
                <p className='grey'>Marketing Director</p>
            </div>
        </div>
        <div className="section col-12 col-md-4">
         <img src={prof2} alt="" className='rounded-circle size'/>
            <p className='py-5 p-text'>
            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="name">
                <p className='link'>Thomas S.</p>
                <p className='grey'>Chief Operating Officer</p>
            </div>
        </div>
        <div className="section col-12 col-md-4">
         <img src={prof3} alt="" className='rounded-circle size' />
            <p className='py-5 p-text'>
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>
            <div className="name">
                <p className='link'>Jennie F.</p>
                <p className='grey'>Business Owner</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Testimonials