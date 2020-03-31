import React from 'react';
import {Component} from 'react';
import IssueList from './components/IssueList';
import './App.css';

class App extends Component {
  
    render() {

      return (
        
      <div>
        <h3 class="title is-3">Github Issues List</h3>
          <IssueList />
       </div>
      
      );
    }
  }

export default App;
