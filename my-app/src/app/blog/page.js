import Link from 'next/link';
import React from 'react';

const Blogs = () => {
     
    const blogs = [{
        id:1,
        title:'Blog 1',
        description:"Blog 1 descriptions"
    },
    {   id:2,
        title:'Blog 2',
        description:"Blog 1 descriptions"
    }
]
     
    return (
        <div className='mt-10'>
            <p className='text-2xl'>This is Bogs Routes</p>
            <ul>
                {blogs.map(blog => 
                <li className='mb-5' key={blog.id}> <Link href={`/blog/${blog.id}`}>{blog.title}</Link></li>
                )}
            </ul>
        </div>
    );
};

export default Blogs;