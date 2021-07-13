import React, { Component } from 'react'

export class BForm extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <label for="name">user name:</label><br/>
                    <input type="text" name="blogger" id="name" onChange={this.props.handleChange} /><br/>
                    <label for="blog">blog here:</label><br/>
                    <input type="text" name="content" id="text" onChange={this.props.handleChange} />
                    <input type="submit" />
                </form>
            </>
        )
    }
}

export default BForm;
