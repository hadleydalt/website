import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mousedOver : false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({mousedOver : true})
    }

    handleMouseLeave() {
        this.setState({mousedOver : false})
    }

    render() {
        return (
            <div>
                <button style = {this.state.mousedOver ? this.props.hoveredStyles : this.props.nonHoveredStyles} onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}>{this.props.text}</button>
            </div>
        )
    }
}