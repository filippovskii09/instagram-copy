import { createContext } from "react";
import PropTypes from "prop-types";
import useGetAllUsers from "../hooks/useGetAllUsers";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { users, setUsers } = useGetAllUsers();

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
