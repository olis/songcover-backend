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
    bpm: 137
  },
  {
    id: "2",
    title: "Hard to Handle",
    artist: "The Black Crows",
    key: "B",
    bpm: 103
  },
  {
    id: "3",
    title: "Mustang Sally",
    artist: "Wilson Pickett",
    key: "C",
    bpm: 110
  },
  {
    id: "4",
    title: "Cocaine",
    artist: "Eric Clapton",
    key: "A",
    bpm: 105
  },
  {
    id: "5",
    title: "Ain't no Sunshine",
    artist: "Bill Withers",
    key: "Em",
    bpm: 79
  },
  {
    id: "6",
    title: "Whish You Were Here",
    artist: "Pink Floyd",
    key: "G",
    bpm: 61
  }
];

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));

app.get("/songs", (reag, res) => {
  const decoratedSongs = songs.map(
    // tslint:disable-next-line: arrow-parens
    song => {
      song.snippet = Wikipedia.getSnippet(song);
      return song;
    }
  );
  res.send(decoratedSongs);
});

app.listen(port, () =>
  // tslint:disable-next-line:no-console
  console.log(`SongCover server listening on port ${port}!`)
);
