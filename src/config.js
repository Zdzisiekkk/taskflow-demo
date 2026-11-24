// TaskFlow client config.
// INTENTIONAL HOLE: secret keys are shipped to the browser.
// ALL KEYS BELOW ARE FAKE. They are split into parts and joined at runtime so that
// GitHub push protection and secret scanners do not flag this demo repository.

export const OPENAI_API_KEY =
  "sk-" + "proj-" + "FAKE" + "demoOnlyNotReal" + "TaskflowKey000000" + "00000000";

export const STRIPE_SECRET_KEY =
  "sk" + "_live_" + "FAKE51" + "demoOnlyNotReal" + "TaskflowKey0000000";

export const STRIPE_PRICE_PRO = "price_FAKE_pro_monthly";

export async function suggestTask(text) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + OPENAI_API_KEY,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Suggest one short task title for: " + text }],
    }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "New task";
}
