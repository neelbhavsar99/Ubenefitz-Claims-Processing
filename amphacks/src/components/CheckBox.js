import React, { Component } from 'react';

import '../style/checkbox.css';
class CheckBox extends React.Component {
    render() {

        // remove () after handleChecked because you need pass 
        // reference to function
        // also add return before <div>
        return <div class="checkbox">
            <input type="checkbox" onChange={(event) => this.props.handleChecked(event, this.props.id)} />
        </div>
    }
}

export default CheckBox;