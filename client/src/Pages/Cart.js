import React, { useState, useEffect } from 'react';
import Header from '../Assets/Header.jpg';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import stripeCheckout from 'react-stripe-checkout';
import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo)
  const [totalAmt, setTotalAmt] = useState('');
  const [payNOw, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) =>{
      price += item.price * item.quantity
      return price
    })
    setTotalAmt(price);
  }, [])
  // console.log(product.Data) 
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true)

    } else {
      toast.error('Please sign in to checkout')

    }
  }
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
                ${totalAmt}
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
            Total <span className='text-xl font-bold'>${totalAmt}</span>
          </p>
          <button onclick={handleCheckout}
          className='text-base text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            Proceed To Checkout
          </button>
          {payNOw && 
            <div>
              <StripeCheckout />
            </div>
          }

        </div>
      </div>
      
    </div>
  )
}

export default Cart;
