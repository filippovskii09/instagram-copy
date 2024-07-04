import React, { createContext, useState } from "react";

export const PostPopupContext = createContext(false);

const PostPopupProvider = ({ children }) => {
  const [postPopup, setPostPopup] = useState(false);

  return (
    <PostPopupContext.Provider value={{ postPopup, setPostPopup }}>
      {children}
    </PostPopupContext.Provider>
  );
};

export default PostPopupProvider;
