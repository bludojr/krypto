const Pricing = () => {
  return (
    <section id="pricing">
      <div className="grid w-full grid-cols-1 gap-y-4 pb-8 md:grid-cols-2 ">
        <div className="order-2 md:order-1 md:-ml-12  lg:-ml-16 xxlg:-ml-24 flex flex-row justify-start">
          <img
            src="/Benefit1.png"
            alt="NFT illustration"
            className=" justify-self-start xlg:max-h-96 xxlg:max-h-150"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col xxlg:pt-16 ">
          <h1 className="justify-self-start">ANALYTICS</h1>
          <h1 className="text-6xl font-bold xxlg:text-8xl xxlg:leading-28 sm:font-bold">Built-In Analytics <br />To Track Your Nfts</h1>
          <p className="mt-10 mb-10 xlg:leading-10 xlg:tracking-wider">
            The most secure marketplace for buying <br />
            and selling unique crypto assets.
          </p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-y-4 pb-8 md:grid-cols-2 ">
        
        <div className="flex flex-col  md:pt-10 lg:pt-12 xxlg:pt-16">
          <h1 className="justify-self-start">GET OUR APP</h1>
          <h1 className="text-6xl font-bold xxlg:text-8xl xxlg:leading-28 xxlg:text-nowrap sm:font-bold">Browse Nfts From <br />Your Smartphone</h1>
          <p className="mt-10 mb-10 xlg:leading-10 xlg:tracking-wider">
            The most secure marketplace for buying <br />
            and selling unique crypto assets.
          </p>
        </div>
        <div className=" flex w-full xxlg:justify-end ">
          <img
            src="/Benefit2.png"
            alt="NFT illustration"
            className="  xlg:max-h-96 xxlg:max-h-150"
          />
        </div>
      </div>
    </section>
  );
};
export default Pricing;
