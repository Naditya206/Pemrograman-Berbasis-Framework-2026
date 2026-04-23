import syles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Script from "next/script";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={syles.navbar}>
      <div
        className={syles.navbar_brand}
        id="title"
        data-testid="navbar-brand"
      ></div>
      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>
      <div className={syles.navbar_right}>
        {data ? (
          <>
            <div className={syles.navbar_user}>
              {data.user.image && (
                <Image
                  src={data.user.image}
                  alt={data.user.fullname || "User Avatar"}
                  width={50}
                  height={50}
                  className={syles.navbar_user_image}
                />
              )}
              Welcome, {data.user?.fullname}
            </div>
            <button
              className={`${syles.navbar_button} ${syles.navbar_button_danger}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${syles.navbar_button} ${syles.navbar_button_primary}`}
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