import React, { useState } from "react";
import { songsData } from "./data";

function Song() {
  const [search, setSearch] = useState("");
  const [currentSong, setCurrentSong] = useState(null);

  // Filter songs by search
  const filteredSongs = songsData.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.movie.toLowerCase().includes(search.toLowerCase())
  );

  // Group songs by movie
  const movies = [...new Set(filteredSongs.map((song) => song.movie))];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Audio Songs App</h1>

      <input
        type="text"
        placeholder="Search by song or movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      {movies.map((movie) => (
        <div key={movie}>
          <h2>{movie}</h2>
          <ul>
            {filteredSongs
              .filter((song) => song.movie === movie)
              .map((song) => (
                <li key={song.id} style={{ marginBottom: "10px" }}>
                  {song.title}{" "}
                  <button onClick={() => setCurrentSong(song.url)}>Play</button>
                </li>
              ))}
          </ul>
        </div>
      ))}

      {currentSong && (
        <div style={{ marginTop: "20px" }}>
          <audio controls autoPlay src={currentSong}></audio>
        </div>
      )}
    </div>
  );
}

export default Song;
