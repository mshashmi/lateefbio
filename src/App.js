import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseInfoOne from "./pages/Info";
import CaseInfoTwo from "./pages/CaseStudy";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pickrr-case-study" element={<CaseInfoOne />}></Route>
        <Route path="/wallet-case-study" element={<CaseInfoTwo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
