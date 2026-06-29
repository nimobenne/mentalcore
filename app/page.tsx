"use client";

import { useState } from "react";
import { subscribe } from "./actions";

// ─── Types ───────────────────────────────────────────────────────────────────

type Step = "intro" | "quiz" | "result" | "email" | "done";
type Answer = "always" | "sometimes" | "rarely";
type PatternKey = "shutdown" | "slowfade" | "highperformer";

// ─── Content ─────────────────────────────────────────────────────────────────

const QUESTIONS = [
  "When someone asks how you're doing, the answer you give is different from the one that's true.",
  "There are things you want, or used to want, that you've stopped letting yourself want. Not because you decided they weren't worth it. Because wanting them started to feel like setting yourself up.",
  "You function well. You show up, you deliver, you keep things together. But the sense of it mattering, of being genuinely present in your own life, is faint or missing.",
  "Growing up, your emotional needs were either ignored, minimized, or quietly used against you. You learned to need less. Or to not show it.",
  "There's a version of you that existed before — younger, less guarded, more certain about what he wanted. You're not sure what happened to him, but you'd recognize him if you saw him.",
];

const PATTERNS: Record<PatternKey, { label: string; headline: string; body: string; cta: string }> = {
  shutdown: {
    label: "The Shutdown",
    headline: "You've gone quiet after something changed.",
    body: "Something happened. A loss, a failure, a version of yourself that didn't land the way it was supposed to. You kept going because stopping wasn't an option. But the signal got cut somewhere in the aftermath, and it hasn't fully come back. The performing version of you has been covering for the real one for a while now.",
    cta: "The 5-day series starts exactly here. What happened, what it cost, and where to begin moving again. Day 1 lands in minutes.",
  },
  slowfade: {
    label: "The Slow Fade",
    headline: "You've been quiet for a long time.",
    body: "There was no single event. It happened gradually, maybe over years, maybe over most of your life. You learned early that needing things was either too much or not safe. So you adjusted. You got good at not needing. The quiet has been there so long it feels like personality. It isn't.",
    cta: "The 5-day series was built for this kind of quiet. The kind that started before you had words for it. Day 1 is waiting.",
  },
  highperformer: {
    label: "The High Performer's Emptiness",
    headline: "You've gone quiet behind what's working.",
    body: "By most measures, things are working. Career, competence, the way people see you. But the achievement doesn't land the way it was supposed to. The completion feels like nothing. The man who built all of this isn't sure he was supposed to feel this empty. The quiet lives behind the noise.",
    cta: "The 5-day series starts with the gap between what you've built and what it was supposed to feel like. Day 1 lands now.",
  },
};

// ─── Scoring ─────────────────────────────────────────────────────────────────

function score(a: Answer): number {
  return a === "always" ? 2 : a === "sometimes" ? 1 : 0;
}

function getPattern(answers: Answer[]): PatternKey {
  const [a1, a2, a3, a4, a5] = answers;
  const shutdown = score(a1) + score(a3);
  const slowfade = score(a4) + score(a5);
  const highperformer = score(a2) + score(a3);
  if (slowfade >= shutdown && slowfade >= highperformer) return "slowfade";
  if (highperformer >= shutdown) return "highperformer";
  return "shutdown";
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const mono = { fontFamily: "var(--font-montserrat), sans-serif" };
const body = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  const [step, setStep] = useState<Step>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [pattern, setPattern] = useState<PatternKey | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  function handleAnswer(answer: Answer) {
    const next = [...answers, answer];
    if (next.length < QUESTIONS.length) {
      setAnswers(next);
      setQIndex(qIndex + 1);
    } else {
      const p = getPattern(next as [Answer, Answer, Answer, Answer, Answer]);
      setAnswers(next);
      setPattern(p);
      setStep("result");
    }
  }

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await subscribe(email, pattern ?? undefined);
      setStep("done");
    } catch {
      setStatus("error");
    }
  }

  const p = pattern ? PATTERNS[pattern] : null;

  return (
    <main style={body} className="min-h-screen flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-[560px]">

        {/* ── INTRO ── */}
        {step === "intro" && (
          <>
            <p style={mono} className="font-bold text-[10px] tracking-[0.3em] uppercase text-[#C4813A] mb-6">
              Free. 2 minutes. No email required to start.
            </p>

            <h1
              style={{ ...mono, fontSize: "clamp(28px, 5vw, 42px)" }}
              className="font-extrabold leading-[1.1] uppercase text-[#f0ede8] mb-7"
            >
              Something went quiet.{" "}
              <span className="text-[#C4813A]">Find out which kind.</span>
            </h1>

            <div className="w-10 h-0.5 bg-[#C4813A] mb-7" />

            <p className="text-base font-light leading-[1.75] text-[#b8b4ae] mb-4">
              Five questions. No right answers. At the end you'll know exactly which pattern you're in, and what to do with it.
            </p>

            <button
              onClick={() => setStep("quiz")}
              style={mono}
              className="mt-6 bg-[#C4813A] text-[#0d0d0f] font-extrabold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#d4904a] transition-colors"
            >
              Start the Audit
            </button>

            <div className="mt-12 pt-6" style={{ borderTop: "1px solid #1e1e22" }}>
              <p style={mono} className="font-extrabold text-[11px] tracking-[0.3em] uppercase text-[#2a2a30]">
                MentalCore
              </p>
            </div>
          </>
        )}

        {/* ── QUIZ ── */}
        {step === "quiz" && (
          <>
            {/* Progress */}
            <div className="mb-10">
              <p style={mono} className="font-bold text-[10px] tracking-[0.3em] uppercase text-[#4a4a55] mb-3">
                {qIndex + 1} of {QUESTIONS.length}
              </p>
              <div className="w-full h-0.5 bg-[#1e1e22]">
                <div
                  className="h-0.5 bg-[#C4813A] transition-all duration-300"
                  style={{ width: `${((qIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <p
              style={{ ...body, fontSize: "clamp(17px, 3vw, 22px)" }}
              className="font-light leading-[1.65] text-[#f0ede8] mb-10"
            >
              {QUESTIONS[qIndex]}
            </p>

            {/* Answers */}
            <div className="flex flex-col gap-3">
              {(["always", "sometimes", "rarely"] as Answer[]).map((a) => (
                <button
                  key={a}
                  onClick={() => handleAnswer(a)}
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    border: "1px solid #2a2a30",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                  className="w-full text-left px-6 py-4 font-bold text-[11px] tracking-[0.2em] uppercase text-[#b8b4ae] hover:text-[#f0ede8]"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C4813A")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a30")}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C4813A")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a30")}
                >
                  {a === "always" ? "Almost always" : a === "sometimes" ? "Sometimes" : "Rarely"}
                </button>
              ))}
            </div>
          </>
        )}

        {/* ── RESULT ── */}
        {step === "result" && p && (
          <>
            <p style={mono} className="font-bold text-[10px] tracking-[0.35em] uppercase text-[#C4813A] mb-5">
              Your pattern
            </p>

            <p
              style={{ ...mono, fontSize: "clamp(10px, 2vw, 12px)" }}
              className="font-bold tracking-[0.3em] uppercase text-[#4a4a55] mb-3"
            >
              {p.label}
            </p>

            <h2
              style={{ ...mono, fontSize: "clamp(22px, 4vw, 32px)" }}
              className="font-extrabold leading-[1.15] uppercase text-[#f0ede8] mb-6"
            >
              {p.headline}
            </h2>

            <div className="w-10 h-0.5 bg-[#C4813A] mb-6" />

            <p className="text-[15px] font-light leading-[1.8] text-[#b8b4ae] mb-10">
              {p.body}
            </p>

            <button
              onClick={() => setStep("email")}
              style={mono}
              className="w-full sm:w-auto bg-[#C4813A] text-[#0d0d0f] font-extrabold text-[12px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#d4904a] transition-colors"
            >
              See What Comes Next
            </button>

            <div className="mt-12 pt-6" style={{ borderTop: "1px solid #1e1e22" }}>
              <p style={mono} className="font-extrabold text-[11px] tracking-[0.3em] uppercase text-[#2a2a30]">
                MentalCore
              </p>
            </div>
          </>
        )}

        {/* ── EMAIL ── */}
        {step === "email" && p && (
          <>
            <p style={mono} className="font-bold text-[10px] tracking-[0.35em] uppercase text-[#C4813A] mb-5">
              {p.label}
            </p>

            <h2
              style={{ ...mono, fontSize: "clamp(22px, 4vw, 32px)" }}
              className="font-extrabold leading-[1.15] uppercase text-[#f0ede8] mb-6"
            >
              The 5-Day Series
            </h2>

            <div className="w-10 h-0.5 bg-[#C4813A] mb-6" />

            <p className="text-[15px] font-light leading-[1.8] text-[#b8b4ae] mb-8">
              {p.cta}
            </p>

            <div
              className="bg-[#111113] px-7 py-6 mb-8"
              style={{ border: "1px solid #1e1e22", borderLeft: "3px solid #C4813A" }}
            >
              <p style={mono} className="font-bold text-[10px] tracking-[0.25em] uppercase text-[#C4813A] mb-4">
                Five days. One honest look each day.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Day 1 — The specific kind of not-okay nobody talks about",
                  "Day 2 — The signal most men miss (it's not in your head)",
                  "Day 3 — The gap between the man you perform and the man you are",
                  "Day 4 — Whose story you've actually been living",
                  "Day 5 — What happens after you've seen it",
                ].map((d) => (
                  <li key={d} className="text-sm text-[#b8b4ae] leading-[1.5] pl-4 relative">
                    <span className="absolute left-0 top-[8px] w-1 h-1 rounded-full bg-[#C4813A]" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubscribe}>
              <label htmlFor="email" style={mono} className="block font-bold text-[10px] tracking-[0.25em] uppercase text-[#8a8899] mb-2.5">
                Your email
              </label>
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
                  className="flex-1 bg-[#111113] text-[#f0ede8] font-light text-[15px] px-[18px] py-3.5 outline-none placeholder:text-[#4a4a55] disabled:opacity-50"
                  style={{ border: "1px solid #2a2a30", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
              {status === "error" && (
                <p className="text-xs text-red-400 mt-3">Something went wrong. Try again.</p>
              )}
              <p className="text-xs text-[#4a4a55] mt-3 leading-[1.5]">
                Free. Nobody can see what lands in your inbox.
              </p>
            </form>

            <div className="mt-12 pt-6" style={{ borderTop: "1px solid #1e1e22" }}>
              <p style={mono} className="font-extrabold text-[11px] tracking-[0.3em] uppercase text-[#2a2a30]">
                MentalCore
              </p>
            </div>
          </>
        )}

        {/* ── DONE ── */}
        {step === "done" && (
          <>
            <p style={mono} className="font-bold text-[10px] tracking-[0.35em] uppercase text-[#C4813A] mb-6">
              {p?.label}
            </p>

            <div className="py-6 pl-7" style={{ borderLeft: "3px solid #C4813A" }}>
              <p className="text-base text-[#f0ede8] font-light leading-[1.75]">
                Good. Day 1 is on its way.
              </p>
              <p className="text-sm text-[#b8b4ae] mt-2">
                Check your inbox in a few minutes.
              </p>
            </div>

            <div className="mt-12 pt-6" style={{ borderTop: "1px solid #1e1e22" }}>
              <p style={mono} className="font-extrabold text-[11px] tracking-[0.3em] uppercase text-[#2a2a30]">
                MentalCore
              </p>
            </div>
          </>
        )}

      </div>
    </main>
  );
}
