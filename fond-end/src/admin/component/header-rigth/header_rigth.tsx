import styles from "./header_right.module.css"
export const Header_right = () => {
    return(
        <>
        <div className={styles["header_right"]}>
        <div className={styles["left-header"]}>
            <img src="https://cdn-icons-png.flaticon.com/128/151/151917.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/9327/9327236.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/839/839860.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" alt="" />
        </div>
        <div className={styles["left-header"]}>
            <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="" />
            <div className={styles["user-admin"]}>
                <div className={styles["userrrr"]}>
            <span>Hi</span>
            <b>jason@ui-lib.com</b>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
            </div>
        </div>
        </div>
        </>
    )
}