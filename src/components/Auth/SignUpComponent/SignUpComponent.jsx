import styles from "./SignUpComponent.module.scss";
import MainButton from "../../shared/MainButton/MainButton";
import InstagramImage from "/images/instagram.png";
import { useForm } from "react-hook-form";
import useSignUpUserWithEmailAndPassword from "../../../common/hooks/auth/useSignUpUserWithEmailAndPassword";
import { Link } from "react-router-dom";

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
        Already have an account? <Link to="/auth/login">Sign in</Link>.
      </p>
    </form>
  );
};

export default SignUpComponent;
