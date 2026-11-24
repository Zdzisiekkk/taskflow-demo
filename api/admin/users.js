// Vercel serverless function: GET /api/admin/users
// INTENTIONAL HOLES: no authentication or admin check, and CORS allows any website.
// Returns FAKE users only.

const FIRST = ["Anna", "Piotr", "Kasia", "Tomek", "Ola"];

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const users = FIRST.map((name, i) => ({
    id: `00000000-0000-4000-8000-00000000000${i}`,
    name,
    email: `${name.toLowerCase()}${i}@example.com`,
    is_admin: i === 0,
  }));
  res.status(200).json(users);
}
