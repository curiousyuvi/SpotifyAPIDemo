import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyTrackPicker from "../components/SpotifyTrackPicker";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    console.log("Token: ", token);
    console.log("baseApiUrl: ", process.env.REACT_APP_BASE_API_URL);
    if (token === "") navigate("/auth/login");
  }, []);

  return (
    <div className="h-screen w-screen p-4 flex justify-center items-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-sm h-full flex flex-col justify-between items-center bg-gray-700 p-4">
        <SpotifyTrackPicker />
      </div>
    </div>
  );
}
