import { Footer } from "../../component/Footer";
import { Header } from "../../component/Header";
import style from "./phone_page.module.scss";
import star1 from "../../assets/images/star1.png";
import star from "../../assets/images/star.png";
export const Phone_page = () => {
  return (
    <>
      <Header />
      <main className={style["main site-main"]}>
        <div className={style["container"]}>
          <h1>Điện thoại - Apple iPhone, Samsung, Xiaomi, Nokia, Tecno..</h1>
        </div>
        <div className={style["css-conten"]}>
          <p>
            Mua điện thoại tại click buy giá rẻ hơn bao giờ hết - săn khuyến mãi
            với những giờ vàng chạy chương trình quý khách sẽ được nhiều ưu đãi
            bất ngờ
          </p>
          <h2>
            Điện thoại chính hãng và thu cũ đổi mới của clickbuy bảo hành 2 năm{" "}
          </h2>
        </div>
        <section className={style["list-cate"]}>
          <div className={style["section-list_content"]}>
            <div className={style["section-list_item"]}>
              <a href="iphoen">iPhone</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="iphoen">Samsung</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="iphoen">Xiaomi</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="Nokia">Nokia</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="Nokia">Nokia</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="Oppo">Oppo</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="Inoi">Inoi</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="Oscal">Oscal</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="TCL">TCL</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="ZTE">ZTE</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="Tecno">Tecno</a>
            </div>
            <div className={style["section-list_item"]}>
              <a href="ZTE Nubia">ZTE Nubia</a>
            </div>
          </div>
        </section>
        <section className={style[""]}>
          <div className={style["list-title"]}>
            <p>Chọn tiêu chí</p>
          </div>
          <div className={style["list-filter"]}>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value=""> Bộ lọc</option>
              </select>
            </div>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value="">Giá</option>
              </select>
            </div>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value="">Bộ nhớ trong</option>
              </select>
            </div>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value="">Dung lượng</option>
              </select>
            </div>
          </div>
        </section>
        <section className={style[""]}>
          <div className={style["list-title"]}>
            <p>Chọn tiêu chí</p>
          </div>
          <div className={style["list-filter"]}>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value="">Giá Cao - Thấp</option>
              </select>
            </div>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value="">Giá Thấp - Cao</option>
              </select>
            </div>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value="">Xem nhiều</option>
              </select>
            </div>
            <div className={style["filter1"]}>
              <select name="" id="">
                <option value="">Dung lượng</option>
              </select>
            </div>
          </div>
        </section>
        <section className={style["section-product"]}>
          <div className={style["section-product_content"]}>
            <div className={style["list-product"]}>
              <div className={style["thumbnail"]}>
                <img
                  src="https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-pro-max-titan-1.png"
                  alt=""
                />
              </div>
              <div className={style["title"]}>
                <h3>iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước</h3>
              </div>
              <div className={style["pricesalepercent"]}>22%</div>
              <div className={style["price"]}>
                <span className={style["price1"]}>28.690.000 ₫</span>
                <span className={style["price2"]}>36.990.000 ₫</span>
              </div>
              <div className={style["extra_tick"]}>
                <div className={style["installment"]}>Trả góp 0%</div>
                <div className={style["freeship"]}>Miễn phí ship</div>
              </div>

              <div className={style["star"]}>
                <div>
                  <img src={star1} alt="" width={12} height={12} />
                </div>
                <div>
                  <img src={star1} alt="" width={12} height={12} />
                </div>
                <div>
                  <img src={star1} alt="" width={12} height={12} />
                </div>
                <div>
                  <img src={star} alt="" width={12} height={12} />
                </div>
                <div>
                  <img src={star} alt="" width={12} height={12} />
                </div>
                <div className={style["Evaluate"]}>
                  <span>(20 đánh giá)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
