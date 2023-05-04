import React, {useState} from "react";

function ConfirmButton(props){
    const[isConfiremd, setIsConfirmed]=useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed)=>!prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfiremd}>
            {isConfiremd?"확인됨":"확인하기"}
        </button>
    );
}

export default ConfirmButton;