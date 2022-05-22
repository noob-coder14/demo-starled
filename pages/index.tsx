import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Countdown from "../components/Countdown";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.container}>
            <Head>
                <title>Moon Landing Party</title>
                <link rel="icon" href="/favicon.ico" />

                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>

            <div className={styles.main}>
                {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
                <span className={styles.title}>MOON LANDING PARTY</span>
                <span className={styles.date}>07.16.22</span>
                <span className={styles.line}>Anniversary starts in</span>
                <Countdown />
                <button
                    className={styles["share-btn"]}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}>
                    Share Event
                </button>
            </div>
        </div>
    );
};

export default Home;
