import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import N1 from "./components/N1";
import N2 from "./components/N2";
import N3 from "./components/N3";
import N4 from "./components/N4";
import N5 from "./components/N5";
import N6 from "./components/N6";
import N7 from "./components/N7";
import N8 from "./components/N8";
import NFTList from "./components/NFTList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<NFTList />} path="/nfts" />
          <Route element={<N1 />} path="/n1" />
          <Route element={<N2 />} path="/n2" />
          <Route element={<N3 />} path="/n3" />
          <Route element={<N4 />} path="/n4" />
          <Route element={<N5 />} path="/n5" />
          <Route element={<N6 />} path="/n6" />
          <Route element={<N7 />} path="/n7" />
          <Route element={<N8 />} path="/n8" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
