import { StrictMode } from "react";
// import { createRoot } from "react-dom/client"; // version 18
import ReactDOM from "react-dom"; //version 17

import App from "./App";

// version 18
// const rootElement = document.getElementById("root") as HTMLElement;
// const root = createRoot(rootElement);
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// version 17
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
