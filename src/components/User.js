import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

export class User extends Component {
  constructor(props){
    super(props);
    this.state={
      theme:'light',
    }
  }
  changeTheme=()=>{
    var r = document.querySelector(':root');
    if(this.state.theme==='light'){
      this.setState({
        theme:'dark'
      })
      r.style.setProperty('--blog-background-color', '#22272E');
      r.style.setProperty('--button-background-color', '#444C56');
      r.style.setProperty('--blog-header-color', 'white');
      r.style.setProperty('--font-color', 'white');
      r.style.setProperty('--blogPage-background-color', '#1E2329');
      r.style.setProperty('--user-background-color', '#1E2329');
      r.style.setProperty('--input-background-color', 'lightgrey');
      r.style.setProperty('--body-background-color', '#1E2329');
    }else{
      this.setState({
        theme:'light'
      })
      r.style.setProperty('--blog-background-color', '#bddcec');
      r.style.setProperty('--button-background-color', '#1b8aca');
      r.style.setProperty('--blog-header-color', 'black');
      r.style.setProperty('--font-color', 'black');
      r.style.setProperty('--blogPage-background-color', 'whitesmoke');
      r.style.setProperty('--user-background-color', 'whitesmoke');
      r.style.setProperty('--input-background-color', 'white');
      r.style.setProperty('--body-background-color', 'whitesmoke');
    }
  }
  render() {
    let text = `https://via.placeholder.com/300x150/1010?text=${this.props.thumb[0]} &bg=373940`;
    return (
      <div>
        <Card className="userInfo">
          <Card.Img variant="top" src={text} />
          <Card.Body className="userCardBody">
        <div className="themSwitch">
              <BootstrapSwitchButton checked={true} size="xs" offstyle="light" onstyle="dark" onlabel=" " offlabel=" " onChange={()=>{this.changeTheme()}} />
        </div>
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
