import Input from "../Input";
import Message from "../Message";
import styles from "./Messages.module.scss";

export default function Messages() {
    return (
        <div className={styles.messages}>
            <div className={styles.content}>
                <Message />
                <Message />
                <Message userId="2" />
                <Message />
                <Message />
                <Message userId="2" />
            </div>
            <div className={styles.input}>
                <Input />
            </div>
        </div>
    );
}
