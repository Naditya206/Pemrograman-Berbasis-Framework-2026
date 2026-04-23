import Link from "next/link";
import style from "./login.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    setError("");
    setIsLoading(true);
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "login failed");
      }
    } catch (err) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <>
      <div className={style.login}>
        {error && <p className={style.login__error}>{error}</p>}
        <h1 className={style.login__title}>Halaman login</h1>
        <div className={style.login__form}>
          <form onSubmit={handleSubmit}>
            <div className={style.login__form__item}>
              <label htmlFor="email" className={style.login__form__item__label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={style.login__form__item__input}
                required
              />
            </div>
            <div className={style.login__form__item}>
              <label htmlFor="password" className={style.login__form__item__label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={style.login__form__item__input}
                required
              />
            </div>
            <button
              type="submit"
              className={style.login__form__item__button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <br />
            <br />
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl, redirect: false })}
              className={style.login__form__item__button}
              disabled={isLoading}
            >
              Sign in with Google
            </button>
          </form>
        </div>
        <p className={style.login__link}>
          tidak punya akun? Login <Link href="/auth/register">disini</Link>
        </p>
      </div>
    </>
  );
};

export default TampilanLogin;
