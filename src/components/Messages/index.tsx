import Message from "../Message";
import styles from "./Messages.module.scss";

export interface IMessagesProps {}

export default function Messages(props: IMessagesProps) {
    return (
        <div className={styles.messages}>
            <Message />
            {/* <Message />
            <Message />
            <Message /> */}
        </div>
    );
}
