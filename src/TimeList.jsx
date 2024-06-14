import { useContext } from "react"
import { DataContext } from "./testContext"
import Item from "./item";


const TimeList = ()=>{
    const {timeList , setTimeList} = useContext(DataContext);

    return(
        <div className="main_list">
            {timeList.map((i)=> (
                <Item key={Math.random()}>
                    {i}
                </Item>
            ))}
        </div>
    )
}


export default TimeList;