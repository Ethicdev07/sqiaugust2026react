import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { Moon } from "lucide-react"
import AppButton from "./AppButton";
import { useAuth } from "../contexts/AuthContext";

const Nav = () => {

    const navigate = useNavigate();
    const { token, user, logout } = useAuth();

    const handleSignUp = ()=>{
        navigate("/signup")
    };

    const handleLogin = ()=>{
        navigate("/login")
    }
  return (
    <header style={style.header}>
      <nav className="flex justify-around items-center p-5">
        <div style={{display:"flex", gap:"4em", alignItems: 'center'}}>
          
          <Link to={"/"} className="text-blue-700 text-2xl">
              <h1>AugEcommerce</h1>
          </Link>
          

          <ul style={{display:'flex', gap:"2em"}}>
            <li style={{listStyle:"none"}}>
                <Link to={"/about"} style={{textDecoration:'none', color:'#222'}}>About</Link>
            </li>
            <li style={{listStyle:"none"}}>
                  <Link to={"/product"} style={{textDecoration:'none', color:'#815a5a'}}>Product</Link>
            </li>
            <li style={{listStyle:"none"}}>
                  <Link to={"/create-product"} style={{textDecoration:'none', color:'#222'}}>Create product</Link>
            </li>
            <li style={{listStyle:"none"}}>Blog</li>
          </ul>
        </div>

       
        

        {/* <Moon/> */}

        {token && user ? (
          <div style={style.profileGroup}>
            <Link to={"/profile"} style={style.profileLink}>
              <span style={style.firstname}>Welcome, {user.firstname}</span>

              {user.profile_image ? (
                <img src={user.profile_image} alt={user.firstname} style={style.avatarImage} />
              ) : (
                <div style={style.avatarFallback}>
                  {user.firstname?.charAt(0).toUpperCase()}
                </div>
              )}
            </Link>

            <AppButton
              text="Logout"
              bgColor="white"
              useBorder="5px"
              handleClick={logout}
            />
          </div>
        ) : (
          <div style={{display:"flex", gap: "1em"}}>
             <AppButton
              text="Login"
              // textColor="blue"
              bgColor="white"
              useBorder="5px"
              handleClick={handleLogin}
             
             />

            <AppButton 
            text="Signup"
            bgColor="blue"
            textColor="white"
            useBorder="5px"
            handleClick={handleSignUp}
            
            />
          </div>
        )}
      </nav>
    </header>
  );
};


const style = {
    header: {
        backgroundColor: '#E8E8E8',
        boxShadow: '0px 2px 3px 3px grey'
    },
    profileGroup: {
        display: "flex",
        alignItems: "center",
        gap: "0.8em",
    },
    profileLink: {
        display: "flex",
        alignItems: "center",
        gap: "0.6em",
        textDecoration: "none",
        color: "#222",
    },
    avatarImage: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid blue",
    },
    avatarFallback: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: "16px",
    },
    firstname: {
        fontWeight: 600,
        color: "#222",
    },
}

export default Nav;
