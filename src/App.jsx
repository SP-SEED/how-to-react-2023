import { A, B , C , D, E, G} from "./hooks"
import "./index.css"; 


function App() {
  return(
    <div className="custom-grid-container"> {/* Apply custom CSS class */}
      <div className="grid-item"><A /></div>
      <div className="grid-item"><B /></div>
      <div className="grid-item"><C /></div>
      <div className="grid-item"><D /></div>
      <div className="grid-item"><E /></div>
      <div className="grid-item"><G /></div>
    </div>
  )
}

export default App