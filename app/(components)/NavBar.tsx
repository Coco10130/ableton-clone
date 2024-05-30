const NavBar = () => {
  const navigations = [
    "Live",
    "Push",
    "Note",
    "Link",
    "Shop",
    "Packs",
    "Help",
    "More +",
  ];
  return (
    <>
      <nav className="bg-white border-b-2 border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/anya-pfp.jpg"
              alt="image"
              className="h-8 w-auto mr-8 rounded-full"
            />
            <ul className="flex space-x-8 items-center">
              {navigations.flatMap((navItem, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={
                      navItem === "More +"
                        ? "text-red text-lg font-bold"
                        : "text-black font-bold"
                    }
                  >
                    {navItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-blue text-lg font-bold">
              Try Live 12 for Free
            </a>
            <a href="#" className="text-black text-sm font-bold">
              Log in or Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
