import React from "react";
import ReactDom from "react-dom";
import App from "./App";

/**
 * JSX記法 jsの中でhtmlを書いていくAPI的な記法のこと。
 * jsx記法では、returnしていくhtmlは、下のDIVタグのようにひとつのタグで囲う必要がある。（ルール）
 */

ReactDom.render(<App />, document.getElementById("root"));
