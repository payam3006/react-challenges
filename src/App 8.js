import "./App.css";
// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { Footer } from "./pages/Footer";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <div>Payam Website!</div>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ? for not going to NotFound page */}
          <Route path="/profile/:name?/:id?" element={<Profile />} />
          <Route path="*" element={<div>Not Found!</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
