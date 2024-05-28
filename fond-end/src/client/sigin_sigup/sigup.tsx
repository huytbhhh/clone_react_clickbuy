import styles from "./sigup.module.css"
import imgg from "../../assets/login/pexels-souvenirpixels-417074.jpg"
export const Sigup = () => {
    return (
        <>
            <div className={styles["container"]}>
                <img className={styles["imgbanner"]} src={imgg} alt="" />

                <div className={styles["form-sigin"]}>
                    

                    <div className={styles["form2"]}>
                        <h1 style={{color:"#FFFFFF"}}>Hello friends</h1>
                        <p style={{color: "#d2d7e2"}}>Try every day: each day with new knowledge you won't have to worry about what to eat tonight</p>
                        <button>Register <img style={{width:"10px",marginLeft:"10px"}} src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" /></button>
                    </div>
                    <form action="">
                        <div className={styles["demo"]}>
                            <h1>Sigup here</h1>
                            
                            <input style={{width:"288px",height:"46px", border:"1px solid #FFFFFF",borderBottom:"1px solid rgb(132, 146, 146)"}} type="text" name="" id="" placeholder="Name" />
                            <input style={{width:"288px",height:"46px", border:"1px solid #FFFFFF",borderBottom:"1px solid rgb(132, 146, 146)"}} type="text" name="" id="" placeholder="Email" />
                            <input style={{width:"288px",height:"46px", border:"1px solid #FFFFFF",borderBottom:"1px solid rgb(132, 146, 146)"}} type="text" name="" id="" placeholder="PassWord" />
                            <input style={{width:"288px",height:"46px", border:"1px solid #FFFFFF",borderBottom:"1px solid rgb(132, 146, 146)"}} type="text" name="" id="" placeholder="ConFirmPassWord" />
                           
                            <div className={styles["for-password"]}>
                            <div className={styles["checkbox"]}>
                                <input type="checkbox" name="" id="" />
                                <label style={{paddingLeft:"5px"}} htmlFor="">Quên mật khẩu</label>
                            </div>
                            <span>Forgot password</span>
                            </div>

                            <button>Đăng Nhập</button>
                            <div className={styles["img-icon"]}>
                                <div className={styles["img-icon-real"]}>
                            <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt=""  style={{width:"25px"}}/>
                            </div>
                            <div className={styles["img-icon-real"]}>
                            <img src="https://cdn-icons-png.flaticon.com/128/3046/3046126.png" alt=""  style={{width:"25px"}}/>
                            </div>
                            <div className={styles["img-icon-real"]}>
                            <img src="https://cdn-icons-png.flaticon.com/128/14776/14776639.png" alt=""  style={{width:"25px"}}/>
                            </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}