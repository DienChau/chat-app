import { useState } from "react";
import styles from "./Test.module.scss";

export interface ITestProps {}

export default function Test(props: ITestProps) {
    const [widgets, setWidgets] = useState<string[]>([]);

    const handleOnDrag = (
        e: React.DragEvent<HTMLDivElement>,
        widgetType: string
    ) => {
        e.dataTransfer.setData("widgetType", widgetType);
    };

    function handleOnDrop(e: React.DragEvent<HTMLDivElement>) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        console.log("widgetType", widgetType);

        setWidgets([...widgets, widgetType]);
    }

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        console.log("drag over");
    }
    return (
        <div className={styles.container}>
            <div className={styles.widgets}>
                <div
                    className={styles.widget}
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Weiget A")}
                >
                    Widget A
                </div>
                <div
                    className={styles.widget}
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Weiget B")}
                >
                    Widget B
                </div>
                <div
                    className={styles.widget}
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Weiget C")}
                >
                    Widget C
                </div>
            </div>

            <div
                className={styles.page}
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                {widgets.map((widget, index) => (
                    <div className={styles.droppedWidget} key={index}>
                        {widget}
                    </div>
                ))}
            </div>
        </div>
    );
}
