import { useState } from "react";

export function useItems() {
  const [items, setItems] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Create a CRUD" },
  ]);

  const addItem = (name) => {
    const newItem = { id: Date.now(), name };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, newName) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item)),
    );
  };

  return { items, addItem, deleteItem, updateItem };
}
