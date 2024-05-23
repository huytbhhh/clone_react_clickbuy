import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import styles from './styles.module.css';
import start from './../assets/star.png';


export const Homepage = () => {
    return (
        <>
            <Header />

            <div className={styles['backgroup']}></div>
            <div className={styles['banner']}>

                <div className={styles['banner-homepage']}>
                    {/* <div className={styles['']}></div> */}

                    <div className={styles['menu-category-list']}>
                        <ul>
                            <li className={styles['menu-category-list-li']}>
                                <a href="http://localhost:5173/homepage"><img src="https://clickbuy.com.vn/uploads/images/2023/09/1-small.png" alt="" /> Điện thoại</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/1-small.png" alt="" />iphone</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/2.png" alt="" />Samsung</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/3.png" alt="" />Tablet</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/5.png" alt="" />Laptop</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/6.png" alt="" />Đồng hồ</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/7.png" alt="" />Hàng cũ</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/8.png" alt="" />Thu cũ</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/files/sac_pin-removebg-preview1.png" alt="" /> Phụ kiện</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/icon/am-thanh.png" alt="" />Âm thanh</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/icon/icon-sua-chua.png" alt="" />Sửa chữa</a>
                                <a href=""><img src="https://clickbuy.com.vn/uploads/images/2023/09/12.png" alt="" />Tin công nghệ</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles['slide']}>
                        <img className={styles['slide-img']} src="https://clickbuy.com.vn/uploads/media/631-lkyUC.jpg?v=2" alt="" />
                        <div className={styles['slide-text']}>
                            <span>SIÊU DEAL HỘI <br /> TỤ - REALME <br /> - OPPO</span>
                            <span>SIÊU DEAL HỘI <br /> TỤ - REALME <br /> - OPPO</span>
                            <span>SIÊU DEAL HỘI <br /> TỤ - REALME <br /> - OPPO</span>
                            <span>SIÊU DEAL HỘI <br /> TỤ - REALME <br /> - OPPO</span>
                        </div>
                        <img className={styles['slide-img2']} src="https://clickbuy.com.vn/uploads/media/623-XIStu.jpg" alt="" />
                    </div>

                    <div className={styles['top-rigth_banner']}>
                        <div></div>
                        <span className={styles['top-rigth_banner-text']}>Tin khuyễn mãi </span>
                        <img src="https://clickbuy.com.vn/uploads/media/627-YyqHD.png" alt="" />
                        <img src="https://clickbuy.com.vn/uploads/media/610-Xfllb.png" alt="" />
                        <img src="https://clickbuy.com.vn/uploads/media/630-StFSf.png" alt="" />

                    </div>



                </div>


                <div className={styles['list-product-homepage']}>
                    <div className={styles['fillter-phone']}>
                        <h1>ĐIỆN THOẠI</h1>
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
                    </div>
                </div>

                <div className={styles['product']}>
                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>
                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>


                </div>
                {/* bên trên là ĐIỆN THOẠI */}


                <div className={styles['list-product-homepage']}>
                    <div className={styles['fillter-phone']}>
                        <h1>HÀNG CŨ</h1>
                        <div className={styles['fillter-phone-category']}>
                            <span>iPhone cũ</span>
                            <span>iPad cũ</span>
                            <span>Samsung cũ</span>
                            <span>Sony</span>
                        </div>
                    </div>
                </div>

                <div className={styles['product']}>
                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>





                </div>
                {/* Trên là HÀNG CŨ */}


                <div className={styles['list-product-homepage']}>
                    <div className={styles['fillter-phone']}>
                        <h1>IPHONE</h1>
                        <div className={styles['fillter-phone-category']}>
                            <span>iPhone 15 Series</span>
                            <span>iPhone 14 Series</span>
                            <span>iPhone 13 Series</span>
                            <span>iPhone 12 Series</span>
                            <span>iPhone 11 Series</span>
                        </div>
                    </div>
                </div>

                <div className={styles['product']}>
                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>





                </div>
                {/* Trên làm SAMSUNG */}

                <div className={styles['list-product-homepage']}>
                    <div className={styles['fillter-phone']}>
                        <h1>SAMSUNG</h1>
                        <div className={styles['fillter-phone-category']}>
                            <span>SS Galaxy Mới</span>
                            <span>Galaxy Z</span>
                            <span>Galaxy S</span>
                            <span>Galaxy A</span>
                            <span>Galaxy M</span>
                        </div>
                    </div>
                </div>

                <div className={styles['product']}>
                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>

                    <div className={styles['items_product']}>
                        <a href="">
                            <div className={styles["img-items_product"]}>
                                <img src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />
                            </div>
                            <div className={styles['items-product-text']}>
                                <p>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</p>
                                <span className={styles['price-product']}>28.690.000 ₫</span>
                                <div className={styles['start-comment']}>
                                    <div className={styles['start']}>
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                        <img src={start} alt="" />
                                    </div>
                                    <div className={styles['comment']}>
                                        <span>(234 đánh giá)</span>
                                    </div>
                                </div>

                            </div>


                        </a>
                    </div>





                </div>











            </div>




  
            <Footer />
        </>
    )
}