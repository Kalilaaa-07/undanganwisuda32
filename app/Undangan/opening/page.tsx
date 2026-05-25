"use client";

import { useEffect, useRef } from "react";
import BottomNav from "@/components/BottonNav";

export default function OpeningPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ===== STARS =====
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.007 + 0.002,
    }));

    // ===== CONFETTI =====
    const confettiColors = ["#ffd700", "#ffffff", "#87ceeb", "#fffacd", "#c8a8ff"];
    const confetti = Array.from({ length: 40 }, () => ({
      x: Math.random(),
      y: Math.random(),
      w: Math.random() * 5 + 2,
      h: Math.random() * 9 + 3,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      rotation: Math.random() * 360,
      speed: Math.random() * 0.2 + 0.06,
      rotSpeed: (Math.random() - 0.5) * 3.5,
    }));

    // ===== SHOOTING STARS =====
    const shootingStars: {
      x: number; y: number; len: number; speed: number; progress: number;
    }[] = [];

    const spawnShooting = () => {
      if (Math.random() < 0.007 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * 0.6,
          y: Math.random() * 0.35,
          len: Math.random() * 100 + 40,
          speed: Math.random() * 0.003 + 0.004,
          progress: 0,
        });
      }
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        s.phase += s.speed;
        const alpha = 0.2 + 0.8 * Math.abs(Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      confetti.forEach((c) => {
        c.y += c.speed / 100;
        if (c.y > 1) c.y = -0.02;
        c.rotation += c.rotSpeed;
        ctx.save();
        ctx.translate(c.x * W, c.y * H);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = `${c.color}88`;
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
        ctx.restore();
      });

      spawnShooting();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.progress += ss.speed;
        if (ss.progress >= 1) { shootingStars.splice(i, 1); continue; }
        const sx = (ss.x + ss.progress * 0.45) * W;
        const sy = (ss.y + ss.progress * 0.18) * H;
        const gradient = ctx.createLinearGradient(sx - ss.len, sy - ss.len * 0.4, sx, sy);
        gradient.addColorStop(0, "rgba(255,215,0,0)");
        gradient.addColorStop(1, `rgba(255,215,0,${1 - ss.progress})`);
        ctx.beginPath();
        ctx.moveTo(sx - ss.len, sy - ss.len * 0.4);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#050f20]">

        {/* ===== CANVAS ===== */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* ===== BACKGROUND GRADIENT ===== */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, #0f3a7a 0%, #0a2655 35%, #050f20 80%)",
          }}
        />

        {/* ===== HORIZONTAL GOLD LINE (top accent) ===== */}
        <div
          className="absolute top-0 left-0 right-0 z-[3] h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,215,0,0.6), transparent)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 flex min-h-screen flex-col items-center pb-36 pt-14 text-center">

          {/* ===== MINI BADGE ===== */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/5 px-5 py-2 backdrop-blur-xl"
            style={{ letterSpacing: "0.3em" }}
          >
            <span className="text-yellow-400 text-[9px]">✦</span>
            <span className="text-[10px] text-yellow-300/90 font-light tracking-widest">WISUDA 2026</span>
            <span className="text-yellow-400 text-[9px]">✦</span>
          </div>

          {/* ===== WELCOME ===== */}
          <p className="mt-10 text-[10px] tracking-[0.35em] text-blue-200/60 uppercase">
            Selamat Datang di
          </p>

          <h2
            className="mt-2 text-white/90"
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontSize: "clamp(22px, 4vw, 36px)",
              fontWeight: 400,
              letterSpacing: "0.12em",
            }}
          >
            Graduation Celebration
          </h2>

          {/* ===== MAIN TITLE BLOCK ===== */}
          <div className="relative mt-8 flex flex-col items-center">

            {/* decorative ring glow */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 280,
                height: 280,
                background:
                  "radial-gradient(circle, rgba(255,215,0,0.12) 0%, rgba(100,160,255,0.06) 50%, transparent 75%)",
                animation: "lumipulse 4.5s ease-in-out infinite",
              }}
            />

            {/* spinning rings */}
            {[220, 310, 400].map((size, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full"
                style={{
                  width: size,
                  height: size,
                  marginLeft: -size / 2,
                  marginTop: -size / 2,
                  border: `1px solid rgba(255,215,0,${0.09 - i * 0.02})`,
                  animation: `spin ${50 + i * 25}s linear infinite`,
                }}
              />
            ))}

            {/* LUMINEX wordmark */}
            <h1
              className="relative px-4"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(52px, 11vw, 112px)",
                fontWeight: 900,
                letterSpacing: "0.14em",
                lineHeight: 1,
                color: "transparent",
                backgroundImage:
                  "linear-gradient(160deg, #ffffff 20%, #e8d68a 50%, #ffd700 65%, #ffffff 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 0 30px rgba(255,215,0,0.25))",
              }}
            >
              LUMINEX
            </h1>

            {/* thin gold underline */}
            <div
              className="mt-3 h-px w-48"
              style={{
                background: "linear-gradient(to right, transparent, rgba(255,215,0,0.8), transparent)",
              }}
            />

          </div>

          {/* ===== SUBTITLE ===== */}
          <p
            className="mt-4 text-[11px] text-yellow-300/70"
            style={{ letterSpacing: "0.3em" }}
          >
            SMK TELKOM MALANG · ANGKATAN 32
          </p>

          {/* ===== DIVIDER ===== */}
          <Divider />

          {/* ===== HERO CARD (tagline + lumi + event) ===== */}
          <div
            className="relative mx-4 mt-2 w-full max-w-[400px] overflow-hidden rounded-[32px] border border-white/10 px-6 pt-8 pb-8"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 60%, rgba(20,80,160,0.12) 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(255,215,0,0.08), 0 30px 60px rgba(0,0,0,0.45)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* top inner glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
              style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.5), transparent)" }}
            />

            {/* ===== TAGLINE ===== */}
            <p
              className="text-center leading-9 text-white/70 px-2"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(15px, 2.4vw, 18px)",
                fontStyle: "italic",
              }}
            >
Di bawah hangat cahaya pagi, terukir kisah tentang perjuangan, persahabatan, dan mimpi-mimpi yang perlahan menemukan jalannya. Hari ini menjadi awal dari langkah baru menuju masa depan yang penuh harapan dan gemilang.            </p>

            {/* inner divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-400/30" />
              <span style={{ color: "#ffd700", fontSize: 10, opacity: 0.7 }}>◆</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-400/30" />
            </div>

            {/* ===== LUMI MASCOT ===== */}
            <div className="relative flex flex-col items-center">

              {/* glow halo */}
              <div
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,215,0,0.28) 0%, transparent 70%)" }}
              />

              {/* rings */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/20"
                style={{ width: 130, height: 130, animation: "lumipulse 3s ease-in-out infinite" }}
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/10"
                style={{ width: 160, height: 160, animation: "lumipulse 4s ease-in-out 0.6s infinite" }}
              />

              <img
                src="/lumi1.png"
                alt="Lumi Mascot"
                className="relative animate-float object-contain"
                style={{
                  width: "clamp(100px, 22vw, 128px)",
                  filter:
                    "drop-shadow(0 0 28px rgba(255,215,0,0.55)) drop-shadow(0 0 8px rgba(255,255,255,0.1))",
                }}
              />
            </div>

            {/* inner divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-400/30" />
              <span style={{ color: "#ffd700", fontSize: 10, opacity: 0.7 }}>◆</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-400/30" />
            </div>

            {/* ===== EVENT LABEL ===== */}
            <div className="text-center">
              <p className="text-[9px] tracking-[0.45em] text-white/35 uppercase">
                Celebration of Memories
              </p>
              <p
                className="mt-2 text-lg font-semibold text-yellow-300"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.1em" }}
              >
                Graduation Ceremony
              </p>
              <div className="mt-3 flex justify-center gap-2">
                {["✦", "✧", "⋆", "✧", "✦"].map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 13,
                      color: i % 2 === 0 ? "#ffd700" : "#ffffff",
                      animation: `float 2.5s ease-in-out ${i * 0.18}s infinite`,
                      display: "inline-block",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* bottom inner glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3"
              style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.3), transparent)" }}
            />
          </div>

          {/* ===== FOTO ANGKATAN ===== */}
          <div className="mt-14 w-full max-w-[600px] px-4">

            <div className="mb-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-400/40" />
              <p className="text-[10px] tracking-[0.4em] text-yellow-300/70 uppercase">Foto Angkatan</p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-400/40" />
            </div>

            {/* photo frame */}
            <div
              className="relative overflow-hidden rounded-3xl border border-yellow-400/20"
              style={{
                background: "rgba(255,255,255,0.03)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* corner accents */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-5 h-5`}
                  style={{
                    borderTop: i < 2 ? "1.5px solid rgba(255,215,0,0.5)" : "none",
                    borderBottom: i >= 2 ? "1.5px solid rgba(255,215,0,0.5)" : "none",
                    borderLeft: i % 2 === 0 ? "1.5px solid rgba(255,215,0,0.5)" : "none",
                    borderRight: i % 2 === 1 ? "1.5px solid rgba(255,215,0,0.5)" : "none",
                  }}
                />
              ))}

              <img
                src="/angkatan.png"
                alt="Foto Angkatan 32"
                className="w-full object-cover"
                style={{ display: "block", borderRadius: "inherit" }}
              />

              {/* bottom overlay caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{
                  background: "linear-gradient(to top, rgba(5,15,32,0.92) 0%, transparent 100%)",
                }}
              >
                <p
                  className="text-center text-xs text-yellow-300/90"
                  style={{ letterSpacing: "0.25em", fontFamily: "'Cinzel', serif" }}
                >
                  ANGKATAN 32 · SMK TELKOM MALANG
                </p>
              </div>
            </div>

          </div>

          {/* ===== PARENTS MESSAGE ===== */}
          <div
            className="mt-10 w-full max-w-[520px] px-4 rounded-[28px] border border-white/8 bg-white/[0.03] px-7 py-8 backdrop-blur-xl mx-4"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 25px 50px rgba(0,0,0,0.35)",
            }}
          >
            <p className="text-[9px] tracking-[0.45em] text-yellow-400/70 uppercase">
              Untuk Orang Tua
            </p>

            <div className="my-4 flex justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
            </div>

            <p
              className="text-sm leading-9 text-white/65"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(14px,2.2vw,16px)" }}
            >
              Terima kasih atas setiap doa yang tak pernah terucap lelah, atas dukungan yang tetap hadir bahkan di saat langkah kami terasa rapuh, dan atas setiap perjuangan yang diam-diam dikorbankan demi mengantarkan kami sampai di titik ini.
            </p>
            <p
              className="mt-5 text-sm leading-9 text-white/65"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(14px,2.2vw,16px)" }}
            >
              Hari ini bukan hanya tentang kelulusan, tetapi tentang cinta, kesabaran, air mata, dan harapan yang tumbuh bersama dalam setiap perjalanan yang telah kita lewati.
            </p>
          </div>

          {/* ===== BOTTOM SPARKLES ===== */}
          <div className="mt-10 flex gap-4">
            {["✦", "✧", "⋆", "✧", "✦"].map((s, i) => (
              <span
                key={i}
                style={{
                  fontSize: 16,
                  color: i % 2 === 0 ? "#ffd700" : "#ffffff",
                  textShadow: "0 0 12px rgba(255,215,0,0.9)",
                  animation: `float 2.5s ease-in-out ${i * 0.2}s infinite`,
                  display: "inline-block",
                }}
              >
                {s}
              </span>
            ))}
          </div>

        </div>

        {/* ===== BOTTOM GOLD LINE ===== */}
        <div
          className="absolute bottom-[110px] left-0 right-0 z-[3] h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,215,0,0.3), transparent)",
          }}
        />

        {/* ===== STYLES ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");

          @keyframes lumipulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
            50%       { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50%      { transform: translateY(-9px); }
          }

          .animate-float {
            animation: float 3.2s ease-in-out infinite;
          }
        `}</style>
      </main>

      <BottomNav />
    </>
  );
}

function Divider() {
  return (
    <div className="my-7 flex w-full max-w-[260px] items-center gap-3">
      <div
        className="h-px flex-1"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.65))" }}
      />
      <span style={{ color: "#ffd700", fontSize: 12, filter: "drop-shadow(0 0 6px rgba(255,215,0,0.8))" }}>◆</span>
      <div
        className="h-px flex-1"
        style={{ background: "linear-gradient(to left, transparent, rgba(255,215,0,0.65))" }}
      />
    </div>
  );
}
