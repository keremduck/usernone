import BigCard from "./bigCard";
import { useState,useEffect } from "react";

export default function Github(){
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch('https://api.github.com/users/keremduck/repos');
        const data = await response.json();
        await setData(data);
    }
  
    useEffect(() => {   
        getData();
    }, [])
    
    return(
        <div>
            <div className="row mt-4">
                <div className="col-sm-12">
                    <h1 className="h1">My projects:</h1>
            </div>
        </div>
            {data.map((item) => {
                return(
                    <>
                        <BigCard title={item?.name} desc={item?.description} star={item?.stargazers_count} url={item?.html_url}/>
                    </>
                )
            })}
        </div>
    )
}