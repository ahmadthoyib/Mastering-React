import React, { Component } from 'react';

class Counter extends Component {
    state = {
        Count: 0,
        tags :["tags1","tags2","tags3"]  
    };
    render() {
        return (
        <div>
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-danger btn-sm">increment</button>
        <ul>{this.state.tags.map(tags => <li key={tags}>{tags}</li>)}</ul>
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