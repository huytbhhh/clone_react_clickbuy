import React, { useEffect, useState } from 'react';
import './huy.css'
import axios from 'axios';

const getProduct = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products?page=1&limit=8");
    // Trích xuất dữ liệu từ trường data
    const responseData = response.data;
    console.log("response", responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
}


export const UseEffect = () => {
  const [product,setProduct] = useState<any>([])



  useEffect(()=>{
    getProduct().then(
      data => setProduct(data)
    )
  },[])
  console.log(product)

//  const [counter , setCouter] = useState(0)
//  const [info,setInfo] = useState({
//   firstName:"tran",
//   lastName:" huy"

//  })
//  useEffect(()=>{
// console.log("an lol ")
// console.log("info",info)

//  },[info.firstName])
//  khi làm việc  với object thì phải gọi đến đúng tên đó,vì nếu như trên 
//  ghi độc info mà trong info có 10 trường dữ liệu chẳng hạn thì thay 
//  đổi trường nào nó cũng rerender 


//  useEffect(()=>{
// console.log(`counter: = ${counter}`)
//  },[counter])
// nghĩa là dependecies phải thay đổi thì trong useEffect mới chạy lại 



//   useEffect(callback,[dependencies])
//   console.log("4")
//   useEffect(()=>{
// // side-effects
// // document.title = "1"
// // console.log("3")
// const response = async ()=>{
//     const data = await getProduct()
//    setProduct(data)
// }
// response()
// },[])
//   console.log("2")
//   http://localhost:5000/api/products

// useEffect từ khi vào trang sau đó dến phần update sẽ set dependencies
// nếu dependencies cập nhật giá trị mới thì sẽ rerender component và chạy 
// đến callback còn nếu dependencies maf ko thay ddooir gias trị thì useEfect 
// sẽ không chạy lại 

  


  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}> 
    {product.map((items:any)=>{
      return(
        <>
        <div key={items.id}>
          <img style={{width:'100px'}} src={items.img} alt="" />
          </div>
          </>
      )
    })}

    {/* <input
     type="text" 
     name="fisrtName"
     value={info.firstName}
     onChange={(e :any)=>{
      setInfo({
        ...info,
        firstName: e.target.value
      })


     }}
      id="" 
      />

    <span>{counter}</span>
      <button onClick={()=> setCouter(counter + 1)}>+ Counter</button> */}

 
    </div>
  );
};
