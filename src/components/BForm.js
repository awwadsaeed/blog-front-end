import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class BForm extends Component {
    render() {
        return (
            <>
                {/* <form onSubmit={this.props.handleSubmit}>
                    {/* <label for="blogger">user name:</label><br/>
                    <input type="text" name="blogger" id="name" onChange={this.props.handleChange} /><br/> */}
                    {/* <label for="content">blog here:</label><br />
                    <input type="text" name="content" id="text" onChange={this.props.handleChange} />
                    <input type="submit" />
                // </form> */}
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Blog</Form.Label>
                        <Form.Control onChange={this.props.handleChange} as="textarea" rows={3} type="text" placeholder="What's on your mind today?" />
                        <Form.Text className="text-muted">
                           Share your thoughts and be nice to others
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Post
                    </Button>
                </Form>
            </>
        )
    }
}

export default BForm;
