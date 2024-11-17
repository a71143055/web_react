import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0)

    function handleCount() {
        setCount(prevState => prevState + 1);
    }

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={handleCount}>1씩 증가됨</button>
        </div>
    );
}

export default Counter