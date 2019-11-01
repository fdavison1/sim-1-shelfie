import React from 'react'
import Product from '../Product/Product'

export default function Dashboard(props){
    return(
        <div>
            Dashboard.jsx



            {/* MAPPING FUNCTION */}
            {props.inventory.map(el => (

            <Product 
            inventory = {el}/>

            ))}






        </div>
    )
}