import React from 'react'

export default function Product(props){
    return(
        <div className="product">

            <div className="product-image"></div>
            <img src={props.inventory.img} alt={props.inventory.name}/>

            <div className="product-label"></div>
            <h1>{props.inventory.name}</h1>
            <h2>{props.inventory.price}</h2>

            {/* buttons */}
            <div className='buttons2'>

            {/* delete button */}
            <button
            onClick={()=>props.deleteProduct(props.inventory.id)}
            >Delete
            </button>

            {/* edit button */}
            <button
            >Edit</button>
            
            </div>

        </div>
    )
}