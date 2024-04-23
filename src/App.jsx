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

const trackDetails = {
  whale: { src: [whaleSound], solo: false },
  drone: { class: ".Drone", src: [drone], solo: false },
  bTrack: { class: ".MelodyB", src: [bTrack1], solo: true },
  aTrack: { class: ".MelodyA", src: [heavyTrack1], solo: true },
  track2: { class: ".BonusA", src: [track2Base, track2Melody], solo: true },
  track3: { class: ".BonusB", src: [track3Base, track3Melody], solo: true },
};

let currentMainTrack = [];

const toggleTrack = (selection) => {
  const selectedTrack = trackDetails[selection];
  if (selectedTrack.solo && currentMainTrack !== selectedTrack) {
    currentMainTrack.src?.forEach((track) => track.pause());
    document
      .querySelector(currentMainTrack.class)
      ?.classList.remove("isPlaying");
    currentMainTrack = selectedTrack;
  }
  const timeStamp = selectedTrack.src[0].seek();
  selectedTrack.src.forEach((track) =>
    track.playing() ? track.pause() : track.seek(timeStamp, track.play())
  );
  document.querySelector(selectedTrack.class)?.classList.toggle("isPlaying");
};

function App() {
  return (
    <div className="App">
      <div className="ButtonGroup1">
        <button className="Drone" onClick={() => toggleTrack("drone")}>
          Drone
        </button>
        <>
          <button className="MelodyA" onClick={() => toggleTrack(`aTrack`)}>
            Melody A
          </button>
          <button className="MelodyB" onClick={() => toggleTrack(`bTrack`)}>
            Melody B
          </button>
        </>
      </div>
      <Emojione className="Whale" onClick={() => toggleTrack(`whale`)} />
      <button className="QuestionMark">?</button>
      <footer className="Footer">
        <button className="BonusA" onClick={() => toggleTrack(`track2`)}>
          Bonus A
        </button>
        <button className="BonusB" onClick={() => toggleTrack(`track3`)}>
          Bonus B
        </button>
      </footer>
    </div>
  );
}

export default App;
