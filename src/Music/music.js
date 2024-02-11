import { Howl } from "howler";

import Drone256 from "../Music/DroneEb.256.mp3"
import WhaleSound from "../Music/Whale-converted.mp3"
import Heavy from "../Music/Track1/Heavy-melody.mp3"
import Bmelody from "../Music/Track1/B-melody.mp3"
import Track2Base from "../Music/Track2/Track2base.mp3"
import Track2Melody from "../Music/Track2/Track2melody.mp3"
import Track3Base from "../Music/Track3/Track3base.mp3"
import Track3Melody from "../Music/Track3/Track3melody.mp3"

export const drone = new Howl ({
    src: Drone256,
    loop: true,
})

export const whaleSound = new Howl ({
    src: WhaleSound,
    loop: true
})

export const heavyTrack1 = new Howl ({
    src: Heavy,
    loop: true,
    volume: .7
})

export const bTrack1 = new Howl ({
    src: Bmelody,
    loop: true
})

export const track2Base = new Howl ({
    src: Track2Base,
    loop: true,
    volume: 1.8
})

export const track2Melody = new Howl ({
    src: Track2Melody,
    loop: true
})
export const track3Base = new Howl ({
    src: Track3Base,
    loop: true
})

export const track3Melody = new Howl ({
    src: Track3Melody,
    loop: true
})