import React, { useState } from 'react';
import Input from './components/Input';
import Title from './components/Title';
import styled from 'styled-components';
import Card from './components/Card';
import uuid from 'uuidv4';

const Wrapper = styled.div`
  background-color: #282c34;
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
  position: relative;
  padding: 1rem;
  margin: 2rem;
`;

const Bullet = styled.div`
  color: #09d3ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 100px;
  padding: 1rem;
  margin: 1rem;
  position: relative;
`;

const List = styled.div`
  color: #09d3ff;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Label = styled.label`
  color: #09d3ff;
  font-size: 2.4rem;
  padding: 4% 10%;
  font-size: ${props => (props.heading ? '2.4rem' : '1.8rem')};
  align-self: flex-start;
`;

const Span = styled.span`
  font-size: medium;
  color: #555555;
`;

const App = () => {
  const [state, setState] = useState({
    name: '',
    cost: '',
    counter: 0,
    sum: 0,
    list: []
  });

  const handleChange = (event, list) => {
    if (event.target.name === 'Name') {
      setState({ ...state, name: event.target.value });
    }
    if (event.target.name === 'Cost') {
      setState({ ...state, cost: event.target.value });
    }
  };

  const handleDelete = item => {
    const newList = state.list.filter(x => x.id !== item.id);
    console.log(item);
    setState({
      ...state,
      list: newList,
      // counter: state.counter - 1,
      sum: state.sum - item.cost
    });
  };

  const handleSubmit = event => {
    if (state.name.length && state.cost.length) {
      setState({
        name: '',
        cost: '',
        // counter: state.counter + 1,
        sum: state.sum + Number(state.cost),
        list: [
          ...state.list,
          { name: state.name, cost: state.cost, id: uuid() }
        ]
      });
    }
    // Prevents actual submit - would refresh page
    event.preventDefault();
  };

  return (
    <>
      <Title>
        React Expense <Span>(version 2.0.0)</Span>
      </Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label heading>Add Expense</Label>
          <Input name='Name' value={state.name} handleChange={handleChange} />
          <Input name='Cost' value={state.cost} handleChange={handleChange} />
          <input type='submit' value='Add' />
          <Label heading>Stats</Label>
          <Bullet>
            <Label htmlFor='sum'>Sum: {state.sum}</Label>
            <Label htmlFor='count'>Count: {state.list.length}</Label>
          </Bullet>
        </Form>
        <List>
          <Card list={state.list} onDelete={handleDelete} />
        </List>
      </Wrapper>
    </>
  );
};

export default App;

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
