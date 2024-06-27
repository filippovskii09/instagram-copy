import React, { createContext, useState } from "react";

export const UserProfileContext = createContext(null);

const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
