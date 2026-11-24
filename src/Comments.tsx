import CommentItem from "./CommentItem.tsx";

function Comments() {
  let text = "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.\n26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.";

  return <div className="flex flex-col w-256.5 mt-14.25">
    <h2 className="text-[28px] font-bold text-white">Kurs haqida izohlar</h2>
    <div className="flex flex-col mt-3 rounded-lg border border-[#F7F9FA]/8 bg-[#1A1D1F]">
      <CommentItem avatar="/avatar1.png" name="Jasurbek Narzullayev" date="7 Sentyabr 2022 y. 19:52" rating={4} text={text}/>
      <CommentItem avatar="/avatar2.png" name="Muhammadamin Domlahonov" date="7 Sentyabr 2022 y. 19:52" rating={3} text={text}/>
      <CommentItem avatar="/avatar3.png" name="Shoxruh Baxtiyarov" date="7 Sentyabr 2022 y. 19:52" rating={5} text={text}/>
      <CommentItem avatar="/avatar1.png" name="Jasurbek Narzullayev" date="7 Sentyabr 2022 y. 19:52" rating={4} text={text} isMenuOpen={true}/>
    </div>
    <button className="self-center w-46 h-10 mt-6 rounded-lg bg-[#292A2C] text-[16px] font-medium text-white">Barcha izohlar</button>
  </div>;
}

export default Comments;
