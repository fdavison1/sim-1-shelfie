import React from 'react';
import './reset.css'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "App">
        App.js
        <Header />
        <Dashboard />
        <Form />
      </div>
    )
  }
}
