import getPost from "@/components/Hooks/getpost";
import Postcard from "@/components/Layout/Home/Post/postcard";
import React from "react";


export default async function Posts() {
  const data = await getPost();
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4 pt-6">
      {data.map((post) => (
        <Postcard id={post.id} title={post.title} dis={post.body} key={post.id}></Postcard>
      ))}
    </div>
  );
}
