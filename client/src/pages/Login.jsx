// import React, { useEffect } from "react";
// import axios from "axios";

export default function Login() {
  //   useEffect(() => {
  //     axios.get("http://localhost:3001/api/auth/login");
  //   }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <a
        href="http://localhost:3001/api/auth/login"
        className="text-4xl bg-green-500 text-white p-4 rounded-lg"
      >
        LOGIN
      </a>
    </div>
  );
}
