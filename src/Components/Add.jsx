import React from 'react'
import location from '../assets/icons/location_pin_dark.svg'
import RootLayout from './layout'

const Add = () => {
  return (
    <>
    <RootLayout />
    <div className='px-[47px]'>
        <h2 className='font-semibold'>Add a Waste</h2>
        <p className='text-secondary-text max-w-[582px] pt-[10px] text-sm'>
            Thank you for taking action to help make your surrounding cleaner, together we can make our cities better👍, Snap and upload your waste below
        </p>

        <div className='mt-[33px]'>
            <p className='font-semibold text-sm text-secondary-text'>Add waste location:</p>
            <div className='waste_locay flex items-center flex-row space-x-[40px] pl-[30px] w-full mt-[5px]'>
                <img src={location} alt='location' className='shadow-md h-[20px] w-[20px]'/>
                <p className='text-sm text-secondary-text'>Start typing  or click on the map pin to use current location</p>
            </div>
        </div>

        <div className='mt-[33px]'>
            <p className='font-semibold text-sm text-secondary-text'>Add a picture of the waste:</p>
            <div className='waste_image flex justify-center items-center flex-row space-x-[40px] mt-[5px]'>
                <p className='italic text-secondary-text font-semibold text-[14px]'>Accepted format: jpg,png,svg</p>
            </div>
        </div>

        <button className='mt-[50px] upload_btn font-bold'>Upload Waste</button>

    </div>

    </>
  )
}

export default Add