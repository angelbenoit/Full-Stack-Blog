import React, { Component } from 'react';
import Login from './components/login';
import Header from './components/Header';
import Profile from './components/profile';
import NewBlog from './components/NewBlog';
import Homepage from './components/Homepage';
import BlogInformation from './components/BlogInformation';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Header/>
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/newblog' component={NewBlog} />
              <Route exact path='/blog/:id' component={BlogInformation} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
