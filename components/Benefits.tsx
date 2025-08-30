import Image from "next/image";

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-12">
        <div className="md:col-start-2 md:row-start-1 mx-auto my-auto">
          <div className="flex flex-col xxlg:pt-16">
            <h2 className=" font-medium tracking-wide">
              ANALYTICS
            </h2>
            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-tight tracking-tight text-balance">
              Built-In Analytics <br/>
              To Track Your NFTs
            </h1>
            <p className="mt-10 mb-10 leading-relaxed tracking-wide text-lg text-balance">
              The most secure marketplace for buying <br />
              and selling unique crypto assets.
            </p>
          </div>
        </div>

        <div className="min-[390px]:max-md:flex min-[390px]:max-md:justify-center md:col-start-1 md:row-start-1 md:-ml-12 lg:-ml-16 xxlg:-ml-24 flex justify-start xxlg:items-center ">
          <Image
            src="/Benefit1.png"
            alt="NFT analytics illustration"
            width={500}
            height={500}
            className="h-auto md:h-[clamp(10rem,50vw,28rem)] min-w-60 max-h-[38rem] w-full max-w-[36rem]"
            priority
            quality={90}
          />
        </div>

         
        <div className=" md:col-start-1 md:row-start-2 min-[390px]:max-md:mx-auto mx-auto ">
          <div className="flex flex-col xxlg:pt-16 ">
            <h2 className=" font-medium tracking-wide ">
              GET OUR APP
            </h2>
            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-tight tracking-tight ">
              Browse NFTs <br className="min-[390px]:max-md:hidden" />
              From <br className="hidden min-[390px]:max-md:block" />Your Smartphone
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
            className="h-auto min-w-60 md:h-[clamp(10rem,50vw,28rem)] w-full max-w-[36rem]"
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
