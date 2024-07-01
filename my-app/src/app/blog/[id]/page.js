import { notFound } from 'next/navigation';
import React from 'react';

const Dynamicblock = ({params}) => {
    const {id} = params
    if(id >= "10"){
        notFound();
    }

    return (
        <div className='mt-6  text-xl text-red-400'>
            The blog id is : {id}
        </div>
    );
};

export default Dynamicblock;