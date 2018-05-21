import React, { Component } from 'react';
import Login from './components/login';
import Header from './components/Header';
import Profile from './components/profile';
import NewBlog from './components/NewBlog';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            blogList: []
        };
    }

    redirectPage(){
        withRouter.history("/")
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <Header/>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/newblog' component={NewBlog} redirectPage={App.redirectPage}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
