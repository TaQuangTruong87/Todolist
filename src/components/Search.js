import React, { Component } from 'react';
class Search extends Component {
    render() {
        const addNewTaskStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
        return (
            <input type="text" style={addNewTaskStyle} placeholder="Search..." />
        );
    }
}
export default Search;