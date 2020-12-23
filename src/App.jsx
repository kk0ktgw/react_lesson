import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = { color: "blue", fontSize: "15px" };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <p style={contentStyle}>nice to meet you.</p>
      <button onClick={onClickButton}>push</button>
    </>
  );
};
/**
 * jsx記法では、キャメルケース（onClickのような）を使用。{}の間はjavascriptだと理解される。
 */

export default App;
