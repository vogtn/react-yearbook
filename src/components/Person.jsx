const React = require('react');

const Person = React.createClass({
  capitalize: function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  },
  personName: function() {
    let name = this.props.person.user.name;
    return `${this.capitalize(name.first)} ${this.capitalize(name.last)}`
  },
  render: function() {
    return (
      <div className="col-md-3">
        <h3>{this.personName()}</h3>
      </div>
    );
  }
});

module.exports = Person;
