import Image from 'next/image';
import { createSanityClient } from '../../../utils/sanity';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

type Recipe = {
  _createdAt: string;
  title: string;
  mealType?: string;
  servings?: number;
  prepTime?: number;
  cookTime?: number;
  calories?: number;
  ingredients?: [];
  instructions?: [];
  reference?: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
};

const client = createSanityClient();

async function fetchRecipe(slug: string): Promise<Recipe> {
  const recipe: Recipe = await client.fetch(
    `*[_type == "recipe" && slug.current == "${slug}"]{
        _createdAt,
        title,
        mealType,
        servings,
        prepTime,
        cookTime,
        calories,
        ingredients,
        instructions,
        reference,
        "image": image.asset->{
          url,
          "width": metadata.dimensions.width,
          "height": metadata.dimensions.height
        },
      }[0]`,
  );

  return recipe;
}

export default async function Recipe({ params }: { params: { slug: string } }) {
  const recipe = await fetchRecipe(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" w-[60%] mt-10">
        <div className="flex justify-between">
          <div className="flex flex-col mr-6">
            <h1 className="font-serif font-bold text-4xl">{recipe.title}</h1>
            <div className="mt-6">
              {recipe.mealType && <p>Meal Type: {recipe.mealType}</p>}
              {recipe.servings && <p>Servings: {recipe.servings}</p>}
              {recipe.prepTime && <p>Prep Time: {recipe.prepTime}m</p>}
              {recipe.cookTime && <p>Cook Time: {recipe.cookTime}m</p>}
              {recipe.calories && <p>Calories: {recipe.calories}</p>}
            </div>
          </div>
          <Image
            className="rounded-md"
            src={recipe.image.url}
            alt="steak image"
            width={recipe.image.width / 2}
            height={recipe.image.height / 2}
          />
        </div>
        <div className="mt-6 ingredients">
          <h2>Ingredients</h2>
          <PortableText value={recipe.ingredients || []} />
        </div>
        <div className="mt-6 instructions">
          <h2>Instructions</h2>
          <PortableText value={recipe.instructions || []} />
        </div>
        <div className="mt-6 reference">
          {recipe.reference && (
            <div>
              <h2>Reference</h2>
              <Link href={recipe.reference}>{recipe.reference}</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
