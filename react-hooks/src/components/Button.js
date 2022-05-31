import React, { useImperativeHandle, useState } from "react";

const Button = (props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>BUTTON from Child</button>
      <p>{toggle && <span>Toggle</span>}</p>
    </div>
  );
};
export default React.forwardRef(Button);
