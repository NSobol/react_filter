import "./App.css";
import Portfolio from "./components/Portfolio";
import { projects } from "./data/data";

function App(props) {
  return (
    <div className="container">
      <Portfolio list={projects} />
    </div>
  );
}

export default App;
