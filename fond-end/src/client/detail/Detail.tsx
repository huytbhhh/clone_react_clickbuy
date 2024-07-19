import { Footer } from "../../component/Footer"
import { Header } from "../../component/Header"
import { useHook_Detail } from "../../hook/useHook_Detail"
import styles from "./detail.module.css"
export const Detail = () => {
        const {productDetail} = useHook_Detail()
        console.log("productDetail",productDetail)



    return (
        <>
            <Header />
            <div style={{ paddingTop: "90px" }} className={styles["container"]}>
                <h1 style={{ fontSize: "23px" }}>{productDetail?.name}</h1>
                <div className={styles["detail-top"]}>
                    <div className={styles["detail-top-left"]}>
                        <div className={styles["img-banner"]}>
                            <img src={productDetail?.img} alt="" />
                        </div>
                        <div className={styles["four-img"]}>
                            <img style={{ width: "63px", height: "63px", padding: "10px" }} src="https://cdn-icons-png.flaticon.com/128/3460/3460797.png" alt="" />
                            <img style={{ width: "63px", height: "63px" }} src={productDetail?.img} alt="" />
                            <img style={{ width: "63px", height: "63px" }} src={productDetail?.img} alt="" />
                            <img style={{ width: "63px", height: "63px" }} src={productDetail?.img}  alt="" />
                        </div>
                        <img style={{ borderRadius: "10px", width: "468px" }} src="https://clickbuy.com.vn/uploads/media/623-lFyBB.png" alt="" />
                        <div className={styles["infor"]}>
                            <span style={{ fontSize: "15px" }}>Thông tin sản phẩm</span>
                            <p>{productDetail?.infor}</p>
                        </div>
                    </div>
                    <div className={styles["detail-top-between"]}>
                        <div className={styles["price"]}>
                            <div className={styles["price-1"]}>
                                <b><s style={{ fontSize: "12px" }}>36,990,000đ</s></b>
                                <span style={{ color: "#d00", fontSize: "26px", fontWeight: "700" }}>{productDetail?.price} </span>
                            </div>
                            <span style={{ padding: "5px 10px", background: "#f8b500", fontSize: "12px", borderRadius: "5px" }}>Trả góp 0%</span>
                            <span style={{ fontSize: "13px" }}>Trả góp chỉ từ <b>0đ</b></span>
                        </div>
                        <div className={styles["version"]} >
                            <b>Phiên bản khác</b>
                            <div className={styles["version-color"]}>
                                <a className={styles["select-version"]} href="">
                                    <b>{productDetail?.capacity}</b>
                                    <span>28.500.000 đ</span>
                                </a>

                            </div>
                        </div>
                        <div className={styles["version"]}>
                            <b>Màu Sắc :</b>
                            <div className={styles["version-color-no"]}>
                                <a className={styles["select-version-no"]} href="">
                                    <img style={{ width: "30px", height: "30px" }} src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png" alt="" />

                                    <div style={{ display: "flex", flexDirection: "column" }} className={styles["info-color"]}>
                                        <b>{productDetail?.color} </b>
                                        <span>28.500.000 đ</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className={styles["guarantee"]}>
                            <b>Bảo hành</b>
                            <div className={styles["okok"]} style={{ gap: "15px", display: "flex", marginTop: "5px" }}>
                                <b style={{ border: "1px solid #d0d0d0 ", fontSize: "12px", padding: "6px 3px", borderRadius: "8px" }}>Gia hạn 24 tháng</b>
                                <b style={{ border: "1px solid #d0d0d0 ", fontSize: "12px", padding: "6px 3px", borderRadius: "8px" }}>BH chính hãng</b>
                            </div>

                        </div>

                        <div className={styles["vocher"]}>
                            <div className={styles["vocher-header"]}>
                                <img style={{ width: "30px", height: "30px" }} src="https://cdn-icons-png.flaticon.com/128/2883/2883410.png" alt="" />
                                <h3> Khuyễn mãi</h3>
                            </div>
                            <div className={styles["text-vocher"]}>
                                <div className={styles["text-vocher-no"]}>
                                    <span>1</span>
                                    <p> Trả góp 0% lãi - 0 phụ phí - Trả trước 0 đồng kỳ hạn 3-6 tháng (chi tiết)</p>
                                </div>
                                <div className={styles["text-vocher-no"]}>
                                    <span>2</span>
                                    <p>Tặng gói bảo hành Rơi vỡ - Vào nước</p>
                                </div>
                                <div className={styles["text-vocher-no"]}>
                                    <span>3</span>
                                    <p> Hỗ trợ chuyển đổi Esim miễn phí ngay tại sho</p>
                                </div>
                                <div className={styles["text-vocher-no"]}>
                                    <span>4</span>
                                    <p>Thu cũ - Đổi mới trợ giá lên đến <b style={{ color: "red" }}> 1.000.000đ</b></p>
                                </div>
                            </div>
                        </div>

                        <div className={styles["form-button"]}>
                            <div className={styles["muangay"]}>
                                <b>Mua Ngay</b>
                                <p>(Nhận Tại Của Hàng Hặc Giao Tận Nhà)</p>
                            </div>
                            <div className={styles["muangay-no"]}>
                                <div style={{ background: "#007eaf", width: "185px" }} className={styles["muangay"]} >
                                    <b style={{ fontSize: "13px" }}>Trả Góp Cty Tài Chính</b>
                                    <p>(Xét Duyệt Online)</p>
                                </div>
                                <div className={styles["muangay"]} style={{ background: "#007eaf", width: "185px" }}>
                                    <b style={{ fontSize: "13px" }}>Trả Góp Cty Tài Chính</b>
                                    <p>(Xét Duyệt Online)</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className={styles["detail-top-right"]}>
                        <div style={{ lineHeight: "20px" }} className={styles["detail-top-right-banner"]}>
                            <b>Chính Sách Bảo Hành</b>
                            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                                <img style={{ width: "15px", height: "15px", background: "#007eaf", borderRadius: "35px", marginTop: "3px" }} src="https://cdn-icons-png.flaticon.com/128/1442/1442912.png" alt="" />
                                <p style={{ fontSize: "12.5px" }}><b style={{ color: "#006600" }}>Bảo Hành Chính Hãng 12 Tháng</b><b style={{ color: "#FF0000" }}>( Miễn phí ):</b>Bảo hành sửa chữa thay thế linh kiện tại các trung tâm bảo hành ủy quyền của Apple. Bao test đổi sản phẩm lỗi 30 ngày.</p>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                                <img style={{ width: "15px", height: "15px", background: "#007eaf", borderRadius: "35px", marginTop: "3px" }} src="https://cdn-icons-png.flaticon.com/128/1442/1442912.png" alt="" />
                                <p style={{ fontSize: "12.5px" }}><b style={{ color: "#006600" }}>Gia hạn bảo hành 24 tháng</b><b style={{ color: "#FF0000" }}>(+ 1.100.000đ):</b>Năm đầu bảo hành chính hãng, năm 2 bảo hành 1 đổi 1 máy tương đương. Bảo hành rơi vỡ, vào nước 24 tháng.</p>
                            </div>
                        </div>
                        <div style={{ lineHeight: "20px" }} className={styles["google-map"]}>
                            <b>Địa chỉ cửa hàng</b>
                            <select name="" id="">
                                <option value="">Miền Bắc</option>
                                <option value="">Nghệ An - Đà Nẵng</option>
                                <option value="">Miền Nam</option>
                            </select>
                            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                                <img style={{ width: "15px", height: "15px", marginTop: "3px" }} src="https://cdn-icons-png.flaticon.com/128/149/149060.png" alt="" />
                                <p style={{ fontSize: "12.5px" }}>111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: <span style={{ color: "red" }}>0976732468</span> - <b>Bản đồ đường đi</b> </p>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                                <img style={{ width: "15px", height: "15px", marginTop: "3px" }} src="https://cdn-icons-png.flaticon.com/128/149/149060.png" alt="" />
                                <p style={{ fontSize: "12.5px" }}>111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: <span style={{ color: "red" }}>0976732468</span> - <b>Bản đồ đường đi</b> </p>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                                <img style={{ width: "15px", height: "15px", marginTop: "3px" }} src="https://cdn-icons-png.flaticon.com/128/149/149060.png" alt="" />
                                <p style={{ fontSize: "12.5px" }}>111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: <span style={{ color: "red" }}>0976732468</span> - <b>Bản đồ đường đi</b> </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles["parameter"]}>
                    <div style={{ color: "#212529" }} className={styles["parameter-left"]}>
                        <h1 style={{ fontSize: "20px", padding: "10px 0px" }}>iPhone 15 Pro - Thiết kế nhỏ gọn cùng hiệu năng mạnh mẽ</h1>
                        <p style={{ fontWeight: "400", fontSize: "15px", padding: "10px 0px" }}> <a href="" style={{ color: "#278aec" }}>iPhone 15 Pro</a> là bước tiến mới trong thế hệ smartphone của Apple, sở hữu nhiều cải tiến đáng kể so với các phiên bản trước. Được trang bị camera tiên tiến, hiệu suất mạnh mẽ từ chip A17 Pro cùng tính năng bảo mật cao cấp và hệ điều hành iOS 17 tối ưu. Hơn nữa, sản phẩm này được thiết kế đẹp mắt và sang trọng. Đây không chỉ là một chiếc điện thoại thông minh mà còn là biểu tượng của sự tiên tiến và đẳng cấp.</p>
                        <img style={{ width: "750px", borderRadius: "12px" }} src={productDetail?.img} alt="" />
                    </div>


                    <div className={styles["parameter-rigth"]}>
                        <h1 style={{ fontSize: "16px" }}>Thông số kỹ thuật iPhone 15 Pro 128GB VN/A - Tặng BH rơi vỡ vào nước</h1>
                        <img style={{ width: "347px" }} src={productDetail?.img} alt="" />
                        <div className={styles["parameter-rigth-infor"]}>
                            <tr>
                                <th style={{padding:"12px 10px"}}>Hệ điều hành</th>
                                <td style={{padding:"12px 18px"}}>iOS 17</td>
                            </tr>
                            <tr>
                                <th style={{padding:"12px 10px"}}>Bộ nhớ trong</th>
                                <td style={{padding:"12px 18px"}}>128GB</td>
                            </tr>
                            <tr>
                                <th style={{padding:"12px 10px"}}>RAM</th>
                                <td style={{padding:"12px 18px"}}>8 GB</td>
                            </tr>
                            <tr>
                                <th style={{padding:"12px 10px"}}>Camera chính</th>
                                <td style={{padding:"12px 18px"}}>48MP, 24 mm, ƒ/1.78, Camera góc siêu rộng: 12 MP, 13 mm, ƒ/2.2 Camera Tele 3x: 12 MP, 77 mm, ƒ/2.8 Camera Tele 2x: 12 MP, 48 mm, ƒ/1.78</td>
                            </tr>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}