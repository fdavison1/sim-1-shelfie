import React from 'react'


export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            imageURL: '',
            product: '',
            price: ''
        }
    }

handleEvent1(e){
    this.setState({
        imageURL: e.target.value
    })
}

handleEvent2(e){
    this.setState({
        product: e.target.value
    })
}

handleEvent3(e){
    this.setState({
        price: e.target.value
    })
}

cancelButton(){
    this.setState({
        imageURL: '',
        product: '',
        price: ''
    })
}

    render(){
        return(
            <div className='form-div'>
                Form.jsx

                {/* IMAGE PREVIEW? */}
                <section className="form-preview">
                    (Image Preview)
                </section>

                {/* INPUTS */}
                <section className="inputs-div">

                <h2>Image URL:</h2>
                <input 
                onChange={(e)=>this.handleEvent1(e)}
                value={this.state.imageURL}
                placeholder='enter image URL'
                type="text"/>
                
                <h2>Product Name:</h2>
                <input
                onChange={(e)=>this.handleEvent2(e)} 
                value={this.state.product}
                placeholder='enter product name'
                type="text"/>
                
                <h2>Price:</h2>
                <input 
                onChange={(e)=>this.handleEvent3(e)}
                value={this.state.price}
                placeholder='enter price'
                type="text"/>

                </section>

                {/* BUTTONS */}
                <section className='buttons'>

                <button
                onClick={()=>this.cancelButton()}
                >Cancel
                </button>

                <button>Add to Inventory</button>

                </section>

            </div>
        )
    }
}