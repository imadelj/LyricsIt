import { Skeleton } from "@mui/material";

function SongSearchResults({ searchStatus, lyricsStatus, thumbnailUrl, lyricsHtml }) {
  return (
    <section className="mt-2 text-slate-300 flex flex-col gap-5" aria-live="polite">
      {searchStatus === "loading" && (
        <Skeleton
          sx={{ bgcolor: "#ffffff30" }}
          variant="rounded"
          height={250}
          width={250}
          animation="pulse"
        />
      )}
      {searchStatus === "error" && "Error getting image thumbnail !"}
      {searchStatus === "success" && thumbnailUrl && (
        <img className="thumbnail_image" src={thumbnailUrl} alt="Song artwork" />
      )}
      {lyricsStatus === "loading" && (
        <>
          <Skeleton sx={{ bgcolor: "#ffffff30" }} variant="rounded" width="100%" height={10} animation="pulse" />
          <Skeleton sx={{ bgcolor: "#ffffff30" }} variant="rounded" width="90%" height={10} animation="pulse" />
          <Skeleton sx={{ bgcolor: "#ffffff30" }} variant="rounded" width="85%" height={10} animation="pulse" />
          <Skeleton sx={{ bgcolor: "#ffffff30" }} variant="rounded" width="92%" height={10} animation="pulse" />
        </>
      )}
      {lyricsStatus === "error" && "Error getting lyrics !"}
      {lyricsStatus === "success" && lyricsHtml && (
        <div className="lyrics" dangerouslySetInnerHTML={{ __html: lyricsHtml }} />
      )}
    </section>
  );
}

export default SongSearchResults;
