import React from 'react';
import Printer from '../../components/printer/Printer'
import {connect} from 'dva';
import { Button } from 'antd';

class PrintContainer extends React.Component{

    render(){
        const {speed,typeText,nextText,article,isTyping}=this.props;
        return(
            <div>
            <Button onClick={()=>this.props.type(article,isTyping)}>type</Button>
            {this.props.article}
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        type:(article,isTyping)=>{
            dispatch({"type":"printer/type",payload:{article,isTyping}})
        },
    }
}
export default connect(((state)=> {
    return  {speed:state.printer.speed,isTyping:state.printer.isTyping,article:state.printer.article}
 }),mapDispatchToProps)(PrintContainer);