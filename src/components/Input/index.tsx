import styles from "./Input.module.scss";
import { FaRegSmile } from "react-icons/fa";
import { IoAttach } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
export interface IInputProps {}

export default function Input(props: IInputProps) {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.wrapper}>
                <FaRegSmile size={24} color="#7a3397" />
                <IoAttach size={24} color="#7a3397" />
                <input
                    type="text"
                    placeholder="Type your message"
                    className={styles.input}
                />
                <IoMdSend size={24} color="#7a3397" />
            </div>
        </div>
    );
}
