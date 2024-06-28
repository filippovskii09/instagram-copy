import React, { useContext } from "react";
import useAllRegisteredUsers from "../../../common/hooks/useAllRegisteredUsers";
import styles from "./UsersList.module.scss";
import Spinner from "../../shared/Spinner/Spinner";
import UsersItem from "../UsersItem/UsersItem";
import { AuthContext } from "../../../common/context/AuthContext";

const UsersList = () => {
  const { usersList, loading } = useAllRegisteredUsers();
  const { user } = useContext(AuthContext);
  const filteredUserList = usersList.filter(
    (item) => item.username !== user.username,
  );
  return (
    <>
      {loading ? (
        <Spinner dark size="large" />
      ) : (
        <div className={styles.list}>
          {filteredUserList.map((user) => (
            <UsersItem key={user.uid} item={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
