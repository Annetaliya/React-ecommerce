import React from 'react'
import logo from '../Assets/letter-n.png';
import paypal from '../Assets/paypal.png';
import visa from '../Assets/visa.png';
import youtube from '../Assets/youtube.png';
import amazon from '../Assets/amazon-pay2.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import instagram from '../Assets/instagram.png';
//import { Checkout, Location, Home, Profile } from '../Assets/index';
import Profile from '../Assets/file-person.svg';
import Location from '../Assets/geo-fill.svg';
import Home from '../Assets/house-door-fill.svg';
import Checkout from '../Assets/wallet-fill.svg'


const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto pl-5 grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-14' src={logo} alt="logo" />
                <p className='text-white text-sm tracking-wide'>&copy ReactBD.com</p>
                <div className='flex gap-3'>
                <img className='w-16' src={paypal} alt='paypal'/>
                <img className='h-14'src={visa} alt='visa'/>
                <img className='h-20' src={amazon} alt='amazon'/>

            </div>
            <div className='flex gap-5'>
              <img className='h-6' src={youtube} alt="youtube" />
              <img className='h-6' src={instagram} alt="instagram" />
              <img className='h-6' src={facebook} alt="facebook" />
              <img className='h-6' src={twitter} alt="twitter" />

            </div>
            <div>
              <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
              <div className='text-base flex flex-col gap-2'>
                <p>Shopping, Delights, Nairobi</p>
                <p>Mobile: 00968 97656026</p>
                <p>Phone: 00968 456888996</p>
                <p>e-mail: delights@gmail.com</p>
              </div>

            </div>
                <div>
                  <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                      <img  src={Profile} alt='profile'/>
                      </span>
                  My account
                  </p>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                      <img  src={Checkout} alt='checkout'/>
                      </span>
                  Checkout
                  </p>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                      <img src={Home} alt='Home' />
                      </span>
                  order tracking
                  </p>
                  <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span>
                      <img src={Location} alt='Location' />
                      </span>
                  help & support
                  </p>
                </div>    
                
            </div>
            <div className='flex flex-col justify-center'>
              <input 
                className='bg-transparent border px-4 py-2 text-sm' 
                placeholder='e-mail' 
                type="text"
              />
              <button className='text-sm border text-whie boarder-t-0 hover:bg-gray-900
               active:bg-white active:text-black'>
                Subscribe
                </button>
            </div>

        </div>
    </div>
  )
}

export default Footer;
