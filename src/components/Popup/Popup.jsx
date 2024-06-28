import { useEffect, useRef } from "react";
import styles from "../Auth/NavBarComponent/NavBarComponent.module.scss";
import PropTypes from "prop-types";
import useClosePopup from "../../common/hooks/popup/useClosePopup";

const Popup = ({ children }) => {
  const popupRef = useRef(null);

  const handleClickOutside = useClosePopup(popupRef);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={popupRef} className={styles.popup}>
      {children}
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};
