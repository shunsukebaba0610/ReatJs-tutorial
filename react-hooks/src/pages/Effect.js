import React, { useEffect, useState } from "react";
import axios from "axios";

const Effect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("APIの呼び出し");
      });
  }, []);

  return (
    <div>
      <h1>Effect</h1>
      <div>
        <h2>{data}</h2>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click!</button>
      </div>
    </div>
  );
};

export default Effect;
