import { getGumroadStats, getMailerLiteStats } from "./actions";

const mono = { fontFamily: "var(--font-montserrat), sans-serif" };
const body = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="bg-[#111113] px-6 py-6" style={{ border: "1px solid #1e1e22" }}>
      <p style={mono} className="font-bold text-[10px] tracking-[0.25em] uppercase text-[#4a4a55] mb-3">
        {label}
      </p>
      <p style={mono} className="font-extrabold text-[32px] text-[#f0ede8] leading-none">
        {value}
      </p>
      {sub && <p className="text-[13px] text-[#8a8899] mt-2">{sub}</p>}
    </div>
  );
}

export default async function Dashboard() {
  const [gumroad, mailerlite] = await Promise.all([
    getGumroadStats(),
    getMailerLiteStats(),
  ]);

  const totalSales = gumroad.products.reduce((sum, p) => sum + p.salesCount, 0);
  const totalRevenue = gumroad.products.reduce((sum, p) => sum + p.revenueUsd, 0);

  return (
    <main style={body} className="min-h-screen px-5 py-12">
      <div className="w-full max-w-[720px] mx-auto">
        <p style={mono} className="font-bold text-[10px] tracking-[0.3em] uppercase text-[#C4813A] mb-3">
          MentalCore
        </p>
        <h1 style={mono} className="font-extrabold text-[26px] uppercase text-[#f0ede8] mb-2">
          Dashboard
        </h1>
        <p className="text-[14px] text-[#8a8899] mb-10">
          Live from Gumroad and MailerLite. Site traffic and funnel events live in your{" "}
          <a
            href="https://vercel.com/nimobennes-projects/mentalcore/analytics"
            className="text-[#C4813A] underline"
          >
            Vercel Analytics dashboard
          </a>{" "}
          instead, not duplicated here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <StatCard label="Total sales" value={String(totalSales)} />
          <StatCard label="Total revenue" value={`$${totalRevenue.toFixed(2)}`} />
          <StatCard
            label="Email subscribers"
            value={mailerlite.stats ? String(mailerlite.stats.activeCount) : "—"}
            sub={mailerlite.stats?.groupName}
          />
        </div>

        {gumroad.error && (
          <p className="text-[13px] text-red-400 mb-6">Gumroad: {gumroad.error}</p>
        )}
        {mailerlite.error && (
          <p className="text-[13px] text-red-400 mb-6">MailerLite: {mailerlite.error}</p>
        )}

        {gumroad.products.length > 0 && (
          <>
            <p style={mono} className="font-bold text-[10px] tracking-[0.25em] uppercase text-[#4a4a55] mb-4">
              By product
            </p>
            <div className="mb-10" style={{ borderTop: "1px solid #1e1e22" }}>
              {gumroad.products.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: "1px solid #1e1e22" }}
                >
                  <span className="text-[15px] text-[#f0ede8]">{p.name}</span>
                  <span className="text-[15px] text-[#b8b4ae]">
                    {p.salesCount} sales · ${p.revenueUsd.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        <p className="text-[12px] text-[#4a4a55]">
          Not real-time cached — refreshes on every page load.
        </p>
      </div>
    </main>
  );
}
