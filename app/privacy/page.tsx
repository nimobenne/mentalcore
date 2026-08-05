import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — MentalCore",
  description: "What MentalCore collects, why, and how to stop it.",
};

const mono = { fontFamily: "var(--font-montserrat), sans-serif" };
const body = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

export default function PrivacyPage() {
  return (
    <main style={body} className="min-h-screen px-5 py-16 bg-[#0d0d0f]">
      <div className="w-full max-w-[640px] mx-auto">
        <p style={mono} className="font-bold text-[10px] tracking-[0.3em] uppercase text-[#C4813A] mb-6">
          Privacy
        </p>

        <h1 style={{ ...mono, fontSize: "clamp(26px, 4vw, 36px)" }} className="font-extrabold leading-[1.15] uppercase text-[#f0ede8] mb-8">
          What we collect and why
        </h1>

        <div className="flex flex-col gap-6 text-[15px] font-light leading-[1.8] text-[#b8b4ae]">
          <p>
            <strong className="text-[#f0ede8] font-medium">What we collect.</strong> Your email address, if you give it to us on the quiz or anywhere else on this site. Nothing else is collected directly by us.
          </p>
          <p>
            <strong className="text-[#f0ede8] font-medium">What it's used for.</strong> Sending you the 5-day email series, and, if you buy The Reactivation, the emails that come with it. Nothing else.
          </p>
          <p>
            <strong className="text-[#f0ede8] font-medium">Who else sees it.</strong> Your email is stored and sent through MailerLite, our email provider. If you buy something, payment is handled entirely by Gumroad, we never see or store your card details. We don't sell or share your email with anyone else.
          </p>
          <p>
            <strong className="text-[#f0ede8] font-medium">How to stop it.</strong> Every email has an unsubscribe link. Click it and you're removed. You can also email us directly and we'll remove you by hand.
          </p>
          <p>
            <strong className="text-[#f0ede8] font-medium">Analytics.</strong> This site uses Vercel Analytics to see general traffic patterns (like page views and which button was clicked). It doesn't identify you personally.
          </p>
          <p>
            <strong className="text-[#f0ede8] font-medium">Questions.</strong> Email <a href="mailto:hello@mentalcore.co" className="text-[#C4813A] underline hover:text-[#d4904a]">hello@mentalcore.co</a> and a person will answer.
          </p>
        </div>

        <div className="mt-12 pt-6" style={{ borderTop: "1px solid #1e1e22" }}>
          <a href="/" style={mono} className="font-extrabold text-[11px] tracking-[0.3em] uppercase text-[#C4813A] hover:text-[#d4904a]">
            ← Back to MentalCore
          </a>
        </div>
      </div>
    </main>
  );
}
