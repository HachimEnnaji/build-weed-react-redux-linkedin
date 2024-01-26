import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyMain from "./components/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./components/HomePages";
import WorkPage from "./components/WorkPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/main" element={<MyMain />}></Route>
          <Route path="/" element={<HomePages />}></Route>
          <Route path="/jobs/:category/:query" element={<WorkPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
