'use client'
import React, { useState } from 'react';

const DataRecived = ({sk}:{sk:number}) => {
    const [skss,setSkss] = useState(null)
    console.log(process.env.TWITTER_URL)
    return (
        <div>
            <div>{sk}</div>
        </div>
    );
};

export default DataRecived;