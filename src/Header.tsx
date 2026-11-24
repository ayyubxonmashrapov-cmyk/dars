function Header() {
  return (
    <div className="flex flex-row bg-[#1A1D1F] w-344 h-19 rounded-2xl mt-5 mx-8">
      <div className=" flex flex-row w-64.25 h-6 mt-6.5 mx-6 items-center gap-5">
        <img
          className="w-25.75 h-7 -mt-1.75 p-0"
          src="./Group 427318457.svg"
          alt="image"
        />
        <div className="w-px h-6 bg-[#3D4549]"></div>
        <div className="flex flex-row w-28 h-6 items-center gap-2">
          <p className="font-medium text-[15px] text-[#FFFFFF]">O‘zbekcha</p>
          <img src="/chevron-forward-outline 1.svg" alt="icon" />
        </div>
      </div>

      <div className="flex flex-row w-120.25 h-6 mt-7.75 ml-41.5 gap-10">
        <div className="flex flex-col w-11.5 h-6 gap-2">
          <p className="font-medium text-[14px] leading-none text-[rgba(255, 255, 255, 1)]">
            Asosiy
          </p>
          <div className="w-11.5 h-0.5 rounded-px bg-[#1C92E0]"></div>
        </div>
        <div className="flew flex-row w-18.5 h-3.5 gap-2">
          <p className="w-18.5 h-3.5 opacity-70 font-medium text-[14px] text-[rgba(247, 249, 250, 1)] leading-none">
            Yangiliklar
          </p>
        </div>
        <div className="flew flex-row w-18.5 h-3.5 gap-2">
          <p className="w-18.5 h-3.5 opacity-70 font-medium text-[14px] text-[rgba(247, 249, 250, 1)] leading-none">
            Kurslar
          </p>
        </div>
        <div className="flew flex-row w-18.5 h-3.5 gap-2">
          <p className="w-18.5 h-3.5 opacity-70 font-medium text-[14px] text-[rgba(247, 249, 250, 1)] leading-none">
            Kutubxona
          </p>
        </div>
        <div className="flew flex-row w-18.5 h-3.5 gap-2">
          <p className="w-18.5 h-3.5 opacity-70 font-medium text-[14px] text-[rgba(247, 249, 250, 1)] leading-none">
            Bog‘lanish
          </p>
        </div>
      </div>

      <div className="flex flex-row w-84 h-8 mt-5.5 ml-23 mr-5 gap-5 items-center">
        <div className="flex flex-row w-30 h-6 gap-6">
          <img src="/search-outline 1.svg" alt="icon" />
          <img src="/Component 1.svg" alt="icon" />
          <img
            className="w-6 h-6"
            src="/notifications-outline 1.svg"
            alt="icon"
          />
        </div>
        <div className="w-px h-6 bg-[#3D4549]"></div>
        <div className="flex flex-row items-center gap-1.5">
          <p className="font-normal text-[16px] leading-none whitespace-nowrap text-[#F7F9FA]">
            Jasurbek Pulatov
          </p>
          <img
            className="w-8 h-8 rounded-full border border-[rgba(247,249,250,0.3)]"
            src="/Frame 6.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
