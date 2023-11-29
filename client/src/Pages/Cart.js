import React from 'react';

import Header from '../Assets/Header.jpg';
import CartItem from '../components/CartItem';


const Cart = () => {
  // const productData = useSelector((state) => state.bazar.productData)
  console.log(product.Data) 
  return (
    <div>
      <img src={Header} alt='headerimg' />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div>
            <h2 className='text-2xl font-medium'>Cart Totals</h2>
            <p className='flex items-center gap-4 text-base' >
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>
                $200
              </span>
            </p>
            <p className='flex items-start gap-4 text base'> 
              Shipping{" "}
              <span>
                LOrem, ipsum dolor sit amet consecter adipisicing elit
              </span>
            </p>

          </div>
          <p className='font-title font-semibold flex justify-between mt-6'>
            Total <span className='text-xl font-bold'>$200</span>
          </p>
          <button className='text-base text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            Proceed To Checkout

          </button>

        </div>
      </div>
      
    </div>
  )
}

export default Cart;
