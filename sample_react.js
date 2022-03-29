import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      names: ''
    };
  }

  // handles event listener for onChange, when user types input
  handleChange= (e) => { // by using arrow functions, no need to bind methods
    //setState used to update the initial state of the object
    //when input typed, sets state of user object as the current input value from the event. e = event.
    this.setState({name: e.target.value});
  }

  //handles event listener for onSubmit, when user submits form
  handleClick= (e) => {
      //preventDefault method is called on the event to prevent a browser reload or refresh when the form is submitted
      e.preventDefault();
      //if user input is not empty when submitted
      if (this.state.name !== "") {
          //update state of objects and variables
          this.setState(
            {
              // set user to an empty string to reset value in input box to empty after submit
              name: '',
              names: [this.state.name]
            }
          );
      }
  }

  render()
  {
    return (
      <div className="App">
    <div className="textfield d-flex justify-content-center">
        <Form className="App" onSubmit={this.handleClick}>
          <div className="d-grid gap-2">
            <input type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} style={{width: 700}} />
              <button type="submit">Submit</button>
            </div>

          </Form>
      </div>
      <div>
        <h4>Your name is: </h4>
        <p>{this.state.name}</p>
        <p>{this.state.names}</p>
      </div>
      </div>
    );
  }
}

export default App;
