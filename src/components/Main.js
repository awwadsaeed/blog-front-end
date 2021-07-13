import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AllBlogs from './AllBlogs';
import Aboutus from './Aboutus';
import Header from './Header';
export class Main extends Component {
    render() {
        return (
            <>
                        <Header/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={AllBlogs} />
                        <Route exact path="/AboutUs" component={Aboutus} />
                        <Route>
                            <div>404</div>
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Main
