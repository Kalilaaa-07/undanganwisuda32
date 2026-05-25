"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Download,
  Pencil,
  Sparkles,
  ChevronDown,
  ArrowLeft,
  Send,
} from "lucide-react";

import { QRCodeCanvas } from "qrcode.react";
import BottomNav from "@/components/BottonNav";

type FormType = {
  nama: string;
  kelas: string;
  wali: "1" | "2" | "";
  hadir: "Hadir" | "Tidak Hadir" | "";
  pesan: string;
};

type Tamu = FormType & {
  id: number;
  waktu: string;
};

export default function RSVPPage() {
  const [step, setStep] = useState<
    "intro" | "form" | "done"
  >("intro");

  const [form, setForm] = useState<FormType>({
    nama: "",
    kelas: "",
    wali: "",
    hadir: "",
    pesan: "",
  });

  const [dataTamu, setDataTamu] = useState<
    Tamu[]
  >([]);

  const [editId, setEditId] = useState<
    number | null
  >(null);

  const [lastSaved, setLastSaved] =
    useState<Tamu | null>(null);

  const [openDropdown, setOpenDropdown] =
    useState("");

  const [focused, setFocused] =
    useState("");

  /* ================= LOAD ================= */
  useEffect(() => {
    const saved =
      localStorage.getItem("rsvp-data");

    if (saved) {
      setDataTamu(JSON.parse(saved));
    }
  }, []);

  /* ================= SAVE ================= */
  useEffect(() => {
    localStorage.setItem(
      "rsvp-data",
      JSON.stringify(dataTamu)
    );
  }, [dataTamu]);

/* ================= DOWNLOAD QR ================= */
const downloadQR = async () => {
  const qrCanvas = document.getElementById(
    "qr-code"
  ) as HTMLCanvasElement;

  if (!qrCanvas) return;

  const canvas =
    document.createElement("canvas");

  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  canvas.width = 1200;
  canvas.height = 1600;

  /* background */
  const gradient =
    ctx.createLinearGradient(
      0,
      0,
      0,
      1600
    );

  gradient.addColorStop(0, "#071840");
  gradient.addColorStop(1, "#050f20");

  ctx.fillStyle = gradient;

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  /* glow */
  const glow =
    ctx.createRadialGradient(
      600,
      300,
      50,
      600,
      300,
      500
    );

  glow.addColorStop(
    0,
    "rgba(255,215,0,0.15)"
  );

  glow.addColorStop(
    1,
    "rgba(255,215,0,0)"
  );

  ctx.fillStyle = glow;

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  /* title */
  ctx.fillStyle = "#ffd700";

  ctx.textAlign = "center";

  ctx.font = "bold 64px serif";

  ctx.fillText(
    "E-TICKET RSVP",
    600,
    140
  );

  /* subtitle */
  ctx.fillStyle =
    "rgba(255,255,255,0.7)";

  ctx.font = "28px sans-serif";

  ctx.fillText(
    "LUMINEX • ANGKATAN 32",
    600,
    200
  );

  /* card */
  ctx.fillStyle = "#ffffff";

  ctx.beginPath();

  ctx.roundRect(
    150,
    300,
    900,
    900,
    42
  );

  ctx.fill();

  /* qr */
  ctx.drawImage(
    qrCanvas,
    260,
    410,
    680,
    680
  );

  /* nama */
  ctx.fillStyle = "#ffffff";

  ctx.font = "bold 44px serif";

  ctx.fillText(
    lastSaved?.nama || "Tamu",
    600,
    1350
  );

  /* kelas */
  ctx.fillStyle =
    "rgba(255,255,255,0.75)";

  ctx.font = "30px sans-serif";

  ctx.fillText(
    lastSaved?.kelas || "",
    600,
    1410
  );

  /* wali */
  ctx.fillStyle =
    "rgba(255,255,255,0.55)";

  ctx.font = "26px sans-serif";

  ctx.fillText(
    `Maksimal ${lastSaved?.wali} wali`,
    600,
    1470
  );

  const dataUrl =
    canvas.toDataURL("image/png");

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

  /* MOBILE */
  if (isMobile) {
    const newTab = window.open();

    if (!newTab) {
      alert(
        "Popup diblokir browser."
      );

      return;
    }

    newTab.document.write(`
      <html>
        <head>
          <title>QR RSVP</title>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <style>
            body{
              margin:0;
              background:#050f20;
              display:flex;
              justify-content:center;
              align-items:center;
              min-height:100vh;
              padding:20px;
              box-sizing:border-box;
            }

            .wrapper{
              width:100%;
              max-width:520px;
              text-align:center;
            }

            img{
              width:100%;
              border-radius:24px;
              box-shadow:
                0 20px 60px rgba(0,0,0,0.45);
            }

            p{
              margin-top:20px;
              color:rgba(255,255,255,0.7);
              font-family:sans-serif;
              font-size:14px;
              line-height:1.8;
            }

            button{
              margin-top:20px;
              border:none;
              outline:none;
              padding:14px 24px;
              border-radius:999px;
              background:#ffd700;
              color:#050f20;
              font-weight:bold;
              font-size:14px;
              cursor:pointer;
            }
          </style>
        </head>

        <body>
          <div class="wrapper">
            <img src="${dataUrl}" />

            <p>
              Tekan & tahan gambar lalu pilih
              <b>Simpan Gambar</b>
            </p>

            <button onclick="window.close()">
              Kembali ke RSVP
            </button>
          </div>
        </body>
      </html>
    `);

    return;
  }

  /* DESKTOP */
  const link =
    document.createElement("a");

  link.href = dataUrl;

  link.download = `QR-${
    lastSaved?.nama || "tamu"
  }.png`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    if (
      !form.nama ||
      !form.kelas ||
      !form.wali ||
      !form.hadir
    ) {
      alert(
        "Semua data wajib diisi!"
      );

      return;
    }

    const newData: Tamu = {
      ...form,
      id: editId ?? Date.now(),
      waktu: new Date().toLocaleString(),
    };

    if (editId) {
      setDataTamu((prev) =>
        prev.map((item) =>
          item.id === editId
            ? newData
            : item
        )
      );
    } else {
      setDataTamu((prev) => [
        newData,
        ...prev,
      ]);
    }

    setLastSaved(newData);

    setEditId(null);

    setStep("done");
  };

  /* ================= EDIT ================= */
  const handleEdit = (item: Tamu) => {
    setForm({
      nama: item.nama,
      kelas: item.kelas,
      wali: item.wali,
      hadir: item.hadir,
      pesan: item.pesan,
    });

    setEditId(item.id);

    setStep("form");
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#050f20] pb-36 text-white">
        {/* background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #0d3470 0%, #071840 45%, #050f20 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-md px-4 pt-12">
          {/* HEADER */}
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5"
              style={{
                letterSpacing: "0.32em",
              }}
            >
              <span className="text-yellow-400 text-[9px]">
                ✦
              </span>

              <span className="text-[9px] text-yellow-300/80">
                LUMINEX · ANGKATAN 32
              </span>

              <span className="text-yellow-400 text-[9px]">
                ✦
              </span>
            </div>

            <div className="relative mt-6 inline-block">
              <h1
                style={{
                  fontFamily:
                    "'Cinzel', serif",

                  fontSize:
                    "clamp(64px, 16vw, 100px)",

                  fontWeight: 900,

                  lineHeight: 1,

                  letterSpacing: "0.12em",

                  color: "transparent",

                  backgroundImage:
                    "linear-gradient(160deg, #ffffff 10%, #e8d68a 45%, #ffd700 60%, #fff8e0 90%)",

                  WebkitBackgroundClip:
                    "text",

                  backgroundClip: "text",
                }}
              >
                RSVP
              </h1>
            </div>

            <p
              className="mt-4 text-sm leading-8 text-white/55"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Konfirmasi kehadiran wali
              wisuda untuk siswa Angkatan
              32. Maksimal 2 wali
              diperbolehkan masuk ke dalam
              gedung.
            </p>
          </div>

          {/* INTRO */}
          {step === "intro" && (
            <div className="animate-fadein mt-8">
              <LuxCard>
                <div className="mb-6 flex justify-center">
                  <Sparkles
                    size={30}
                    className="text-yellow-300"
                  />
                </div>

                <h2
                  className="text-center text-white"
                  style={{
                    fontFamily:
                      "'Cinzel', serif",
                  }}
                >
                  Konfirmasi Kehadiran
                </h2>

                <p className="mt-4 text-center leading-8 text-white/55">
                  Silakan lakukan
                  konfirmasi kehadiran wali
                  wisuda.
                </p>

                <GoldDivider compact />

                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      setStep("form")
                    }
                    className="rounded-full bg-yellow-400 px-8 py-3.5 font-bold text-[#050f20]"
                  >
                    Konfirmasi Sekarang
                  </button>
                </div>
              </LuxCard>
            </div>
          )}

          {/* FORM */}
          {step === "form" && (
            <div className="animate-fadein mt-8">
              <LuxCard>
                <button
                  onClick={() =>
                    setStep("intro")
                  }
                  className="mb-6 inline-flex items-center gap-2 text-xs text-white/40"
                >
                  <ArrowLeft size={13} />
                  KEMBALI
                </button>

                <h2 className="mb-6 text-white">
                  {editId
                    ? "Update Konfirmasi"
                    : "Isi Formulir"}
                </h2>

                <div className="space-y-4">
                  <FloatingInput
                    label="Nama Siswa"
                    value={form.nama}
                    onChange={(v: string) =>
                      setForm({
                        ...form,
                        nama: v,
                      })
                    }
                    focused={
                      focused === "nama"
                    }
                    onFocus={() =>
                      setFocused("nama")
                    }
                    onBlur={() =>
                      setFocused("")
                    }
                  />

                  {/* kelas */}
                  <Dropdown
                    title="Pilih Kelas"
                    value={form.kelas}
                    open={
                      openDropdown ===
                      "kelas"
                    }
                    onOpen={() =>
                      setOpenDropdown(
                        openDropdown ===
                          "kelas"
                          ? ""
                          : "kelas"
                      )
                    }
                  >
                    {[
                      "XII RPL 1",
                      "XII RPL 2",
                      "XII RPL 3",
                      "XII RPL 4",
                      "XII RPL 5",
                      "XII RPL 6",
                      "XII RPL 7",
                      "XII RPL 8",
                      "XII TKJ 1",
                      "XII TKJ 2",
                      "XII TKJ 3",
                      "XII TKJ 4",
                      "XII TKJ 5",
                    ].map((kelas) => (
                      <DropdownItem
                        key={kelas}
                        onClick={() => {
                          setForm({
                            ...form,
                            kelas,
                          });

                          setOpenDropdown(
                            ""
                          );
                        }}
                      >
                        {kelas}
                      </DropdownItem>
                    ))}
                  </Dropdown>

                  {/* wali */}
                  <Dropdown
                    title="Jumlah Wali"
                    value={
                      form.wali
                        ? `${form.wali} Wali`
                        : ""
                    }
                    open={
                      openDropdown ===
                      "wali"
                    }
                    onOpen={() =>
                      setOpenDropdown(
                        openDropdown ===
                          "wali"
                          ? ""
                          : "wali"
                      )
                    }
                  >
                    {["1", "2"].map(
                      (wali) => (
                        <DropdownItem
                          key={wali}
                          onClick={() => {
                            setForm({
                              ...form,
                              wali:
                                wali as
                                  | "1"
                                  | "2",
                            });

                            setOpenDropdown(
                              ""
                            );
                          }}
                        >
                          {wali} Wali
                        </DropdownItem>
                      )
                    )}
                  </Dropdown>

                  {/* hadir */}
                  <Dropdown
                    title="Pilih Kehadiran"
                    value={form.hadir}
                    open={
                      openDropdown ===
                      "hadir"
                    }
                    onOpen={() =>
                      setOpenDropdown(
                        openDropdown ===
                          "hadir"
                          ? ""
                          : "hadir"
                      )
                    }
                  >
                    {[
                      "Hadir",
                      "Tidak Hadir",
                    ].map((item) => (
                      <DropdownItem
                        key={item}
                        onClick={() => {
                          setForm({
                            ...form,
                            hadir:
                              item as any,
                          });

                          setOpenDropdown(
                            ""
                          );
                        }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </Dropdown>

                  {/* pesan */}
                  <div className="relative">
                    <textarea
                      placeholder=" "
                      value={form.pesan}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          pesan:
                            e.target.value,
                        })
                      }
                      onFocus={() =>
                        setFocused(
                          "pesan"
                        )
                      }
                      onBlur={() =>
                        setFocused("")
                      }
                      rows={4}
                      className="w-full resize-none px-5 pt-6 pb-3 text-sm text-white outline-none"
                      style={{
                        borderRadius: 16,

                        border:
                          focused ===
                          "pesan"
                            ? "1px solid rgba(255,215,0,0.4)"
                            : "1px solid rgba(255,255,255,0.1)",

                        background:
                          "rgba(255,255,255,0.05)",
                      }}
                    />

                    <label
                      className="pointer-events-none absolute left-5 text-white/35 transition-all"
                      style={{
                        top:
                          form.pesan ||
                          focused ===
                            "pesan"
                            ? 8
                            : "50%",

                        transform:
                          form.pesan ||
                          focused ===
                            "pesan"
                            ? "translateY(0) scale(0.8)"
                            : "translateY(-50%) scale(1)",

                        transformOrigin:
                          "left",

                        fontSize: 13,
                      }}
                    >
                      Pesan & Doa untuk
                      Putra / Putri
                    </label>
                  </div>

                  {/* submit */}
                  <button
                    onClick={handleSubmit}
                    className="flex w-full items-center justify-center gap-3 rounded-full py-4 font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, #ffd700 0%, #f0c000 50%, #ffd700 100%)",

                      color: "#050f20",
                    }}
                  >
                    <Send size={16} />

                    {editId
                      ? "SIMPAN PERUBAHAN"
                      : "KIRIM KONFIRMASI"}
                  </button>
                </div>
              </LuxCard>
            </div>
          )}

          {/* DONE */}
          {step === "done" &&
            lastSaved && (
              <div className="animate-fadein mt-8">
                <LuxCard>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10">
                      <Check
                        size={32}
                        className="text-yellow-300"
                      />
                    </div>

                    <h2 className="text-white">
                      Terima Kasih
                    </h2>

                    <p className="mt-4 text-white/50">
                      Konfirmasi berhasil
                      disimpan.
                    </p>

                    {lastSaved.hadir ===
                      "Hadir" && (
                      <div className="mt-8 w-full">
                        <div
                          className="rounded-3xl p-6"
                          style={{
                            background:
                              "#fff",
                          }}
                        >
                          <div className="flex justify-center">
                            <QRCodeCanvas
                              id="qr-code"
                              value={`${lastSaved.id}-${lastSaved.nama}`}
                              size={200}
                              fgColor="#050f20"
                            />
                          </div>

                          <div className="mt-4 border-t border-dashed border-gray-200 pt-4">
                            <p className="text-center text-[10px] tracking-widest text-gray-400 uppercase">
                              {
                                lastSaved.nama
                              }
                            </p>

                            <p className="mt-1 text-center text-[9px] text-gray-300">
                              Maksimal{" "}
                              {
                                lastSaved.wali
                              }{" "}
                              wali
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={
                            downloadQR
                          }
                          type="button"
                          className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-yellow-400/25 bg-yellow-400/5 py-3.5 text-sm font-semibold text-yellow-300"
                        >
                          <Download
                            size={15}
                          />
                          DOWNLOAD QR
                        </button>
                      </div>
                    )}
                  </div>
                </LuxCard>
              </div>
            )}

          {/* UCAPAN */}
          {dataTamu.length > 0 && (
            <div className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-400/25" />

                <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
                  Ucapan & Doa
                </p>

                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-400/25" />
              </div>

              <div className="space-y-3">
                {dataTamu.map(
                  (item, idx) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-white/6"
                      style={{
                        background:
                          "rgba(255,255,255,0.03)",
                      }}
                    >
                      <div className="flex items-center justify-between gap-4 px-5 py-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                            style={{
                              background:
                                "rgba(255,215,0,0.1)",

                              border:
                                "1px solid rgba(255,215,0,0.2)",

                              color:
                                "#ffd700",
                            }}
                          >
                            {idx + 1}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-white">
                              {
                                item.nama
                              }
                            </p>

                            <p className="mt-0.5 text-[11px] text-white/35">
                              {
                                item.kelas
                              }{" "}
                              •{" "}
                              {
                                item.wali
                              }{" "}
                              Wali
                            </p>
                          </div>
                        </div>

                        <span
                          className="rounded-full px-3 py-1 text-[10px]"
                          style={{
                            background:
                              item.hadir ===
                              "Hadir"
                                ? "rgba(255,215,0,0.1)"
                                : "rgba(255,100,100,0.08)",

                            color:
                              item.hadir ===
                              "Hadir"
                                ? "#ffd700"
                                : "#ff9090",
                          }}
                        >
                          {item.hadir}
                        </span>
                      </div>

                      {item.pesan && (
                        <div className="border-t border-white/5 px-5 py-4">
                          <p className="text-xs italic leading-7 text-white/45">
                            "
                            {
                              item.pesan
                            }
                            "
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between px-5 pb-4">
                        <p className="text-[10px] text-white/25">
                          {
                            item.waktu
                          }
                        </p>

                        <button
                          onClick={() =>
                            handleEdit(
                              item
                            )
                          }
                          className="inline-flex items-center gap-2 text-xs text-white/35"
                        >
                          <Pencil
                            size={12}
                          />
                          UPDATE
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </>
  );
}

function LuxCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-[28px] p-6"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 60%, rgba(13,52,112,0.15) 100%)",

        border:
          "1px solid rgba(255,255,255,0.09)",

        backdropFilter: "blur(20px)",
      }}
    >
      {children}
    </div>
  );
}

function FloatingInput({
  label,
  value,
  onChange,
  focused,
  onFocus,
  onBlur,
}: any) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder=" "
        className="w-full px-5 pt-6 pb-2 text-sm text-white outline-none"
        style={{
          borderRadius: 16,

          border: focused
            ? "1px solid rgba(255,215,0,0.45)"
            : "1px solid rgba(255,255,255,0.1)",

          background:
            "rgba(255,255,255,0.05)",
        }}
      />

      <label
        className="pointer-events-none absolute left-5 transition-all"
        style={{
          top:
            value || focused
              ? 8
              : "50%",

          transform:
            value || focused
              ? "translateY(0) scale(0.78)"
              : "translateY(-50%) scale(1)",

          transformOrigin: "left",

          fontSize: 13,

          color: focused
            ? "rgba(255,215,0,0.65)"
            : "rgba(255,255,255,0.35)",
        }}
      >
        {label}
      </label>
    </div>
  );
}

function Dropdown({
  title,
  value,
  open,
  onOpen,
  children,
}: any) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full items-center justify-between px-5 py-4 text-sm transition-all"
        style={{
          borderRadius: 16,

          border:
            open || value
              ? "1px solid rgba(255,215,0,0.4)"
              : "1px solid rgba(255,255,255,0.1)",

          background:
            "rgba(255,255,255,0.05)",

          color: value
            ? "#fff"
            : "rgba(255,255,255,0.35)",
        }}
      >
        <span className="truncate">
          {value || title}
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open
              ? "rotate-180"
              : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="absolute z-50 mt-2 max-h-72 w-full overflow-y-auto backdrop-blur-xl"
          style={{
            borderRadius: 16,

            border:
              "1px solid rgba(255,215,0,0.2)",

            background:
              "rgba(7,24,64,0.96)",

            WebkitOverflowScrolling:
              "touch",

            scrollbarWidth: "thin",

            boxShadow:
              "0 20px 40px rgba(0,0,0,0.45)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownItem({
  children,
  onClick,
}: any) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer px-5 py-4 transition-colors hover:bg-white/5"
    >
      {children}
    </div>
  );
}

function GoldDivider({
  compact,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${
        compact ? "my-5" : "my-7"
      }`}
    >
      <div
        className={`h-px ${
          compact ? "w-12" : "w-20"
        }`}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.6))",
        }}
      />

      <span
        style={{
          color: "#ffd700",
        }}
      >
        ◆
      </span>

      <div
        className={`h-px ${
          compact ? "w-12" : "w-20"
        }`}
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.6))",
        }}
      />
    </div>
  );
}