import "./App.css";
import NFTCard from "./components/NFTCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import N1 from "./components/N1";
import N2 from "./components/N2";
import N3 from "./components/N3";
import N4 from "./components/N4";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<NFTCard />} path="/nfts" />
          <Route element={<N1 />} path="/n1" />
          <Route element={<N2 />} path="/n2" />
          <Route element={<N3 />} path="/n3" />
          <Route element={<N4 />} path="/n4" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
