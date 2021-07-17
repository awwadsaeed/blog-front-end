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
            <>
                {/* <form onSubmit={this.submit}>
                    <input type="text" name="comment" placeholder="comment..." required onChange={(e) => this.props.handleComment(e)} />
                    <input type="submit" value="comment" />
                </form> */}
                <Form onSubmit={this.submit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control onChange={(e) => this.props.handleComment(e)} as="textarea" rows={1} type="text" placeholder="comment here..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        comment
                    </Button>
                </Form>
            </>
        )
    }
}

export default Comment
