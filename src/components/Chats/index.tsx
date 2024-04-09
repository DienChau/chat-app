import Chat from "../Chat";
import styles from "./Chats.module.scss";

export interface IChatsProps {}

export default function Chats(props: IChatsProps) {
    return (
        <div className={styles.chats}>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            {/* <Message />
            <Message />
            <Message /> */}
        </div>
    );
}
