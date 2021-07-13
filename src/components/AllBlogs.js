import React, { Component } from 'react'
import io from 'socket.io-client';
import Blog from './Blog';
import BForm from './BForm';
import Alert from 'react-bootstrap/Alert';
require('dotenv').config();
const server = process.env.REACT_APP_SERVER_URL;

const socket = io(server, { transports: ['websocket'] })
export class AllBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // clientName:'',
            blogger: '',
            blogs: [],
            content: '',
            showBlogs: false,
            showAlert: false,
            notifName: '',
            password: '',
        }
    }


    componentDidMount() {
        const blogger = prompt('care to share you lovely name?');
        const password = prompt('user password');
        this.setState({
            blogger: blogger,
            password: password,
        });
        socket.on('connect', () => {
            socket.emit('join');
            socket.emit('read');
            socket.on('blogs', (payload) => {
                this.setState({
                    showBlogs: true,
                    blogs: payload,
                });
            });
            socket.on('newBlog', (payload) => {
                console.log(payload);
                this.setState({
                    notifName: payload,
                    showAlert: true,
                });

            });
        });
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('write', { blogger: this.state.blogger, content: this.state.content,pass:this.state.password });
        this.setState({
            showBlogs: true,
        });
    }
    delete=(id)=>{
        const payload={
            id:id,
            blogger:this.state.blogger,
            pass:this.state.password
        }
        socket.emit('delete',payload)
    }

    render() {
        return (
            <>
                {this.state.showAlert && <Alert variant="danger" onClose={() => this.setState({ showAlert: false })} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        {`${this.state.notifName} has posted a new Blog`}
                    </p>
                </Alert>}
                <BForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                {this.state.blogs.map((element) => {
                    return (<Blog info={element} delete={this.delete} key={element._id} />)
                })}
            </>
        )
    }
}

export default AllBlogs;
