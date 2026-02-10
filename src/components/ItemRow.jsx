import { useState } from "react";

export function ItemRow({ item, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.name);

  const handleSave = () => {
    onUpdate(item.id, editValue);
    setIsEditing(false);
  };

  return (
    <div className="item-row">
      {isEditing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span onClick={() => setIsEditing(true)}>{item.name}</span>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
