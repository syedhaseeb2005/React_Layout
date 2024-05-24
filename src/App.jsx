import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/layout";
import DashBoard from "./component/DashBoard/DashBoard";
import About from "./component/About/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact  path="/" element={<Layout/>}>
          <Route index  path="/dashboard" element={<DashBoard/>}/>
          <Route  path="/about"  element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
