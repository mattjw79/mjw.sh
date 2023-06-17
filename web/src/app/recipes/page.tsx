import { createSanityClient } from '../../utils/sanity';
import RecipeCard from './RecipeCard';

const client = createSanityClient();

type Recipe = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  image: {
    url: string;
    aspectRatio: number;
  };
};

async function getData(): Promise<Recipe[]> {
  return client.fetch(
    `*[_type == "recipe"]{
            _createdAt,
            title,
            slug,
            "image": image.asset->{
                url,
                "aspectRatio": metadata.dimensions.aspectRatio
            }
        } | order(_createdAt desc)`,
  );
}

export default async function Recipies() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap justify-center m-auto">
        {data.map((recipe) => (
          <RecipeCard
            key={recipe.slug.current}
            slug={recipe.slug.current}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
      </div>
    </main>
  );
}
