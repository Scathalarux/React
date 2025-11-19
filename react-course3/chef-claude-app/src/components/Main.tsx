import { useState } from "react";
import { AddIngredientForm } from "./AddIngredientForm";
import { IngredientsSection } from "./IngredientsSection";
import { RecipeSection } from "./RecipeSection";

export function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  return (
    <main>
      <AddIngredientForm
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <IngredientsSection
        ingredients={ingredients}
        recipeShown={recipeShown}
        setRecipeShown={setRecipeShown}
      />
      {recipeShown && <RecipeSection />}
    </main>
  );
}
