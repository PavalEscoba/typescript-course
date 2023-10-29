import React, { useRef } from "react";

interface ShoppingListFormHandlerType {
  onAddProduct(item: string, amount: number): void;
}

function ShoppingListForm({ onAddProduct }: ShoppingListFormHandlerType) {
  const productNameInputRef = useRef<HTMLInputElement>(null);
  const productAmountInputRef = useRef<HTMLInputElement>(null);
  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const productName = productNameInputRef.current!.value;
    const productAmout = parseInt(productAmountInputRef.current!.value);

    onAddProduct(productName, productAmout);
    productNameInputRef.current!.value = "";
    productAmountInputRef.current!.value = "1";
  };
  return (
    <form>
      <input
        type="text"
        name="itemName"
        id="itemName"
        ref={productNameInputRef}
        placeholder="Name of the product"
      />
      <input
        type="number"
        name="itemAmount"
        id="itemAmount"
        ref={productAmountInputRef}
        min={0}
      />

      <button type="submit" onClick={handleFormSubmit}>
        Add Product
      </button>
    </form>
  );
}

export default ShoppingListForm;
