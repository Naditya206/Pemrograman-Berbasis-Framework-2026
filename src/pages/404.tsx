import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <Head>
                <title>404 - Halaman Tidak Ditemukan</title>
                <meta name="description" content="Maaf, halaman yang Anda cari tidak dapat ditemukan." />
            </Head>
            <div className={styles.error__content}>
                <Image
                    src="/page-not-found.png"
                    alt="404 Illustration"
                    width={400}
                    height={200}
                    className={styles.error__image}
                />
                <h1 className={styles.error__title}>Oops! 404</h1>
                <p className={styles.error__description}>
                    Sepertinya Anda tersesat. Halaman yang Anda cari tidak dapat kami temukan.
                </p>
                <Link href="/" className={styles.error__button}>
                    Kembali ke Home
                </Link>
            </div>
        </div>
    );
};

export default Custom404;