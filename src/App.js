import React from 'react';
import './reset.css'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
// import routes from './routes'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      inventory : [],
      editing: false,
      editID: ''
    }
    this.getInventory = this.getInventory.bind(this)
    this.editToggle = this.editToggle.bind(this)
    this.editFalse = this.editFalse.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
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

//update product (save changes button)
updateProduct(id, body){
  // console.log(`ID IS ${id}`)
  axios
  .put(`/api/inventory/${+id}`, body)
  .then(res => {
      this.setState({
        inventory: res.data
      })
  })
  this.getInventory()
}


//when edit button is clicked...
editToggle(id){
  this.setState({
      editing: true,
      editID: id
  })
}


// selectID(){

// }

//when cancel button is clicked...
editFalse(){
  this.setState({
    editing: false
  })
}




  render(){
    return(
      <div className = "App">
        <Header />
        

        { this.state.editing ?
        <h1>editing: TRUE</h1>
        : <h1>editing: FALSE</h1>}

        {/*<div className='container'>

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
        editFalse = {this.editFalse}
        editID = {this.state.editID}
        /> */}

{/* ROUTES? */}

<Switch>
        <Route
            exact
            path='/'
            component={() => (
                <Dashboard
                    inventory={this.state.inventory}
                    getInventory={this.getInventory}
                    editToggle={this.editToggle}
                    editing={this.state.editing}
                />
            )}
        />

        
        { !this.state.editing ?
        <Route 
        path='/new'
        component={()=> (
            <Form 
            postProduct = {this.postProduct}
            getInventory = {this.getInventory}
            editing = {this.state.editing}
            // editToggle={this.editToggle}
            inventory = {this.props.inventory}
            editFalse = {this.editFalse}
            editID = {this.state.editID}
            // updateProductFn = {this.updateProduct}
            />
        )}
        /> 
        
        :

        <Route 
        path='/edit'
        component={()=> (
            <Form 
            postProduct = {this.postProduct}
            getInventory = {this.getInventory}
            editing = {this.state.editing}
            inventory = {this.props.inventory}
            editFalse = {this.editFalse}
            // editToggle={this.editToggle}
            editID = {this.state.editID}
            updateProductFn = {this.updateProduct}
            />
        )}
        />}

    </Switch>



        </div>

      // </div>
    )
  }
}
