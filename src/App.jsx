import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyMain from "./components/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./components/HomePages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/main" element={<MyMain />}></Route>
          <Route path="/" element={<HomePages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
