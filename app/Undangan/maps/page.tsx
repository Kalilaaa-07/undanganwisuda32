"use client";

import { MapPin, Navigation, Clock3, Car, Train, Coffee } from "lucide-react";
import BottomNav from "@/components/BottonNav";

const transportInfo = [
  {
    icon: Car,
    label: "Kendaraan Pribadi",
    desc: "Tersedia area parkir luas di sekitar Graha Cakrawala UM",
  },
  {
    icon: Train,
    label: "Angkutan Umum",
    desc: "Tersedia angkot & ojek online dari Stasiun Malang ±15 menit",
  },
  {
    icon: Coffee,
    label: "Fasilitas Venue",
    desc: "Ruang ber-AC, kursi tamu, dan area fotografi tersedia",
  },
];

const milestones = [
  { time: "07.30", label: "Pintu Dibuka" },
  { time: "08.00", label: "Acara Mulai" },
  { time: "11.00", label: "Selesai" },
];

export default function MapsPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#050f20] pb-36 text-white">

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, #0d3470 0%, #071840 45%, #050f20 100%)",
          }}
        />

        {/* ===== TOP GOLD LINE ===== */}
        <div
          className="absolute top-0 left-0 right-0 z-[3] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.7), transparent)" }}
        />

        {/* ===== AMBIENT GLOW ===== */}
        <div
          className="absolute left-1/2 top-0 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/4 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.07) 0%, rgba(20,80,200,0.08) 50%, transparent 75%)" }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-md px-4 pt-12">

          {/* ===== HEADER ===== */}
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5 backdrop-blur-xl"
              style={{ letterSpacing: "0.32em" }}
            >
              <span className="text-yellow-400 text-[9px]">✦</span>
              <span className="text-[9px] text-yellow-300/80">LOKASI ACARA</span>
              <span className="text-yellow-400 text-[9px]">✦</span>
            </div>

            <div className="relative mt-6 inline-block">
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(38px,9vw,66px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "0.08em",
                  color: "transparent",
                  backgroundImage: "linear-gradient(160deg, #ffffff 10%, #e8d68a 45%, #ffd700 60%, #fff8e0 90%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 40px rgba(255,215,0,0.2))",
                }}
              >
                Graha<br />Cakrawala
              </h1>
              <div
                className="absolute -bottom-1 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.6), transparent)" }}
              />
            </div>

            <p
              className="mt-4 text-white/40"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(13px,2vw,15px)",
                letterSpacing: "0.05em",
                fontStyle: "italic",
              }}
            >
              Universitas Negeri Malang
            </p>

            <GoldDivider />
          </div>

          {/* ===== MAP CARD ===== */}
          <div
            className="animate-fadein overflow-hidden rounded-[26px]"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 60%, rgba(13,52,112,0.15) 100%)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 30px 60px rgba(0,0,0,0.4)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* shimmer */}
            <div
              className="absolute top-0 left-5 right-5 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.35), transparent)" }}
            />

            {/* map iframe */}
            <div className="relative overflow-hidden" style={{ borderRadius: "26px 26px 0 0" }}>
              <iframe
                src="https://www.google.com/maps?q=Graha+Cakrawala+Universitas+Negeri+Malang&output=embed"
                className="w-full"
                style={{ height: 280, display: "block", border: "none" }}
                loading="lazy"
              />
              {/* map overlay gradient bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(5,15,32,0.6), transparent)" }}
              />
            </div>

            {/* address section */}
            <div className="px-6 pt-5 pb-6">
              <div className="flex items-start gap-4">
                <div
                  className="mt-0.5 flex h-10 w-10 min-w-[40px] items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(255,215,0,0.08)",
                    border: "1px solid rgba(255,215,0,0.2)",
                  }}
                >
                  <MapPin size={18} className="text-yellow-300" />
                </div>
                <div>
                  <p
                    className="text-white/90"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: 14, letterSpacing: "0.04em", fontWeight: 700 }}
                  >
                    Graha Cakrawala UM
                  </p>
                  <p
                    className="mt-1.5 leading-7 text-white/40"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 14,
                      fontStyle: "italic",
                    }}
                  >
                    Jl. Semarang No.5, Sumbersari,<br />
                    Lowokwaru, Kota Malang, Jawa Timur
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/rcJPhbsJDxRMGWS7A"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-xs font-black text-[#050f20] transition-all active:scale-[0.98]"
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.12em",
                  background: "linear-gradient(135deg, #ffd700 0%, #f0c000 100%)",
                  boxShadow: "0 0 0 1px rgba(255,215,0,0.3), 0 8px 24px rgba(255,215,0,0.22)",
                }}
              >
                <Navigation size={14} />
                BUKA GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* ===== TIME MILESTONE ===== */}
          <div
            className="animate-fadein mt-5 overflow-hidden rounded-[22px] px-6 py-5"
            style={{
              animationDelay: "0.08s",
              background: "linear-gradient(160deg, rgba(255,215,0,0.07) 0%, rgba(255,215,0,0.02) 100%)",
              border: "1px solid rgba(255,215,0,0.15)",
            }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Clock3 size={13} className="text-yellow-400/60" />
              <p
                className="text-[10px] text-yellow-400/60"
                style={{ letterSpacing: "0.4em", fontFamily: "'Cinzel', serif" }}
              >
                JADWAL KEDATANGAN
              </p>
            </div>

            <div className="relative flex items-center justify-between">
              {/* connecting line */}
              <div
                className="absolute left-[14px] right-[14px] top-[14px] h-px"
                style={{ background: "linear-gradient(to right, rgba(255,215,0,0.4), rgba(255,215,0,0.15), rgba(255,215,0,0.4))" }}
              />

              {milestones.map((m, i) => (
                <div key={i} className="relative flex flex-col items-center gap-3 flex-1">
                  <div
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full"
                    style={{
                      background: i === 0 ? "linear-gradient(135deg,#ffd700,#f0c000)" : "rgba(255,215,0,0.1)",
                      border: `1px solid rgba(255,215,0,${i === 0 ? 0.5 : 0.25})`,
                      boxShadow: i === 0 ? "0 0 12px rgba(255,215,0,0.4)" : "none",
                    }}
                  >
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ background: i === 0 ? "#050f20" : "rgba(255,215,0,0.5)" }}
                    />
                  </div>
                  <div className="text-center">
                    <p
                      className="text-yellow-300/90"
                      style={{ fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700 }}
                    >
                      {m.time}
                    </p>
                    <p
                      className="mt-0.5 text-white/35"
                      style={{ fontSize: 11, letterSpacing: "0.08em" }}
                    >
                      {m.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== TRANSPORT INFO ===== */}
          <div className="mt-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-400/25" />
              <p className="text-[10px] tracking-[0.4em] text-white/25 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
                Cara Menuju Venue
              </p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-400/25" />
            </div>

            <div className="space-y-3">
              {transportInfo.map((item, i) => (
                <div
                  key={i}
                  className="animate-fadein flex items-start gap-4 overflow-hidden rounded-[18px] px-5 py-4"
                  style={{
                    animationDelay: `${0.14 + i * 0.07}s`,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="flex h-9 w-9 min-w-[36px] items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(255,215,0,0.07)",
                      border: "1px solid rgba(255,215,0,0.15)",
                    }}
                  >
                    <item.icon size={16} className="text-yellow-300/70" />
                  </div>
                  <div>
                    <p
                      className="text-white/80 text-sm"
                      style={{ fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: "0.04em" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="mt-1 leading-6 text-white/35"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 13,
                        fontStyle: "italic",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== FOOTER NOTE ===== */}
          <div
            className="animate-fadein mt-6 overflow-hidden rounded-[18px] px-5 py-4 text-center"
            style={{
              animationDelay: "0.35s",
              background: "rgba(255,215,0,0.04)",
              border: "1px solid rgba(255,215,0,0.1)",
            }}
          >
            <p
              className="leading-7 text-white/35"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(13px,2vw,14px)",
                fontStyle: "italic",
              }}
            >
              Disarankan tiba lebih awal untuk menghindari kepadatan dan mempersiapkan tempat duduk terbaik.
            </p>
          </div>

          {/* ===== FOOTER SPARKLES ===== */}
          <div className="mt-12 flex justify-center gap-3">
            {["✦", "✧", "⋆", "✧", "✦"].map((s, i) => (
              <span
                key={i}
                style={{
                  fontSize: 15,
                  color: i % 2 === 0 ? "#ffd700" : "#ffffff",
                  textShadow: "0 0 12px rgba(255,215,0,0.8)",
                  animation: `float 2.5s ease-in-out ${i * 0.2}s infinite`,
                  display: "inline-block",
                  opacity: 0.6,
                }}
              >
                {s}
              </span>
            ))}
          </div>

        </div>

        {/* ===== STYLES ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes fadein {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadein {
            animation: fadein 0.5s ease-out both;
          }
        `}</style>
      </main>

      <BottomNav />
    </>
  );
}

function GoldDivider() {
  return (
    <div className="my-7 flex items-center justify-center gap-3">
      <div className="h-px w-20" style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.6))" }} />
      <span style={{ color: "#ffd700", fontSize: 10, filter: "drop-shadow(0 0 4px rgba(255,215,0,0.8))" }}>◆</span>
      <div className="h-px w-20" style={{ background: "linear-gradient(to left, transparent, rgba(255,215,0,0.6))" }} />
    </div>
  );
}