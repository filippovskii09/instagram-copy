import { useState } from "react";
import styles from "./SignUpComponent.module.scss";
import MainButton from "../../shared/MainButton/MainButton";
import InstagramImage from "/public/images/instagram.png";
import useSignUpUserWithEmailAndPassword from "../../../common/hooks/useSignUpUserWithEmailAndPassword";
import { useForm } from "react-hook-form";

const SignUpComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, loading, error } = useSignUpUserWithEmailAndPassword();

  const onSubmit = async (data) => {
    await signup(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <img src={InstagramImage} alt="instagram-logo" />
      <h5 className={styles.title}>
        Sign up to see photos and videos from your friends.
      </h5>
      <div className={styles.wrapper}>
        <input
          type="email"
          name="email"
          className="mainInput"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          {...register("email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <input
          type="text"
          name="name"
          className="mainInput"
          placeholder="Full name"
          onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          {...register("fullname", { required: "Full name is required" })}
        />
        {errors.fullname && (
          <p className={styles.error}>{errors.fullname.message}</p>
        )}

        <input
          type="text"
          name="username"
          className="mainInput"
          placeholder="User name"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username length must be at least 3 symbols",
            },
          })}
        />
        {errors.username && (
          <p className={styles.error}>{errors.username.message}</p>
        )}

        <input
          type="password"
          name="password"
          className="mainInput"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password length must be from 6 to 128 symbols",
            },
            maxLength: {
              value: 128,
              message: "Password length must be from 6 to 128 symbols",
            },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        {error && <p className={styles.error}>{error.message}</p>}
      </div>
      <MainButton disabled={loading} loading={loading} text="Sign Up" />
      <p className={styles.link}>
        Already have an account? <span>Sign in</span>.
      </p>
    </form>
  );
};

export default SignUpComponent;
