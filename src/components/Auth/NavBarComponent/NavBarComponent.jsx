import { useState, useEffect, useContext } from "react";
import { ReactComponent as HomeIcon } from "/public/images/icons/home-icon.svg";
import { ReactComponent as MessagesIcon } from "/public/images/icons/message-icon.svg";
import { ReactComponent as ProfileIcon } from "/public/images/icons/profile-icon.svg";
import { ReactComponent as InstagramIcon } from "/public/images/icons/inst-icon.svg";
import { Switch, FormControlLabel } from "@mui/material";
import InstagramImage from "/images/instagram.png";
import styles from "./NavBarComponent.module.scss";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import { PopupContext } from "../../../common/context/PopupContext";
import Popup from "../../Popup/Popup";
import { ThemeContext } from "../../../common/context/ThemeContext";

const NavBarComponent = () => {
  const { isPopupVisible, setIsPopupVisible } = useContext(PopupContext);
  const [content, setContent] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1260);
  const { theme, setTheme } = useContext(ThemeContext);

  const navigation = [
    {
      id: "1",
      icon: <HomeIcon />,
      alt: "home-logo",
      title: "Home",
      link: "",
    },
    {
      id: "2",
      icon: <MessagesIcon />,
      alt: "message-logo",
      title: "Messages",
      link: "",
    },
    {
      id: "3",
      icon: <ProfileIcon />,
      alt: "profile-logo",
      title: "Profile",
      link: "",
    },
  ];

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleItemClick = (id) => {
    setActiveId(id);
  };

  const handleSwitchChange = (event) => {
    setTheme(event.target.checked);
  };

  const handleMoreButtonClick = (event) => {
    event.stopPropagation();
    togglePopup();
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 1260);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSwitchButton = (event) => {
    event.stopPropagation();
    setContent(!content);
  };

  return (
    <>
      <div
        className={`${styles.wrapperSideBar} ${theme ? styles.darkTheme : ""}`}
      >
        <div className={styles.sideBarContent}>
          {isMobileView ? (
            <div className={styles.wrapperInstIcon}>
              {" "}
              <InstagramIcon className={styles.instagramIcon} />
            </div>
          ) : (
            <img
              className={styles.logo}
              src={InstagramImage}
              alt="instagram-logo"
            />
          )}
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              {navigation.map((item) => (
                <li
                  key={item.id}
                  className={`${styles.menuItem} ${activeId === item.id ? styles.active : ""} ${theme ? styles.darkMode : ""}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <Link
                    className={`${styles.menuLink} ${theme ? styles.darkMode : ""}`}
                    to={item.link}
                  >
                    <span
                      className={`${styles.menuIcon} ${theme ? styles.darkMode : ""}`}
                    >
                      {" "}
                      {item.icon}
                    </span>
                    <span> {item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={handleMoreButtonClick}
            className={`${styles.moreButton} ${isPopupVisible ? styles.active : ""} ${theme ? styles.darkMode : ""}`}
          >
            More
          </button>
          {isPopupVisible && (
            <Popup>
              {content ? (
                <div className={styles.popupContent}>
                  <button
                    className={styles.buttonSwitch}
                    onClick={handleSwitchButton}
                  >
                    Switch appearance
                  </button>
                  <LogOutButton />
                </div>
              ) : (
                <div className={styles.themePopupContent}>
                  <div className={styles.themePopupHeader}>
                    <button
                      className={`${styles.closeThemePopup} ${theme ? styles.darkMode : ""}`}
                      onClick={handleSwitchButton}
                    >
                      Switch appearance
                    </button>
                  </div>
                  <div className={styles.popupSwitcher}>
                    <FormControlLabel
                      size="small"
                      value="start"
                      labelPlacement="start"
                      label="Dark mode"
                      control={
                        <Switch checked={theme} onChange={handleSwitchChange} />
                      }
                    />
                  </div>
                </div>
              )}
            </Popup>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBarComponent;
