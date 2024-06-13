import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

export const Timer = () => {
    const [hits, setHits] = useState<any>([]);
    const [query, setQuery] = useState("chatgpt");
    const [loading, setLoading] = useState(true)
    const [messerror,setMesserror] = useState("")



    const handleData = useRef<any>([]);
    handleData.current = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
        setHits(response.data?.hits || [])
        setLoading(false)

      } catch (error) {
        setLoading(false)
        setMesserror(`lỗi rồi ${error}`)
        
      }
    }

    React.useEffect(() => {

        handleData.current()
    }, [query])
    console.log(hits)
    const search = lodash.debounce((e:any) => {
        setQuery(e.target.value)

    },500)



    return (
        <>
            <label style={{padding:"20px 20px",background:'#7FFFD4'}} htmlFor="">Tìm kiếm :</label>
            <input style={{padding:"20px 40px",background:'#F5F5DC'}} type="text" id="" onChange={search} defaultValue={query} />

            {loading && <h1 style={{background:"red",textAlign:'center'}}>"Loading........"</h1>}
           
            {!loading && messerror && <p>{messerror}</p> }

            {!loading &&
                <div style={{boxShadow:"rgba(60, 64, 67, 0.1) 3px -3px 54px 34px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",width:"70%",margin:"auto",padding:"20px",borderRadius:"20px",marginTop:"20px"}}>
                 {hits.length > 0 && hits.map((items: any, index: any) => <h1 style={{fontSize:"14px",textAlign:"center"}} key={items.title}>{items.title}</h1>) }
                 </div>
                

            }

        </>
    );
};
