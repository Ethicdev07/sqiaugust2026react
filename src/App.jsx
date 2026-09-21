import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Landingpage from "./pages/Landingpage";
import Createproduct from "./pages/Createproduct";

import Products from "./pages/Products";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Nav/>
          <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/create-product" element={<Createproduct/>}/>
            <Route path="/product" element={<Products/>}/>
            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/verify/:email/:verificationToken" element={<VerifyEmail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            toastClassName="appToast"
            bodyClassName="appToastBody"
            progressClassName="appToastProgress"
          />

        
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
