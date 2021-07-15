import React, { Component } from 'react';
import Comment from './comment';
import UpdateForm from './updateForm';
// import { Form } from 'react-bootstrap'
export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showUpdateForm: false,
        }
    }
    showComments = () => {
        this.setState({
            show: true,
        })
    }
    comment = (e) => {
        this.props.comment(e, this.props.info._id);
    }
    handleComment = (e) => {
        this.props.handleComment(e)
    }
    handleUpdate=(e)=>{
        this.props.handleUpdate(e)
    }
    update=(e)=>{
        this.props.update(e,this.props.info._id)
    }
    render() {
        return (
            <>
                <div>
                    <h1>{this.props.info.blogger}</h1>
                    <p>{this.props.info.content}</p>
                    {this.state.show && this.props.info.comments.map((comment, idx) => {
                        return (
                            <dl>
                                <dt>{this.props.info.comments[idx].commenter} on {this.props.info.comments[idx].date}</dt>
                                <dd>{this.props.info.comments[idx].comment}</dd>
                            </dl>)
                    })
                    }
                    {(this.props.user == this.props.info.blogger) && <button onClick={() => this.props.delete(this.props.info._id)}>Delete</button>}
                    {this.props.info.comments.length != 0 && <button onClick={() => {
                        this.setState({
                            show: !this.state.show
                        })
                    }}>show Comment</button>}
                    {<Comment comment={this.comment} handleComment={this.handleComment} show={this.showComments} />}
                    <button onClick={() => { this.props.like(this.props.info._id) }}>like{this.props.info.likes.length}</button>
                    {(this.props.user == this.props.info.blogger) && <button onClick={() => {
                        this.setState({
                            showUpdateForm: !this.state.showUpdateForm
                        })
                    }}>Edit</button>}
                    {/* {this.state.showUpdateForm && <><input placeholder="update the blog here" name="update" onChange={(e) => { this.props.handleUpdate(e) }}></input><button onClick={()=>{this.props.update(this.props.info._id)}}>Update</button></>} */}
                    {this.state.showUpdateForm&&(this.props.user == this.props.info.blogger) && <UpdateForm update={this.update} handleUpdate={this.handleUpdate}/>}
                </div>
            </>
        )
    }
}
export default Blog


