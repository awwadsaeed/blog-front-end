import React, { Component } from 'react'

export class UpdateForm extends Component {
    update(e){
        this.props.update(e);
    }
    handleUpdate(e){
        this.props.handleUpdate(e);
    }
    render() {
        return (
            <form onSubmit={(e)=>this.update(e)}>
                <input placeholder="update the blog here" name="update" onChange={(e) => { this.handleUpdate(e) }}></input>
                <input type="submit"/>
            </form>
        )
    }
}

export default UpdateForm
