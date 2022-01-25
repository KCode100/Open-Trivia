import { useEffect, useState } from "react";

const SoundTrack = () => {
    const [playing, setPlaying] = useState(true);
    const [soundTrack, setSoundTrack] = useState('/Feel-Good.mp3')
    const [audio] = useState(new Audio(soundTrack));

    // toggle sound
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(true));
    }, []);

    return (
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    );
}

export default SoundTrack;