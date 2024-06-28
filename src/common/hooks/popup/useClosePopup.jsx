import { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";

const useClosePopup = (popupRef) => {
  const { setIsPopupVisible } = useContext(PopupContext);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };
  return handleClickOutside;
};

export default useClosePopup;
