import React, { Component } from 'react';

class Counter extends Component {
    state = {
        Count: 0,
        tags :[]  
    };
    rendertags(){
        if(this.state.tags.length === 0)return <p>There are no tags!</p>;
        return<ul>{this.state.tags.map(tags => <li key={tags}>{tags}</li>)}</ul>;
    }
    render() {
        return (
        <div>
        {this.state.tags.length === 0 && 'please create a new tag!'}
        {this.rendertags()}
        </div>
        );
    }
    
 }
 
export default Counter;