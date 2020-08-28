import { useState } from "react";
import Sidebar from "../components/Sidebar";
import requestSearchPlaylistsSpotify from "./services/requestSearchPlaylistsSpotify";
import requestTracksFromPlaylist from "./services/requestTracksFromPlaylist";

export default function Home() {
  const [query, setQuery] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);

  const seachPlaylists = async (e) => {
    e.preventDefault();
    const data = await requestSearchPlaylistsSpotify(query);
    setPlaylists(data.playlists.items);
  };

  const getTracksFromPlaylist = async (playlistId) => {
    const data = await requestTracksFromPlaylist(playlistId);
    setTracks(data.items);
  };

  return (
    <div className="layout logged">
      <Sidebar />
      <main className="search-container">
        <form onSubmit={seachPlaylists} className="form-wrapper">
          <input
            type="text"
            className="form-input"
            placeholder="Type a playlist"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type="submit" className="button form-button" value="Buscar" />
        </form>
      </main>
    </div>
  );
}
