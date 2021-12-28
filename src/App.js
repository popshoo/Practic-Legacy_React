import React from 'react';
import { NewAllForm } from './NewAllForm';
import { AllList } from './AllList';
import { DoNothing } from './DoNothing';
import styles from './App.Module.css';

const allOriginal = [{
  id: '123',
  text: 'I Have AirPop Pro',
  isCompleted: true,
}, {
  id: '234',
  text: 'I have Beats Pro',
  isCompleted: false,
}];

export class App extends React.Component {
  state = {
    all: [],
    name: 'Robert',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({all: allOriginal})
    }, 1000);
  }

  reverseName = () => {
    this.setState({name: this.state.name.split('').reverse().join('')});
  }
  
  addAll = (newAll) => {
    const {all} = this.state;
    this.setState({all: [...all, newAll] })
  }

  markAllAsCompleted = (allId) => {
    const {all} = this.state;
    
    this.setState({
      all: all.map(todo => {
        if (todo.id === allId) {
          return {...todo, isCompleted: true};
        }

        return todo;
      }),
    }); 
  }

  deleteAll = (allId) => {
    this.setState({
      all: this.state.all.filter(todo => todo.id !== allId),
    });
  }

  render(){
    const {all} = this.state;

    return (
      <div className={styles.containerContainer}>
      <h1>My All</h1>
      <DoNothing name={this.state.name}/>
      <NewAllForm
      onAddAll={this.addAll} />
      <button onClick={this.reverseName}>Reverse Name</button>
      {all.length > 0 ? <AllList 
      all={all}
      onCompleteAll={this.markAllAsCompleted}
      onDeleteAll={this.deleteAll}/> : <p>Loading...</p>}
      {/* <AllListItem/> */}
      </div>
    );
  }
}
