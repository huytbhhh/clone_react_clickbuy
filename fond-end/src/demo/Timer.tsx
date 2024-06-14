import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";

export const Timer = () => {
  const [hits, setHits] = useState<any>([]);
  const [query, setQuery] = useState("chatgpt");
  const [loading, setLoading] = useState(true)
  const [messerror, setMesserror] = useState("")
  const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=${query}`)
  



  const handleData = useRef<any>([]);
  handleData.current = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url)
      setHits(response.data?.hits || [])
      setLoading(false)

    } catch (error) {
      setLoading(false)
      setMesserror(`lỗi rồi ${error}`)

    }
  }
  console.log(query)



  React.useEffect(() => {

    handleData.current()
  }, [url])
  console.log(hits)
  // const search = lodash.debounce((e:any) => {
  //     setQuery(e.target.value)

  // },500)



  return (
    <>
      <div style={{ display: 'flex' }}>
        <label style={{ padding: "20px 20px", background: '#7FFFD4' }} htmlFor="">Tìm kiếm :</label>
        <input style={{ padding: "20px 40px", background: '#F5F5DC' }} type="text" id="" onChange={(e: any) => { setQuery(e.target.value) }} defaultValue={query} />
        <button style={{ padding: "20px 20px", background: '#7FFFD4' }} onClick={() => { setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`) }}>Tìm Kiếm </button>
      </div>
      {loading && <h1 style={{ background: "red", textAlign: 'center' }}>"Loading........"</h1>}

      {!loading && messerror && <p>{messerror}</p>}

      {!loading &&
        <div style={{ boxShadow: "rgba(60, 64, 67, 0.1) 3px -3px 54px 34px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", width: "70%", margin: "auto", padding: "20px", borderRadius: "20px", marginTop: "20px" }}>
          {hits.map((items: any, index: any) => {
          if( !items.title || items.title.length <= 0) return null;
          
            return (
              <>
              
                <h1 style={{ fontSize: "14px", textAlign: "center" }} key={items.title}>{items.title}</h1>

              </>
            )
          })}
        </div>




      }

    </>
  );
};
