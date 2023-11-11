import React, { useState } from 'react';
import cover from '../Assets/img1.jpg';
import facials from '../Assets/img2.jpg';
import tools from '../Assets/img3.jpg';
import camera from '../Assets/img4.jpg';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://amazoneproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazoneproone.vercel.app/static/media/img5/.aa945e25375bfdee385f.jpg",
        "https://amazoneproone.vercel.app/static/media/img3/.c80809bb40bee5c34372.jpg",
        "https://amazoneproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
    ]

    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);

    }

    const nextSlide = () => {
      setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    }
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-[90vh]
         flex transition-transform duration-1000'>
          <img className='w-screen object-cover relative'
          src={cover} alt="imgone" loading='priority'  
          />
          <div className='absolute top-20 left-20 pt-3'>
            <h1 className='text-black font-bold bg-blue-500 '>Get 15% off</h1>
            <h2 className='font-bold'>your first</h2>
            <h2 className='font-semibold'>Fashion order</h2>
            <h3>Use the code: <span className='font-semibold'>15OFF</span></h3>

          </div>
        
          <img className='w-screen h-[80] object-cover'
           src={facials} alt="imgTwo"/>
        
          <img className='w-screen object-cover' src={tools} alt="imgThree"/>
          <img className='w-screen object-cover' src={camera} alt="imgThree"/>
          
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10'>
          <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300'>
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300'>
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
