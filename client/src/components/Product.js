import React from 'react'
import ProductsCart from './ProductsCart';

const Product = ({products}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'> 
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
             Shopping Everyday
             </h1>
             <span className='w-20 h-[3px] bg-black'></span>
             <p className='max-w-[700px] text-gray-600 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
             </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
          {products.map((item) => (
              <ProductsCart key={item._id} product={item}/>
            ))}
        </div>
    </div>
  )
}
export default Product;
