import Link from 'next/link';
import Image from 'next/image';

const IMAGE_HEIGHT = 250;

const RecipeCard = (props: {
  slug: string;
  title: string;
  image: { url: string; aspectRatio: number };
  hotspot?: { height: number; width: number; x: number; y: number };
}) => {
  let height = IMAGE_HEIGHT;
  let width = Math.floor(IMAGE_HEIGHT * props.image.aspectRatio);
  const url = new URL(props.image.url);
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('crop', 'focalpoint');
  if (props.hotspot) {
    url.searchParams.set('fp-x', props.hotspot.x.toString());
    url.searchParams.set('fp-y', props.hotspot.y.toString());
    url.searchParams.set('h', '250');
    url.searchParams.set('w', '250');

    width = 250;
    height = 250;
  } else {
    url.searchParams.set('h', IMAGE_HEIGHT.toString());
  }

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
              src={url.toString()}
              alt=""
              height={0}
              width={0}
              sizes="100vw"
              style={{
                height,
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
