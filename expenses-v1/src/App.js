import React from 'react';
import Input from './components/Input/Input';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cost: '',
      sum: 0,
      list: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'Name') {
      this.setState({ name: event.target.value });
    }
    if (event.target.name === 'Value') {
      this.setState({ cost: event.target.value });
    }
  }

  handleSubmit(event) {
    if (this.state.name.length && this.state.cost.length) {
      this.setState({
        name: '',
        cost: '',
        sum: this.state.sum + Number(this.state.cost),
        list: [...this.state.list, this.state.name],
      });
    }
    // Prevents actual submit - would refresh page
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <Input
            name="Name"
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <Input
            name="Value"
            value={this.state.cost}
            handleChange={this.handleChange}
          />
          <input type="submit" value="Click me!" />
        </form>
        <div className="App-list">
          <div className="App-bullet">
            <label htmlFor="list">List:</label>
            <output name="list">
              {'[ ' + this.state.list.join(', ') + ' ]'}
            </output>
          </div>
          <div className="App-bullet">
            <label htmlFor="sum">Sum:</label>
            <output name="sum">{this.state.sum}</output>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
