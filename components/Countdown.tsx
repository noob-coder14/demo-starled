import React, { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.css";

type RemainingTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const Countdown: React.FC = () => {
    const targetDate = new Date("Jun 16, 2022 00:00:00").getTime();

    const [remainingTime, setRemainingTime] = useState<RemainingTime>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const distance = targetDate - Date.now();

            setRemainingTime({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles["countdown-item"]}>
                <span className={styles["countdown-item-time"]}>{remainingTime.days}</span>
                <br />
                <span className={styles["countdown-item-description"]}>days</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles["countdown-item"]}>
                <span className={styles["countdown-item-time"]}>{remainingTime.hours}</span>
                <br />
                <span className={styles["countdown-item-description"]}>hours</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles["countdown-item"]}>
                <span className={styles["countdown-item-time"]}>{remainingTime.minutes}</span>
                <br />
                <span className={styles["countdown-item-description"]}>minutes</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles["countdown-item"]}>
                <span className={styles["countdown-item-time"]}>{remainingTime.seconds}</span>
                <br />
                <span className={styles["countdown-item-description"]}>seconds</span>
            </div>
        </div>
    );
};

export default Countdown;
