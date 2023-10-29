import { useState } from "react";
import { v4 as setId } from "uuid";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import ItemType from "./models/ItemType";

// import { Greeter, Hello, GoodBye } from "./components/Greeter";

function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  function addProduct(product: string, amount: number): void {
    setItems([...items, { id: setId(), name: product, amount: amount }]);
  }

  const containerStyles = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontSize: "24px"
  };
  return (
    <div style={containerStyles}>
      {/* <header className="App-header">
        <Greeter person="Pavel" />
        <Greeter person="Nadzeya" />

        <Hello />
        <Hello />

        <GoodBye friend="friend" />
        <GoodBye friend="ami" />
      </header> */}

      <ShoppingListForm onAddProduct={addProduct} />

      <ShoppingList items={items} />
    </div>
  );
}

export default App;
