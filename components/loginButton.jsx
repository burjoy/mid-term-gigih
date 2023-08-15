import React from "react";

function LoginButton({ handleLogin }) {
  return (
    <button className="bg-white text-emerald-500 rounded-full px-4 py-2 hover:bg-black hover:text-white" onClick={handleLogin}>
      Log in
    </button>
  );
}

export default LoginButton;