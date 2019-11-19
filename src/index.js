import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import Content from './component/Content';
import Navigation from './stateless/Navigation';
import Footer from './stateless/Footer';
import './index.css'

class WrapInRouter extends React.Component {
    render(){
      return (
        <div>
          <header className="App-header">
            TASK REACT MITRAISoo
          </header>
          <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" render={() => <Content />} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      );
    }
}


ReactDOM.render(<WrapInRouter />, document.getElementById('root'));

