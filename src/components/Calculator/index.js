import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstValue: "",
            secondValue: "",
            result: ""
        }
    }

    handleChange = (e) => {
        //change value to number type 
        let value = parseInt(e.target.value, 10)
        //assign value to corresponding state key
        this.setState({
            [e.target.name]: value
        })
    }

    //add function
    handleAdd = (e) => {
        e.preventDefault();
        this.setState({
            result: this.state.firstValue + this.state.secondValue
        })
    }

    //substract function
    handleSubstract = (e) => {
        e.preventDefault();
        this.setState({
            result: this.state.firstValue - this.state.secondValue
        })
    }

    //multiply function
    handleMultiply = (e) => {
        e.preventDefault();
        this.setState({
            result: this.state.firstValue * this.state.secondValue
        })
    }

    //divide function
    handleDivide = (e) => {
        e.preventDefault();
        this.setState({
            result: this.state.firstValue / this.state.secondValue
        })
    }


    render() {
        return (
            <>
                <form>
                    <label className="block-label">
                        <span className="label-title">firstValue</span>
                        <input onChange={this.handleChange} type="number" name="firstValue" />
                    </label>
                    <label className="block-label">
                        <span className="label-title">secondValue</span>
                        <input onChange={this.handleChange} type="number" name="secondValue" />
                    </label>
                    <button className="calculate-buttons" onClick={this.handleAdd}>
                        Add
                    </button>
                    <button className="calculate-buttons" onClick={this.handleSubstract}>
                        Substract
                    </button>
                    <button className="calculate-buttons" onClick={this.handleMultiply}>
                        Multiply
                    </button>
                    <button className="calculate-buttons" onClick={this.handleDivide}>
                        Divide
                    </button>
                </form>
                <p>Result is : {this.state.result}</p>
            </>
        );
    }
}