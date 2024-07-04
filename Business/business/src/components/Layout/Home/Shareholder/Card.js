import React from 'react';

const ShareholderCard = ({ name, title, description }) => {
     console.log(name)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-black mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
        <p className="text-gray-700 text-base mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ShareholderCard;
