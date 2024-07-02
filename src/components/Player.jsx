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
        <SiTidal className="iconTidal"/>
      </button>
    </div>
    
  );
};

export default Player;
