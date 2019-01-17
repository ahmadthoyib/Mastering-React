import React, { Component } from 'react';

class Counter extends Component {
    state = {
        Count: 0  
    };
    render() { 
        return (
        <div>
        <span>{this.formatCount()}</span>
        <button>increment</button>
        </div>
        );
    }
    formatCount(){
        const {Count} = this.state;
        return Count === 0 ? "zero" : Count;
    }
}
 
export default Counter;