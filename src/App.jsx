/*eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitch = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">ご無沙汰しています</ColorfulMessage>
      <ColorfulMessage color="pink">またお会いしたいです</ColorfulMessage>
      <ColorfulMessage color="green">どうぞお元気で</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitch}>on/off</button>

      {faceShowFlag && <p>(^O^)</p>}
      <p>{num}</p>
    </>
  );
};
/**
 * jsx記法では、キャメルケース（onClickのような）を使用。{}の間はjavascriptだと理解される。
 */

export default App;
