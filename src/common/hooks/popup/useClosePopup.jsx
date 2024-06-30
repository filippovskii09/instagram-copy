import { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";

const useClosePopup = (popupRef) => {
  const { setPopupContent } = useContext(PopupContext);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupContent(false);
    }
  };
  return handleClickOutside;
};

export default useClosePopup;
