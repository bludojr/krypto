const logos = [
    { id: 1, src: "/TechCrunchLogo.png", alt: "Tech Crunch Logo" },
    { id: 2, src: "/FastCompanyLogo.png", alt: "Fast Company Logo" },
    { id: 3, src: "/MITLogo.png", alt: "MIT Logo" },
    { id: 4, src: "/ForbesLogo.png", alt: "Forbes Logo" },
]
const Hero = () => {
    return (
        <section id="About" className="">
            <div className="grid grid-cols-1  gap-y-12 md:grid-cols-2 w-full pb-8">
                <div className="max-md:mx-auto">
                    <h1 className="font-bold text-6xl sm:font-extrabold xxlg:text-8xl xxlg:leading-28
                    ">Discover <br /> and Collect <br />Rare NFTs</h1>
                    <p className="mt-10 mb-10 xlg:leading-10 xlg:tracking-wider">The most secure marketplace for buying <br />and selling unique crypto assets.</p>
                    <div className=" flex justify-between  w-60">
                        <button className="border border-secondary bg-secondary rounded-full hover:bg-secondary-2 hover:border-secondary-2  px-3.5 py-2 text-nowrap">
                            BUY NFTS
                        </button>
                        <button className="border rounded-full px-3 hover:opacity-65 py-2 text-nowrap">
                            SELL NFTS
                        </button>
                    </div>
                </div>
                <div className="flex justify-center  "><img src="/Hero Image.png" alt="NFT illustration" className=" xlg:max-h-120 xxlg:max-h-full " /></div>
            </div>
            <h1 className="pb-8">
                FEATURED ON
            </h1>
            <div className="flex justify-between items-center bg-secondary-2 rounded-lg">
                {logos.map(({ id, src, alt }) => (<div   className="flex justify-center items-center max-sm:h-16 w-48 h-24" key={id}><img className=" scale-50" key={id} src={src} alt={alt} /></div>))}
            </div>
        </section>
    )
}
export default Hero