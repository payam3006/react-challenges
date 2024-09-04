import "./App.css";
// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game1 } from "./pages/game1";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { Footer } from "./pages/Footer";
import { Profile } from "./pages/Profile";
import { TopComponent } from "./ٍExample-for9";
import { createContext, useState } from "react";

// npm install react-query
import { QueryClient, QueryClientProvider } from "react-query";

export const ProfileContex = createContext();

function App() {
  // react-query
  const client = new QueryClient({
    defaultOptions: {
      //تغییر ویژگی تکرار فچ هنگام بازگشت به صفحه
      queries: { refetchOnWindowFocus: false },
      //هر عملی غیر از خواندن دیتا از ای پی آی
      mutations: {},
    },
  });

  const [userName, setUserName] = useState("payam");

  return (
    <div className="App">
      {/* // react-query */}
      <QueryClientProvider client={client}>
        <ProfileContex.Provider value={{ userName, setUserName }}>
          <Router>
            <div>Payam Website!</div>

            {/* <Nav /> */}
            <Routes>
              {/* <Route path="/react-challenges/game1" element={<Game1 />} /> */}
              <Route path="/game1" element={<Game1 />} />

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile/:name/:id?" element={<Profile />} />
              <Route path="*" element={<div>Not Found!</div>} />
            </Routes>
            {/* <Footer /> */}
          </Router>
        </ProfileContex.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
