function IconAndText({icon, text}) {
    return <div className="flex flex-row gap-1 items-center">
        <img src={icon} alt="icon"/>
        <p className="text-[#F7F8Fa]/63 text-[14px]">{text}</p>
    </div>
}

export default IconAndText