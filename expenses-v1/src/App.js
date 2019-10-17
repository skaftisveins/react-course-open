import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import styled from 'styled-components';
import Card from './components/Card';

const Wrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Bullet = styled.div`
  color: #09d3ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
`;

const App = () => {
  const [state, setState] = useState({
    name: '',
    cost: '',
    sum: 0,
    list: []
  });

  // const { name, cost, sum, list } = state;

  useEffect(() => {});

  // const [nameState, setNameState] = useState('');
  // if (state.list.length === 1) setState({ ...state, sum: state.sum });

  const handleChange = event => {
    if (event.target.name === 'Name') {
      setState({ ...state, name: event.target.value });
    }
    if (event.target.name === 'Value') {
      setState({ ...state, cost: event.target.value });
    }
  };

  const handleSubmit = event => {
    if (state.name.length && state.cost.length) {
      setState({
        name: '',
        cost: '',
        sum: state.sum + Number(state.cost),
        list: [...state.list, state.name]
      });
    }
    // Prevents actual submit - would refresh page
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input name="Name" value={state.name} handleChange={handleChange} />
        <Input name="Value" value={state.cost} handleChange={handleChange} />
        <input type="submit" value="Click me!" />
      </Form>

      <List>
        <Bullet>
          <label htmlFor="list">List:</label>
          <output name="list">{'[ ' + state.list.join(', ') + ' ]'}</output>
        </Bullet>
        <Bullet>
          <label htmlFor="sum">Sum:</label>
          <output name="sum">{state.sum}</output>
        </Bullet>
      </List>
      <Card list={state.list} />
    </Wrapper>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       cost: '',
//       sum: 0,
//       list: []
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = event => {
//     if (event.target.name === 'Name') {
//       this.setState({ name: event.target.value });
//     }
//     if (event.target.name === 'Value') {
//       this.setState({ cost: event.target.value });
//     }
//   };

//   handleSubmit(event) {
//     if (this.state.name.length && this.state.cost.length) {
//       this.setState({
//         name: '',
//         cost: '',
//         sum: this.state.sum + Number(this.state.cost),
//         list: [...this.state.list, this.state.name]
//       });
//     }
//     // Prevents actual submit - would refresh page
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <Wrapper>
//         <Form onSubmit={this.handleSubmit}>
//           <Input
//             name="Name"
//             value={this.state.name}
//             handleChange={this.handleChange}
//           />
//           <Input
//             name="Value"
//             value={this.state.cost}
//             handleChange={this.handleChange}
//           />
//           <input type="submit" value="Click me!" />
//         </Form>
//         <List>
//           <Bullet>
//             <label htmlFor="list">List:</label>
//             <output name="list">
//               {'[ ' + this.state.list.join(', ') + ' ]'}
//             </output>
//           </Bullet>
//           <Bullet>
//             <label htmlFor="sum">Sum:</label>
//             <output name="sum">{this.state.sum}</output>
//           </Bullet>
//         </List>
//       </Wrapper>
//     );
//   }
// }

export default App;
