import React from "react";
import useAllRegisteredUsers from "../../../common/hooks/useAllRegisteredUsers";
import styles from "./UsersList.module.scss";
import Spinner from "../../shared/Spinner/Spinner";
import UsersItem from "../UsersItem/UsersItem";

const UsersList = () => {
  const { usersList, loading } = useAllRegisteredUsers();

  return (
    <>
      {loading ? (
        <Spinner dark={true} size="large" />
      ) : (
        <div className={styles.list}>
          {usersList.map((user) => (
            <UsersItem key={user.uid} item={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
