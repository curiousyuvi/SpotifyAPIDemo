import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyTrackPicker from "../components/SpotifyTrackPicker";
import io from "socket.io-client";
import { useTokenContext } from "../providers/TokenProvider";
import SpotifyPlayer from "../components/SpotifyPlayer";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

export default function Home() {
  const socket = io.connect(process.env.REACT_APP_BASE_URL);
  const navigate = useNavigate();
  const tokenContext = useTokenContext();
  const token = tokenContext.token;
  const getOAuthToken = useCallback((callback) => callback(token), []);

  useEffect(() => {
    console.log("token: ", token);
    if (token === "") navigate("/auth/login");
    else {
      socket.emit("join_room", "room1");
    }
  }, []);

  return (
    <div className="h-screen w-screen p-4 flex justify-center items-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-sm h-full flex flex-col justify-between items-center bg-gray-700 p-4">
        <SpotifyTrackPicker />
        <WebPlaybackSDK
          deviceName="Spotify API Test"
          getOAuthToken={getOAuthToken}
          volume={0.7}
          connectOnInitialized={true}
        >
          <SpotifyPlayer />
        </WebPlaybackSDK>
      </div>
    </div>
  );
}
