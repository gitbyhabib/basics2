import React, { useState } from "react";

const Purecompf = () => {
  const [name, setName] = useState("habib");

  console.log("render");

  return (
    <div>
      <h2>{name}</h2>

      <button onClick={() => setName("Lisa")}>click to change</button>
    </div>
  );
};
export default Purecompf;
