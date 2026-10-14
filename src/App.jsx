import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppLogo from "./components/AppLogo.jsx";
import CopyrightNotice from "./components/CopyrightNotice.jsx";
import SongSearchForm from "./components/SongSearchForm.jsx";
import SongSearchResults from "./components/SongSearchResults.jsx";

const API_URL = "https://genius-song-lyrics1.p.rapidapi.com";
const API_HEADERS = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
};

function App() {
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");

  const searchSongs = async () => {
    if (!artistName.trim() && !songName.trim()) {
      toast.error("Fields are empty 😵 !", {
        position: "top-center",
        icon: false,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return undefined;
    }

    const query = `${artistName} ${songName}`;
    return axios.get(`${API_URL}/search/`, {
      headers: API_HEADERS,
      params: { q: query, per_page: 10, page: 1 },
    });
  };

  const {
    data: searchResponse,
    status: searchStatus,
    refetch: searchSongsOnDemand,
  } = useQuery(["image_thumbnail"], searchSongs, { enabled: false });

  const song = searchResponse?.data?.hits?.[0]?.result;
  const songId = song?.id;

  const fetchLyrics = async () => {
    return axios.get(`${API_URL}/song/lyrics/`, {
      headers: API_HEADERS,
      params: { id: songId },
    });
  };

  const { data: lyricsResponse, status: lyricsStatus } = useQuery(
    ["song_id", songId],
    fetchLyrics,
    { enabled: Boolean(songId) }
  );

  return (
    <main className="container flex flex-col items-center gap-10 p-20 md:p-40 flex-wrap">
      <AppLogo />
      <SongSearchForm
        artistName={artistName}
        songName={songName}
        onArtistNameChange={setArtistName}
        onSongNameChange={setSongName}
        onSearch={searchSongsOnDemand}
        searchStatus={searchStatus}
        lyricsStatus={lyricsStatus}
      />
      <SongSearchResults
        searchStatus={searchStatus}
        lyricsStatus={lyricsStatus}
        thumbnailUrl={song?.header_image_thumbnail_url}
        lyricsHtml={lyricsResponse?.data?.lyrics?.lyrics?.body?.html}
      />
      <CopyrightNotice />
      <ToastContainer />
    </main>
  );
}

export default App;
