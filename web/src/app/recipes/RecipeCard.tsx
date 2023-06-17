import Link from 'next/link';
import Image from 'next/image';

const IMAGE_HEIGHT = 250;

const RecipeCard = (props: {
  slug: string;
  title: string;
  image: { url: string; aspectRatio: number };
}) => {
  const width = Math.floor(IMAGE_HEIGHT * props.image.aspectRatio);

  return (
    <div className="p-5">
      <div className="max-h-[320px]" style={{ maxWidth: `${width}px` }}>
        <Link href={`recipes/${props.slug}`}>
          <div className="flex flex-col items-center border-solid border-[1px] rounded-md">
            <p className="font-serif font-bold text-xl text-center">
              {props.title}
            </p>
            <Image
              className="rounded-md"
              src={`${props.image.url}?h=${IMAGE_HEIGHT}`}
              alt=""
              height={0}
              width={0}
              sizes="100vw"
              style={{
                height: IMAGE_HEIGHT,
                width,
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
