import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase.js";
import { suggestTask } from "./config.js";
import AdminPanel from "./components/AdminPanel.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    supabase.from("tasks").select("*").then(({ data }) => setTasks(data ?? []));
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return;
      const { data: p } = await supabase.from("profiles").select("*").eq("id", data.user.id).single();
      setProfile(p);
    });
  }, []);

  async function addSuggested() {
    const title = await suggestTask("Plan my week");
    setTasks((t) => [...t, { id: crypto.randomUUID(), title }]);
  }

  return (
    <main style={{ maxWidth: 560, margin: "32px auto", fontFamily: "system-ui" }}>
      <h1>TaskFlow</h1>
      <p>Demo app for GlideBox Shield. All data and keys are fake.</p>
      <button onClick={addSuggested}>Suggest a task with AI</button>
      <ul>{tasks.map((t) => <li key={t.id}>{t.title}</li>)}</ul>
      {/* Admin check only in the browser (intentional hole) */}
      {profile?.is_admin && <AdminPanel />}
    </main>
  );
}
