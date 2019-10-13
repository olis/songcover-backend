import express from "express";
import cors from "cors";

import Song from "./src/domain/song";
import Wikipedia from "./src/connection/wikipedia";

const songs: Song[] = [
  {
    id: "1",
    title: "Jumpin' Jack Flash",
    artist: "The Rolling Stones",
    key: "Bb",
    bpm: 137,
    wikiTitle: "Jumpin' Jack Flash"
  },
  {
    id: "2",
    title: "Hard to Handle",
    artist: "The Black Crows",
    key: "B",
    bpm: 103,
    wikiTitle: "Hard to Handle (song)"
  },
  {
    id: "3",
    title: "Mustang Sally",
    artist: "Wilson Pickett",
    key: "C",
    bpm: 110,
    wikiTitle: "Mustang Sally (song)"
  },
  {
    id: "4",
    title: "Cocaine",
    artist: "Eric Clapton",
    key: "A",
    bpm: 105,
    wikiTitle: "Cocaine (song)"
  },
  {
    id: "5",
    title: "Ain't no Sunshine",
    artist: "Bill Withers",
    key: "Em",
    bpm: 79,
    wikiTitle: "Ain't No Sunshine"
  },
  {
    id: "6",
    title: "Whish You Were Here",
    artist: "Pink Floyd",
    key: "G",
    bpm: 61,
    wikiTitle: "Wish You Were Here (Pink Floyd song)"
  }
];

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));

app.get("/songs", async (reag, res) => {
  const decoratedSongs = await Promise.all(
    songs.map(async song => {
      const snippet = await Wikipedia.getSnippet(song);
      song.snippet = snippet;

      return song;
    })
  );
  res.send(decoratedSongs);
});

app.listen(port, () =>
  console.log(`SongCover server listening on port ${port}!`)
);
