import React,{Component} from 'react'
class clickhandler extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'hello'
        }
        this.clickhandler=this.clickhandler.bind(this)
    }
    clickhandler(){
        this.setState({
            message:'good bye'  
        })
    }
    render(){
        return(
            <div >
                {/* <button className="btn btn-primary" onClick={this.clickhandler.bind(this)}>click me for details</button> */}
                {/* <button className="btn btn-primary" onClick={()=>this.clickhandler()}>click me for details</button> */}
                <button className="btn btn-primary" onClick={this.clickhandler}>click me for details</button>
                <div><p>this is the message:{this.state.message}</p></div>
            </div>
        )
    }
}    
export default clickhandler;