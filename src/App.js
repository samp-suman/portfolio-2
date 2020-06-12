import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Projects from './components/projects';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Blogs from './components/blogs';
import NotFound from './components/notFound';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawTogglerClickHandler = () => {

    console.log('Toggler clicked');
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (<React.Fragment>
      <NavBar onDrawTogglerClick={this.drawTogglerClickHandler}
        sideDrawerOpen={this.state.sideDrawerOpen} />
      <main className='mi-wrapper'>
        <div className="mi-bglines"><span></span><span></span><span></span><span></span><span></span></div>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/blogs" component={Blogs}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect from="/portfolio/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
    );
  }
}


export default App;
