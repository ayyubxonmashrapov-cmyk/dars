function Footer() {
  return <div className="flex flex-col w-full mt-15 bg-[#1A1D1F]">
    <div className="flex flex-col items-center pt-8">
      <img className="w-28.5 h-7" src="/footer-logo.png" alt="logo"/>
      <div className="flex flex-row gap-6 mt-4.5">
        <a className="text-[14px] text-white" href="#">Biz haqimizda</a>
        <a className="text-[14px] text-white" href="#">Cookie fayllari siyosati</a>
        <a className="text-[14px] text-white" href="#">Foydalanish qoidalari</a>
        <a className="text-[14px] text-white" href="#">Cookie fayllari siyosati</a>
      </div>
      <div className="flex flex-row gap-2 mt-3.5 mb-5.25">
        <a href="#"><img className="w-6 h-6" src="/instagram.png" alt="icon"/></a>
        <a href="#"><img className="w-6 h-6" src="/telegram.png" alt="icon"/></a>
        <a href="#"><img className="w-6 h-6" src="/youtube.png" alt="icon"/></a>
        <a href="#"><img className="w-6 h-6" src="/twitter.png" alt="icon"/></a>
        <a href="#"><img className="w-6 h-6" src="/facebook.png" alt="icon"/></a>
      </div>
    </div>
    <div className="relative flex flex-row justify-between items-center h-12.5 pl-8 pr-4 border-t border-[#F7F9FA]/10">
      <p className="text-[16px] text-white">© UzChess. All rights reserved.</p>
      <img className="absolute left-1/2 -translate-x-1/2 w-8.5 h-4.75" src="/footer-icon.png" alt="icon"/>
      <a className="text-[16px] text-white" href="#">Foydalanish qoidalari</a>
    </div>
  </div>;
}

export default Footer;
