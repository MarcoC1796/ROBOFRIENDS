import React from "react";

const Scroll = ({ children }) => {
  return (
    // In JSX you can add CSS inline styles
    // using double brackets
    <div
      style={{
        overflow: "scroll",
        border: "1px solid black",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
