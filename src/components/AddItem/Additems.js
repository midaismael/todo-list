import React, { Component } from "react";
import './Additems.css';
class AddItem extends Component {

    state = {
        firstName : '',
        age : '',
        importance : 'low'
    }

    handleNameChange = (e) => {
        
        this.setState ({
            firstName : e.target.value
    })
    console.log(e)
    }

    handleAgeChange = (e) => {
        this.setState ({
            age : e.target.value
        })
    }

    handleImportanceChange = (e) => 
    {
        this.setState ({
            importance : e.target.value
        })
    }
    // handleChange = (e) => {
    //     console.log(e)
    //     this.setState({
    //         [e.target.id] : e.target.value 
    //     })
    // }
    handleSubmit = (e) => {
        e.preventDefault();
       if (this.state.firstName === '' ||
       this.state.age === '') {
        return false 
       } else {
        this.props.addItem(this.state)
        this.setState ({
            firstName: '',
            age: '',
            importance:'low'
        })
       }
    }

    render () {
        console.log('this.state', this.state);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name..." onChange={this.handleNameChange} value={this.state.firstName} />
                    <input type="number" placeholder="Enter age..." onChange={this.handleAgeChange} value={this.state.age} />

                    <select onChange={this.handleImportanceChange} value={this.state.importance}>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </select>

                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem;