//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Header from "./Header";
import Navbar from './Navbar';

function App() {
  return (
      <>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </>
  );
}

export default App;
