import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../Assets/shopware.png'
import cart from '../Assets/grocery-store.png';
import profile from '../Assets/avatar.png';
import { Link } from 'react-router-dom';


const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b- gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
       <Link to='/' >
        <div>
            <img className='w-10' src={logo} alt="logo" />
          </div>
       </Link>
        <div className='flex item-center gap-8'>
          <ul className='flex item-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline undeline-offset-2 decoration-[1px] cursor-default
            duration-300'>
              Home
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline undeline-offset-2 decoration-[1px] cursor-default
            duration-300'>
              Pages
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline undeline-offset-2 decoration-[1px] cursor-default
            duration-300'>
              Shop
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline undeline-offset-2 decoration-[1px] cursor-default
            duration-300'>
              Element
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline undeline-offset-2 decoration-[1px] cursor-default
            duration-300'>
              Blog
            </li>
          </ul>
          <Link to='/cart'>
            <div className='relative'>
              {/* <img className="w-6" src={cart} alt="cart"/> */}
              <i class="bi bi-bag"></i>
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center
              justify-center font-semibold'>
                {productData.length}
              </span>

            </div>
          </Link>
          <Link to='/login'>
            <img className='w-8 h-8 rounded-full' src={profile} alt="profile" />
          </Link>
          {userInfo && 
          <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
            {userInfo.name}
            </p>
          }  
          
        </div>
      </div>
      
        
    </div>
  )
}

export default Header;
