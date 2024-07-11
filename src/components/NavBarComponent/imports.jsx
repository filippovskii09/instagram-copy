import { ReactComponent as HomeIcon } from "/public/images/icons/home-icon.svg";
import { ReactComponent as MessagesIcon } from "/public/images/icons/message-icon.svg";
import { ReactComponent as ProfileIcon } from "/public/images/icons/profile-icon.svg";
import { ReactComponent as InstagramIcon } from "/public/images/icons/inst-icon.svg";
import { ReactComponent as SearchIcon } from "/public/images/icons/search-icon.svg";
import { ReactComponent as CreateIcon } from "/public/images/icons/create-icon.svg";
import { Switch, FormControlLabel } from "@mui/material";
import InstagramImage from "/images/instagram.png";
import styles from "../NavBarComponent/NavBarComponent.module.scss";
import { Link } from "react-router-dom";
import LogOutButton from "../Auth/LogOutButton/LogOutButton";
import { ThemeContext } from "../../common/context/ThemeContext";
import Popup from "../Popups/Popup/Popup";
import { PopupContext } from "../../common/context/PopupContext";

export {
  HomeIcon,
  MessagesIcon,
  ProfileIcon,
  InstagramIcon,
  SearchIcon,
  CreateIcon,
  Switch,
  FormControlLabel,
  InstagramImage,
  styles,
  Link,
  LogOutButton,
  PopupContext,
  Popup,
  ThemeContext,
};
