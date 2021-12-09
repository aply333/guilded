import Userfront from "@userfront/react";
import "./tBstyles.css";

Userfront.init("wbm4pgn4");
const LogoutButton = Userfront.build({
  toolId: "nobdnr",
});

function TopBar() {
  return (
    <div className="topBarContainer">
      <p className="logo">Guilded</p>
      <LogoutButton />
    </div>
  );
}

export default TopBar;
