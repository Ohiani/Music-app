import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {Loader, Error} from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import { RelatedSongs, DetailsHeader } from "../components";




 
const ArtistDetails = () =>{
  const {id: artistId} = useParams();
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const {data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery(artistId);



  if(isFetchingArtistDetails) return <Loader title='Loading Artist details...'/>;

  if(error) return <Error/>;




return (
  <div className="flex flex-col">
   
      <DetailsHeader 
      artistId={artistId} 
      artistData={artistData}/>
      
      <RelatedSongs 
      isPlaying= {isPlaying}
      artistId= {artistId}
      data= {Object.values(artistData?.songs)}
      activeSong= {activeSong}
      />

  </div>         
)};


export default ArtistDetails;
