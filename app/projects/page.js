import RecipeList from "@/app/components/recipe-list/index";

async function fetchlistofRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json();

        return data?.recipes
    }
    catch (e) {
        throw new Error(e);
    }
}
  
export default async function Recipes() {
    const recipeList = await fetchlistofRecipes();
    return <RecipeList recipeList={recipeList} />;
}