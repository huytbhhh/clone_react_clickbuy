import { syncIndexes } from "mongoose";
import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import styles from './info.module.css';


export const Info_user = () => {
    return (
        <>
            <Header />
            <div className={styles["container"]}>
                <div className={styles["left-user"]}>
                    <div style={{ }} className={styles['header_hethong']}>
                        <img style={{ width: "45px", height: "45px" }} src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
                        <span style={{ fontSize: "15px", color: "black" }}>Trần Bá Huy</span>

                    </div>
                    <div style={{display:'flex',gap:"15px",lineHeight:"30px",justifyContent:"center",marginTop:"20px"}}>
                    <div className={styles['header_hethong1']}>
                        <img style={{ width: "20px", height: "20px" }}  src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="" />
                        </div>
                        <div className={styles["banner-left"]}>
                        <span style={{ fontSize: "15px", color: "black" }}>Tài khoản của tôi</span>
                        <span style={{ fontSize: "15px", color: "black" }}>Hồ sơ</span>
                        <span style={{ fontSize: "15px", color: "black" }}>Địa chỉ</span>
                        <span style={{ fontSize: "15px", color: "black" }}>Đổi mật khẩu</span>
                        <span style={{ fontSize: "15px", color: "black" }}>Đơn hàng đã mua</span>
                        </div>
                        </div>



                    
                </div>


            </div>
            <Footer />

        </>
    )
}