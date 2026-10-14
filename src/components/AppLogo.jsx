import logo from "../assets/Logo.png";

function AppLogo() {
  return (
    <img
      className="rounded-full border border-slate-800 w-h-24 h-24 md:w-32 md:h-32"
      src={logo}
      alt="LyricsIt logo"
    />
  );
}

export default AppLogo;
