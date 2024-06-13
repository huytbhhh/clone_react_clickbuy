import { syncIndexes } from "mongoose"
import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import styles from "./cart.module.css"

export const Cart = () => {
    return (
        <>
            <Header />
            <div className={styles["container"]}>
                <div className={styles["logo"]}>
                    <h1 style={{ color: "#FFFF00" }}>Giỏ Hàng ClickBy</h1>
                    <img src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="" />
                </div>

                <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .19)", margin: '20px' }}>
                </div>

                <div className={styles["banner"]}>
                    <div className={styles["banner-cart"]}>
                        <p>Sản Phẩm</p>
                        <span>Màu</span>
                        <span>Phân Loại</span>
                        <span>Số Tiền</span>
                        <span>Số Lượng</span>
                        <span>Thao Tác</span>
                    </div>

                    <div className={styles["banner-cart"]}>
                        <div className={styles["products"]}>
                            <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            <span>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</span>
                        </div>
                        <span>Màu Đỏ</span>
                        <span>Phone</span>
                        <span style={{ color: 'red' }}>999.999.999 đ</span>
                        <div className={styles["quantity"]}>
                            <button className={styles["couter"]}>
                                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" ><polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon></svg>
                            </button>
                            <span>1</span>
                            <button className={styles["couter"]}>
                                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" ><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg>
                            </button>
                        </div>
                        <button className={styles["deletebt"]}>Xóa</button>
                    </div>


                    <div className={styles["by"]}>
                        <span>Số Lượng Sản Phẩm: 13</span>
                        <div className={styles["by-bt"]}>
                            <span>Tổng Thanh Toán: <b style={{color:"red"}}>11.000.000 đ</b></span>
                            <button>Thanh Toán</button>
                        </div>
                    </div>

                    <div>

                    </div>


                </div>

            </div>
            <Footer />
        </>
    )
}