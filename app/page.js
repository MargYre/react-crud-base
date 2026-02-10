"use client"; // INDISPENSABLE car on utilise des Hooks (useState)

import { useItems } from "../hooks/useItems";
import { ItemForm } from "../components/ItemForm";
import { ItemRow } from "../components/ItemRow";

export default function Home() {
  const { items, addItem, deleteItem, updateItem } = useItems();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Next.js Modular CRUD</h1>
      <ItemForm onAdd={addItem} />

      <div style={{ marginTop: "20px" }}>
        {items.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onUpdate={updateItem}
          />
        ))}
      </div>
    </main>
  );
}
