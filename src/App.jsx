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

function handleDrone() {
  document.querySelector(".Drone").classList.toggle("isPlaying");
  let droneID = drone.seek();
  drone.playing() ? drone.pause() : drone.seek(droneID, drone.play());
}
function handleWhale() {
  const whaleID = whaleSound.seek();
  whaleSound.playing()
    ? whaleSound.pause()
    : whaleSound.seek(whaleID, whaleSound.play());
}
function handleHeavyTrack() {
  togglePlayingEffect(".MelodyA");
  let heavyID = heavyTrack1.seek();
  bTrack1.playing() && bTrack1.pause();
  track2Base.playing() && track2Base.pause() && track2Melody.pause();
  track3Base.playing() && track3Base.pause() && track3Melody.pause();
  heavyTrack1.playing()
    ? heavyTrack1.pause()
    : heavyTrack1.seek(heavyID, heavyTrack1.play());
}
function handleBtrack() {
  togglePlayingEffect(".MelodyB");
  let bTrackID = bTrack1.seek();
  heavyTrack1.playing() && heavyTrack1.pause();
  track2Base.playing() && track2Base.pause() && track2Melody.pause();
  track3Base.playing() && track3Base.pause() && track3Melody.pause();
  bTrack1.playing() ? bTrack1.pause() : bTrack1.seek(bTrackID, bTrack1.play());
}
function handleBonus1() {
  togglePlayingEffect(".BonusA");
  if (track2Base.playing()) {
    track2Base.pause();
    track2Melody.pause();
  } else {
    bTrack1.stop();
    heavyTrack1.stop();
    track3Base.pause();
    track3Melody.pause();
    track2Base.play();
    track2Melody.play();
  }
}
function handleBonus2() {
  togglePlayingEffect(".BonusB");
  if (track3Base.playing()) {
    track3Base.pause();
    track3Melody.pause();
  } else {
    bTrack1.stop();
    heavyTrack1.stop();
    track2Base.stop();
    track2Melody.stop();
    track3Base.play();
    track3Melody.play();
  }
}

function togglePlayingEffect(id) {
  const ting = document.querySelector(id);
  const btnClass = [".MelodyA", ".MelodyB", ".BonusA", ".BonusB"];

  if (ting.classList.contains("isPlaying")) ting.classList.remove("isPlaying");
  else {
    btnClass
      .filter((btn) =>
        document.querySelector(btn).classList.contains("isPlaying")
      )
      .forEach((btn) =>
        document.querySelector(btn).classList.remove("isPlaying")
      );

    ting.classList.add("isPlaying");
  }
}

function App() {
  return (
    <div className="App">
      <div className="ButtonGroup1">
        <button className="Drone" onClick={handleDrone}>
          Drone
        </button>
        <>
          <button className="MelodyA" onClick={handleHeavyTrack}>
            Melody A
          </button>
          <button className="MelodyB" onClick={handleBtrack}>
            Melody B
          </button>
        </>
      </div>
      <Emojione className="Whale" onClick={handleWhale} />
      <button className="QuestionMark">?</button>
      <footer className="Footer">
        <button className="BonusA" onClick={handleBonus1}>
          Bonus A
        </button>
        <button className="BonusB" onClick={handleBonus2}>
          Bonus B
        </button>
      </footer>
    </div>
  );
}

export default App;
