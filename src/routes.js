import React from 'react'
import { Switch, Route } from 'reacter-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form'

export default (

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
            inventory = {this.props.inventory}
            editFalse = {this.editFalse}
            editID = {this.state.editID}
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
            editID = {this.state.editID}
            />
        )}
        />}

    </Switch>
)