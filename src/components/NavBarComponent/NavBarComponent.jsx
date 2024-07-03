import { useContext, useEffect, useState } from "react";
import {
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
} from "./imports";

const NavBarComponent = () => {
  const { popupContent, setPopupContent } = useContext(PopupContext);
  const [content, setContent] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1260);
  const { theme, setTheme } = useContext(ThemeContext);

  const navigation = [
    {
      id: "1",
      icon: <HomeIcon />,
      alt: "home-icon",
      title: "Home",
      link: "",
    },
    {
      id: "2",
      role: "button",
      icon: <SearchIcon />,
      alt: "seach-icon",
      title: "Search",
    },
    {
      id: "3",
      icon: <MessagesIcon />,
      alt: "message-icon",
      title: "Messages",
      link: "",
    },
    {
      id: "4",
      role: "button",
      icon: <CreateIcon />,
      alt: "create-icon",
      title: "Create",
    },
    {
      id: "5",
      icon: <ProfileIcon />,
      alt: "profile-icon",
      title: "Profile",
      link: "account",
    },
  ];

  const togglePopup = () => {
    setPopupContent(!popupContent);
  };

  const handleItemClick = (id) => {
    setActiveId(id);
    console.log(id);
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
      <div className={`${styles.wrapperSideBar} ${theme && styles.darkTheme}`}>
        <div className={styles.sideBarContent}>
          {isMobileView ? (
            <div className={styles.wrapperInstIcon}>
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
              {navigation.map((item) =>
                item?.role ? (
                  <button
                    key={item.id}
                    className={`${styles.menuButton} ${activeId === item.id && styles.active} ${theme && styles.darkMode}`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <span
                      className={`${styles.menuIcon} ${theme && styles.darkMode}`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`${styles.menuLink} ${theme && styles.darkMode}`}
                    >
                      {item.title}
                    </span>
                  </button>
                ) : (
                  <li
                    key={item.id}
                    className={`${styles.menuItem} ${activeId === item.id && styles.active} ${theme && styles.darkMode}`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <Link
                      className={`${styles.menuLink} ${theme && styles.darkMode}`}
                      to={item.link}
                    >
                      <span
                        className={`${styles.menuIcon} ${theme && styles.darkMode}`}
                      >
                        {item.icon}
                      </span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <button
            type="button"
            onClick={handleMoreButtonClick}
            className={`${styles.moreButton} ${popupContent && styles.active} ${theme && styles.darkMode}`}
          >
            More
          </button>
          {popupContent && (
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
                      className={`${styles.closeThemePopup} ${theme && styles.darkMode}`}
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
