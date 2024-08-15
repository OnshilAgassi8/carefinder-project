import React from "react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
//import Resetpassword from "../components/Resetpassword";
//import { firestore } from "../firebase/firebase";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //signed in
      const user = userCredential.user;
      navigate("/hospitals")
      console.log(user);
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
  };

 return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={onLogin} className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Welcome Back!
          </h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        
          <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

         <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={onLogin}
            >
              Log in
            </button>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>

              <Link to="/Resetpassword">
                <p className="text-blue-500 hover:underline">Forgot Password?</p>
              </Link>

            </div>
          </div>
        </form>
        <Link
          to="/Register"
          className="block mt-6 text-center text-blue-500 hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>

  );
};

export default LoginForm;