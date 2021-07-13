import React, { Component } from 'react'

export class Aboutus extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'saeed',
        }
    }
    componentDidMount(){
        this.setState({
            name:'yazan'
        });
    }
    render() {
        return (
            <div>
                sdafdsafsasfasdfas
            </div>
        )
    }
}

export default Aboutus
