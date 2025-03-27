import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Package from "./pages/Package";
import AirportTransfer from "./pages/AirportTransfer";
import CharterCar from "./pages/CharterCar";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Package />} />
          <Route path="/airport-transfer" element={<AirportTransfer />} />
          <Route path="/charter-car" element={<CharterCar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
