import React, {useState} from "react";

function ConfirmButton3(props){
    const[isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm() {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

        return(
            <button onClick={handleConfirm} disabled={isConfirmed}>
                ConfirmButton3 {isConfirmed? "확인됨" : "확인하기"}
            </button>
        )
}

export default ConfirmButton3;