"use client";

import { useState, useEffect } from "react";

export default function Clients() {
  const [clients, setClients] = useState<any[]>([]);
  const [name, setName] = useState("");

  const load = async () => {
    const res = await fetch("http://localhost:3001/clients");
    setClients(await res.json());
  };

  const create = async () => {
    await fetch("http://localhost:3001/clients", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ name })
    });
    setName("");
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={create}>Add</button>

      {clients.map(c => <div key={c.id}>{c.name}</div>)}
    </div>
  );
}
