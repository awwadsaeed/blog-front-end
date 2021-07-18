import React, { Component } from 'react';
import Comment from './comment';
import UpdateForm from './updateForm';
import Card from 'react-bootstrap/Card';
import { FaRegEdit } from "react-icons/fa";
import { FcLike, FcLikePlaceholder, FcComments, FcFullTrash } from "react-icons/fc";

export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showUpdateForm: false,
            showHide: 'Show',
            like: false,
            theme:this.props.theme
        }
    }
    componentDidMount = () => {
        if (this.props.info.likes.includes(this.props.user)) {
            this.setState({
                like: true
            })
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
    showHideComment = () => {
        this.setState({ show: !this.state.show })
        if (this.state.showHide == 'Show') {
            this.setState({
                showHide: 'Hide'
            })
        } else {
            this.setState({
                showHide: 'Show'
            })
        }
    }
    manageLike = () => {
        if (!this.props.info.likes.includes(this.props.user))
            this.props.like(this.props.info._id);
        this.setState({
            like: true
        })
    }
    render() {

        return (
            <div className="blog">
                <Card className="blogCard">
                    <Card.Header as="h5">{this.props.info.blogger}
                        <div className="tools">
                            {(this.props.user == this.props.info.blogger && this.props.info.password == this.props.pass) &&
                                < FcFullTrash className="iconic" onClick={() => this.props.delete(this.props.info._id)} />
                            }
                            {(this.props.user == this.props.info.blogger && this.props.info.password == this.props.pass) &&
                                <FaRegEdit className="iconic" onClick={() => this.setState({ showUpdateForm: !this.state.showUpdateForm })} />
                            }
                            {(this.props.info.comments.length !== 0) && <FcComments className="iconic" onClick={this.showHideComment} />}
                            {(this.props.user !== this.props.info.blogger) &&
                                <>
                                    {!this.state.like &&
                                        <FcLikePlaceholder className="iconic" onClick={this.manageLike} />


                                    }
                                    {this.state.like &&
                                        <FcLike onClick={this.manageLike} />

                                    }
                                </>
                            }
                        </div>
                    </Card.Header>
                    <Card.Body className="content">
                        <Card.Text >
                            {this.props.info.content}
                        </Card.Text>

                        {this.state.showUpdateForm && (this.props.user == this.props.info.blogger) &&
                            <UpdateForm update={this.update} handleUpdate={this.handleUpdate} />
                        }
                    </Card.Body>
                </Card>

                {this.state.show && this.props.info.comments.map((comment) => {
                    return (
                        <div className="commentBox">
                        <Card border="secondary" style={{ width: '80%' }}>
                            <Card.Header className="commentSuff">{comment.commenter} on {comment.date}</Card.Header>
                            <Card.Body >
                                <Card.Text className="commentSuff" >
                                    {comment.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    );
                })
                }

                < Comment comment={this.comment} handleComment={this.handleComment} show={this.showComments} />
            </div>
        )
    }
}
export default Blog


