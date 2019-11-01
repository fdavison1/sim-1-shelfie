import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            name: '',
            price: '',
            // editing: false
        }
    }

    handleEvent1(e) {
        this.setState({
            img: e.target.value
        })
    }

    handleEvent2(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleEvent3(e) {
        this.setState({
            price: e.target.value
        })
    }

    cancelButton() {
        this.setState({
            img: '',
            name: '',
            price: '',
            // editing: false
        })
        this.props.editFalse()
    }

    //AXIOS - POST
    postProduct() {
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

    componentDidUpdate(prevProps) {
        if (this.props.inventory !== prevProps.inventory) {
            // this.fetchData(this.props.inventory)
            this.setState({
                img: prevProps.inventory.img
            })
        }
    }

    toggleEdit() {
        this.setState({
            editing: !this.state.editing
        })
    }

    render() {
        return (
            <div className='form-div'>

                <Link to='/'>
                <button>BACK</button>
                </Link>

                {/* IMAGE PREVIEW? */}

                {/* making new card */}
                <section className="form-preview">

                    {!this.props.editing ?

                        <img src={this.state.img} alt="" /> : null}

                {/* editing existing card */}
                    {this.props.editing ?

                    //    HERE
                        <img src={this.state.img}/>
                            
                            //  <img src={'https://pbs.twimg.com/profile_images/378800000729097494/240cc17eb32a0b014683ed5a99dab86f.jpeg'} /> 
                             
                             
                             : null}
                       

                </section>

                {/* INPUTS */}
                <section className="inputs-div">

                    <h2>Image URL:</h2>
                    <input
                        onChange={(e) => this.handleEvent1(e)}
                        value={this.state.img}
                        placeholder='enter image URL'
                    />

                    <h2>Product Name:</h2>
                    <input
                        onChange={(e) => this.handleEvent2(e)}
                        value={this.state.name}
                        placeholder='enter product name'
                    />

                    <h2>Price:</h2>
                    <input
                        onChange={(e) => this.handleEvent3(e)}
                        value={this.state.price}
                        placeholder='enter price'
                    />

                </section>

                {/* BUTTONS */}
                <section className='buttons'>

                <Link to='/'>
                    <button
                        onClick={() => this.cancelButton()}
                        >Cancel
                </button>
                        </Link>




                    {!this.props.editing ?

                        <Link to='/'>
                        <button
                            onClick={() => this.postProduct()}
                            >Add to Inventory
                            
                </button></Link> : null}

                    {this.props.editing ?

                        <button>Save Changes</button> : null
                    }



                </section>

                <hr />



            { this.props.editing ?   <h1>
                <span>
                    EDIT ID: {this.props.editID}
                    </span>    
                    </h1> :null}

            </div>
        )
    }
}