import getPostonebyeone from '@/components/Hooks/getpostonebyebey';
import React from 'react';

export default async function Info  ({params}) {
    const {id} = params
    const post = await getPostonebyeone(id);
    console.log(post)
    return (
        <div className='pt-10 flex justify-center my-11'>
     <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <p className="py-6">
            {post.body}
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

