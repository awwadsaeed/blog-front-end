import React, { Component } from 'react'

export class Blog extends Component {
    render() {
        return (
            <>
               <div>
                   <h1>{this.props.info.blogger}</h1>
                   <p>{this.props.info.content}</p>
               </div>   
            </>
        )
    }
}

export default Blog
