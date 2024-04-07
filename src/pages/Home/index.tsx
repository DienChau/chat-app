import Chat from "../../components/Chat";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={styles.home}>
            <NavBar />
            <div className={styles.content}>
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}
