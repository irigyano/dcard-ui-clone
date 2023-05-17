const Navbar = () => {
  return (
    <div className="bg-[#006aa6] h-12 flex">
      <div className="pl-4 flex items-center grow">
        <img
          src="https://www.dcard.tw/_next/static/media/logo.8b5bbef2.svg"
          width={74}
          height={28}
        />
      </div>

      <div className="w-12 h-12 flex justify-center items-center mr-1">
        <svg
          viewBox="0 0 24 24"
          focusable="false"
          role="img"
          aria-hidden="true"
          className="h-6"
          fill="#f0f0f0"
        >
          <path d="m20.707 19.293-4.25-4.25A7.454 7.454 0 0 0 18 10.5 7.5 7.5 0 0 0 10.5 3 7.5 7.5 0 0 0 3 10.5a7.5 7.5 0 0 0 7.5 7.5 7.454 7.454 0 0 0 4.543-1.543l4.25 4.25A1 1 0 0 0 20 21a1 1 0 0 0 .707-.293 1 1 0 0 0 0-1.414ZM10.5 16A5.506 5.506 0 0 1 5 10.5 5.506 5.506 0 0 1 10.5 5a5.506 5.506 0 0 1 5.5 5.5 5.506 5.506 0 0 1-5.5 5.5Z"></path>
        </svg>
      </div>
    </div>
  );
};
export default Navbar;
