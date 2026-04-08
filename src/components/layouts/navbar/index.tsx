import syles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data }: any = useSession();

    return (
        <div className={syles.navbar}>
            <div className={syles.navbar_brand}>MyApp</div>
            <div className={syles.navbar_right}>
                {data ? (
                    <>
                        <div className={syles.navbar_user}>
                            WELCOME, {data.user?.fullname}
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
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;