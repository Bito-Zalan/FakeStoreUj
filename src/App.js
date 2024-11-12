import "./App.css";
import Admin from "./pages/Admin";
/* import Urlap from "./components/Urlap"; */

/*import Public from "./pages/Public";*/

function App() {
  

  return (
    <div className="container">
      <header>
        <h1>FakeStore webáruház</h1>
      </header>
      <Admin />
      {/* <Urlap /> */}
      {/*<Public />*/}
    </div>
  );
}

export default App;
