/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useState} from 'react';

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = ()=>{
    return useContext(AuthContext);
};

export const AuthProvider = ({children})=>{

    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL

    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem("user");
            return storedUser ? JSON.parse(storedUser) : null;
        } catch {
            return null;
        }
    });

    const signUp = async(data)=>{
        setLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/auth/signup`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setToken(res.data.data.token);
            setUser(res.data.data.user);

            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.data.user));

            toast.success("Signup successful");
            navigate("/login");
        } catch (error) {
            const message = error?.response?.data?.message || "Signup failed. Please try again.";
            toast.error(message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const login = async(data)=>{
        setLoading(true);

        try {
            const res = await axios.post(`${apiUrl}/auth/login`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });


            
        } catch (error) {
             const message = error?.response?.data?.message || "Login failed. Please try again.";
            toast.error(message);
            throw error;
        }
    };

    const verifyEmail = async(data)=>{
        try {
            const res = await axios.get(`${apiUrl}/auth/verify/:email/:verificationToken`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
        } catch (error) {
            
        }
    }



    const values = {
        loading,
        token,
        user,
        signUp,
        login,
        verifyEmail
    };


    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    
    



}

