import React from 'react';
import './reset.css'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      inventory : [],
      editing: false
    }
    this.getInventory = this.getInventory.bind(this)
    this.editToggle = this.editToggle.bind(this)
  }


//COMPONENT DID MOUNT
componentDidMount(){
  this.getInventory()
}

//AXIOS - GET
getInventory(){
  axios
  .get('/api/inventory')
  .then(res => {
    this.setState({
      inventory: res.data
    })
  })
}


editToggle(){
  this.setState({
      editing: !this.state.editing
  })
}


  render(){
    return(
      <div className = "App">
        <Header />
        
        <div className='container'>

        <Dashboard 
        inventory = {this.state.inventory}
        getInventory = {this.getInventory}
        editToggle = {this.editToggle}
        editing = {this.state.editing}
        />
        
        <Form 
        postProduct = {this.postProduct}
        getInventory = {this.getInventory}
        editing = {this.state.editing}
        inventory = {this.props.inventory}
        />

        </div>

      </div>
    )
  }
}
