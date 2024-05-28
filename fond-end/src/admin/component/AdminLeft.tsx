import { useState } from "react"
import styles from "../admin.module.css"
import { Link } from "react-router-dom";
export const AdminLeft = () => {
    const [text, setText] = useState<any>({
        product1: false,
        product2: false
    });
    const onText = (productName: any) => {
        setText({
            ...text,
            [productName]: !text[productName]
        })
    }
    console.log("text", text)
    return (
        <>
            <div className="container">

                <div className={styles["left-admin"]}>
                    <div className={styles["logo"]}>
                        <img src="https://cdn-icons-png.flaticon.com/128/4651/4651340.png" alt="" />
                        <span>Matx</span>
                    </div>

                    <div className={styles["dashboard"]}>
                        <div className={styles["component"]}>
                            <div className={styles["dashboard-div"]}>
                                <img src="https://cdn-icons-png.flaticon.com/128/15786/15786424.png" alt="" />
                                <span>Dashboard</span>
                            </div>
                            <div className={styles["dashboard-div"]}>
                                <img src="https://cdn-icons-png.flaticon.com/128/7718/7718841.png" alt="" />
                                <span>Dashboard</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["component"]}>
                        <div className={styles["dashboard"]}>
                            <a className={styles["pages"]}>Pages</a>
                            <div className={styles["dashboard-div"]} onClick={() => onText("product1")}>
                                <img src="https://cdn-icons-png.flaticon.com/128/4059/4059687.png" alt="" />
                                <span> Product</span>
                            </div>
                            {text.product1 && (
                                <div className={styles["dashboard-fake"]}>
                                    <Link to={"listproduct"}><span>Product List</span> <br /></Link>
                                    <Link to={"newproduct"}><span>New Product</span> <br /></Link>
                                </div>
                            )}
                        </div>
                        <div className={styles["dashboard"]}>
                            <div className={styles["dashboard-div"]} onClick={() => onText("product2")}>
                                <img src="https://cdn-icons-png.flaticon.com/128/4059/4059687.png" alt="" />
                                <span>DEMO</span>
                            </div>
                            {text.product2 && (
                                <div className={styles["dashboard-fake"]}>
                                    <span>Customers</span> <br />
                                    <span>View Customers</span> <br />
                                    <span>New Customers</span> <br />
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}