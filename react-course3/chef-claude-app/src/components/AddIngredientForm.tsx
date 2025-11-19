import { useState, type ChangeEvent } from "react";
import "./AddIngredientForm.css";

type AddIngredientFormProps = {
    ingredients: string[],
    setIngredients: (ingredients:string[]) => void
}


export function AddIngredientForm({ingredients,setIngredients}:AddIngredientFormProps) {

  const addIngredient = (formData) => {
    setIngredients([...ingredients, formData.get('newIngredient')]);
  };


  return (
    <form action={addIngredient} className="add-ingredient-form">
      <input
        type="text"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        name='newIngredient'
      />
      <button> + Add ingredient</button>
    </form>
  );
}
