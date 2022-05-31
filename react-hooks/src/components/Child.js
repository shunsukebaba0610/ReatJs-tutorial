import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("ユーズコールバックフックス開発の子要素を出力");
  }, [returnComment]);
  return <div>{returnComment("Shunsuke")}</div>;
};

export default Child;
