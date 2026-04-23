import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Script from "next/script";

const Navbar = () => {
  const { data } = useSession();

  return (
    <div className={styles.navbar}>
      <div
        className={styles.navbar_brand}
        id="title"
        data-testid="navbar-brand"
      ></div>
      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>
      <div className={styles.navbar_right}>
        {data ? (
          <>
            <div className={styles.navbar_user}>
              {data.user?.image && (
                <Image
                  src={data.user.image}
                  alt={data.user.name || "User Avatar"}
                  width={50}
                  height={50}
                  className={styles.navbar_user_image}
                />
              )}
              Welcome, {data.user?.name}
            </div>
            <button
              className={`${styles.navbar_button} ${styles.navbar_button_danger}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar_button} ${styles.navbar_button_primary}`}
            onClick={() => signIn()}
            data-testid="button-signin"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;