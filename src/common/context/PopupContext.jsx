import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PopupContext = createContext(false);

const PopupProvider = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <PopupContext.Provider value={{ isPopupVisible, setIsPopupVisible }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
