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
      inventory : [
        {
          name: 'dummy1',
          price: 'price1',
          img: 'img1'
        }, 
        {
          name: 'dummy2',
          price: 'price2',
          img: 'img2'
        }, 
        {
          name: 'dummy3',
          price: 'price3',
          img: 'img3'
        }
      ]
    }
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


  render(){
    return(
      <div className = "App">
        App.js
        <Header />
        
        <Dashboard 
        inventory = {this.state.inventory}
        />
        
        <Form />
      </div>
    )
  }
}
