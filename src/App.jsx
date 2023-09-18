import A from "./hooks/state";
import B from "./hooks/effect";
import C from "./hooks/memo";
import D from "./hooks/reducer";
import E from "./hooks/ref";
import F from "./hooks/custom";
import "./index.css";

function App() {
  return (
    <>
    <h1 className="dark-bg">How to React</h1>
    <div className="custom-grid-container">
      <div className="grid-item">
        <A />
      </div>
      <div className="grid-item">
        <B />
      </div>
      <div className="grid-item">
        <C />
      </div>
      <div className="grid-item">
        <D />
      </div>
      <div className="grid-item">
        <E />
      </div>
      <div className="grid-item">
        <F />
      </div>
    </div>
    </>
  );
}

export default App;

// import React from "react";
// import "./index.css";

// function App() {
//   const componentNames = [
//     "state",
//     "effect",
//     "memo",
//     "reducer",
//     "ref",
//     "custom",
//   ];
//   const [components, setComponents] = React.useState([]);

//   React.useEffect(() => {
//     Promise.all(
//       componentNames.map((componentName) =>
//         import(`./hooks/${componentName}.jsx`).then((module) => module.default)
//       )
//     ).then((importedComponents) => {
//       setComponents(importedComponents);
//     });
//   }, []);

//   return (
//     <>
//       <h1 className="dark-bg">How to React</h1>
//       <div className="custom-grid-container">
//         {components.map((Component, index) => (
//           <div className="grid-item" key={index}>
//             <Component />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;
