import { useState } from "react"
const introduceMe = {
    age:21,
    job:"student",
    address:"68 Xuan Thuy, Cau Giay, Ha Noi"
}
const introducePage = {
    page:"introduce about NHL",
    localHost:'http://localhost:8080/'
}
console.log(introducePage)
console.log(introduceMe)

const Introduce = () => {
    const [onClickButton,setOnClickButton] = useState({})
    return(
        <div>
           <h3>Something about me</h3>
           <button onClick={()=> setOnClickButton(introduceMe)}>Information</button>
           <button onClick={()=>setOnClickButton(introducePage)}>Page</button>
           <ul>
               {Object.keys(onClickButton).map((item,index)=> 
               <li key={index.toString()}>
                   {item}:{onClickButton[item]}
                </li>
               )}
           </ul>
        </div>
    )
}
export default Introduce