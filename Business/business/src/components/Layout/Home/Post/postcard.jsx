import Link from "next/link";
import React from "react";

const Postcard = ({ title, dis, id }) => {
  return (
    <div className="bg-gray-500 text-white  p-6 rounded-lg shadow-md relative ">
      <div className="space-y-4 flex-col">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{dis}</p>
        <div className="flex justify-end">
          <button className="bg-blue-700 text-white px-4 py-2 rounded absolute bottom-2 ">
            <Link href={`/post/${id}`}>Know about more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
