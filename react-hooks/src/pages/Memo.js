import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

const Memo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getFindlongName = (comments) => {
    if (!comments) return null;

    let longName = "";

    comments.filter(({ name }) => {
      if (name.length > longName.length) {
        longName = name;
      }
      return longName;
    });
    console.log("長い名前を抽出");
    return longName;
  };

  const getlongName = useMemo(() => getFindlongName(data), [data]); //第二引数でレンダリングを指定する

  return (
    <div>
      <h1>MemoTutorial</h1>
      <div>{getlongName}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> TOGGLE </h1>}
    </div>
  );
};

export default Memo;
