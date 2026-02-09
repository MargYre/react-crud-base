import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apprendre React" },
    { id: 2, name: "Créer un CRUD" },
    { id: 3, name: "Devenir une pro" },
    { id: 4, name: "Maîtriser Next.js" },
  ]);

  const [newItemName, setNewItemName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  // Ajouter un item
  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItemName.trim() === "") return;

    const newItem = {
      id: Date.now(),
      name: newItemName,
    };

    setItems([...items, newItem]);
    setNewItemName("");
  };

  // Supprimer un item
  const deleteItem = (idASupprimer) => {
    setItems(items.filter((item) => item.id !== idASupprimer));
  };

  // Activer le mode édition
  const handleStartEdit = (id, currentName) => {
    setEditingId(id);
    setEditingValue(currentName);
  };

  // Sauvegarder les modifications
  const handleSaveEdit = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: editingValue } : item,
    );

    setItems(updatedItems);
    setEditingId(null);
    setEditingValue("");
  };

  // Annuler l'édition
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingValue("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD Base</h1>
      <p>Total : {items.length} items</p>

      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Nom du nouvel item"
        />
        <button type="submit">Ajouter</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {items.length === 0 ? (
          <p>Aucun item. La liste est vide !</p>
        ) : (
          items.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              {editingId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(item.id)}>
                    Sauvegarder
                  </button>
                  <button onClick={handleCancelEdit}>Annuler</button>
                </>
              ) : (
                <>
                  <span
                    onClick={() => handleStartEdit(item.id, item.name)}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                  >
                    {item.name}
                  </span>
                  <button onClick={() => deleteItem(item.id)}>Supprimer</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
