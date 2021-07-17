import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class User extends Component {
  render() {
    let text = `https://via.placeholder.com/300x150/1010?text=${this.props.thumb[0]} &bg=373940`;
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={text} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              blogs: {this.props.data.filter(blog => blog.blogger === this.props.name).length} <br />
              comments: {this.props.data.reduce((acc, red) => {
                acc += red.comments.filter(user => user.commenter === this.props.name).length;;
                return acc;
              }, 0)}<br />
              likes: {this.props.data.reduce((acc, red) => {
                acc += red.likes.filter(user => user === this.props.name).length;
                return acc;
              }, 0)} <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default User;
