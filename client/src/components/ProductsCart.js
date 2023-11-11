import React from 'react'

const ProductsCart = ({product}) => {
  
  return (
    <div className='group'>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-500' 
        src={product.image} alt='productImg'/>
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-titleFont text-base font-bold'>
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className='flex gap-2'>
            <div className='text-sm relative w-28 flex justify-end'>
              <p className='line-through text-gray-500'>${product.oldPrice}</p>
              <p className='font-semibold'>${product.price}</p>
            </div>
            
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default ProductsCart;
