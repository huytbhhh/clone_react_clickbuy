import { ChangeEvent, FormEvent, useState } from "react"
import styles from "./css_admin/list_product_admin.module.css"
import axios from "axios";
export const NewProduct: React.FC = () => {
    const [product, setProduct] = useState<any>({
        capacity:'',
        current: '',
        name: '',
        Type: '',
        price: '',
        img: '',
        category: '',
        color: '',
        battery:'',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/products", product);
            console.log("response.data", response.data);
        } catch (error) {
            console.error("sai", error);
        }
    }
    console.log("product",product)
    return (
        <>
            <form onSubmit={handleSubmit} action="" method="post">
                <div className={styles["fromAdd"]}>
                    <div className={styles["header-form"]}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5129/5129694.png" alt="" />
                        <h1>Form Update Product</h1>
                    </div>

                    <select
                    name="capacity"
                    value={product.capacity}
                    onChange={handleChange}
                    className={styles["select-form"]} id="">
                        <option value="">Chọn capacity</option>
                        <option value="512GB">512GB</option>
                        <option value="128GB">128GB</option>
                    </select>

                    <select
                    name="battery"
                    value={product.battery}
                    onChange={handleChange}
                    className={styles["select-form"]} id="">
                        <option value="">Chọn battery</option>
                        <option value="Pin Zin 9x">Pin Zin 9x</option>
                        <option value="Pin Zin 8x">Pin Zin 8x</option>
                    </select>

                    <select
                    name="current"
                    value={product.current}
                    onChange={handleChange}
                    className={styles["select-form"]}  id="">
                        <option value="">Chọn Loại current</option>
                        <option value="phone">phone</option>
                        <option value="laptop">Laptop</option>
                        <option value="dongho">Đồng hồ</option>
                        <option value="phukien">Phụ Kiện</option>
                        <option value="amthanh">Âm Thanh</option>
                        <option value="suachua">Sửa Chữa</option>
                        <option value="charger">Sạc</option>
                    </select>

                    <select
                    name="type"
                    value={product.type}
                    onChange={handleChange}
                    className={styles["select-form"]}  id="">
                        <option value="">Chọn Loại Type</option>
                        <option value="iPhone">iPhone</option>
                        <option value="Samsung">Samsung</option>
                        <option value="MacBook">MacBook</option>
                        <option value="Acer">Acer</option>
                        <option value="Apple">Apple</option>
                        <option value="tainghe">Tai Nghe</option>
                        <option value="loa">Loa</option>
                    </select>

                    <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className={styles["select-form"]}  id="">
                        <option value="">Chọn Loại category</option>
                        <option value="old">old</option>
                        <option value="new">new</option>
                    </select>
                    <select
                    name="color"
                    value={product.color}
                    onChange={handleChange}
                    className={styles["select-form"]}  id="">
                        <option value="">Chọn Màu color</option>
                        <option value="Black">Black</option>
                        <option value="Blue">blue</option>
                        <option value="Silver">Silver</option>
                        <option value="Blue">blue</option>

                    </select>
                    
                    <input type="text" name="img" value={product.img} onChange={handleChange} id="" placeholder="img..." />
                    <input type="text" name="name" value={product.name} onChange={handleChange} id="" placeholder="name..." />
                    <input type="text" name="price" value={product.price} onChange={handleChange} id="" placeholder="price..." />
                    <button type="submit" className="">Save</button>
                </div>
            </form>

        </>
    )
}