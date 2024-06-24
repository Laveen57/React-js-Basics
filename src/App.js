import { Component } from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component{
    state = {
      chars: []
    }

    removeChar = (index)=>{
      const {chars} = this.state;
      let filtered = chars.filter((char,i)=>{
        return i!==index
      });
      this.setState({chars:filtered});

    }

    handleSubmit =(character)=>{
      this.setState({chars:[...this.state.chars,character]})
    }

    render(){
      const {chars} = this.state
      return(
        <div className='container'>
            <h1>Table</h1>
            <Table removeChar={this.removeChar} charData = {chars}/>
            <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
}

export default App;