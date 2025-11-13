import React from 'react';
import Marquee from 'react-fast-marquee';
import chering from '../assets/360_F_1690936360_j3C0S6h9mMYDVmezy3EOHkPakUZmjfxw.jpg'
import laughing from '../assets/happy-young-man-laughing_23-2148911860.avif'
import grey from '../assets/istockphoto-2006436002-640x640.jpg'
import smallhair from '../assets/photo-1438761681033-6461ffad8d80.jpeg'
import glass from '../assets/relaxed-woman-with-glasses_1122-1397.avif'
import smile from '../assets/gettyimages-1752533660-640x640.jpg'

const ArtistWeek = () => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-8xl py-7'>Top Artists <span className='text-lg'>of the week</span></h1>
            <Marquee>
                <div className='flex gap-15'>
                    <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img src={chering} className='rounded-full h-30 w-30' alt="" />
                    <p>Clara Johnson</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img src={smallhair} className='rounded-full h-30 w-30' alt="" />
                    <p>Crystal Dakota</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img src={laughing} className='rounded-full h-30 w-30' alt="" />
                    <p>Liam Huda</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img src={grey} className='rounded-full h-30 w-30' alt="" />
                    <p>Abishek Malhotra</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img src={smile} className='rounded-full h-30 w-30' alt="" />
                    <p>Elon Mendela</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-2xl'>
                    <img src={glass} className='rounded-full h-30 w-30' alt="" />
                    <p>Tessa Herryson</p>
                </div>
                </div>
            </Marquee>
        </div>
    );
};

export default ArtistWeek;