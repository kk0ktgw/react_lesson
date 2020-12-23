import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = { color, fontSize: "19px" };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
