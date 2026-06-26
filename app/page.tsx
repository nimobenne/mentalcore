"use client";

import { useState } from "react";
import { subscribe } from "./actions";

const DAYS = [
  "Day 1 — The specific kind of not-okay nobody talks about",
  "Day 2 — The signal most men miss (it's not in your head)",
  "Day 3 — The gap between the man you perform and the man you are",
  "Day 4 — Whose story you've actually been living",
  "Day 5 — What happens after you've seen it",
];

const mono = { fontFamily: "var(--font-montserrat), sans-serif" };
const body = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await subscribe(email);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main style={body} className="min-h-screen flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-[560px]">

        {/* Eyebrow */}
        <p
          style={mono}
          className="font-bold text-[10px] tracking-[0.3em] uppercase text-[#C4813A] mb-6"
        >
          287 men said numb. You&apos;re not the only one.
        </p>

        {/* Headline */}
        <h1
          style={{ ...mono, fontSize: "clamp(28px, 5vw, 42px)" }}
          className="font-extrabold leading-[1.1] uppercase text-[#f0ede8] mb-7"
        >
          Still here?{" "}
          <span className="text-[#C4813A]">That&apos;s already something.</span>
        </h1>

        {/* Divider */}
        <div className="w-10 h-0.5 bg-[#C4813A] mb-7" />

        {/* Body */}
        <p className="text-base font-light leading-[1.75] text-[#b8b4ae] mb-4">
          You clicked because something in that clip registered. Most men keep scrolling. You didn&apos;t.
        </p>
        <p className="text-base font-light leading-[1.75] text-[#b8b4ae] mb-4">
          Five emails. One honest look per day. By the end of Day 5 you&apos;ll know exactly where you
          are and{" "}
          <strong className="text-[#f0ede8] font-medium">which direction is out.</strong>
        </p>

        {/* Day list */}
        <div
          className="bg-[#111113] px-7 py-6 my-8"
          style={{ border: "1px solid #1e1e22", borderLeft: "3px solid #C4813A" }}
        >
          <p
            style={mono}
            className="font-bold text-[10px] tracking-[0.25em] uppercase text-[#C4813A] mb-4"
          >
            What you&apos;ll look at
          </p>
          <ul className="flex flex-col gap-3">
            {DAYS.map((day) => (
              <li key={day} className="text-sm text-[#b8b4ae] leading-[1.5] pl-4 relative">
                <span
                  className="absolute left-0 top-[8px] w-1 h-1 rounded-full bg-[#C4813A]"
                  aria-hidden
                />
                {day}
              </li>
            ))}
          </ul>
        </div>

        {/* Form / success */}
        {status === "done" ? (
          <div
            className="mt-9 py-6 pl-7"
            style={{ borderLeft: "3px solid #C4813A" }}
          >
            <p className="text-base text-[#f0ede8] font-light leading-[1.75]">
              Good. Day 1 is on its way.
            </p>
            <p className="text-sm text-[#b8b4ae] mt-2">Check your inbox in a few minutes.</p>
          </div>
        ) : (
          <div className="mt-9">
            <label
              htmlFor="email"
              style={mono}
              className="block font-bold text-[10px] tracking-[0.25em] uppercase text-[#8a8899] mb-2.5"
            >
              Your email
            </label>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2.5 flex-col sm:flex-row">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="flex-1 bg-[#111113] text-[#f0ede8] font-light text-[15px] px-[18px] py-3.5 outline-none transition-colors placeholder:text-[#4a4a55] disabled:opacity-50"
                  style={{ border: "1px solid #2a2a30" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C4813A")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a30")}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={mono}
                  className="bg-[#C4813A] text-[#0d0d0f] font-extrabold text-[12px] tracking-[0.15em] uppercase px-[22px] py-3.5 hover:bg-[#d4904a] transition-colors whitespace-nowrap disabled:opacity-50 sm:w-auto w-full"
                >
                  {status === "loading" ? "Sending..." : "Send Day 1"}
                </button>
              </div>
            </form>
            {status === "error" && (
              <p className="text-xs text-red-400 mt-3">Something went wrong. Try again.</p>
            )}
            <p className="text-xs text-[#4a4a55] mt-3 leading-[1.5]">
              Free, because this is what I needed and nobody gave it to me. Day 1 lands in minutes.
            </p>
          </div>
        )}

        {/* Brand */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid #1e1e22" }}>
          <p
            style={mono}
            className="font-extrabold text-[11px] tracking-[0.3em] uppercase text-[#2a2a30]"
          >
            MentalCore
          </p>
        </div>

      </div>
    </main>
  );
}
