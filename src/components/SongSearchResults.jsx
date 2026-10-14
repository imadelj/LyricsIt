import { Skeleton } from "@mui/material";

function SongSearchResults({ searchStatus, lyricsStatus, thumbnailUrl, lyricsHtml }) {
  return (
    <section className="mt-2 flex w-80 max-w-full shrink-0 flex-col gap-5 text-slate-300" aria-live="polite">
      {searchStatus === "loading" && (
        <Skeleton
          sx={{ bgcolor: "#ffffff30" }}
          className="w-full"
          variant="rounded"
          height={288}
          width="100%"
          animation="pulse"
        />
      )}
      {searchStatus === "error" && "Error getting image thumbnail !"}
      {searchStatus === "success" && thumbnailUrl && (
        <img
          className="h-72 w-full rounded-xl object-cover"
          src={thumbnailUrl}
          alt="Song artwork"
        />
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
