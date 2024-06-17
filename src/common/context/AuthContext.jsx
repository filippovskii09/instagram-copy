import { createContext } from "react";
import PropTypes from "prop-types";
import useGetAllUsers from "../hooks/useGetAllUsers";
import useCurrentUser from "../hooks/useCurrentUser";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { users, setUsers } = useGetAllUsers();
  const { currentUser, setCurrentUser } = useCurrentUser();

  return (
    <AuthContext.Provider
      value={{ users, setUsers, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
