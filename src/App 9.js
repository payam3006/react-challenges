import "./App.css";
// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { Footer } from "./pages/Footer";
import { Profile } from "./pages/Profile";
import { TopComponent } from "./ٍExample-for9";
import { createContext, useState } from "react";

export const ProfileContex = createContext();

function App() {
  const [userName, setUserName] = useState("payam");

  // return (
  //   <div className="App">
  //     <Router>
  //       <div>Payam Website!</div>

  //       <Nav />
  //       <Routes>
  //         <Route path="/" element={<Home userName={userName} />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/contact" element={<Contact />} />
  //         <Route
  //           path="/profile/:name/:id?"
  //           element={<Profile userName={userName} setUserName={setUserName} />}
  //         />
  //         <Route path="*" element={<div>Not Found!</div>} />
  //       </Routes>
  //       <Footer />
  //     </Router>
  //   </div>
  // );

  return (
    <div className="App">
      <ProfileContex.Provider value={{ userName, setUserName }}>
        <Router>
          <div>Payam Website!</div>

          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:name/:id?" element={<Profile />} />
            <Route path="*" element={<div>Not Found!</div>} />
          </Routes>
          <Footer />
        </Router>
      </ProfileContex.Provider>
    </div>
  );
}

export default App;
