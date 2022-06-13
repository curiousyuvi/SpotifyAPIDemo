import React, { useEffect } from "react";
import {
  useErrorState,
  usePlaybackState,
  usePlayerDevice,
  useWebPlaybackSDKReady,
} from "react-spotify-web-playback-sdk";
import { useTokenContext } from "../providers/TokenProvider";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import axios from "axios";

export default function SpotifyPlayer() {
  const tokenContext = useTokenContext();
  const token = tokenContext.token;
  const playbackState = usePlaybackState();
  const webPlaybackSDKReady = useWebPlaybackSDKReady();
  const errorState = useErrorState();
  const device = usePlayerDevice();

  useEffect(() => {
    // if (webPlaybackSDKReady) {
    //   //   if (device.status === "ready") {
    //   //     const body = JSON.stringify({
    //   //       token,
    //   //       track_uri: "spotify:track:6jPYp5f3lV4vEOGrnJZ9cv",
    //   //       device_id: device.device_id,
    //   //     });
    //   //     axios
    //   //       .post(process.env.REACT_APP_BASE_API_URL + "/playback/play", body)
    //   //       .then((response) => {
    //   //         console.log(response.data);
    //   //       })
    //   //       .catch((err) => {
    //   //         console.log(err);
    //   //       });
    //   //   }
    // }

    if (errorState) console.log("error: ", errorState.message);
    console.log("sdk downloaded: ", webPlaybackSDKReady);

    console.log("device: ", device);
  }, [webPlaybackSDKReady, device, errorState]);

  return (
    <>
      {/* {webPlaybackSDKReady ? (
        device.status === "ready" ? (
          <div className="flex flex-col w-full h-32">
            <div className="w-full pr-2 flex h-full">
              <img
                className="h-full"
                src={
                  playbackState.track_window.current_track.album.images[0].url
                }
                alt="Song Cover"
              />
              <div className="w-full h-full flex flex-col justify-center">
                <label className="font-medium text-gray-100 w-full overflow-hidden">
                  {playbackState.track_window.current_track.name}
                </label>
                <div className="flex w-full">
                  {playbackState.track_window.current_track.artists.map(
                    (artist) => (
                      <span className="text-sm text-gray-400 mr-2 overflow-hidden">
                        {artist.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="w-full p-2 flex justify-center items-center">
              <button>
                <IoPlaySkipForwardSharp />
              </button>
              <button>
                <FaPlay />
              </button>
              <button>
                <IoPlaySkipBackSharp />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )
      ) : (
        <div className="flex flex-col w-full h-32">Loading...</div>
      )} */}
    </>
  );
}
