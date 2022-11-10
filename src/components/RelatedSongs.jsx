import SongBar from "./SongBar";



const RelatedSongs = ({ isPlaying, data, activeSong, artistId, handlePlayClick, handlePauseClick}) => (
  <div>
    <h1 className=" font-bold text-white text-3xl">Related Songs:</h1>

    <div>
      {data?.map((song, i) =>
      <SongBar 
      key={i}
      song={song}
      i={i}
      isPlaying={isPlaying}
      artistId={artistId}
      activeSong={activeSong}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
      />
      )}
    </div>  
  
  
  </div>
);

export default RelatedSongs;
