import React from 'react'
import { directive } from '@babel/types';

function childComponent(props){
    return(
        <div>
            <button onClick={()=>props.greethandler('child')}>Greet parent</button>
        </div>
    )
}
export default childComponent