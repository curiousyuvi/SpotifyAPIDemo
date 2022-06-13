import React, { useState } from "react";
import axios from "axios";
import SpotifyTrackListItem from "./SpotifyTrackListItem";
import { useTokenContext } from "../providers/TokenProvider";

export default function SpotifyTrackPicker() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const baseApiUrl = process.env.REACT_APP_BASE_API_URL;
  const tokenContext = useTokenContext();
  const token = tokenContext.token;

  const getTracks = () => {
    axios
      .get(baseApiUrl + "/tracks/search", {
        params: { token: token, query: query },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("response: ", response.data);
          setTracks(
            response.data.tracks.map((track) => {
              return {
                title: track.name,
                cover: track.album.images[1].url,
                artists: track.album.artists.map((artist) => artist.name),
                url: track.album.uri,
              };
            })
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    getTracks();
  };
  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a track..."
        className="text-lg bg-gray-500 rounded-lg px-4 py-1 mb-2 outline-0"
      />
      <div className="flex flex-col overflow-y-auto h-[calc(100%-32rem)]">
        {tracks.map((track) => (
          <SpotifyTrackListItem track={track} />
        ))}
      </div>
    </div>
  );
}
