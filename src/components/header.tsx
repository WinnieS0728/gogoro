import logoImg from "@img/logo.svg";
import userIcon from "@icon/user icon.svg";

export default function Header() {
  return (
    <header className="bg-gogoro_black-500 flex items-center justify-between">
      <div className="flex aspect-square h-[50px] flex-col items-center justify-center gap-1">
        <span className="h-[2px] w-5 bg-white"></span>
        <span className="h-[2px] w-5 bg-white"></span>
        <span className="h-[2px] w-5 bg-white"></span>
      </div>
      <img src={logoImg} alt="gogoro logo img" className="h-[50px] w-[100px]" />
      <div className="flex aspect-square h-[50px] items-center justify-center">
        <img src={userIcon} alt="user icon" />
      </div>
    </header>
  );
}
