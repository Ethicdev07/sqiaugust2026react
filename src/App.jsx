import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Landingpage from "./pages/Landingpage";

const App = () => {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
