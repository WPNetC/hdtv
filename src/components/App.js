import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/sass/main.scss'

class App extends Component {
  render() {
    return <h1>Hellos World!</h1>;
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
  }