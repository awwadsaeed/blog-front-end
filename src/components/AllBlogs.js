import React, { Component } from 'react'
import io from 'socket.io-client';
import Blog from './Blog';
import BForm from './BForm';
require('dotenv').config();
const server = process.env.REACT_APP_SERVER_URL;

const socket = io(server, { transports: ['websocket'] })
export class AllBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // clientName:'',
            blogs: [{ blogger: 'saeed', content: "some stuff because i know how to write" }],
            temp: {},
            showBlogs: false,
        }
    }


    componentDidMount() {
        socket.on('connect', () => {
            socket.emit('join');
            socket.emit('read');
            console.log('asdfasfd');
            socket.on('blogs', (payload) => {
                console.log(payload);
                    this.setState({
                    showBlogs: true,
                    blogs: payload,
                })
            })
        })
    }
    handleChange = (e) => {
        this.setState({
            temp: { ...this.state.temp, [e.target.name]: e.target.value }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('write', (this.state.temp));
        this.setState({
            showBlogs:false,
        })
    }

    render() {
        return (
            <>
                <BForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                {this.state.showBlogs && this.state.blogs.map((element) => {
                    return (<Blog info={element} />)
                })}
            </>
        )
    }
}

export default AllBlogs;
