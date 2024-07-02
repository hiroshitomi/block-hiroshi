import { IoCaretForwardSharp } from "react-icons/io5";
import { SiTidal } from "react-icons/si";

const Player = () => {
  return (
    <div className="player">
      <button className="soundtrackBtn">
          <IoCaretForwardSharp className="iconPlay" />
        <div className="soundtrack">
          <span className="titleSong">Block Vibes</span>
          <span>Music song</span>
        </div>
      </button>
      <button className="tidalBtn">
        <a href="https://tidal.com/browse/playlist/3d95c4f6-dad5-4d7f-a469-8bde01b7771d" target="_blank">
          <SiTidal className="iconTidal"/>
        </a>
      </button>
    </div>
    
  );
};

export default Player;
