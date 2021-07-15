import React, { Component } from 'react'
import io from 'socket.io-client';
import Blog from './Blog';
import BForm from './BForm';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
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
            password: '',
            comment: '',
            updateContent:''
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
            socket.emit('join', { name: blogger, password: password });
            socket.emit('read');
            socket.on('blogs', (payload) => {
                this.setState({
                    blogs: payload,
                });
            });
            socket.on('newBlog', (payload) => {
                NotificationManager.info(`${payload} has posted a new blog`);
            });
            socket.on('error', (payload) => {
                NotificationManager.error(`you cant delete this one`);
            })
            socket.on('newComment',(payload)=>{
                if(this.state.blogger==payload.blogger){
                    NotificationManager.info(`${payload.commenter} has commented on your blog`);
                }
            })
            socket.on('newLike',(payload)=>{
                if(this.state.blogger==payload.blogger){
                    NotificationManager.info(`${payload.reader} has liked your blog`);
                }
            })
        });
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('write', { blogger: this.state.blogger, content: this.state.content, password: this.state.password });
        
    }
    delete = (id) => {
        const payload = {
            id: id,
            blogger: this.state.blogger,
            password: this.state.password
        }
        socket.emit('delete', payload)
    }
    handleComment = (e) => {
        this.setState({
            comment: e.target.value
        });
    }
    comment = (e, id) => {
        e.preventDefault();
        const payload = {
            id: id,
            comment: this.state.comment,
            commenter: this.state.blogger
        }
        socket.emit('comments', payload)
    }
    like=(id)=>{
        const payload={
            id:id,
            user:this.state.blogger,
        }
        socket.emit('like',payload);
    }
    handleUpdate=(e)=>{
        this.setState({
            updateContent:e.target.value,
        })
    }
    update=(e,id)=>{
        console.log(id);
        e.preventDefault();
            const payload={
            id:id,
            content:this.state.updateContent
        }
        socket.emit('updateBlog',payload);
    }

    render() {
        // console.log(this.state.blogs);
        return (
            <>
             <NotificationContainer/>
                {/* {this.state.showAlert && <Alert variant="danger" onClose={() => this.setState({ showAlert: false })} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        {`${this.state.notifName} has posted a new Blog`}
                    </p>
                </Alert>} */}
                <BForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                {this.state.blogs.map((element) => {
                    return (<Blog info={element} delete={this.delete} handleComment={this.handleComment} comment={this.comment} id={this.state.revComment} key={element._id} user={this.state.blogger} like={this.like} update={this.update} handleUpdate={this.handleUpdate}/>)
                })}
            </>
        )
    }
}
export default AllBlogs;