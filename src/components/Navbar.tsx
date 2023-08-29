import Logo from "../assets/Logo";
import SettingsIcon from "../assets/SettingsIcon";
import Bell from "../assets/Bell";
import Avatar from "../assets/Avatar.png";

function Navbar() {
  return (
    <header className="py-4 px-20 flex justify-between items-center border-b-[1px] border-whitishGray">
      <div className="cursor-pointer">
        <Logo />
      </div>

      <nav className="flex items-center justify-center space-x-5">
        <SettingsIcon />
        <Bell />
        <img src={Avatar} alt="avatar" />
      </nav>
    </header>
  );
}

export default Navbar;
