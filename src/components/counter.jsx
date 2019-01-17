import React, { Component } from 'react';

class Counter extends Component {
    state = {
        Count: 0  
    };
    render() {
        return (
        <div>
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-danger btn-sm">increment</button>
        </div>
        );
    }
    getbadgeClasses() {
        let classes = "badge m-2 badge";
        classes += this.state.Count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {Count} = this.state;
        return Count === 0 ? "zero" : Count;
    }
}
 
export default Counter;