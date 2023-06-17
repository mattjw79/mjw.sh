import Image from 'next/image';

const social_media = [
  { name: 'flickr', link: 'https://www.flickr.com/photos/mattjwhitney/' },
  { name: 'github', link: 'https://github.com/mattjw79' },
  { name: 'linkedin', link: 'https://linkedin.com/in/mattjwhitney/' },
  { name: 'recipes', link: '/recipes/' },
];

const avatars = [
  {
    src: '/images/avatar1.jpg',
    alt: 'portrait of matt with a funny face and his tongue out',
  },
  { src: '/images/avatar2.jpg', alt: 'portrait of matt in a thoughtful pose' },
];

export default function Home() {
  const imageIndex = Math.floor(Math.random() * avatars.length);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col m-auto">
        <Image
          className="rounded-full border-2"
          src={avatars[imageIndex].src}
          alt={avatars[imageIndex].alt}
          width={250}
          height={250}
          priority
        />
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h1 className="border-b-[1px] font-serif font-bold text-xl p-2">
              Matthew J. Whitney
            </h1>
          </div>
          <div className="flex justify-around p-2">
            {social_media.map((icon) => (
              <div key={icon.name}>
                <a href={icon.link}>
                  <Image
                    className=""
                    src={`/images/${icon.name}.png`}
                    alt={`${icon.name} icon`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '35px', height: '35px' }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
