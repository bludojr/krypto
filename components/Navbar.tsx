



const links: any[] = [
  { id: 1, href: "#about", label: "about" },
  { id: 2, href: "#pricing", label: "pricing" },
  { id: 3, href: "#contact", label: "contact" },
  { id: 4, href: "#buy", label: "buy NFTs" },
];

const Header = () => {


  return (
    <>
      <header className="z-50 w-full bg-primary pb-12 backdrop-blur-ssm sm:pb-16 md:pb-20 lg:pb-24">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">KRYPTO</h1>

          <nav className="hidden md:block">
            <ul className="font-outfit flex items-center gap-8 md:tracking-wide lg:gap-20">
              {links.map(({ id, href, label }) => (
                <li key={id}>
                  <a className="hover:text-purple-300" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>


        </div>
      </header>


    </>
  );
};

export default Header;
