import { Avatar, Tooltip } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { LuMessageSquarePlus } from "react-icons/lu";
import styles from "./NavBar.module.scss";
// import { FiPhone } from "react-icons/fi";
import cx from "classnames";
import { CiCircleMore, CiPhone, CiVideoOn } from "react-icons/ci";

export default function NavBar() {
    return (
        <div className={styles.containerNavBar}>
            <div className={styles.leftSide}>
                <div className={styles.title}>Message</div>
                <LuMessageSquarePlus size={20} color="#7a3397" />
            </div>
            <div className={styles.rightSide}>
                <div className={styles.me}>
                    <Avatar
                        className={cx(styles.bgGradient, styles.avatar)}
                        // icon={<RxAvatar />}
                        src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        size="large"
                    />
                    <div className={styles.name}>
                        <span className={styles.username}>Martriks Studio</span>
                        <span className={styles.status}>
                            Dimas Eza Typing...
                        </span>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupAvatar}>
                        <Avatar.Group
                            maxCount={3}
                            maxStyle={{
                                color: "#ffff",
                                background:
                                    "linear-gradient(to right, #f0e4ff, #7412f1)",
                            }}
                        >
                            <Tooltip title="Dimas Eza" placement="top">
                                <Avatar
                                    icon={<FaUserCircle />}
                                    className={styles.bgGradient}
                                />
                            </Tooltip>
                            <Tooltip title="K" placement="top">
                                <Avatar
                                    className={styles.bgGradient}
                                    src="https://images.unsplash.com/photo-1498940757830-82f7813bf178?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                >
                                    K
                                </Avatar>
                            </Tooltip>

                            <Tooltip title="User" placement="top">
                                <Avatar
                                    src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className={styles.bgGradient}
                                />
                            </Tooltip>
                            <Tooltip title="User" placement="top">
                                <Avatar
                                    className={styles.bgGradient}
                                    icon={<FaUserCircle />}
                                />
                            </Tooltip>
                        </Avatar.Group>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.features}>
                        <div className={styles.phone}>
                            <CiPhone size={24} />
                        </div>
                        <div className={styles.camera}>
                            <CiVideoOn size={24} />
                        </div>
                        <div className={styles.more}>
                            <CiCircleMore size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
