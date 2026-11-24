function LessonItem({image, time, title}) {
  return <div className="flex flex-col flex-1 gap-3">
    <div className="relative h-38 rounded-lg border border-[#3D464B] overflow-hidden">
      <img className="w-full h-full object-cover" src={image} alt="image"/>
      <div className="absolute left-4 bottom-3 flex flex-row items-center gap-2">
        <img className="w-4 h-4.5" src="/play-gray.png" alt="icon"/>
        <p className="text-[14px] text-[#A8B1B6]">{time}</p>
      </div>
    </div>
    <p className="text-[20px] font-medium text-white">{title}</p>
  </div>;
}

export default LessonItem;
