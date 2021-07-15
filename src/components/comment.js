import React, { Component } from 'react'

export class Comment extends Component {
    submit=(e)=>{
        this.props.comment(e);
        this.props.show();
    }
    render() {
        return (
            <>
                <form onSubmit={this.submit}>
                    <input type="text" name="comment" placeholder="comment..." required onChange={(e) => this.props.handleComment(e)} />
                    <input type="submit" value="comment" />
                </form>
            </>
        )
    }
}

export default Comment
