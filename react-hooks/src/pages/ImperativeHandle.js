import React, { useRef } from "react";
import Button from "../components/Button";

const ImperativeHandle = () => {
  const buttonRef = useRef(null);

  console.log(buttonRef);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        BUTTON from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
