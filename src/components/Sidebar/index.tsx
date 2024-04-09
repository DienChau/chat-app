import Search from "./Search";
import styles from "./Sidebar.module.scss";
import { BsFillPinFill } from "react-icons/bs";
import cx from "classnames";
import Messages from "../Chats";

export default function Sidebar() {
    return (
        <div className={styles.containerSidebar}>
            <div className={styles.paddingContainer}>
                <Search />
            </div>
            <div className={cx(styles.pin, styles.paddingContainer)}>
                <BsFillPinFill />
                <span>Pin messages</span>
            </div>

            <Messages />
        </div>
    );
}
