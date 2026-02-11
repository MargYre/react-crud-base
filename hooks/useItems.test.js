import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useItems } from "./useItems";

describe("useItems logic", () => {
  it("should remove an item by its ID", () => {
    // 1. On initialise le hook
    const { result } = renderHook(() => useItems());

    const idToDelete = 1;

    // 2. On exécute l'action de suppression
    act(() => {
      result.current.deleteItem(idToDelete);
    });

    // 3. On vérifie que la liste a diminué
    expect(result.current.items).toHaveLength(1);

    // Bonus : On vérifie que l'ID 1 n'existe plus du tout dans la liste
    const deletedItem = result.current.items.find(
      (item) => item.id === idToDelete,
    );
    expect(deletedItem).toBeUndefined();
  });

  it("should update an item name", () => {
    const { result } = renderHook(() => useItems());

    act(() => {
      // TROU 1 : Appelle la fonction pour changer l'item 1 en "Croissant"
      result.current.updateItem(1, "Croissant");
    });

    // On récupère l'item après modification
    const updatedItem = result.current.items.find((i) => i.id === 1);

    // TROU 2 : Vérifie que le nom est bien "Croissant"
    expect(updatedItem.name).toBe("Croissant");
  });
});
