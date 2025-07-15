import Image from "next/image";

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-12">
        <div className="md:col-start-2 md:row-start-1 mx-auto my-auto">
          <div className="flex flex-col xxlg:pt-16">
            <h2 className="text-lg font-semibold tracking-wide text-secondary">
              ANALYTICS
            </h2>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight tracking-tight text-balance">
              Built-In Analytics <br/>
              To Track Your NFTs
            </h1>
            <p className="mt-10 mb-10 leading-relaxed tracking-wide text-lg text-balance">
              The most secure marketplace for buying <br />
              and selling unique crypto assets.
            </p>
          </div>
        </div>

        <div className="md:col-start-1 md:row-start-1 md:-ml-12 lg:-ml-16 xxlg:-ml-24 flex justify-start">
          <Image
            src="/Benefit1.png"
            alt="NFT analytics illustration"
            width={500}
            height={500}
            className="h-auto max-h-[38rem] w-full max-w-md"
            priority
            quality={90}
          />
        </div>

         <div className="md:col-start-1 md:row-start-2 max-md:mx-auto my-auto">
          <div className="flex flex-col max-md:mx-auto md:pt-10 lg:pt-12 xxlg:pt-16">
            <h2 className="text-lg font-semibold tracking-wide text-secondary">
              GET OUR APP
            </h2>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight tracking-tight text-balance">
              Browse NFTs <br className="hidden sm:inline" />
              From Your Smartphone
            </h1>
            <p className="mt-10 mb-10 leading-relaxed tracking-wide text-lg text-balance">
              The most secure marketplace for buying <br />
              and selling unique crypto assets.
            </p>
          </div>
        </div>

        <div className="md:col-start-2 md:row-start-2 flex w-full justify-center xxlg:justify-around">
          <Image
            src="/Benefit2.png"
            alt="Mobile NFT app preview"
            width={500}
            height={500}
            className="h-auto max-h-[38rem] w-full max-w-md"
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
