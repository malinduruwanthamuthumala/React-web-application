import React,{Component} from 'react';

class ClassClick extends Component{

    clickhandler(){
        console.log("clicked me the button")
    }
    render(){
        return(
            <div>
                <button onClick={this.clickhandler}>clicl me</button>
            </div>
        )
    }

}
export default ClassClick