import { createSanityClient } from '../../utils/sanity';
import RecipeCard from './RecipeCard';
import { headers } from 'next/headers';

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
  hotspot?: {
    __type?: string;
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

export default async function Recipes() {
  const data: Recipe[] = await client.fetch(
    `*[_type == "recipe"]{
            _createdAt,
            title,
            slug,
            "image": image.asset->{
                url,
                "aspectRatio": metadata.dimensions.aspectRatio
            },
            "hotspot": image.hotspot
        } | order(_createdAt desc)`,
  );

  headers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap justify-center m-auto">
        {data.map((recipe) => (
          <RecipeCard
            key={recipe.slug.current}
            slug={recipe.slug.current}
            title={recipe.title}
            image={recipe.image}
            hotspot={recipe.hotspot}
          />
        ))}
      </div>
    </main>
  );
}
