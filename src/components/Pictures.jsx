import React from 'react'
import milk from '../images/desktop/image-gallery-milkbottles.jpg'
import bowl from '../images/desktop/image-gallery-orange.jpg'
import cone from '../images/desktop/image-gallery-cone.jpg'
import sugar from '../images/desktop/image-gallery-sugarcubes.jpg'
import milkMob from '../images/mobile/image-gallery-milkbottles.jpg'
import bowlMob from '../images/mobile/image-gallery-orange.jpg'
import coneMob from '../images/mobile/image-gallery-cone.jpg'
import sugarMob from '../images/mobile/image-gallery-sugar-cubes.jpg'
const Pictures = () => {
  return (
    <>
    <div className='pictures desktop'>
        <div className="col-1 col-md-3">
            <img className='image' src={milk} alt="" />
        </div>
        <div className="col-1 col-md-3">
            <img className='image' src={bowl} alt="" />
        </div>
        <div className="col-1 col-md-3">
            <img className='image' src={cone} alt="" />
        </div>
        <div className="col-1 col-md-3">
            <img className='image w-100' src={sugar} alt="" />
        </div>
    </div>
    <div className='page-width w-90'>
        <div className="row">
        <div className="col-6 p-0">
            <img className='image-mobi w-100' src={milkMob} alt="" />
        </div>
        <div className="col-6 p-0">
            <img className='image-mobi w-100' src={bowlMob} alt="" />
        </div>
        </div>
        <div className="row">
        <div className="col-6 p-0">
            <img className='image-mobi w-100' src={coneMob} alt="" />
        </div>
        <div className="col-6 p-0">
            <img className='image-mobi w-100' src={sugarMob} alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Pictures