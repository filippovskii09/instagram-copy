import { useContext } from "react";
import { PopupContext } from "../../context/popups/PopupContext";
import { PostPopupContext } from "../../context/popups/PostPopupContext";

const useClosePopup = (popupRef) => {
  const { setPopupContent } = useContext(PopupContext);
  const { setPostPopup } = useContext(PostPopupContext);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupContent(false);
      setPostPopup(false);
    }
  };

  return handleClickOutside;
};

export default useClosePopup;
