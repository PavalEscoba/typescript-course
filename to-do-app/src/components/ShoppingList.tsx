import ItemType from "../models/ItemType";

interface ShoppingListType {
  items: ItemType[];
}

function ShoppingList({ items }: ShoppingListType): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.amount}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
