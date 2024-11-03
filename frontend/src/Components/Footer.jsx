import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div  className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*left */}
            <div >
               <img className='mb-5 w-40' src={assets.logo} alt="" />
               <p className='w-full md:w-2/3 text-gray-600 leading-6'>WellVisit is a chioce for those,who does not have time to reach to doctor,with the help of wellvisit they can easily reach out to doctors according to their problems.</p>
            </div>

            {/*center */}
             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>

            {/*right */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+91-000-000-0000</li>
                    <li>wellvisit@gmail.com</li>
                </ul>
            </div>
        </div>

        {/*copyright */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright2024@ WellVisit.All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer