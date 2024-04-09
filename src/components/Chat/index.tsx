import { Avatar } from "antd";
import cx from "classnames";
import styles from "./Chat.module.scss";

export interface IChatProps {
    status?: "read" | "unread" | "typing";
    selected?: boolean;
    time?: string;
    username?: string;
    thumbnailChat?: string;
}

export default function Chat({
    status = "typing",
    selected,
    time,
    username,
    thumbnailChat = "this is some chat",
}: IChatProps) {
    const chatStatus = cx(styles.status, {
        [styles.read]: status === "read",
        [styles.unread]: status === "unread",
        [styles.typing]: status === "typing",
        [styles.selected]: selected,
    });

    return (
        <div className={styles.chat}>
            <div className={styles.content}>
                <div className={styles.me}>
                    <Avatar
                        className={cx(styles.bgGradient, styles.avatar)}
                        // icon={<RxAvatar />}
                        src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        size="large"
                    />
                    <div className={styles.name}>
                        <div className={styles.justifyBetween}>
                            <span className={styles.username}>
                                {username ? username : "Martriks Studio"}
                            </span>
                            <span className={styles.time}>
                                {time ? time : "4:30 PM"}
                            </span>
                        </div>

                        <div className={styles.justifyBetween}>
                            <span className={chatStatus}>
                                {status === "typing"
                                    ? "Dimas Eza Typing..."
                                    : thumbnailChat}
                            </span>
                            {status === "unread" ||
                                (status === "typing" && (
                                    <span className={styles.newChat}>2</span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divider}></div>
        </div>
    );
}
