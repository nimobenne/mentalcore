"use server";

export async function subscribe(email: string, pattern?: string): Promise<void> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    throw new Error("MailerLite not configured — add MAILERLITE_API_KEY and MAILERLITE_GROUP_ID to env");
  }

  const payload: Record<string, unknown> = { email, groups: [groupId] };
  if (pattern) payload.fields = { pattern };

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { message?: string }).message ?? "Subscription failed");
  }
}
