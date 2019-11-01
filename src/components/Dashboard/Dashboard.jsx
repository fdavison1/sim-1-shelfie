import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends React.Component{
constructor(){
    super()
    this.state = {
        editing: false
    }
    this.deleteProduct = this.deleteProduct.bind(this)
    this.editToggle = this.editToggle.bind(this)
}


    // AXIOS - DELETE
    deleteProduct(id){
        axios
        .delete(`/api/inventory/${id}`)
        .then(res => {
            this.props.getInventory()
        })
    }

    editToggle(){
        this.setState({
            editing: !this.state.editing
        })
    }


    render(){

        return(
            <div>
            
            <h3>Editing: 
                
                {this.state.editing ? 'true' : 'false'}
                
            </h3>



            {/* MAPPING FUNCTION */}
            {this.props.inventory.map(el => (
                
                <Product 
                inventory = {el}
                deleteProduct = {this.deleteProduct}
                editToggle = {this.editToggle}
                />
                
                ))}






        </div>
    )
}
}