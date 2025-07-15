import Image from "next/image";

const logos = [
  { id: 1, src: "/TechCrunchLogo.png", alt: "TechCrunch logo" },
  { id: 2, src: "/FastCompanyLogo.png", alt: "Fast Company logo" },
  { id: 3, src: "/MITLogo.png", alt: "MIT logo" },
  { id: 4, src: "/ForbesLogo.png", alt: "Forbes logo" },
];

const Hero = () => {
  return (
    <section id="About" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <div className="grid w-full grid-cols-1 gap-y-12 pb-8 md:grid-cols-2">
        <div className="max-md:mx-auto">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight tracking-tight text-balance">
            Discover <br className="hidden min-[390px]:max-md:inline" />
            and Collect <br className="hidden min-[390px]:max-md:inline" />
            Rare NFTs
          </h1>

          <p className="mt-10 mb-10 leading-relaxed tracking-wide text-lg text-balance">
            The most secure marketplace for buying <br />
            and selling unique crypto assets.
          </p>

          <div className="flex w-60 justify-between">
            <button className="rounded-full border border-secondary bg-secondary px-3.5 py-2 text-nowrap hover:border-secondary-2 hover:bg-secondary-2">
              BUY NFTS
            </button>
            <button className="rounded-full border px-3 py-2 text-nowrap hover:opacity-65">
              SELL NFTS
            </button>
          </div>
        </div>

        <div className="mx-auto my-auto flex justify-center">
          <Image
            src="/Hero Image.png"
            alt="Illustration of NFT concept"
            width={500}
            height={500}
            className="h-auto max-h-[38rem] w-full max-w-md"
            priority
            quality={90}
          />
        </div>
      </div>

      <h2 className="pb-8 text-lg font-semibold tracking-wide">FEATURED ON</h2>
      <div className="flex  items-center justify-between gap-4 rounded-lg bg-secondary-2 p-4">
        {logos.map(({ id, src, alt }) => (
          <div key={id} className="flex h-24 w-48 items-center justify-center max-sm:h-16">
            <Image
              src={src}
              alt={alt}
              width={100}
              height={50}
              className="h-auto w-auto max-h-full max-w-full"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
