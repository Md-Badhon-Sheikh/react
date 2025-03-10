import React from 'react';
import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='max-w-6xl mx-auto mt-8 pb-2 border-b-2'>
           <div className='flex justify-between'>
           <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
           <img src={profile} alt="" />
           </div>
        </div>
    );
};

export default Header;