import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";

const initialState ={
    hits:[],
    query: "",
    loading: true,
    messerror:"",
    url: `https://hn.algolia.com/api/v1/search?query=''`
}
const reducer =  (state:any,action:any) => {
    switch (action.type) {
        case 'SET_DATA':{
            return {...state,hits:action.payload };   
        }
        case 'SET_LOADING':{
            return{...state,loading:action.payload}
        }
        case "SET_URL": {
            return{...state,url:action.payload}
        }
        case "SET_QUERY": {
            return{...state,query:action.payload}
        }
        case "SET_MESSERROR":{
            return{...state,messerror:action.payload}
        }
    
        default:
            break;
    }
}
export const Reducer = () => {
    const [state,dispath] = useReducer(reducer,initialState)
  const handleData = useRef<any>([]);
//   const [hits, setHits] = useState<any>([]);
//   const [query, setQuery] = useState("chatgpt");
//   const [loading, setLoading] = useState(true)
//   const [messerror, setMesserror] = useState("")
//   const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=${query}`)
  


  handleData.current = async () => {
    console.log("check handleData")

    dispath({
        type:"SET_LOADING",
        payload: true
    })
    try {
        const response = await axios.get(state.url)
        dispath({
            type:"SET_DATA",
            payload: response.data?.hits || []
        })
        
        dispath({
            type:"SET_LOADING",
            payload: false
        })
    } catch (error) {
        dispath({
            type:"SET_LOADING",
            payload: false
        })
        dispath({
            type:"SET_MESSERROR",
            payload:`lỗi rồi ${error}`
        })

    }
  }



  React.useEffect(() => {

    handleData.current()
  }, [state.url])
  // const search = lodash.debounce((e:any) => {
  //     setQuery(e.target.value)

  // },500)

console.log("dảaaaaa",state.url)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <label style={{ padding: "20px 20px", background: '#7FFFD4' }} htmlFor="">Tìm kiếm :</label>
        <input style={{ padding: "20px 40px", background: '#F5F5DC' }} type="text" id=""
         onChange={(e:any)=>{  dispath({
            type:"SET_QUERY",
            payload:e.target.value
        })}} 
         defaultValue={state.query} 
         />
        <button style={{ padding: "20px 20px", background: '#7FFFD4' }} 
            onClick={() => { dispath({
                type:"SET_URL",
                payload:`https://hn.algolia.com/api/v1/search?query=${state.query}`
            })

                 }}
        >Tìm Kiếm </button>
      </div>
      {state.loading && <h1 style={{ background: "red", textAlign: 'center' }}>"Loading........"</h1>}

      {!state.loading && state.messerror && <p>{state.messerror}</p>}

      {!state.loading &&
        <div style={{ boxShadow: "rgba(60, 64, 67, 0.1) 3px -3px 54px 34px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", width: "70%", margin: "auto", padding: "20px", borderRadius: "20px", marginTop: "20px" }}>
          {state.hits.map((items: any, index: any) => {
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
