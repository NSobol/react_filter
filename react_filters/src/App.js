import "./App.css";
import Portfolio from "./components/Portfolio";

function App(props) {
  const { projects } = props;
  return (
    <div className="container">
      <Portfolio list={projects} />
    </div>
  );
}

export default App;
