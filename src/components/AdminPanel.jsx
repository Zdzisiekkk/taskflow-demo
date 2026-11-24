import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // The endpoint itself has no auth check (see api/admin/users.js).
    fetch("/api/admin/users").then((r) => r.json()).then(setUsers);
  }, []);
  return (
    <section>
      <h2>Admin: users</h2>
      <ul>{users.map((u) => <li key={u.id}>{u.name} ({u.email})</li>)}</ul>
    </section>
  );
}
