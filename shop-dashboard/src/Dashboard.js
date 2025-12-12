import React, { useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [materials, setMaterials] = useState([
    { id: 1, name: "Steel", count: 120 },
    { id: 2, name: "Wood", count: 80 },
    { id: 3, name: "Plastic", count: 150 },
  ]);

  const [newEntry, setNewEntry] = useState({ name: "", amount: 0 });
  const [newExit, setNewExit] = useState({ name: "", amount: 0 });

  const handleEntry = () => {
    setMaterials((prev) => {
      const exists = prev.find((m) => m.name === newEntry.name);
      if (exists) {
        return prev.map((m) =>
          m.name === newEntry.name
            ? { ...m, count: m.count + Number(newEntry.amount) }
            : m
        );
      } else {
        return [...prev, { id: Date.now(), name: newEntry.name, count: Number(newEntry.amount) }];
      }
    });
    setNewEntry({ name: "", amount: 0 });
  };

  const handleExit = () => {
    setMaterials((prev) =>
      prev.map((m) =>
        m.name === newExit.name
          ? { ...m, count: Math.max(0, m.count - Number(newExit.amount)) }
          : m
      )
    );
    setNewExit({ name: "", amount: 0 });
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Raw Materials Dashboard</h1>

      <div className="cards">
        {materials.map((m) => (
          <div key={m.id} className="card">
            <h2>{m.name}</h2>
            <p className="count">{m.count}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Add Entry</h2>
        <input
          className="input"
          placeholder="Material name"
          value={newEntry.name}
          onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
        />
        <input
          className="input"
          type="number"
          placeholder="Amount"
          value={newEntry.amount}
          onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
        />
        <button onClick={handleEntry} className="btn add">Add</button>
      </div>

      <div className="section">
        <h2>Remove Material</h2>
        <input
          className="input"
          placeholder="Material name"
          value={newExit.name}
          onChange={(e) => setNewExit({ ...newExit, name: e.target.value })}
        />
        <input
          className="input"
          type="number"
          placeholder="Amount"
          value={newExit.amount}
          onChange={(e) => setNewExit({ ...newExit, amount: e.target.value })}
        />
        <button onClick={handleExit} className="btn remove">Remove</button>
      </div>
    </div>
  );
}

