import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyMain from "./components/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MyMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
