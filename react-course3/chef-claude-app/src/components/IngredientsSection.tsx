import "./IngredientsSection.css";

type IngredientsSectionProps = {
  ingredients: string[];
  recipeShown: boolean;
  setRecipeShown: (value:boolean) => void;
};
export function IngredientsSection({ ingredients , recipeShown, setRecipeShown}: IngredientsSectionProps) {
  if (ingredients.length === 0) {
    return <h3>Insert some ingredients...</h3>;
  }
  return (
    <section>
      <h3>Ingredients on hand:</h3>
      <ul>
        {ingredients.map((ingredient: string) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      {ingredients.length >= 4 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={()=>setRecipeShown(!recipeShown)}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
