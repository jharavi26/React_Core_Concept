import { useEffect, useState } from "react";



const FunctionalComponent = ()=>{
    const[count , setcount] =useState(7);
    const [changeStyle, setChangeStyle] = useState(false);

    function handleToggleText(){
        setcount(count+1)
    }

    useEffect(()=>{
        if(count===10) setChangeStyle(true);

    },[count]);   

    return(
        <>
        <h4>This is Counter and value is {count}</h4>
        <button  style={{backgroundColor: changeStyle ? 'black' : 'while', color: changeStyle ? 'white' : 'black'}} onClick={handleToggleText}>Click me</button>
       
        </>
    );

}

export default FunctionalComponent;