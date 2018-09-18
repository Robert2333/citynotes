import React from 'react'

//speed打印速度 text:字 render显示打字
export default class Printer extends React.Component {

    componentDidMount=()=>{
        this.type();
    }
    
    state = {
        txt: "",i:0
    }


    type = () => {
        console.log('111')
        const {text,speed}=this.props;
        if(this.state.i<=text.length)
        this.setState({txt:text.slice(0,this.state.i),i:this.state.i+1},()=>{
            setTimeout(() => {
                this.type();
            }, speed);
        })
    }

    render() {
        return (
            <span>
                {this.state.txt}
            </span>
        )
    }
}
