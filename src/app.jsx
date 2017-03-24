const React = require('react');
const ReactDOM = require('react-dom');
const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;


const App = React.createClass({
  render: function() {
    return (
      <div>
        <Router history={browserHistory}>
          <h1>Yearbook Component</h1>
          <Route path="/" component={YearBook} />
          <h1>PersonShow Component (Hardcoded to Person 0)</h1>
          <Route path="/show" component={PersonShow} />
        </Router>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
