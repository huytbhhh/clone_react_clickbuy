import { useState } from "react"
import star from "../../assets/star.png"
import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import styles from "./iphone.module.css"
import axios from "axios"
export const Iphone = () => {
const [product ,setProduct] = useState<any[]>([]);
    const fetchApi = async () => {
        const response = await axios.get("http://localhost:5000/api/products")
        setProduct(response.data)
    }
    fetchApi()




    return (
        <>
            <Header />
            <div style={{paddingTop:"60px"}} className={styles["container"]}>
                <div className={styles["header"]}>
                    <h1>Điện thoại - Apple iPhone, Samsung, Xiaomi, Nokia, Tecno..</h1>
                    <span>Mua điện thoại tại click buy giá rẻ hơn bao giờ hết - săn khuyến mãi với những giờ vàng chạy chương trình quý khách sẽ được nhiều ưu đãi bất ngờ</span>
                    <b>Điện thoại chính hãng và thu cũ đổi mới của clickbuy bảo hành 2 năm</b>
                    <div className={styles['fillter-phone-category']}>
                        <span>iPhone</span>
                        <span>Samsung</span>
                        <span>Xiaomi</span>
                        <span>Tecno</span>
                        <span>Inoi</span>
                        <span>Nokia</span>
                        <span>Realme</span>
                        <span>Oppo</span>
                        <span>Vivo</span>
                    </div>

                    <h1>Chọn tiêu chí</h1>
                    <div className={styles["filllter"]}>
                        <div className={styles["fillter2"]}>
                            <img src="https://cdn-icons-png.flaticon.com/128/2676/2676818.png" alt="" />
                            <span>Bộ lọc</span>
                        </div>
                        <div className={styles["fillter2"]}>

                            <span>Giá </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10">
                                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                            </svg>
                        </div>
                        <div className={styles["fillter2"]}>
                            <span>Bộ nhớ trong </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10">
                                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                            </svg>
                        </div>
                        <div className={styles["fillter2"]}>
                            <span>Dung lượng </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10">
                                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                            </svg>
                        </div>

                    </div>
                    <h1>Sắp xếp theo</h1>
                    <div className={styles["filllter"]}>
                        <div className={styles["fillter2"]}>
                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M416 288h-95.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H416c17.67 0 32-14.33 32-32S433.7 288 416 288zM544 32h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 32 544 32zM352 416h-32c-17.67 0-32 14.33-32 32s14.33 32 32 32h32c17.67 0 31.1-14.33 31.1-32S369.7 416 352 416zM480 160h-159.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H480c17.67 0 32-14.33 32-32S497.7 160 480 160zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"></path>
                            </svg>
                            <span>Giá Cao - Thấp </span>
                        </div>
                        <div className={styles["fillter2"]}>
                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M416 288h-95.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H416c17.67 0 32-14.33 32-32S433.7 288 416 288zM544 32h-223.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H544c17.67 0 32-14.33 32-32S561.7 32 544 32zM352 416h-32c-17.67 0-32 14.33-32 32s14.33 32 32 32h32c17.67 0 31.1-14.33 31.1-32S369.7 416 352 416zM480 160h-159.1c-17.67 0-32 14.33-32 32s14.33 32 32 32H480c17.67 0 32-14.33 32-32S497.7 160 480 160zM192.4 330.7L160 366.1V64.03C160 46.33 145.7 32 128 32S96 46.33 96 64.03v302L63.6 330.7c-6.312-6.883-14.94-10.38-23.61-10.38c-7.719 0-15.47 2.781-21.61 8.414c-13.03 11.95-13.9 32.22-1.969 45.27l87.1 96.09c12.12 13.26 35.06 13.26 47.19 0l87.1-96.09c11.94-13.05 11.06-33.31-1.969-45.27C224.6 316.8 204.4 317.7 192.4 330.7z"></path>
                            </svg>
                            <span>Giá Thấp - Cao </span>
                        </div>
                    </div>
                </div>
                <div className={styles['product']}>
                    {product.filter(product => product.type === "iPhone" && product.current === "phone").slice(0, 6).map((items) => {
                        return (
                            <div className={styles['items_product']}
                                key={items.id}>
                                <a href="">
                                    <div className={styles["img-items_product"]}>
                                        <img src={items.img} alt="" />
                                    </div>
                                    <div className={styles['items-product-text']}>
                                        <p>{items.name}</p>
                                        <span className={styles['price-product']}>{items.price} đ</span>
                                        <div className={styles['start-comment']}>
                                            <div className={styles['start']}>
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                            </div>
                                            <div className={styles['comment']}>
                                                <span>(234 đánh giá)</span>
                                            </div>
                                        </div>

                                    </div>


                                </a>
                            </div>
                        )
                    })}

                </div>

            </div>
            <Footer />
        </>
    )
}