import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import avatar from "../../assets/images/Ado.jpg";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Tripple_A-Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2 </span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2 </span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
