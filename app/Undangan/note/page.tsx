"use client";

import { MapPinned } from "lucide-react";
import BottomNav from "@/components/BottonNav";

export default function NotePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#050f20] pb-28 text-white">

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

        {/* ===== GLOW ===== */}
        <div
          className="absolute left-1/2 top-32 z-[1] h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.08) 0%, rgba(20,80,200,0.08) 50%, transparent 75%)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-5 pt-12 text-center">

          {/* ===== TOP LABEL ===== */}
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

          {/* ===== TITLE ===== */}
          <div className="relative mt-6 inline-block">

            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize:
                  "clamp(42px, 10vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "0.1em",
                color: "transparent",
                backgroundImage:
                  "linear-gradient(160deg, #ffffff 10%, #e8d68a 45%, #ffd700 60%, #fff8e0 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                filter:
                  "drop-shadow(0 0 40px rgba(255,215,0,0.2))",
              }}
            >
              Note
              <br />
              Acara
            </h1>

            <div
              className="absolute -bottom-1 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,215,0,0.6), transparent)",
              }}
            />

          </div>

          {/* ===== SUBTITLE ===== */}
          <p
            className="mt-5 max-w-[320px] text-sm leading-relaxed text-white/45"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
              fontSize:
                "clamp(13px,2vw,15px)",
            }}
          >
            Informasi penting untuk seluruh
            tamu undangan wisuda SMK Telkom
            Malang
          </p>

          <Divider />

          {/* ===== CARD ===== */}
          <div
            className="mt-4 w-full max-w-md overflow-hidden rounded-[26px] p-6"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 60%, rgba(13,52,112,0.15) 100%)",
              border:
                "1px solid rgba(255,255,255,0.09)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.07), 0 25px 50px rgba(0,0,0,0.35)",
              backdropFilter: "blur(20px)",
            }}
          >

            {/* ===== SHIMMER ===== */}
            <div
              className="absolute left-5 right-5 top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,215,0,0.3), transparent)",
              }}
            />

            {/* ===== CARD LABEL ===== */}
            <p
              className="mb-5 text-[10px] text-yellow-300/70"
              style={{
                letterSpacing: "0.35em",
                fontFamily: "'Cinzel', serif",
              }}
            >
              INFORMASI PENTING
            </p>

            {/* ===== LIST ===== */}
            <ul className="space-y-4 text-left text-sm leading-relaxed text-white/75">

              {[
                "Undangan berlaku untuk dua orang",
                "Menggunakan pakaian formal",
                "Hadir 30 menit sebelum acara",
                "Konfirmasi kehadiran scan barcode pada undangan",
                "Undangan harap dibawa",
                "Gunakan Google Maps menuju Graha Cakrawala",
                "Mohon menjaga ketertiban selama acara",
                "Dilarang membawa makanan dan minuman dari luar",
                "Dilarang menggunakan flash saat dokumentasi",
                "Jaga barang bawaan pribadi",
                "Matikan atau silent mode pada perangkat saat acara berlangsung",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3"
                >
                  <span className="text-yellow-300">
                    ✦
                  </span>

                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* ===== BUTTON ===== */}
          <a
            href="https://maps.app.goo.gl/6KkrjWt3PZj8j6dL8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-bold text-[#050f20] transition-all active:scale-95"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.08em",
              background:
                "linear-gradient(135deg, #ffd700 0%, #f0c000 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,215,0,0.3), 0 8px 20px rgba(255,215,0,0.2)",
            }}
          >
            <MapPinned size={18} />

            BUKA MAPS
          </a>

          {/* ===== THANK YOU ===== */}
          <div className="mt-14 text-center">

            <p
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(30px, 5vw, 46px)",
                color: "#fff4d6",
                textShadow:
                  "0 0 20px rgba(255,215,0,0.25)",
              }}
            >
              Thank You
            </p>

            <div
              className="mx-auto mt-3 h-px w-44"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,215,0,0.6), transparent)",
              }}
            />

            <p className="mt-4 text-sm leading-relaxed text-white/45">
              atas kehadiran dan
              <br />
              kerja samanya
            </p>

          </div>

          {/* ===== SPARKLES ===== */}
          <div className="mt-10 flex gap-4">
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

        {/* ===== STYLE ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600&family=Playfair+Display:wght@700;900&display=swap");

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
    <div className="my-7 flex w-full max-w-[240px] items-center gap-3">

      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />

    </div>
  );
}