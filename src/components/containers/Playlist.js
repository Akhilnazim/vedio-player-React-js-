import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({videos,active,nightMode,nightModeCallback}) => (
  <StyledPlaylist>
    <Nightmode nightMode={nightMode} nightModeCallback={nightModeCallback} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active}/>
  </StyledPlaylist>
)
export default Playlist;
