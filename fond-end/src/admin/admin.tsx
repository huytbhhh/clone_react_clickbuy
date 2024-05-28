import { AdminLeft } from "./component/AdminLeft"
import styles from "./admin.module.css"
import { Outlet } from "react-router-dom"
export const Admin = () => {
    return(
        <>
        <div className={styles["admin"]}>
            <AdminLeft/>
            <Outlet/>
        </div>
        </>
    )
}