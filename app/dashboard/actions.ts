"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password");
  const expected = process.env.DASHBOARD_PASSWORD;

  if (!expected || password !== expected) {
    redirect("/dashboard/login?error=1");
  }

  const store = await cookies();
  store.set("mc_dash_auth", expected, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  redirect("/dashboard");
}

// ─── Gumroad ─────────────────────────────────────────────────────────────────

export type GumroadProductStats = {
  name: string;
  salesCount: number;
  revenueUsd: number;
};

export async function getGumroadStats(): Promise<{
  products: GumroadProductStats[];
  error?: string;
}> {
  const token = process.env.GUMROAD_ACCESS_TOKEN;
  if (!token) return { products: [], error: "GUMROAD_ACCESS_TOKEN not set" };

  try {
    const res = await fetch(
      `https://api.gumroad.com/v2/products?access_token=${encodeURIComponent(token)}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    if (!data.success) return { products: [], error: data.message ?? "Gumroad API error" };

    const products: GumroadProductStats[] = (data.products ?? []).map(
      (p: { name: string; sales_count: number; sales_usd_cents: number }) => ({
        name: p.name,
        salesCount: p.sales_count ?? 0,
        revenueUsd: (p.sales_usd_cents ?? 0) / 100,
      })
    );
    return { products };
  } catch {
    return { products: [], error: "Failed to reach Gumroad" };
  }
}

// ─── MailerLite ──────────────────────────────────────────────────────────────

export type MailerLiteStats = {
  groupName: string;
  activeCount: number;
};

export async function getMailerLiteStats(): Promise<{
  stats: MailerLiteStats | null;
  error?: string;
}> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;
  if (!apiKey || !groupId) return { stats: null, error: "MailerLite env vars not set" };

  try {
    const res = await fetch(`https://connect.mailerlite.com/api/groups/${groupId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: "no-store",
    });
    if (!res.ok) return { stats: null, error: `MailerLite API returned ${res.status}` };
    const data = await res.json();
    return {
      stats: {
        groupName: data.data?.name ?? "Group",
        activeCount: data.data?.active_count ?? 0,
      },
    };
  } catch {
    return { stats: null, error: "Failed to reach MailerLite" };
  }
}
