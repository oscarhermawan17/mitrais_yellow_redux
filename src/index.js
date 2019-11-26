import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import Content from './component/Content';
import SimplePage from './stateless/SimplePage';
import Navigation from './stateless/Navigation';
import Footer from './stateless/Footer';
import './index.css'

class WrapInRouter extends React.Component {
    render(){
      return (
        <div>
          <header className="App-header">
            MITRAIS TODO
          </header>
          <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/todos" render={() => <Content />} />
                <Route exact path="/" render={() => <SimplePage title="Home" />} />
                <Route path="/" render={() => <SimplePage title="Are you lost? 404" />} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      );
    }
}


ReactDOM.render(
  <Provider store={store} >
    <WrapInRouter />
  </Provider>, document.getElementById('root'));

