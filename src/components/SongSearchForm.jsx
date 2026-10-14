function SongSearchForm({
  artistName,
  songName,
  onArtistNameChange,
  onSongNameChange,
  onSearch,
  searchStatus,
  lyricsStatus,
}) {
  const searchComplete = searchStatus === "success" && lyricsStatus === "success";

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <input
        className="text-slate-300 bg-slate-950 py-3 px-6 rounded-full border border-slate-600"
        type="text"
        name="artist_name"
        id="artist_name"
        placeholder="Artist Name 🎤"
        value={artistName}
        onChange={(event) => onArtistNameChange(event.target.value)}
      />
      <input
        className="text-slate-300 bg-slate-950 py-3 px-6 rounded-full border border-slate-600"
        type="text"
        name="song_name"
        id="song_name"
        placeholder="Song Name 🎸"
        value={songName}
        onChange={(event) => onSongNameChange(event.target.value)}
      />
      <button
        className="border border-pink-200 rounded-full py-3 px-6 bg-gradient-to-r from-fuchsia-300 to-rose-300 hover:bg-gradient-to-l"
        onClick={onSearch}
        type="button"
      >
        Search {searchComplete ? "🎉" : "🎈"}
      </button>
    </div>
  );
}

export default SongSearchForm;
