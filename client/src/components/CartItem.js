import React from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className='w-2/3 pr-10'> 
        <div className='w-full'>
          <h2 className='font-titleFont text-2xl'>Shopping Cart</h2>

        </div>
        <div>
          {productData.map((item) => (
            <div key={item._id}
            className='flex items-center justify-between gap-6 mt-6'>
              <div className='flex items-center gap-2'>
                <MdOutlineClose
                className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                <img 
                  className='w-32 h-32 object-cover'
                  src={item.image} alt='productImg'/>
              </div>
              <h2 className='w-52'>{item.title}</h2>
              <p className='w-10'>{item.price}</p>
              <div className='w-52 flex items-center justify-between text-gray-500 gsp-4 border p-3'>
                <p className='text-sm'>Quantity</p>
                <div>
                  <span
                  className='border h-5 font-normal text-lg flex items-center
                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                  duration-300 active:bg-black'
                  >
                    -
                  </span>
                  <span
                  className='border h-5 font-normal text-lg flex items-center
                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                  duration-300 active:bg-black'
                  >
                    +
                  </span>
                </div>
              </div>
              <p className='w-14'>${item.quantity * item.price}</p>
           
            </div>
          ))}
        </div>
    </div>
  )
}

export default CartItem