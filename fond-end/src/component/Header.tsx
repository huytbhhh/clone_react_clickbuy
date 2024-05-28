import { Link } from 'react-router-dom';
import styles from './styles.module.css';


export const Header = () => {
    return(
        <>
        <div className={styles['header']}>
            <Link to={"/"}>
        <img src="https://clickbuy.com.vn/uploads/images/logo/clickbuy-logo.png" alt="" />
        </Link>
        <input className={styles['header_input']} type="text" name="" id="" placeholder='Bạn cần tìm gì...'/>
    
        {/* className={styles['']} */}

        
        <div className={styles['phone_header']}>
            
            <img src="https://cdn-icons-png.flaticon.com/128/151/151768.png" alt="" />
        
                <div className="phone_header_sdt">
                    <span>Gọi mua hàng</span> <br />
                    <span>0966.062.468</span>
                </div>
        </div>

        <div className={styles['header_chitiet']}>
            <img src="https://cdn-icons-png.flaticon.com/128/3737/3737173.png" alt="" />
            <span>Chi tiết <br /> giỏ hàng</span>
        </div>

        <div className={styles['header_baohanh']}>
            <img src="https://cdn-icons-png.flaticon.com/128/3734/3734879.png" alt="" />
            <span>Chính sách <br /> Bảo Hành</span>
        </div>

        <div className={styles['header_hethong']}>
            <img src="https://cdn-icons-png.flaticon.com/128/4120/4120467.png" alt="" />
            <span>Hệ thống <br /> Của hàng</span>
        </div>
        <div style={{alignItems:"center"}} className={styles['header_hethong']}>
            <span style={{fontSize:"15px"}}>Trần Bá Huy</span>
            <img style={{width:"45px",height:"45px"}} src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />

        </div>


        </div>
        </>
    )
}