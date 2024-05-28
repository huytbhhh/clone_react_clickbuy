import { useEffect, useState } from "react"
import styles from "./css_admin/list_product_admin.module.css"
import { Header_right } from "./header-rigth/header_rigth"
import axios from "axios"
import Scrollbars from "react-custom-scrollbars-2"

export const ListProduct_Admin = () => {

    const [product, setProduct] = useState<any[]>([])
    const [text, setText] = useState(false)
    const handle = () => {
        setText(!text)
    }
    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get<any[]>("http://localhost:5000/api/products")
            setProduct(response.data)
        }
        fetchApi()
    }, [])
    const handleRemote = async (productId: any) => {
        try {
            const fetchApi = await axios.delete(`http://localhost:5000/api/products/${productId}`)
            if (fetchApi.status === 200) {
                alert(`đã xóa thành công sản phẩm ${productId}`)
                window.location.reload()
                // reloadComponent() 
            }
        } catch (error) {
            alert("lỗi rồi không thể xóa ")
        }
    }


    // const reloadComponent = () => {
        
    // }
// console.log("checkload",checkload)




    return (
        <>

            <div className="admin-list">

                <Header_right />
                <div className={styles["listproduct"]}>
                    <h1>All Products</h1>
                    <div className={styles["board-product"]}>
                        <div className={styles["table"]}>
                            <div className={styles["checkbox"]}>
                                <input type="checkbox" name="" id="" />
                                <p>Name</p>
                            </div>
                            <span>Type</span>
                            <span>current</span>
                            <span>Price</span>
                            <span>Edit</span>
                        </div>
                    </div>


                    <div style={{ width: '100%', height: '730px' }}>
                        <Scrollbars style={{ width: '100%', height: '100%' }}>
                            {product.map((items) => {
                                return (
                                    <div className={styles["board-product"]}>
                                        <div className={styles["table2"]}>
                                            <div className={styles["checkbox"]}>
                                                <input type="checkbox" name="" id="" />
                                                <p>{items.name}</p>
                                            </div>
                                            <div className={styles["phone"]}>
                                                <span>{items.type}</span>
                                            </div>
                                            <div className={styles["current"]}>
                                                <span>{items.type} : {items.category}</span>
                                            </div>
                                            <div className={styles["price"]}>
                                                <span>{items.price}</span>
                                            </div>

                                            <div className={styles["edit"]}>
                                                <img onClick={() => handle()} src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="" />
                                                <img onClick={() => handleRemote(items._id)} src="https://cdn-icons-png.flaticon.com/128/216/216658.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



                        </Scrollbars>
                        {text ? 
                        <form action="" method="post">
                        <div className={styles["fromAdd"]}>
                            <div className={styles["header-form"]}>
                                <img src="https://cdn-icons-png.flaticon.com/128/5129/5129694.png" alt="" />
                                <h1>Form Update Product</h1>
                            </div>
                            <select className={styles["select-form"]} name="" id="">
                                <option value="">Chọn dung lượng capacity</option>
                                <option value="256GB">256GB</option>
                                <option value="128GB">128GB</option>
                                <option value="512GB">512GB</option>
                            </select>
                            <select className={styles["select-form"]} name="" id="">
                                <option value="">Chọn battery</option>
                                <option value="Pin Zin 9x">Pin Zin 9x</option>
                                <option value="Pin Zin 8x">Pin Zin 8x</option>
                            </select>
                            <select className={styles["select-form"]} name="" id="">
                                <option value="">Chọn Loại current</option>
                                <option value="phone">phone</option>
                                <option value="charger">Sạc</option>
                            </select>
                            <select className={styles["select-form"]} name="" id="">
                                <option value="">Chọn Loại Type</option>
                                <option value="iPhone">iPhone</option>
                                <option value="Samsung">Samsung</option>
                            </select>
                            <select className={styles["select-form"]} name="" id="">
                                <option value="">Chọn Loại category</option>
                                <option value="old">old</option>
                                <option value="new">new</option>
                            </select>
                            <input type="text" name="" id="" placeholder="img..." />
                            <input type="text" name="" id="" placeholder="name..." />
                            <input type="text" name="" id="" placeholder="price..." />
                            <input type="text" name="" id="" placeholder="color..." />
                            <button className="">Save</button>
                        </div>
                        </form>
                         : ""}

                    </div>

                </div>
            </div>
        </>
    )
}