const request = require("request");

const router = require("express").Router();

const spotifyApiBaseUrl = "https://api.spotify.com/v1";

router.get("/search", (req, res) => {
  const searchOptions = {
    uri: spotifyApiBaseUrl + "/search",
    qs: {
      q: req.query.query,
      type: "track",
      limit: 10,
    },
    headers: {
      Authorization: "Bearer " + req.query.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  request.get(searchOptions, (err, response, body) => {
    console.log("response :", body);

    if (!err && response.statusCode === 200) {
      console.log("response :", JSON.parse(body).tracks.items[0]);
      res.json({ tracks: JSON.parse(body).tracks.items });
    } else {
      console.log("error :", err);
      res.status(404).json({ error: err });
    }
  });
});

module.exports = router;
