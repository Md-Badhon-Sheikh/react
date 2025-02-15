import React from 'react';

const Bottle = ({ bottle, handleAddToCart }) => {
    const { brand, image, price } = bottle;
    // console.log(bottle);
    console.log(handleAddToCart);
    
    return (
        <div className='border-2 p-4 rounded-xl text-center'>
            <h2 className='text-xl font-bold'>Brand: {brand}</h2>
            <div className='flex justify-center'>
                <img className='w-48 h-48' src={image} alt="Bottle" />
            </div>
            <p className='mt-2'>Price: {price}</p>
            <div>
                <button className='border-2 px-3 py-1 rounded-lg hover:bg-red-200 bg-green-300' onClick={handleAddToCart}>Purchase</button>
            </div>
        </div>
    );
};

export default Bottle;
