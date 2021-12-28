import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import tinderLogo from "../images/tinder-logo.png";
import ForumIcon from "@mui/icons-material/Forum";

export default function Header() {
  return (
    <header className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={tinderLogo} alt=""  />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </header>
  );
}
