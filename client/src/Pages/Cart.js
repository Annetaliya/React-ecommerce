import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Assets/Header.jpg';


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

        </div>
      </div>
      
    </div>
  )
}

export default Cart;
