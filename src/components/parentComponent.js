import React,{Component} from 'react'
import ChildComponent from './childComponent';

class parentComponent extends Component{
constructor(props){
super(props)
this.state={
    message:'Parent'
}
this.greetParent=this.greetParent.bind(this)
}

greetParent(childName){
    alert(`hello ${this.state.message} from ${childName}`)
}

render(){
    return(
        <div>
            <ChildComponent greethandler={this.greetParent}></ChildComponent>
        </div>
    )
}
}
export default parentComponent