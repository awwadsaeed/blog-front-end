import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Comment extends Component {
    submit=(e)=>{
        this.props.comment(e);
        this.props.show();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.submit}>
                    <Form.Group className="mb-3 commentGroup" controlId="exampleForm.ControlTextarea1">
                        <Form.Control id="commentInput"  onChange={(e) => this.props.handleComment(e)} as="textarea" rows={1} type="text" placeholder="comment here..." className="commentField" required/>
                    <Button variant="primary" type="submit" className="commentButton">
                        comment
                    </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Comment
