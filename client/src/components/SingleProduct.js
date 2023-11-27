import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../redux/bazarSlice';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [details, SetDetails] = useState({})
  let [baseQty, setBaseQty] = (useState(1))
    const location = useLocation();
    useEffect(() => {
      SetDetails(location.state.item)

    }, [location])
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
          <img 
          className='w-full h-[550px] object-cover'
          src={details.image}
          alt="productimg"
          />
          <div className='absolute top-4 right-0'>
            {details.isNew && (
              <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                Sale
              </p>
            )}
          </div>

        </div>
        <div className='w-3/5 flex flex-col justify-center gap-12'>
          <div>
            <h2 className='text-4xl font-semibold'>{details.title}</h2>
            <div className='flex items-center gap-4 mt-3'>
              <p className='line-through font-base text-gray-500'>
                ${details.oldPrice}
                </p>
                <p className='text-2xl font-medium text-gray-900'>
                  ${details.price}
                </p>
              
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            </div>
            <p className='text-xs text-gray-500'>(1 Customer review)</p>
          </div>
          <p className='text-base text-gray-500 -mt-3'>{details.description}</p>
          <div className='flex gap-4'>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button onClick={() => setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)}className='border h-5 font-normal text-lg flex items-center
                justify-center px-2 hover:bg-gray-700 hover:text-white
                cursor-pointer duration-300 active:bg-black'>
                  -
                </button>
                <span>{baseQty}</span>
                <button onClick={() => setBaseQty(baseQty + 1)} className='border h-5 font-normal text-lg flex items-center
                justify-center px-2 hover:bg-gray-700 hover:text-white
                cursor-pointer duration-300 active:bg-black'>
                  +
                </button>
              </div>
              
            </div>
            <button
            onClick={() => dispatch(
              addToCart({
                _id: details._id,
                title: details.title,
                image: details.image,
                price: details.price,
                quantity: baseQty,
                description: details.description,
              })
            )
          } 
            className='bg-black text-white py-3 px-6 active:bg-gray-800'>
              add to cart
            </button>
          </div>
          <p className='text-base text-gray-500'>
            Category:<span className='font-medium capitalize'>{details.category}</span> 
          </p>         
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;
