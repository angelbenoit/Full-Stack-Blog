import React, { Component } from 'react';
import Login from './components/login';
import Header from './components/Header';
import Profile from './components/profile';
import NewBlog from './components/NewBlog';
import Homepage from './components/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            blogList: []
        };
    }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Header/>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/newblog' component={NewBlog} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
