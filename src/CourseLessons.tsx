import LessonItem from "./LessonItem.tsx";

function CourseLessons() {
  return <div className="flex flex-col w-256.5 mt-18.25 rounded-lg border border-[#F7F9FA]/8 bg-[#1A1D1F] overflow-hidden">
    <div className="flex flex-row justify-between items-center h-15.75 pl-7.5 pr-4.5">
      <h2 className="mb-2 text-[24px] font-bold text-white">1. Asosiy donalar</h2>
      <img className="w-8.5 h-8.5 rotate-180" src="/chevron-down-white.svg" alt="icon"/>
    </div>
    <div className="flex flex-row gap-6 px-5 pt-5.5 pb-6 bg-[#202427] border-t-2 border-[#F7F9FA]/8">
      <LessonItem image="/lesson1.png" time="07:12" title="1.1 Kirish"/>
      <LessonItem image="/lesson2.png" time="08:15" title="1.2 Mot qilish"/>
      <LessonItem image="/lesson3.png" time="05:45" title="1.2 Piyoda bilan tanishuv"/>
    </div>
    <div className="flex flex-row justify-between items-center h-16.75 pl-5 pr-4.5 border-t-2 border-[#F7F9FA]/8">
      <h2 className="mb-2 text-[24px] font-bold text-white">2. Eng ko‘p foydalaniladigan donalar</h2>
      <img className="w-8.5 h-8.5" src="/chevron-down-white.svg" alt="icon"/>
    </div>
    <div className="flex flex-row justify-between items-center h-18 pl-5 pr-4.5 border-t-2 border-[#F7F9FA]/8">
      <h2 className="mb-2 text-[24px] font-bold text-white">3. Mot qilish oson bo‘lgan donalar</h2>
      <img className="w-8.5 h-8.5" src="/chevron-down-white.svg" alt="icon"/>
    </div>
  </div>;
}

export default CourseLessons;
