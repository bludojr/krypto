const logos = [
  { id: 1, src: "/TechCrunchLogo.png", alt: "Tech Crunch Logo" },
  { id: 2, src: "/FastCompanyLogo.png", alt: "Fast Company Logo" },
  { id: 3, src: "/MITLogo.png", alt: "MIT Logo" },
  { id: 4, src: "/ForbesLogo.png", alt: "Forbes Logo" },
];
const Hero = () => {
  return (
    <section id="About" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <div className="grid w-full grid-cols-1 gap-y-12 pb-8 md:grid-cols-2" >
        <div className="max-md:mx-auto">
          <h1 className="text-6xl font-bold xxlg:text-8xl xxlg:leading-28 sm:font-extrabold">
            Discover <br /> and Collect <br />
            Rare NFTs
          </h1>
          <p className="mt-10 mb-10 xlg:leading-10 xlg:tracking-wider">
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
        <div className="flex justify-center">
          <img
            src="/Hero Image.png"
            alt="NFT illustration"
            className="xlg:max-h-120 xxlg:max-h-full"
          />
        </div>
      </div>
      <h1 className="pb-8">FEATURED ON</h1>
      <div className="flex items-center justify-between rounded-lg bg-secondary-2">
        {logos.map(({ id, src, alt }) => (
          <div
            className="flex h-24 w-48 items-center justify-center max-sm:h-16"
            key={id}
          >
            <img className="scale-50" key={id} src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Hero;
