import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends React.Component{
constructor(){
    super()
    this.state = {

    }
    this.deleteProduct = this.deleteProduct.bind(this)
}


    // AXIOS - DELETE
    deleteProduct(id){
        axios
        .delete(`/api/inventory/${id}`)
        .then(res => {
            this.props.getInventory()
        })
    }


    render(){

        return(
            <div>
            Dashboard.jsx



            {/* MAPPING FUNCTION */}
            {this.props.inventory.map(el => (
                
                <Product 
                inventory = {el}
                deleteProduct = {this.deleteProduct}
                />
                
                ))}






        </div>
    )
}
}