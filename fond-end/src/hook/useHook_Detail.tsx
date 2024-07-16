import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useHook_Detail = () => {
    const [productDetail, setProductDetail] = useState<any>()
    const {id} = useParams()

    useEffect(()=>{
        const fetch = async() => {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`)
            setProductDetail(response.data)
        }
        fetch()
    },[])


    return {productDetail}
}