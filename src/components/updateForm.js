import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class UpdateForm extends Component {
    update(e){
        this.props.update(e);
    }
    handleUpdate(e){
        this.props.handleUpdate(e);
    }
    render() {
        return (<>
            {/* <form onSubmit={(e)=>this.update(e)}>
                <input placeholder="update the blog here" name="update" onChange={(e) => { this.handleUpdate(e) }}></input>
                <input type="submit"/>
            </form> */}
            <div className="BForm">
                <Form onSubmit={(e)=>this.update(e)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Edit Blog</Form.Label>
                        <Form.Control className="inputs" onChange={(e) => { this.handleUpdate(e) }} as="textarea" rows={3} type="text" placeholder="Edit Version in here" />
                    </Form.Group>
                    <Button className="Button" variant="primary" type="submit">
                        Update Blog
                    </Button>
                </Form>
            </div>
            </>
            
        )
    }
}

export default UpdateForm;
