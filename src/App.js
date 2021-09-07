import SideBar from "./components/sideBar/SideBar";
import Topbar from "./components/topBar/Topbar";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <SideBar />
        <div className="others">others</div>
      </div>
    </div>
  );
}

export default App;
