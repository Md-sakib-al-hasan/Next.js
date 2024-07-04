import getdata from "@/components/Hooks/getshareholderdata";
import React from "react";
import ShareholderCard from "./Card";

export default async function Shareholder() {
  const data = await getdata();
  console.log(data);

  return (
    <div>
      <h4 className="text-black font-bold text-4xl text-center mt-4">
        our member
      </h4>
      <div className="grid grid-cols-3 ">
        {data.map((person, id) => (
          <ShareholderCard
            title={person.email}
            description={person.username}
            name={person.name}
            key={id}
          ></ShareholderCard>
        ))}
      </div>
    </div>
  );
}

Shareholder;
