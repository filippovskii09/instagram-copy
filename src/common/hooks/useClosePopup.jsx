import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

const useClosePopup = (popupRef) => {
  const { setSettingsPopup } = useContext(PopupContext);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setSettingsPopup(false);
    }
  };

  return handleClickOutside;
};

export default useClosePopup;
