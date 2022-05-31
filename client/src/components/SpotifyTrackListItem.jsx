import React from "react";

export default function SpotifyTrackListItem({ track }) {
  return (
    <div className="w-full h-32 pr-2 flex items-center py-2 border-b border-gray-600">
      <img alt={track.title} src={track.cover} className="h-full mr-4" />
      <div className="flex flex-col h-full w-full justify-center">
        <label className="font-medium text-gray-100 w-full overflow-hidden">
          {track.title}
        </label>
        <div className="flex w-full">
          {track.artists.map((artist) => (
            <span className="text-sm text-gray-400 mr-2 overflow-hidden">
              {artist}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
