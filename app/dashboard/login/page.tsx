import { login } from "../actions";

const mono = { fontFamily: "var(--font-montserrat), sans-serif" };
const body = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

export default async function DashboardLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main style={body} className="min-h-screen flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-[400px]">
        <p style={mono} className="font-bold text-[10px] tracking-[0.3em] uppercase text-[#C4813A] mb-6">
          MentalCore
        </p>
        <h1 style={mono} className="font-extrabold text-[22px] uppercase text-[#f0ede8] mb-8">
          Dashboard
        </h1>
        <form action={login}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            autoFocus
            className="w-full bg-[#111113] text-[#f0ede8] font-light text-[15px] px-[18px] py-3.5 outline-none placeholder:text-[#4a4a55]"
            style={{ border: "1px solid #2a2a30" }}
          />
          <button
            type="submit"
            style={mono}
            className="w-full mt-3 bg-[#C4813A] text-[#0d0d0f] font-extrabold text-[12px] tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-[#d4904a] transition-colors"
          >
            Enter
          </button>
        </form>
        {error && (
          <p className="text-xs text-red-400 mt-3">Wrong password.</p>
        )}
      </div>
    </main>
  );
}
