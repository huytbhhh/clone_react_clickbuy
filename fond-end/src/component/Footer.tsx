
import styles from '../component/styles.module.css';
export const Footer = () => {
    return(
        <>
        <div className={styles['footer']} >
            <div className={styles['row1_footer']}>
                <b>Chính sách bán hàng</b> <br />
                <a href="">Chính sách bảo hành</a><br />
                <a href="">Chính sách mua hàng Online</a><br />
                <a href="">Chính sách bảo mật thông tin khách hàng</a>
            </div>



            

            <div className="footer-top__store">

        <div className=" h4 footer-top__title">
            <b>Tổng đài hỗ trợ </b>
            <span >(Từ 8:00-21:00)</span>
        </div>
        
        <p className={styles['footer-top__text']}>
            <span>Hotline bán hàng:</span>
            <a aria-label="Hotline bán hàng:" title="Hotline bán hàng:" href="tel:0966.06.2468">
                <br />
                <b className={styles['phone-number']}>0966.06.2468</b><b> </b>
            </a>
        </p>
        
        <p className={styles['footer-top__text']}>
            <span>Hotline bảo hành, kỹ thuật:</span>
            <a aria-label="Hotline bảo hành, kỹ thuật:" title="Hotline bảo hành, kỹ thuật:" href="tel:0246.683.9292">
            <br />
                <b className={styles['phone-number']}>0246.683.9292</b><b> </b>
            </a>
        </p>
        
        <p className={styles['footer-top__text']}>
            <span>Hotline hỗ trợ phần mềm:</span>
            <a aria-label="Hotline hỗ trợ phần mềm:" title="Hotline hỗ trợ phần mềm:" href="tel:0962.824.422">
            <br />
                <b className={styles['phone-number']}>0962.824.422</b><b> </b>
            </a>
        </p>
        
        <p className={styles['footer-top__text']}>
            <span>Hotline phản ánh chất lượng dịch vụ:</span>
            <a aria-label="Hotline phản ánh chất lượng dịch vụ:" title="Hotline phản ánh chất lượng dịch vụ:" href="tel:1900.633.471">
            <br />
                <b className={styles['phone-number']}>1900.633.471</b><b> </b>
            </a>
        </p>
        
    </div>

    <div className={styles["footer-top__item"]}>
        
        <ul id="region-menu" className={styles['region-menu']}>
            
            <li data-tab="#location-1" className="active">Khu vực:
              
                <strong>Miền Bắc</strong>
            </li>
            
            <li data-tab="#location-2" className="">Khu vực:
            
                <strong>Nghệ An - Đà Nẵng</strong>
            </li>
            
            <li data-tab="#location-3" className="">Khu vực:
         
                <strong>Miền Nam</strong>
            </li>
            
        </ul>
        <div id="tab-content">
            <div className="area_selection">
                
                <ul id="location-1" className="tab-pane active">
                    
                    <li className="store-list__item" data-fancybox="showmap_footer" data-type="iframe" data-src="/ajaxs/showmap.aspx?id=7" data-preload="false" data-width="800" data-height="600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                        </svg>
                        <span className="store-list__name">367 Cầu Giấy, Hà Nội:</span>: <a href="tel:0911542468" title="Hotline" aria-label="Hotline">
                            <b className={styles['phone-number']}>0911542468 </b>
                        </a>- <strong>Bản đồ đường đi</strong>
                    </li>
                    
                    <li className="store-list__item" data-fancybox="showmap_footer" data-type="iframe" data-src="/ajaxs/showmap.aspx?id=8" data-preload="false" data-width="800" data-height="600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                        </svg>
                        <span className="store-list__name">111 Trần Đăng Ninh, Cầu Giấy, Hà Nội:</span>: <a href="tel:0976732468" title="Hotline" aria-label="Hotline">
                            <b className={styles['phone-number']}>0976732468 </b>
                        </a>- <strong>Bản đồ đường đi</strong>
                    </li>
                    
                    <li className="store-list__item" data-fancybox="showmap_footer" data-type="iframe" data-src="/ajaxs/showmap.aspx?id=10" data-preload="false" data-width="800" data-height="600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                        </svg>
                        <span className="store-list__name">118 Thái hà, Đống Đa, Hà Nội:</span>: <a href="tel:0964242468" title="Hotline" aria-label="Hotline">
                            <b className={styles['phone-number']}>0964242468 </b>
                        </a>- <strong>Bản đồ đường đi</strong>
                    </li>
                    
                    <li className="store-list__item" data-fancybox="showmap_footer" data-type="iframe" data-src="/ajaxs/showmap.aspx?id=9" data-preload="false" data-width="800" data-height="600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                        </svg>
                        <span className="store-list__name">446 Xã Đàn, Đống Đa, Hà Nội:</span>: <a href="tel:0961112468" title="Hotline" aria-label="Hotline">
                            <b className={styles['phone-number']}>0961112468 </b>
                        </a>- <strong>Bản đồ đường đi</strong>
                    </li>
                    
                    <li className="store-list__item" data-fancybox="showmap_footer" data-type="iframe" data-src="/ajaxs/showmap.aspx?id=12" data-preload="false" data-width="800" data-height="600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                        </svg>
                        <span className="store-list__name">312 Nguyễn Trãi, P.Trung Văn, Q.Nam Từ Liêm, Hà Nội (gần Đại Học Hà Nội)</span>: <a href="tel:0946982468" title="Hotline" aria-label="Hotline">
                            <b className={styles['phone-number']}>0946982468 </b>
                        </a>- <strong>Bản đồ đường đi</strong>
                    </li>
                    
                    
                    
                </ul>
                
            </div>
        </div>
        
    </div>
        </div>
        </>
    )
}