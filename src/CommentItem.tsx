function CommentItem({avatar, name, date, rating, text, isMenuOpen = false}) {
  let ratingArray = Array.from({length: 5});

  return <div className="flex flex-col gap-3 ml-5 pt-5 pb-3 pr-3.5 border-b border-[#F7F9FA]/10 last:border-b-0">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-2">
        <img className="w-12 h-12 rounded-full object-cover" src={avatar} alt="avatar"/>
        <div className="flex flex-col">
          <p className="text-[20px] font-medium text-white">{name}</p>
          <div className="flex flex-row items-center gap-2.5">
            <p className="text-[18px] text-[#F7F9FA]/64">{date}</p>
            <div className="flex flex-row gap-1">
              {ratingArray.map((_, index) => <img key={index} className="w-5 h-5" src={`/star-${index < rating ? 'filled' : 'empty'}.svg`} alt="icon"/>)}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <button className={`flex items-center justify-center w-8 h-8 rounded-lg ${isMenuOpen ? 'bg-[#1D262D]' : ''}`}>
          <img className="w-6 h-6" src={isMenuOpen ? '/dots-blue.png' : '/dots.png'} alt="icon"/>
        </button>
        {isMenuOpen && <div className="absolute top-5.5 right-0 z-10 flex flex-row items-center gap-2 w-47.5 h-12 px-3 rounded-lg border border-[#F7F9FA]/8 bg-[#13181C]">
          <img className="w-6 h-6" src="/warning.png" alt="icon"/>
          <p className="text-[16px] text-white whitespace-nowrap">Shikoyat qilish</p>
        </div>}
      </div>
    </div>
    <p className="text-[16px] text-white whitespace-pre-line">{text}</p>
  </div>;
}

export default CommentItem;
