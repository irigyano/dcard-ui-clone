import SearchIcon from "./SVG/SearchIcon";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#006aa6] h-12 flex lg:pl-[23vw] text-white lg:fixed w-full z-20">
        <div className="pl-4 flex items-center grow">
          <img
            src="https://www.dcard.tw/_next/static/media/logo.8b5bbef2.svg"
            width={74}
            height={28}
          />
          <div className="hidden lg:flex items-center text-sm ">
            <form className="rounded flex border ml-10 border-[#00588a]">
              <input className="bg-[#00588a]  w-[30vw]  py-1 px-2" placeholder="搜尋" />
              <SearchIcon />
            </form>
            <a href="/" className="lg:ml-[15vw] xl:ml-[20vw] min-w-max">
              註冊 / 登入
            </a>
            <button className="bg-[#3397cf] rounded-lg ml-4 py-1 px-3 min-w-max">下載 App</button>
          </div>
        </div>

        <div className="lg:hidden w-12 h-12 flex justify-center items-center mr-1">
          <SearchIcon />
        </div>
      </nav>
      <div className="hidden lg:block h-12" />
    </>
  );
};
export default Navbar;
