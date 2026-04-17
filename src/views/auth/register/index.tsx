import Link from "next/link";
import style from "./register.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setIsLoading(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      email: formData.get("email") as string,
      fullname: formData.get("fullname") as string,
      password: formData.get("password") as string,
    };

    if (data.password.length < 6) {
      setIsLoading(false);
      setError("Password must be at least 6 characters");
      return;
    }

    const result = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "An error occurred");
    }
  };

  return (
    <>
      <div className={style.register}>
        {error && <p className={style.register__error}>{error}</p>}
        <h1 className={style.register__title}>Halaman Register</h1>
        <div className={style.register__form}>
          <form onSubmit={handleSubmit}>
            <div className={style.register__form__item}>
              <label htmlFor="fullname" className={style.register__form__item__label}>
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Fullname"
                className={style.register__form__item__input}
                required
              />
            </div>
            <div className={style.register__form__item}>
              <label htmlFor="email" className={style.register__form__item__label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={style.register__form__item__input}
                required
              />
            </div>
            <div className={style.register__form__item}>
              <label htmlFor="password" className={style.register__form__item__label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={style.register__form__item__input}
                required
              />
            </div>
            <button type="submit" className={style.register__form__item__button} disabled={isLoading}>
              {isLoading ? "Loading..." : "Register"}
            </button>
          </form>
        </div>
        <p className={style.register__link}>
          Sudah punya akun? Login <Link href="/auth/login">disini</Link>
        </p>
      </div>
    </>
  );
};

export default TampilanRegister;
