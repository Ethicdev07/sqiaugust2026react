import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Landingpage from "./pages/Landingpage";
import Counter from "./hooks/Counter";
import Createproduct from "./pages/Createproduct";
import Timer from "./hooks/Timer"

import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <Router>
       <Nav/>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/create-product" element={<Createproduct/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>

         {/* <Counter/> */}
          {/* <Timer/> */}
         
      </Router>
    </>
  );
};

export default App;
