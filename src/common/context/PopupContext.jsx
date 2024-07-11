import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PopupContext = createContext(false);

const PopupProvider = ({ children }) => {
  const [settingsPopup, setSettingsPopup] = useState(false);
  const [createPostPopup, setCreatePostPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        settingsPopup,
        setSettingsPopup,
        createPostPopup,
        setCreatePostPopup,
        confirmationPopup,
        setConfirmationPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
