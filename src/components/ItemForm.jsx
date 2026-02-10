import { useState } from "react";

export function ItemForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name); // On envoie l'info au parent
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ajouter..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
