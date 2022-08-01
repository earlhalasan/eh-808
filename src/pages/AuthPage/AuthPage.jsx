import React, { useState } from "react";
// import './AuthPage.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import Logo from "../../components/Logo/Logo";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="">
      <div className="text-white text-9xl font-bold pt-8 pb-8 underline tracking-tighter">
        MusicSupply
      </div>
      <div className="flex flex-row justify-center">
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </div>
      <div className="text-white">
        {/* <Logo /> */}
        <button className="rounded-lg font-semibold hover:text-black hover:bg-[#fcbf49] duration-200">
          <h3 onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? "Sign Up" : "Log In"}
          </h3>
        </button>
      </div>
    </main>
  );
}
