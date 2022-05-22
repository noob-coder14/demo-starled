import React from "react";
import styles from "../styles/Modal.module.css";

import { FiX, FiLink } from "react-icons/fi";
import { ImFacebook, ImTwitter } from "react-icons/im";

const Modal = ({
    setIsModalOpen,
}: {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles["close-btn"]}>
                    <FiX
                        color="#494E5B"
                        className={styles["close-btn-icon"]}
                        onClick={() => {
                            setIsModalOpen(false);
                        }}
                    />
                </div>
                <span className={styles.title}>Share this event with your social community</span>
                <div className={styles["social-btns"]}>
                    <div className={styles["fb-icon"]}>
                        <a
                            href="https://www.facebook.com/sharer/sharer.php?u=https://moonparty.com"
                            target="_blank"
                            rel="noreferrer">
                            <ImFacebook color="#1B74E3" />
                        </a>
                    </div>
                    <div className={styles["tw-icon"]}>
                        <a
                            href="https://twitter.com/intent/tweet?url=https://moonparty.com&text=Who%20else%20is%20going%20to%20the%20Moon%20Party?"
                            target="_blank"
                            rel="noreferrer">
                            <ImTwitter color="#1EA1F1" />
                        </a>
                    </div>
                </div>
                <span className={styles["copy-text"]}>Or copy link</span>
                <div className={styles["copy-container"]}>
                    <div className={styles["copy-icon"]}>
                        <FiLink />
                    </div>
                    <span className={styles["copy-link"]}>https://moonparty.com</span>
                    <button
                        className={styles["copy-btn"]}
                        onClick={(e) => {
                            navigator.clipboard.writeText("https://moonparty.com");
                            (e.target as HTMLButtonElement).innerHTML = "Copied";
                        }}>
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
