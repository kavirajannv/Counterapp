import { useState } from "react";
export default function Counter() 
    {
const [Count,setCount]=useState(0);
function handle(){
    setCount(Count=>Count+1);
    
}
function handles(){
    
setCount(Count=>Count-1);
}
return(
    <>
        <div className="bg-transparent  w-100 h-100 rounded  mx-150 mt-100 rounded-5">
        <p className="p-5 mx-20">Count: {Count}</p>
        <div className="flex gap-10">
       <button onClick={handles} className="bg-red-600 rounded px-5 py-3">Decrement</button>
        <button onClick={handle} className="bg-green-600 rounded px-5 py-3">Increment</button>
        </div>
    </div>
    </>
);

    }