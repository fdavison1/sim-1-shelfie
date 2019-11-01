import React from 'react'
import {Link} from 'react-router-dom'

export default class Product extends React.Component{
    constructor(){
        super()
        this.state = {
            editing: false
        }
    }
    render(){

        return(
            <div className="product">


            <img src={this.props.inventory.img} alt={this.props.inventory.name}/>
            
            <div className="product-image">

            <div className="product-label"></div>
            <h1>{this.props.inventory.name}</h1>
            <h2>${this.props.inventory.price}.00</h2>

            {/* buttons */}
            <div className='buttons2'>

            {/* delete button */}
            <button
            onClick={()=>this.props.deleteProduct(this.props.inventory.id)}
            >Delete
            </button>

            {/* edit button */}
            
            <Link to='/edit'>
            <button
            onClick={()=>this.props.editToggle(this.props.inventory.id)}
            >Edit</button>
            </Link>
            


            </div>
            </div>

        </div>
    )
}
}