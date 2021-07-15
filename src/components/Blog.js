import React, { Component } from 'react'
// import { Form } from 'react-bootstrap'
export class Blog extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>{this.props.info.blogger}</h1>
                    <p>{this.props.info.content}</p>
                    {this.props.info.comments.map((comment,idx) =>{return( 
                        <dl>
                            <dt>{this.props.info.comments[idx].commenter} on {this.props.info.comments[idx].date}</dt>
                            <dd>{this.props.info.comments[idx].comment}</dd>
                        </dl>)})
                    }
                    <button onClick={() => this.props.delete(this.props.info._id)}>Delete</button>
                    <form onSubmit={(e, id) => this.props.comment(e, this.props.info._id)}>
                        <input type="text" name="comment" placeholder="comment..." onChange={(e) => this.props.handleComment(e)} />
                        <input type="submit" value="comment" />
                    </form>
                </div>
            </>
        )
    }
}
export default Blog


