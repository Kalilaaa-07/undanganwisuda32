"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Calendar,
  BookOpen,
  Clock,
  MapPin,
  BookCheck,
  SquareCheckBig,
  Images,
} from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItem =
    "relative flex flex-col items-center justify-center text-xs transition-all duration-300 min-w-[72px]";

  const activeClass =
    "text-yellow-300";

  const normalClass =
    "text-white hover:text-yellow-200";

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">

      {/* CONTAINER */}
      <div className="bg-[#1e5aa8]/95 backdrop-blur-xl border-t border-white/10 rounded-t-[28px] shadow-2xl overflow-x-auto md:overflow-visible scrollbar-hide">

        {/* WRAPPER */}
        <div
          className="
            flex items-center
            md:justify-around
            gap-6 md:gap-0
            min-w-max md:min-w-0
            px-5 py-3
          "
        >

          {/* OPENING */}
          <Link
            href="/Undangan/opening"
            className={`${navItem} ${
              pathname === "/Undangan/opening"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/opening" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <Home size={22} />

            <span className="mt-1">
              Opening
            </span>

          </Link>

          {/* ACARA */}
          <Link
            href="/Undangan/acara"
            className={`${navItem} ${
              pathname === "/Undangan/acara"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/acara" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <Calendar size={22} />

            <span className="mt-1">
              Acara
            </span>

          </Link>

          {/* RSVP */}
          <Link
            href="/Undangan/rsvp"
            className={`${navItem} ${
              pathname === "/Undangan/rsvp"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/rsvp" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <BookOpen size={22} />

            <span className="mt-1">
              RSVP
            </span>

          </Link>

          {/* RUNDOWN */}
          <Link
            href="/Undangan/rundown"
            className={`${navItem} ${
              pathname === "/Undangan/rundown"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/rundown" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <Clock size={22} />

            <span className="mt-1">
              Rundown
            </span>

          </Link>

          {/* GALLERY */}
          <Link
            href="/Undangan/gallery"
            className={`${navItem} ${
              pathname === "/Undangan/gallery"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/gallery" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <Images size={22} />

            <span className="mt-1">
              Gallery
            </span>

          </Link>

          {/* MAPS */}
          <Link
            href="/Undangan/maps"
            className={`${navItem} ${
              pathname === "/Undangan/maps"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/maps" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <MapPin size={22} />

            <span className="mt-1">
              Maps
            </span>

          </Link>

          {/* NOTE */}
          <Link
            href="/Undangan/note"
            className={`${navItem} ${
              pathname === "/Undangan/note"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/note" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <BookCheck size={22} />

            <span className="mt-1">
              Note
            </span>

          </Link>

          {/* THANKS */}
          <Link
            href="/Undangan/thanks"
            className={`${navItem} ${
              pathname === "/Undangan/thanks"
                ? activeClass
                : normalClass
            }`}
          >

            {pathname === "/Undangan/thanks" && (
              <div className="absolute -top-2 w-10 h-1 rounded-full bg-yellow-300 shadow-[0_0_10px_gold]" />
            )}

            <SquareCheckBig size={22} />

            <span className="mt-1">
              Thanks
            </span>

          </Link>

        </div>

      </div>

    </div>
  );
}