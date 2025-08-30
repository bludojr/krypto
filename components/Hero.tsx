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
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold min-[390px]:max-md:text-[clamp(3rem,10vw,4.5rem)] leading-tight tracking-tight text-balance">
            Discover <br className="hidden min-[390px]:max-md:hidden" />
            and Collect <br className="hidden min-[390px]:max-md:hidden" />
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
            <button className="rounded-full glass border px-3 py-2 text-nowrap hover:opacity-65">
              SELL NFTS

            </button>


          </div>

        </div>

        <div className="mx-auto my-auto flex   h-full items-start justify-center w-full xxlg:justify-end xxlg:pr-16 ">
          <Image
            src="/Hero Image.png"
            alt="Illustration of NFT concept"
            width={500}
            height={500}
            className="min-w-60 h-auto  md:w-[clamp(15rem,70vw,45rem)] md:h-[clamp(10rem,50vw,20rem)]  w-full max-w-md"
            priority
            quality={90}
          />
        </div>
      </div>

      <h2 className="pb-8 text-[clamp(0.5rem,12vw,3rem] font-medium tracking-wide">FEATURED ON</h2>
      <div className="flex h-[clamp(0.2rem,10vh,8rem)] w-full min-w-60 items-center justify-between gap-4 rounded-lg bg-secondary-2 p-4">
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
