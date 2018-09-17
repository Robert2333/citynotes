import React from 'react';
import {connect} from 'dva';
import { Button } from 'antd';
class Test extends React.Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.plus}>plus</Button>
                <Button onClick={this.props.minus}>minus</Button>
                <h1>{this.props.number}</h1>
            </div>
        )

    }
}

const mapDispatchToProps=dispatch=>{
    return {
        plus:()=>{
            dispatch({"type":"counter/plus"})
        },
        minus:()=>{
            dispatch({"type":"counter/minus"})
        }
    }
}
const t= connect((state=> {
   return  {number:state.counter.number}
}),mapDispatchToProps)(Test);

export default t;