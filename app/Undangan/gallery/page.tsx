"use client";

import { useRef, useState } from "react";

import {
  ImagePlus,
  X,
} from "lucide-react";

import BottomNav from "@/components/BottonNav";

/* ===== DATA AWAL ===== */
const initialPhotos = [
  "/rpl3-kelas.png",
  "/rpl6-kelas.png",
  "/kel1.JPG",
  "/kel2.JPG",
];

export default function GalleryPage() {
  const [photos, setPhotos] =
    useState<string[]>(initialPhotos);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  /* ===== TAMBAH FOTO ===== */
  const handleAddPhoto = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    const newPhotos = Array.from(files).map(
      (file) => URL.createObjectURL(file)
    );

    setPhotos((prev) => [
      ...prev,
      ...newPhotos,
    ]);
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#050f20] px-4 pb-32 text-white">

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #0d3470 0%, #071840 45%, #050f20 100%)",
          }}
        />

        {/* ===== TOP GOLD LINE ===== */}
        <div
          className="absolute top-0 left-0 right-0 z-[3] h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,215,0,0.7), transparent)",
          }}
        />

        {/* ===== AMBIENT GLOW ===== */}
        <div
          className="absolute left-1/2 top-0 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/4 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.07) 0%, rgba(20,80,200,0.08) 50%, transparent 75%)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-6xl pt-12">

          {/* ===== HEADER ===== */}
          <div className="mx-auto mb-12 flex max-w-[720px] flex-col items-center text-center">

            {/* LABEL */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5 backdrop-blur-xl"
              style={{
                letterSpacing: "0.32em",
              }}
            >

              <span className="text-[9px] text-yellow-400">
                ✦
              </span>

              <span className="text-[9px] text-yellow-300/80">
                LUMINEX · ANGKATAN 32
              </span>

              <span className="text-[9px] text-yellow-400">
                ✦
              </span>

            </div>

            {/* TITLE */}
            <div className="relative mt-6 inline-block">

              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize:
                    "clamp(34px,7vw,68px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "0.06em",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(160deg, #ffffff 10%, #e8d68a 45%, #ffd700 60%, #fff8e0 90%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  filter:
                    "drop-shadow(0 0 35px rgba(255,215,0,0.18))",
                }}
              >
                Our Memories
              </h1>

              <div
                className="absolute -bottom-1 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,215,0,0.6), transparent)",
                }}
              />

            </div>

            {/* SUBTITLE */}
            <p
              className="mt-4 max-w-[420px] text-white/50"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
                fontSize:
                  "clamp(13px,2vw,15px)",
              }}
            >
              Kenangan terbaik bersama
              LUMINEX
            </p>

            <Divider />

          </div>

          {/* ===== BUTTON ===== */}
          <div className="mx-auto mb-14 mt-2 w-fit">

            <button
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-bold text-[#050f20] transition-all active:scale-95"
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.08em",
                background:
                  "linear-gradient(135deg, #ffd700 0%, #f0c000 100%)",
                boxShadow:
                  "0 0 0 1px rgba(255,215,0,0.3), 0 8px 20px rgba(255,215,0,0.2)",
              }}
            >

              <ImagePlus size={18} />

              Tambah Foto

            </button>

            <input
              type="file"
              multiple
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAddPhoto}
              className="hidden"
            />

          </div>

          {/* ===== GALLERY ===== */}
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">

            {photos.map((img, i) => (
              <div
                key={i}
                onClick={() =>
                  setSelectedImage(img)
                }
                className="group relative cursor-pointer overflow-hidden rounded-[24px] p-[1px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,215,0,0.20), rgba(255,255,255,0.08), rgba(255,215,0,0.10))",
                }}
              >

                <div
                  className="relative overflow-hidden rounded-[24px]"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 60%, rgba(13,52,112,0.12) 100%)",
                    backdropFilter: "blur(20px)",
                  }}
                >

                  {/* IMAGE */}
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />

                  {/* SHIMMER */}
                  <div
                    className="absolute left-4 right-4 top-0 h-px"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(255,215,0,0.4), transparent)",
                    }}
                  />

                </div>

              </div>
            ))}

          </div>

          {/* ===== EMPTY ===== */}
          {photos.length === 0 && (
            <div className="mt-20 text-center text-white/45">
              Belum ada foto
            </div>
          )}

          {/* ===== ORNAMENT ===== */}
          <div className="mt-14 flex justify-center gap-5">

            {["✦", "✧", "⋆", "✧", "✦"].map(
              (s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 16,
                    textShadow:
                      "0 0 10px rgba(255,215,0,0.8)",
                    animation: `float 2.5s ease-in-out ${
                      i * 0.2
                    }s infinite`,
                    color:
                      i % 2 === 1
                        ? "#ffffff"
                        : "#ffd700",
                  }}
                >
                  {s}
                </span>
              )
            )}

          </div>

        </div>

        {/* ===== MODAL ===== */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() =>
              setSelectedImage(null)
            }
          >

            {/* CLOSE */}
            <button
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-md"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              <X size={22} />
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-full rounded-[28px] border border-white/10 shadow-2xl"
            />

          </div>
        )}

        {/* ===== STYLE ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600&display=swap");

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>

      </main>

      <BottomNav />
    </>
  );
}

function Divider() {
  return (
    <div className="my-7 flex w-full items-center justify-center gap-3">

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />

    </div>
  );
}