import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffect = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "useEffect";
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <h1>LayoutEffectTutorial</h1>
      <input ref={inputRef} value="Shunske" />
    </div>
  );
};

export default LayoutEffect;
