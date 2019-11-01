import React from 'react'
import axios from 'axios'


export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img: '',
            name: '',
            price: ''
        }
    }

handleEvent1(e){
    this.setState({
        img: e.target.value
    })
}

handleEvent2(e){
    this.setState({
        name: e.target.value
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

//AXIOS - POST
postProduct(){
    axios
    .post('/api/inventory', this.state)
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
    this.cancelButton()
    this.props.getInventory()
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
                />
                
                <h2>Product Name:</h2>
                <input
                onChange={(e)=>this.handleEvent2(e)} 
                value={this.state.product}
                placeholder='enter product name'
                />
                
                <h2>Price:</h2>
                <input 
                onChange={(e)=>this.handleEvent3(e)}
                value={this.state.price}
                placeholder='enter price'
                />

                </section>

                {/* BUTTONS */}
                <section className='buttons'>

                <button
                onClick={()=>this.cancelButton()}
                >Cancel
                </button>

                <button
                onClick={()=>this.postProduct()}
                >Add to Inventory
                </button>

                </section>

            </div>
        )
    }
}