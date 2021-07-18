import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class BForm extends Component {
    render() {
        return (
            <div className="BForm">
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Blog Here:</Form.Label>
                        <Form.Control id="Bform" className="inputs" onChange={this.props.handleChange} as="textarea" rows={3} type="text" placeholder="What's on your mind today?" />
                        <Form.Text className="text-muted">
                           Share your thoughts and be nice to others
                        </Form.Text>
                    </Form.Group>
                    <Button className="Button" variant="primary" type="submit">
                        Post
                    </Button>
                </Form>
            </div>
        )
    }
}

export default BForm;
