import { createContext } from "react";
import PropTypes from "prop-types";
import useGetAllUsers from "../hooks/useGetAllUsers";
import useCurrentUser from "../hooks/useCurrentUser";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { users, setUsers } = useGetAllUsers();
  const { currentUser, setCurrentUser, isLogin, setIsLogin } = useCurrentUser();
  // const [activity, setActivity] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        isLogin,
        setIsLogin,
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
