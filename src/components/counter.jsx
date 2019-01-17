import React, { Component } from 'react';

class Counter extends Component {
    state = {
        Count: 0  
    };
    render() { 
        return (
        <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-danger btn-sm">increment</button>
        </div>
        );
    }
    formatCount(){
        const {Count} = this.state;
        return Count === 0 ? "zero" : Count;
    }
}
 
export default Counter;