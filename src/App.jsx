import { useItems } from "./hooks/useItems";
import { ItemForm } from "./components/ItemForm";
import { ItemRow } from "./components/ItemRow";

function App() {
  const { items, addItem, deleteItem, updateItem } = useItems();

  return (
    <div className="app-container">
      <h1>Modular CRUD</h1>
      <p>Total: {items.length} items</p>

      <ItemForm onAdd={addItem} />

      <div className="items-list">
        {items.length === 0 ? (
          <p>No items found. The list is empty!</p>
        ) : (
          items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              onDelete={deleteItem}
              onUpdate={updateItem}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
