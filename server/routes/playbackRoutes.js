const request = require("request");
const router = require("express").Router();
const spotifyApiBaseUrl = "https://api.spotify.com/v1";

router.post("/play", (req, res) => {
  const playOptions = {
    uri: spotifyApiBaseUrl + "/me/player/play",
    qs: {
      device_id: req.body.device_id,
    },
    headers: {
      Authorization: "Bearer " + req.body.token,
      "Content-Type": "application/json",
    },
    json: true,
    body: {
      uris: [req.body.track_uri],
    },
  };

  console.log("playOptions: ", playOptions);

  request.put(playOptions, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      res.json({
        message: `Playing ${req.body.track_uri} on ${req.body.device_id}`,
      });
    } else {
      res.status(404).json({ error: err });
    }
  });
});

module.exports = router;
