import { ReactComponent as HomeIcon } from "/public/images/icons/home-icon.svg";
import { ReactComponent as MessagesIcon } from "/public/images/icons/message-icon.svg";
import { ReactComponent as ProfileIcon } from "/public/images/icons/profile-icon.svg";
import { ReactComponent as Food } from "/public/images/icons/01.svg";
import InstagramImage from "/images/instagram.png";
import styles from "./NavBarComponent.module.scss";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
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

  return (
    <>
      <div className={styles.wrapperSideBar}>
        <img className={styles.logo} src={InstagramImage} alt="instagram-logo" />
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            {navigation.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <Link className={styles.menuLink} to={item.link}>
                  <div className={styles.menuIcon}>{item.icon}</div>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Food className={styles.menuIcon} />
      </div>
    </>
  );
};

export default NavBarComponent;
