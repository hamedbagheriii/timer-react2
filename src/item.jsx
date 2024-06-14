import { useContext } from "react"
import { DataContext } from "./testContext"



const Item = (props)=>{
    const {timeList , setTimeList} = useContext(DataContext)
    const handelDeleteItem = (e)=>{ 
        setTimeList(timeList.filter(t=> t !== e.target.innerHTML))
    }

    return(
        <div onClick={handelDeleteItem} className="item">
            {props.children}
        </div>
    )
}

export default Item;