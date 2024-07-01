import React from 'react';
import getPost from '../../../../lib/getpost';

export async function generateMetadata({params}){
    const {id} = params
    const post = await getPost(id);
    return{
      title:post.title,
      description: post.body

    };
}

export default async function postpage ({params}) {
    const {id} = params
    const post = await getPost(id);
    return (
        <div className='mt-6'>
           <h2>{post.title}</h2>
           <p>{post.body}</p> 
        </div>
    );
};
