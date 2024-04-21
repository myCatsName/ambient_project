import "./App.css";

import {
  drone,
  whaleSound,
  bTrack1,
  heavyTrack1,
  track2Base,
  track2Melody,
  track3Base,
  track3Melody,
} from "./Music/music";

import { ReactComponent as Emojione } from "./Assets/Emojione_BW_1F40B.svg";

const tracks = {
  whale: { track: [whaleSound], solo: false },
  drone: { class: ".Drone", track: [drone], solo: false },
  bTrack: { class: ".MelodyB", track: [bTrack1], solo: true },
  aTrack: { class: ".MelodyA", track: [heavyTrack1], solo: true },
  track2: { class: ".BonusA", track: [track2Base, track2Melody], solo: true },
  track3: { class: ".BonusB", track: [track3Base, track3Melody], solo: true },
};

const currentMainTrack = [];

const handleChange = (track) => {
  const target = tracks[track];
  const timeStamp = target.track[0].seek();
  target.track.forEach((track) =>
    track.playing() ? track.pause() : track.seek(timeStamp, track.play())
  );
  document.querySelector(target.class)?.classList.toggle("isPlaying");
  if (currentMainTrack !== target && target.solo) {
    currentMainTrack.track?.forEach((track) => track.pause());
    document
      .querySelector(currentMainTrack.class)
      ?.classList.remove("isPlaying");
    currentMainTrack = target;
  }
};

function App() {
  return (
    <div className="App">
      <div className="ButtonGroup1">
        <button className="Drone" onClick={() => handleChange("drone")}>
          Drone
        </button>
        <>
          <button className="MelodyA" onClick={() => handleChange(`aTrack`)}>
            Melody A
          </button>
          <button className="MelodyB" onClick={() => handleChange(`bTrack`)}>
            Melody B
          </button>
        </>
      </div>
      <Emojione className="Whale" onClick={() => handleChange(`whale`)} />
      <button className="QuestionMark">?</button>
      <footer className="Footer">
        <button className="BonusA" onClick={() => handleChange(`track2`)}>
          Bonus A
        </button>
        <button className="BonusB" onClick={() => handleChange(`track3`)}>
          Bonus B
        </button>
      </footer>
    </div>
  );
}

export default App;
