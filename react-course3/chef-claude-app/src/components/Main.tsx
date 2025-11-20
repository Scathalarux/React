import { useEffect, useRef, useState } from "react";
import { AddIngredientForm } from "./AddIngredientForm";
import { IngredientsSection } from "./IngredientsSection";
import { RecipeSection } from "./RecipeSection";

export function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  //const [recipe, setRecipe]= useState('');
  const recipeSection = useRef(null);

  useEffect(()=>{
    if(/*recipe !== ''*/ recipeShown && recipeSection.current !== null){
      //recipeSection.current.scrollIntoView({behavior:'smooth'});
      const yCoord = recipeSection.current.getBoundingClientRect().top;
      window.scroll({top:yCoord, behavior:'smooth'});
    }
  },[recipeShown]);

  /*async function getRecipe(){
    const recipeMarkdown= await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  }*/

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
      {recipeShown && <RecipeSection ref={recipeSection}/>}
    </main>
  );
}
