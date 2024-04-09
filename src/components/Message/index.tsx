import { Avatar } from "antd";
import styles from "./Message.module.scss";
import cx from "classnames";

export interface IMessageProps {
    avatarImg?: string;
    username?: string;
    userId?: string;
    content?: string;
}

export default function Message({
    avatarImg,
    username,
    userId = "1",
    content,
}: IMessageProps) {
    const currentId = "1";
    return (
        <div
            className={cx(styles.wrapper, {
                [styles.owner]: currentId === userId,
            })}
        >
            <Avatar
                className={cx(styles.bgGradient, styles.avatar)}
                // icon={<RxAvatar />}
                src={
                    avatarImg ||
                    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                size={35}
            />
            <div className={styles.messageContentContainer}>
                <div className={styles.messageContent}>
                    <div className={styles.username}>
                        {username || "Nick Jo"}
                    </div>
                    <div className={styles.message}>
                        {content ||
                            " Happy weekend! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ipsum autem hi"}
                    </div>
                </div>
                <div className={styles.time}>4:30PM</div>
            </div>
        </div>
    );
}
