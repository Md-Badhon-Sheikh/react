import React from 'react';

const Bottle = ({bottle}) => {
    const {brand, image, price} = bottle;
    console.log(bottle)
    return (
        <div>

            <div className='border-2 p-2 rounded-xl text-center'>
                <h2 className='text-xl'>Brand: {brand}</h2>
                <img className='w-48 h-48' src={image} alt="Img" />
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Bottle;