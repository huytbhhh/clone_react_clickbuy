import styles from './styles.module.css';


export const Header = () => {
    return(
        <>
        <div className={styles['header']}>
        <img src="https://clickbuy.com.vn/uploads/images/logo/clickbuy-logo.png" alt="" />
        <input className={styles['header_input']} type="text" name="" id="" placeholder='Bạn cần tìm gì...'/>
    
        {/* className={styles['']} */}
        <div className={styles['header_vung']}>
        <select name="" id="" >
        <option value="">miền bắc </option>
        <option value="">miền nam</option>
        <option value="">miền trung </option>
        </select>
        </div>
        
        <div className={styles['phone_header']}>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAOgzHod_ylBWr1yoq6Uhg05WMT0l6luYMA&s" alt="" />
        
                <div className="phone_header_sdt">
                    <span>Gọi mua hàng</span> <br />
                    <span>0966.062.468</span>
                </div>
        </div>

        <div className={styles['header_chitiet']}>
            <img src="data:image/png;base64,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" alt="" />
            <span>Chi tiết <br /> giỏ hàng</span>
        </div>

        <div className={styles['header_baohanh']}>
            <img src="https://cf.shopee.vn/file/66cb2a72b835ca96d0af575258e121d6_tn" alt="" />
            <span>Chính sách <br /> Bảo Hành</span>
        </div>

        <div className={styles['header_hethong']}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwXfI0nykV9F79PWIuPOCbv87kPabsOiDY44Qy6IecA&s" alt="" />
            <span>Hệ thống <br /> Của hàng</span>
        </div>


        </div>
        </>
    )
}