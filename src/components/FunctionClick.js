import React from 'react';
function FunctionClick(){

    function clickhandler(){
        console.log("clicke handler was cicked");    }
    return (
        <div>
            <button onClick={clickhandler}>CLick</button>
        </div>
    )
}
export default FunctionClick