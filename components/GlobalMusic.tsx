"use client";

import { useEffect, useRef } from "react";

export default function GlobalMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.3;

    const startMusic = async () => {
      try {
        if (audio.paused) {
          await audio.play();
        }
      } catch (err) {
        console.log("Autoplay gagal");
      }
    };

    // autoplay pertama
    startMusic();

    // fallback kalau autoplay diblok browser
    const handleUserInteract = () => {
      startMusic();

      // setelah berhasil langsung hapus listener
      document.removeEventListener(
        "click",
        handleUserInteract
      );
    };

    document.addEventListener(
      "click",
      handleUserInteract
    );

    return () => {
      document.removeEventListener(
        "click",
        handleUserInteract
      );
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      hidden
    >
      <source
        src="/music1.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}