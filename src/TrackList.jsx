import React from "react";

export default function TrackList() {
  return (
    <div className="tracks">

      <div className="trackRow">
        <div className="trackNum">1</div>
        <div className="trackTitle">Come Together</div>
        <button className="playBtn">▶</button>
      </div>

      <div className="trackRow">
        <div className="trackNum">2</div>
        <div className="trackTitle">Something</div>
        <button className="playBtn">▶</button>
      </div>

      <div className="trackRow">
        <div className="trackNum">3</div>
        <div className="trackTitle">Maxwell's Silver Hammer</div>
        <button className="playBtn">▶</button>
      </div>

      <div className="trackRow">
        <div className="trackNum">4</div>
        <div className="trackTitle">Oh! Darling</div>
        <button className="playBtn">▶</button>
      </div>
    </div>
  );
}