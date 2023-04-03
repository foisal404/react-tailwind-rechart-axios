import React from 'react';

const Card = ({data}) => {
    return (
        <div className='m-5 border-2'>
            <p className='text-center'>
                <span className='text-7xl '>{data.price}</span>
                <span>/month</span>
            </p>
            <p className='text-center text-3xl'>{data.name} Plan</p>

            {
                data.features.map((pes,idx)=><p className='m-3' key={idx}>{pes}</p>)
            }
        </div>
    );
};

export default Card;