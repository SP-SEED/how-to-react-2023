import { A, B, C, D, E, F } from "./hooks";
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
