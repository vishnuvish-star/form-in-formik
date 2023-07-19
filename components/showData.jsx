import React from "react";

const ShowData = ({ items }) => {
  return (
    <ul className="flex flex-col gap-y-3">
      <li>{items.values.name}</li>
      <li>{items.values.email}</li>
      <li>{items.values.age}</li>
      <li>{items.values.interested}</li>
    </ul>
  );
};

export default ShowData;
