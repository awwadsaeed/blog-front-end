import React, { Component } from 'react';
import Comment from './comment';
import UpdateForm from './updateForm';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaThumbsUp, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

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
    handleUpdate = (e) => {
        this.props.handleUpdate(e)
    }
    update = (e) => {
        this.props.update(e, this.props.info._id)
    }
    render() {
        return (
            <div>
                {/* <h1>{this.props.info.blogger}</h1>
                <p>{this.props.info.content}</p> */}

                <Card>
                    <Card.Header as="h5">{this.props.info.blogger}
                        {(this.props.user == this.props.info.blogger) &&
                            < FaRegTrashAlt onClick={() => this.props.delete(this.props.info._id)} />
                        }
                        {(this.props.user == this.props.info.blogger) &&
                            <FaRegEdit onClick={() => this.setState({ showUpdateForm: !this.state.showUpdateForm })} />
                        }
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {this.props.info.content}
                        </Card.Text>

                        {this.state.showUpdateForm && (this.props.user == this.props.info.blogger) &&
                            <UpdateForm update={this.update} handleUpdate={this.handleUpdate} />
                        }
                        {this.props.info.comments.length != 0 &&
                            <Button onClick={() => this.setState({ show: !this.state.show })} variant="primary">
                                show comments</Button>
                        }
                    </Card.Body>
                </Card>

                {this.state.show && this.props.info.comments.map((comment) => {
                    return (
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>{comment.commenter} on {comment.date}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {comment.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })
                }

                {/* // {this.state.show && this.props.info.comments.map((comment) => {
                    //     return (
                    //         <dl>
                    //             <dt>{comment.commenter} on {comment.date}</dt>
                    //             <dd>{comment.comment}</dd>
                    //         </dl>)
                    // })
                } */}
                {/* {(this.props.user == this.props.info.blogger) && <button onClick={() => this.props.delete(this.props.info._id)}>Delete</button>} */}
                {/* {this.props.info.comments.length != 0 && <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>show Comment</button>} */}
                < Comment comment={this.comment} handleComment={this.handleComment} show={this.showComments} />

                {(this.props.user !== this.props.info.blogger) &&
                    // <button onClick={() =>  this.props.like(this.props.info._id) }>{}{this.props.info.likes.length}</button>
                    <p>
                        <FaThumbsUp onClick={() => this.props.like(this.props.info._id)} />
                        {this.props.info.likes.length}
                    </p>
                }

                {/* {(this.props.user == this.props.info.blogger) && <button onClick={() => {
                    this.setState({
                        showUpdateForm: !this.state.showUpdateForm
                    })
                }}>Edit</button>} */}
                {/* {this.state.showUpdateForm && <><input placeholder="update the blog here" name="update" onChange={(e) => { this.props.handleUpdate(e) }}></input><button onClick={()=>{this.props.update(this.props.info._id)}}>Update</button></>} */}


            </div>
        )
    }
}
export default Blog


